const URL = "news.json";

export async function fetchAnime() {
  const response = await fetch(URL);
  console.log("status", response.status, "ok", response.ok);
  if (!response.ok) {
    throw new Error("status " + response.status);
  }
  return response.json();
}