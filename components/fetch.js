import axios from 'axios';

export default function fetchData(options) {
  const endpointBase = 'https://api.hackerwebapp.com/';

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

  return axios
    .get(endpoint)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
