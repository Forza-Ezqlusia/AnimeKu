// =====================================================================
// data.js  --  PENGATURAN SITUS dan DAFTAR ANIME
// Edit file ini saja. Simpan di folder yang sama dengan index.html.
// Setelah mengedit, upload ulang data.js (tekan Ctrl+F5 untuk memuat ulang).
// =====================================================================
// ====== PENGATURAN SITUS: ganti nilai di bawah dengan milikmu ======
// Donasi: {n:"Nama",qr:"https://link"} = QR dibuat otomatis dari link; {n:"QRIS",img:"img/qris.png"} = pakai gambar QR sendiri.
const SITE={
  logo:"",   // gambar logo situs, mis. "img/logo.png" (kosong = pakai logo bawaan)
  logoBanner:"img/logo.png",   // gambar pengganti ikon play di banner Beranda, mis. "img/logo.jpg" (kosong = ikon play bawaan)
  telegram:"https://t.me/GANTI_NAMA_GRUP",
  email:"emailmu@contoh.com",
  donasi:[
    {n:"QRIS",img:"img/qris.jpg"},
  ]
};

// Thumbnail/poster: isi p:"link-gambar.jpg" (kosong = pakai warna gradien)
// Isi link video di v: untuk multiple server, gunakan format array: 1:[{name:"Nama Server",url:"https://..."},{name:"Server 2",url:"https://..."}]
// ============================ PANDUAN MENAMBAH ANIME BARU ============================
// LANGKAH: 1) Salin contoh di bawah.  2) Tempel SETELAH anime terakhir di daftar DATA.
//          3) Ubah isinya.  4) Cek koma dan kurungnya.  5) Simpan lalu upload ulang.
//
// CONTOH (salin dari tanda { sampai },) -- tulisan setelah // adalah keterangan, boleh dihapus:
// {id:45,                        // nomor unik, lanjutkan dari id terakhir (angka, tanpa kutip)
//  t:"Judul Anime",              // judul, pakai kutip
//  p:"",                         // poster, mis. "img/judul.jpg" (boleh kosong)
//  v:{                           // link video per episode
//    1:[{name:"Mega",url:"https://mega.nz/..."},{name:"MP4 / M3U8",url:"https://..."},{name:"Doodstream",url:"https://..."}],  // multiple server
//    2:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],                       // single server (string biasa untuk backward compatibility)
//  },
//  g:["Fantasy","Action"],       // genre, di dalam [ ] dipisah koma
//  y:2026,                       // tahun rilis (angka)
//  e:12,                         // TOTAL episode (angka)
//  l:1,                          // episode TERAKHIR yang sudah tayang (angka)
//  day:3,                        // hari tayang: 0=Senin ... 6=Minggu (HAPUS baris ini kalau sudah tamat)
//  c:["#7c3aed","#ec4899"],      // dua warna poster (dipakai kalau p kosong)
//  d:"Sinopsis singkat."},       // sinopsis; di akhir ada koma setelah }
//
// ATURAN PENTING:
//  1. Anime TERAKHIR di daftar diakhiri }];  sedangkan anime lainnya diakhiri },
//  2. Jumlah slot di v harus sama dengan e (e:12 berarti slot 1 sampai 12)
//  3. Angka (id, y, e, l, day) TANPA kutip. Teks (t, p, d, genre, link) PAKAI kutip
//  4. Pakai kutip biasa "  bukan kutip melengkung hasil copy dari Word atau chat
//  5. Kutip di dalam teks ditulis \"  contoh: d:"Dia disebut \"Raja\" di sana."
//  6. Status otomatis: l kurang dari e = Sedang Tayang | l sama dengan e = Selesai
//  7. Kalau halaman jadi kosong setelah diedit, cek koma, kurung, atau kutip yang kelewat
// ======================================================================================
const DATA=[
{id:1,t:"Frieren: Beyond Journey's End Season 1",p:"",v:{
  1:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  2:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  3:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  4:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  5:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  6:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  7:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  8:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  9:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  10:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  11:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  12:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  13:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  14:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  15:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  16:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  17:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  18:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  19:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  20:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  21:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  22:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  23:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  24:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  25:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  26:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  27:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
  28:[{name:"Mega",url:""},{name:"MP4 / M3U8",url:""},{name:"Doodstream / StreamSB / StreamTape / Mp4Upload",url:""}],
 },
 g:["Fantasy","Adventure","Drama"],y:2023,e:28,l:28,c:["#6d8cff","#b69cff"],d:"Setelah pasukan pahlawan mengalahkan raja iblis, penyihir elf Frieren yang berumur panjang menyadari betapa singkatny..."},
{id:3,t:"Steins;Gate",p:"",v:{
  1:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  2:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  3:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  4:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  5:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  6:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  7:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  8:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  9:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  10:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  11:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  12:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  13:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  14:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  15:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  16:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  17:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  18:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  19:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  20:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  21:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  22:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  23:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
  24:[{name:"Server 1",url:""},{name:"Server 2",url:""},{name:"Server 3",url:""}],
 },
 g:["Sci-Fi","Thriller"],y:2011,e:24,l:24,c:["#f97316","#be123c"],d:"Seorang mahasiswa eksentrik tanpa sengaja menemukan cara mengirim pesan ke masa lalu, dan setiap perubahan kecil membawa konse...",
// (file continues...)
];
