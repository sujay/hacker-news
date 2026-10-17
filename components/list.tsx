import React from 'react';

import ListItem from './list-item';

import listStyles from './list-item.module.css';

import { getList } from '../helpers/fetch';

export default async function List({ type }: { type: string }) {
  const list = await getList(type);

  const visible = list.filter(
    (item) => !item.dead && !item.deleted && item.id != null,
  );

  return (
    <ul>
      {visible.length > 0 ? (
        visible.map((item) => (
          <ListItem
            id={item.id}
            title={item.title ?? ''}
            points={item.points ?? 0}
            author={item.user ?? ''}
            time={item.time}
            commentCount={item.comments_count ?? 0}
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
