import { fetchAnime } from "./api.js";
import { state, selectCategory, visibleProjects } from "./state.js";

const container = document.querySelector("#list");
const filterRow = document.querySelector("#filter");
const empty = document.querySelector("#empty");

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

// sementara: dipindah ke events.js di langkah 4
filterRow.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (!button) return;
  selectCategory(button.dataset.category);
  render(state);
});

render(state);

const form = document.querySelector("#character-form");
const submitButton = form.querySelector("button[type='submit']");

const fields = [
  {
    input: document.querySelector("#character-name"),
    error: document.querySelector("#character-name-error"),
    message: "Enter the character name, for example Violet Evergarden.",
  },
  {
    input: document.querySelector("#distinguishing-features"),
    error: document.querySelector("#distinguishing-features-error"),
    message: "Describe the character, for example kind and loyal.",
  },
  {
    input: document.querySelector("#position"),
    error: document.querySelector("#position-error"),
    message: "Enter the position, for example Auto Memory Doll.",
  },
];

function validateField(field) {
  const valid = field.input.value.trim() !== "";
  field.error.textContent = valid ? "" : field.message;
  if (valid) {
    field.input.removeAttribute("aria-invalid");
  } else {
    field.input.setAttribute("aria-invalid", "true");
  }
  return valid;
}

function allFieldsValid() {
  return fields.every((field) => field.input.value.trim() !== "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const results = fields.map(validateField);
  const valid = results.every(Boolean);
  submitButton.disabled = !valid;

  if (!valid) {
    fields.find((field) => !validateField(field)).input.focus();
    return;
  }

  console.log("Form valid");
  form.reset();
});

form.addEventListener("input", (event) => {
  const field = fields.find((item) => item.input === event.target);
  if (!field) return;
  validateField(field); 
  submitButton.disabled = !allFieldsValid();
});

const newsList = document.querySelector("#news-list");
const newsStatus = document.querySelector("#news-status");

function showStatus(message, isError) {
  newsStatus.textContent = message;
  newsStatus.className = isError ? "text-danger" : "text-muted";
}

function renderNews(items) {
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

async function loadNews() {
  showStatus("Loading...", false);
  try {
    const data = await fetchAnime();
    localStorage.setItem("lastData", JSON.stringify(data));
    renderNews(data.items);
  } catch (error) {
    showStatus("Failed to load: " + error.message, true);
  }
}

loadNews();