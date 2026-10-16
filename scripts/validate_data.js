const fs = require('fs');
const vm = require('vm');

function extractDataArray(source) {
  const idx = source.indexOf('const DATA');
  if (idx === -1) throw new Error('const DATA not found');
  const bracketIdx = source.indexOf('[', idx);
  if (bracketIdx === -1) throw new Error('Opening [ for DATA not found');

  let i = bracketIdx;
  let depth = 0;
  let inSingle = false, inDouble = false, inBack = false;
  while (i < source.length) {
    const ch = source[i];
    if (inBack) {
      inBack = false;
    } else if (ch === "\\") {
      inBack = true;
    } else if (inSingle) {
      if (ch === "'") inSingle = false;
    } else if (inDouble) {
      if (ch === '"') inDouble = false;
    } else {
      if (ch === "'") inSingle = true;
      else if (ch === '"') inDouble = true;
      else if (ch === '[') depth++;
      else if (ch === ']') {
        depth--;
        if (depth === 0) {
          return source.slice(bracketIdx, i + 1);
        }
      }
    }
    i++;
  }
  throw new Error('Matching closing ] for DATA not found');
}

function validate(data) {
  const issues = [];
  data.forEach((item, idx) => {
    const path = `index ${idx} (id=${item && item.id})`;
    if (!item || typeof item !== 'object') {
      issues.push({path, issue: 'item is not an object'});
      return;
    }
    if (typeof item.e !== 'number') {
      issues.push({path, issue: `missing or invalid e (total episodes): ${item.e}`});
    }
    if (!item.v || typeof item.v !== 'object') {
      issues.push({path, issue: 'missing v (episodes object)'});
      return;
    }
    const total = item.e || 0;
    for (let n = 1; n <= total; n++) {
      const key = String(n);
      if (!Object.prototype.hasOwnProperty.call(item.v, key)) {
        issues.push({path, issue: `missing episode slot v.${key}`});
        continue;
      }
      const ep = item.v[key];
      if (!Array.isArray(ep)) {
        issues.push({path, issue: `episode v.${key} is not an array`});
        continue;
      }
      ep.forEach((server, sidx) => {
        if (!server || typeof server !== 'object') {
          issues.push({path, issue: `v.${key}[${sidx}] is not an object`});
          return;
        }
        if (!('name' in server)) issues.push({path, issue: `v.${key}[${sidx}] missing name`});
        if (!('url' in server)) issues.push({path, issue: `v.${key}[${sidx}] missing url`});
        if ('name' in server && typeof server.name !== 'string') issues.push({path, issue: `v.${key}[${sidx}].name is not string`});
        if ('url' in server && typeof server.url !== 'string') issues.push({path, issue: `v.${key}[${sidx}].url is not string`});
      });
    }
  });
  return issues;
}

try {
  const src = fs.readFileSync('data.js', 'utf8');
  const arrText = extractDataArray(src);
  // Evaluate the array safely in a new context
  const context = {};
  const script = new vm.Script('DATA = ' + arrText + ';');
  vm.createContext(context);
  script.runInContext(context, {timeout: 1000});
  const DATA = context.DATA;
  if (!Array.isArray(DATA)) throw new Error('DATA is not an array after evaluation');

  const issues = validate(DATA);
  const summary = {items: DATA.length, issues: issues.length};
  console.log('Validation summary:', summary);
  if (issues.length) {
    console.log('Issues found (first 200):');
    issues.slice(0,200).forEach((it, i) => console.log(i+1, it));
  } else {
    console.log('No issues found: all items have episode slots 1..e and each slot is an array of {name,url}');
  }

  // write report
  fs.writeFileSync('validate_data_report.json', JSON.stringify({summary, issues}, null, 2));
  console.log('Report written to validate_data_report.json');
} catch (err) {
  console.error('Error during validation:', err.message);
  process.exitCode = 2;
}
