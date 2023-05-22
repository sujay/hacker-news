import ky from 'ky';

const endpointPrefix = 'https://hacker-news.firebaseio.com/v0/';
const endpointSuffix = '.json';

const fetchData = (endpoint: string, cache: Object) =>
  ky.get(endpoint, cache).json();

export const getList = (list: string) =>
  fetchData(`${endpointPrefix}${list}${endpointSuffix}`, {
    next: { revalidate: 60 },
  });

export const getItem = async (itemId: number) =>
  fetchData(`${endpointPrefix}item/${itemId}${endpointSuffix}`, {
    cache: 'no-cache',
  });

export const getUser = async (user: string) =>
  fetchData(`${endpointPrefix}user/${user}${endpointSuffix}`, {
    cache: 'no-cache',
  });
