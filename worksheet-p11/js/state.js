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

export function save() {
  const data = { activeCategory: state.activeCategory };
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved && typeof saved.activeCategory === "string") {
      state.activeCategory = saved.activeCategory;
    }
  } catch {
    // data rusak: biarkan nilai awal ("all")
  }
}

export function reset() {
  localStorage.removeItem(KEY);
  state.activeCategory = "all";
}