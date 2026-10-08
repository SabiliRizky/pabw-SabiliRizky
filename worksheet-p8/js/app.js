const profil = {
  nama: "M Sabili Rizky Adyallah",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const jumlahProyek = 4;

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.log(buatPerkenalan({ nama: "Putri", peran: "Designer" }));
console.log(buatPerkenalan({ nama: "Dimas", peran: "Mahasiswa" }));
console.log(formatKeahlian(["Github", "Bootstrap"]));

const daftarProyek = [
  { judul: "Violet", tahun: 2026, selesai: true },
  { judul: "Gilbert", tahun: 2026, selesai: true },
  { judul: "Cattleya", tahun: 2026, selesai: false },
  { judul: "Claudia", tahun: 2026, selesai: false },
];

console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const dicari = daftarProyek.find((proyek) => proyek.judul === "Gilbert");
console.log(dicari);

const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
console.log(daftarJudul);
console.log(daftarJudul.length);

const urut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
console.table(urut);
console.table(daftarProyek);