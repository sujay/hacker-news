const endpointPrefix = 'https://hacker-news.firebaseio.com/v0/';
const endpointSuffix = '.json';

export const getList = (list: string) =>
  fetch(`${endpointPrefix}${list}${endpointSuffix}`).then((response) =>
    response.json(),
  );

export const getItem = (itemId: number) =>
  fetch(`${endpointPrefix}item/${itemId}${endpointSuffix}`).then((response) =>
    response.json(),
  );

export const getUser = (user: string) =>
  fetch(`${endpointPrefix}user/${user}${endpointSuffix}`).then((response) =>
    response.json(),
  );
