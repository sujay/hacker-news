async function fetchData(route: string) {
  const res = await fetch(route);
  if (!res.ok) {
    throw new Error('Failed to fetch data!');
  }
  return res.json();
}

export const getList = async (list: string) =>
  fetchData(`https://api.hackerwebapp.com/${list}`);

export const getItem = async (itemId: number) =>
  fetchData(`https://api.hackerwebapp.com/item/${itemId}`);

export const getUser = async (user: string) =>
  fetchData(`https://hacker-news.firebaseio.com/v0/user/${user}.json`);

export const getSearch = async (query: string) =>
  fetchData(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story`);
