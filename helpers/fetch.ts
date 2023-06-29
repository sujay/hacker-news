const fetchData = async (type: string) =>
  fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`, {
    cache: 'no-store',
  }).then((response) => response.json());

export const getList = async (list: string) => fetchData(list);

export const getItem = async (itemId: number) => fetchData(`item/${itemId}`);

export const getUser = async (user: string) => fetchData(`user/${user}`);

export const getComments = async (itemId: number) =>
  fetch(`https://api.hackerwebapp.com/item/${itemId}`, {
    cache: 'no-store',
  })
    .then((response) => response.json())
    .then((data) => data.comments);
