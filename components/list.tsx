import React from 'react';

import ListItem from './list-item';

import listStyles from './list-item.module.css';

import { ItemProps } from '../types/interfaces';

import { getList } from '../helpers/fetch';

export default async function List({
  type,
  url,
}: {
  type: string;
  url: boolean;
}) {
  const list = await getList(type);
  return (
    <ul>
      {list ? (
        list.length > 0 &&
        list.map((item: ItemProps) => (
          <ListItem item={item} url={url} page="list" key={item.id} />
        ))
      ) : (
        <ul>
          <li className={listStyles.li}>Error loading stories.</li>
        </ul>
      )}
    </ul>
  );
}
