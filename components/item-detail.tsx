import React from 'react';
import sanitizeHtml from 'sanitize-html';

import styles from './item-detail.module.css';

import Domain from './domain';
import Meta from './meta';

import { ItemProps } from '../types/interfaces';

export default function ItemDetail({ item }: { item: ItemProps }) {
  return (
    <div className={styles.item}>
      {item.title && (
        <div className={styles.title}>
          <h3 className={styles.h3}>
            {item.url ? (
              <a href={item.url} rel="nofollow">
                {item.title}
              </a>
            ) : (
              [item.title]
            )}
          </h3>
          <Domain itemUrl={item.url} />
        </div>
      )}
      {item.text && (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(
              item.text.replace(
                /https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item\?id=/g,
                '',
              ),
            ),
          }}
        />
      )}
      <Meta
        points={item.score}
        author={item.by}
        time={item.time}
        // disable comments count in meta on item detail page
        commentCount={0}
      />
    </div>
  );
}
