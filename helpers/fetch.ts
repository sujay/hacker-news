import { cache } from 'react';
import { cacheLife } from 'next/cache';

import type { ItemProps, SearchResponse } from '../types/interfaces';
import { fetchJson } from './http';

// Cache Components (`use cache`) provides cross-request caching for these
// getters, and `React.cache` deduplicates concurrent identical calls within a
// single render pass (e.g. `generateMetadata` + the page).
async function fetchList(list: string): Promise<ItemProps[]> {
  'use cache';
  cacheLife('minutes');
  return fetchJson<ItemProps[]>(`https://api.hackerwebapp.com/${list}`);
}

async function fetchItem(itemId: number): Promise<ItemProps> {
  'use cache';
  cacheLife('minutes');
  return fetchJson<ItemProps>(`https://api.hackerwebapp.com/item/${itemId}`);
}

async function fetchMeta(itemId: number): Promise<ItemProps | null> {
  'use cache';
  cacheLife('minutes');
  return fetchJson<ItemProps | null>(
    `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`,
  );
}

async function fetchSearch(query: string): Promise<SearchResponse> {
  'use cache';
  cacheLife('minutes');
  return fetchJson<SearchResponse>(
    `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(
      query,
    )}&tags=story`,
  );
}

export const getList = cache(fetchList);
export const getItem = cache(fetchItem);
export const getMeta = cache(fetchMeta);
export const getSearch = cache(fetchSearch);
