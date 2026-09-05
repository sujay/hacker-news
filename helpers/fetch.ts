import { cacheLife } from 'next/cache';

async function fetchJson(route: string, init?: RequestInit) {
  const res = await fetch(route, {
    signal: AbortSignal.timeout(8000),
    ...init,
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data!');
  }
  return res.json();
}

export const getList = async (list: string) => {
  'use cache';
  cacheLife('minutes');
  return fetchJson(`https://api.hackerwebapp.com/${list}`);
};

export const getItem = async (itemId: number) => {
  'use cache';
  cacheLife('minutes');
  return fetchJson(`https://api.hackerwebapp.com/item/${itemId}`);
};

export const getMeta = async (itemId: number) => {
  'use cache';
  cacheLife('hours');
  return fetchJson(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`);
};

export const getSearch = async (query: string) => {
  return fetchJson(
    `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story`,
    { cache: 'no-store' },
  );
};
