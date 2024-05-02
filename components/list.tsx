import React from 'react';

import ListItem from './list-item';

import listStyles from './list-item.module.css';

import { ItemProps } from '../types/interfaces';

import { getList } from '../helpers/fetch';

export default async function List({ type }: { type: string }) {
  const list = await getList(type);

  return (
    <ul>
      {list ? (
        list.length > 0 &&
        list.map((item: ItemProps) => (
          <ListItem
            id={item.id}
            title={item.title}
            points={item.points}
            author={item.user}
            url={item.url}
            time={item.time}
            commentCount={item.comments_count}
            dead={false}
            deleted={false}
            page="list"
            key={item.id}
          />
        ))
      ) : (
        <ul>
          <li className={listStyles.li}>Error loading stories.</li>
        </ul>
      )}
    </ul>
  );
}
