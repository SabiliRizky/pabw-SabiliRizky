import { daftarProyek } from "./data.js";

export const state = {
  projects: daftarProyek,
  activeCategory: "all",
};

export function selectCategory(value) {
  state.activeCategory = value;
}

export function visibleProjects() {
  if (state.activeCategory === "all") {
    return state.projects;
  }
  return state.projects.filter(function (proyek) {
    return proyek.kategori === state.activeCategory;
  });
}

const KEY = "pabw-p11";
const VERSION = 1;
const CATEGORIES = ["all", "web", "data", "network", "mobile"];

export function save() {
  const data = { version: VERSION, activeCategory: state.activeCategory };
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function load() {
  try {
    const text = localStorage.getItem(KEY);
    if (!text) return;
    const saved = JSON.parse(text);
    if (saved?.version !== VERSION) {
      localStorage.removeItem(KEY);
      return;
    }
    if (CATEGORIES.includes(saved.activeCategory)) {
      state.activeCategory = saved.activeCategory;
    }
  } catch {
    localStorage.removeItem(KEY);
  }
}

export function reset() {
  localStorage.removeItem(KEY);
  state.activeCategory = "all";
}