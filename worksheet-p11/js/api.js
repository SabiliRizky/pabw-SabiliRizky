const URL = "news.json";

export async function fetchAnime() {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("status " + response.status);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("failed to load", error.message);
    throw error;
  }
}