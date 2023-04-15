import React from 'react';

import styles from './item-detail.module.css';

import { ItemProps } from '../types/interfaces';

import Domain from './domain';
import Meta from './meta';

interface Props {
  item: ItemProps;
  page: string;
}

export default function ItemDetail({ item, page }: Props) {
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
      {item.text && (
        <div className={styles.content}>
          <div>
            {item.text.replace(
              /https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item\?id=/g,
              '',
            )}
          </div>
        </div>
      )}
      <Meta item={item} page={page} />
    </div>
  );
}
