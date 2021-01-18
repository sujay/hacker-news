export default async function fetchData(options) {
  const endpointBase = 'https://node-hnapi.herokuapp.com/';

  const { page, item, user, type } = options;

  let endpointPath;
  if (type === 'item') {
    endpointPath = `${type}/${item}`;
  } else if (type === 'user') {
    endpointPath = `${type}/${user}`;
  } else {
    endpointPath = `${type}?page=${page}`;
  }

  const endpoint = `${endpointBase}${endpointPath}`;

  const res = await fetch(endpoint);
  const json = res.json();

  return json;
}
