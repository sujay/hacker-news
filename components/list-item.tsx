import React from 'react';
import Link from 'next/link';

import styles from './list-item.module.css';

import Domain from './domain';
import Meta from './meta';

import { ItemProps } from '../types/interfaces';

export default function ListItem({
  item,
  url,
  page,
}: {
  item: ItemProps;
  url: boolean;
  page: string;
}) {
  if (item.deleted || item.dead) {
    return null;
  }

  return item ? (
    <li key={item.id} className={styles.li}>
      <h3 className={styles.h3}>
        {item.url && url ? (
          <a href={item.url} rel="nofollow">
            {item.title}
          </a>
        ) : (
          <Link href={`/item/${item.id}`} prefetch={false}>
            {item.title}
          </Link>
        )}
        {item.url && <Domain itemUrl={item.url} />}
      </h3>
      <Meta item={item} page={page} />
    </li>
  ) : (
    <li className={styles.li}>Error loading story.</li>
  );
}
