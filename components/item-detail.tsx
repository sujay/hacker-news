import React from 'react';
import sanitizeHtml from 'sanitize-html';

import styles from './item-detail.module.css';

import Domain from './domain';
import Meta from './meta';

import { ItemProps } from '../types/interfaces';

export default function ItemDetail({
  item,
  page,
}: {
  item: ItemProps;
  page: string;
}) {
  return (
    <div className={styles.item}>
      {item.title && (
        <h3 className={styles.h3}>
          {item.url ? (
            <>
              <a href={item.url} rel="nofollow">
                {item.title}
              </a>
              <Domain itemUrl={item.url} />
            </>
          ) : (
            [item.title]
          )}
        </h3>
      )}
      {item.content && (
        <div className={styles.content}>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(
                item.content.replace(
                  /https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item\?id=/g,
                  '',
                ),
              ),
            }}
          />
        </div>
      )}
      <Meta item={item} page={page} />
    </div>
  );
}
