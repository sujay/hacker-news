const endpointPrefix = 'https://hacker-news.firebaseio.com/v0/';
const endpointSuffix = '.json';

export const getList = async (list: string) => {
  const endpoint = `${endpointPrefix}${list}${endpointSuffix}`;
  const res = await fetch(endpoint);
  const json = await res.json();
  return json;
};

export const getItem = async (item: number) => {
  const endpoint = `${endpointPrefix}item/${item}${endpointSuffix}`;
  const res = await fetch(endpoint);
  const json = await res.json();
  return json;
};

export const getUser = async (user: string) => {
  const endpoint = `${endpointPrefix}user/${user}${endpointSuffix}`;
  const res = await fetch(endpoint);
  const json = await res.json();
  return json;
};
