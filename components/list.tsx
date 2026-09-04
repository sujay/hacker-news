import React from 'react';

import ListItem from './list-item';

import listStyles from './list-item.module.css';

import { ItemProps } from '../types/interfaces';

import { getList } from '../helpers/fetch';

export default async function List({ type }: { type: string }) {
  const list = await getList(type);

  if (!list) {
    return (
      <ul>
        <li className={listStyles.li}>Error loading stories.</li>
      </ul>
    );
  }

  const visible = list.filter(
    (item: ItemProps) => !item.dead && !item.deleted && item.id != null,
  );

  return (
    <ul>
      {visible.length > 0 ? (
        visible.map((item: ItemProps) => (
          <ListItem
            id={item.id}
            title={item.title}
            points={item.points}
            author={item.user}
            time={item.time}
            commentCount={item.comments_count}
            dead={item.dead}
            deleted={item.deleted}
            key={item.id}
          />
        ))
      ) : (
        <li className={listStyles.li}>No stories found.</li>
      )}
    </ul>
  );
}
