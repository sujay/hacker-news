async function fetchData(route: string) {
  try {
    const res = await fetch(route, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data!');
    }
    return res.json();
  } catch {
    return false;
  }
}

export const getList = async (list: string) =>
  fetchData(`https://api.hackerwebapp.com/${list}`);

export const getItem = async (itemId: number) =>
  fetchData(`https://api.hackerwebapp.com/item/${itemId}`);

export const getUser = async (user: string) =>
  fetchData(`https://hacker-news.firebaseio.com/v0/user/${user}.json`);
