import { visibleProjects } from "./state.js";

const container = document.querySelector("#list");
const filterRow = document.querySelector("#filter");
const empty = document.querySelector("#empty");
const newsList = document.querySelector("#news-list");
const newsStatus = document.querySelector("#news-status");

function buildCard(proyek) {
  const li = document.createElement("li");
  li.className = "card card-body mb-2";
  li.textContent = `${proyek.judul} (${proyek.tahun})`;
  return li;
}

export function render(state) {
  container.textContent = "";
  const list = visibleProjects();
  empty.hidden = list.length !== 0;
  list.forEach(function (proyek) {
    container.append(buildCard(proyek));
  });
  filterRow.querySelectorAll("button").forEach(function (button) {
    button.classList.toggle("active", button.dataset.category === state.activeCategory);
  });
}

export function showStatus(message, isError) {
  newsStatus.textContent = message;
  newsStatus.className = isError ? "text-danger" : "text-muted";
}

export function renderNews(items) {
  newsList.textContent = "";
  if (items.length === 0) {
    showStatus("No anime yet.", false);
    return;
  }
  showStatus("", false);
  items.forEach(function (item) {
    const card = document.createElement("li");
    card.className = "card card-body mb-2";
    card.textContent = item.title + " (" + item.year + ")";
    newsList.append(card);
  });
}