const endpointPrefix = 'https://hacker-news.firebaseio.com/v0/';
const endpointSuffix = '.json';

const fetchData = (endpoint: string, cache: Object) =>
  fetch(endpoint, cache)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Status code error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      if (error instanceof TypeError) {
        throw new Error(`Failed to fetch data: ${error.message}`);
      } else {
        throw new Error(`Something went wrong: ${error.message}`);
      }
    });

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
