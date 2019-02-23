const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=cfd86a53d5fa4dd0be7e3d443fde2e86";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}