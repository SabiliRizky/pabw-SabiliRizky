import { state, load } from "./state.js";
import { render, renderNews, showStatus } from "./dom.js";
import { bindFilter, bindReset, bindForm } from "./events.js";
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

load();
bindFilter();
bindReset();
bindForm();
render(state);
loadNews();