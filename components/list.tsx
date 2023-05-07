import React, { Suspense } from 'react';

import listStyles from './list-item.module.css';
import metaStyles from './meta.module.css';

import ListItem from './list-item';

export default function List({
  items,
  url,
}: {
  items: number[];
  url: boolean;
}) {
  return (
    <ul>
      {items.map((itemId: number) => (
        <Suspense
          fallback={
            <li className={listStyles.li}>
              <h3 className={listStyles.h3}>...</h3>
              <div className={metaStyles.meta}>
                <span className={metaStyles.user}>...</span>
                <div className={metaStyles.comments_link}>...</div>
              </div>
            </li>
          }
          key={itemId}
        >
          {/* @ts-expect-error Server Component */}
          <ListItem itemId={itemId} url={url} page="list" />
        </Suspense>
      ))}
    </ul>
  );
}