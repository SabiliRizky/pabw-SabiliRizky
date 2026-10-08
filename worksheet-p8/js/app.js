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