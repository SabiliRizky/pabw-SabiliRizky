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