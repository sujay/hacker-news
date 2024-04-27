async function fetchData(route: string, cache = {}) {
  const res = await fetch(route, cache);
  if (!res.ok) {
    throw new Error('Failed to fetch data!');
  }
  return res.json();
}

export const getList = async (list: string) =>
  fetchData(`https://api.hackerwebapp.com/${list}`, {
    next: { revalidate: 21600 },
  });

export const getItem = async (itemId: number) =>
  fetchData(`https://api.hackerwebapp.com/item/${itemId}`, {
    next: { revalidate: 3600 },
  });

export const getMeta = async (itemId: number) =>
  fetchData(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`);

export const getUser = async (user: string) =>
  fetchData(`https://hacker-news.firebaseio.com/v0/user/${user}.json`);

export const getSearch = async (query: string) =>
  fetchData(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story`, {
    next: { revalidate: 86400 },
  });
