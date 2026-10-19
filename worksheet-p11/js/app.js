import { state } from "./state.js";
import { render, renderNews, showStatus } from "./dom.js";
import { bindFilter, bindForm } from "./events.js";
import { fetchAnime } from "./api.js";

async function loadNews() {
  showStatus("Loading...", false);
  try {
    const data = await fetchAnime();
    renderNews(data.items);
  } catch (error) {
    showStatus("Failed to load: " + error.message, true);
  }
}

bindFilter();
bindForm();
render(state);
loadNews();