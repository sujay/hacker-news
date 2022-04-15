import React from 'react';

import ListItem from './list-item';

interface Props {
  items: number[];
  url: boolean;
}

export default function ListDetail({ items, url }: Props) {
  return (
    <>
      <ul>
        {items.map((itemId: number) => (
          <ListItem itemId={itemId} key={itemId} url={url} page="list" />
        ))}
      </ul>
    </>
  );
}
