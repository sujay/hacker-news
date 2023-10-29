import React from 'react';

import ListItem from './list-item';

import { ItemProps } from '../types/interfaces';

export default function List({
  items,
  url,
}: {
  items: ItemProps[];
  url: boolean;
}) {
  return (
    <ul>
      {items &&
        items.length > 0 &&
        items.map((item: ItemProps) => (
          <ListItem item={item} url={url} page="list" key={item.id} />
        ))}
    </ul>
  );
}
