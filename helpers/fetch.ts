async function fetchData(
  route: string,
  options?: { revalidate?: number },
) {
  const res = await fetch(route, {
    ...(options?.revalidate != null
      ? { next: { revalidate: options.revalidate } }
      : { cache: 'no-store' }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data!');
  }
  return res.json();
}

export const getList = async (list: string) =>
  fetchData(`https://api.hackerwebapp.com/${list}`).catch(() => []);

export const getItem = async (itemId: number) =>
  fetchData(`https://api.hackerwebapp.com/item/${itemId}`).catch(() => {});

export const getMeta = async (itemId: number) =>
  fetchData(
    `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`,
    { revalidate: 60 },
  ).catch(() => ({}));

export const getUser = async (user: string) =>
  fetchData(
    `https://hacker-news.firebaseio.com/v0/user/${user}.json`,
    { revalidate: 60 },
  ).catch(() => ({}));

export const getSearch = async (query: string) =>
  fetchData(
    `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story`,
  ).catch(() => ({ hits: [] }));
