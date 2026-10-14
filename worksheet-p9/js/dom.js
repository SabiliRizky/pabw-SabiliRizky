import { daftarProyek } from "./app.js";

const container = document.querySelector("#list");

function buildCard(proyek) {
  const li = document.createElement("li");
  li.className = "card card-body mb-2";
  li.textContent = `${proyek.judul} (${proyek.tahun})`;
  return li;
}

function render(daftar) {
  container.textContent = "";              // 1. kosongkan dulu
  daftar.forEach((proyek) => container.append(buildCard(proyek)));
}

render(daftarProyek);