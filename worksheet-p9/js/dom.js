import { daftarProyek } from "./app.js";

const container = document.querySelector("#list");
const filterRow = document.querySelector("#filter");
const empty = document.querySelector("#empty");

function buildCard(proyek) {
  const li = document.createElement("li");
  li.className = "card card-body mb-2";
  li.textContent = `${proyek.judul} (${proyek.tahun})`;
  return li;
}

function render(daftar) {
  container.textContent = "";
  if (daftar.length === 0) {    
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  daftar.forEach((proyek) => container.append(buildCard(proyek)));
}

function markActiveButton(activeButton) {
  document.querySelectorAll("#filter button").forEach((button) => {
    button.classList.toggle("active", button === activeButton);
  });
}

filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const category = button.dataset.category;
  const selected = daftarProyek.filter(
    (proyek) => category === "all" || proyek.kategori === category
  );

  markActiveButton(button);
  render(selected);
});

render(daftarProyek)