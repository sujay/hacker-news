import React from 'react';

import ListItem from './list-item';

export default function ListDetail({ items, url }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <ListItem item={item} key={item} url={url} />
        ))}
      </ul>
    </>
  );
}
