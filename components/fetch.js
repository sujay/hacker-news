/* eslint object-curly-newline: [0] */

import fetch from 'isomorphic-unfetch';

export default async function get({ type = 'news', id, name, page = '1' }) {
  const endpointBase = 'https://api.hackerwebapp.com/';
  let endpointPath = `${type}?page=${page}`;

  if (id) {
    endpointPath = `item/${id}`;
  } else if (name) {
    endpointPath = `user/${name}`;
  }

  const endpoint = `${endpointBase}${endpointPath}`;

  const res = await fetch(endpoint);
  const json = await res.json();

  return json;
}
