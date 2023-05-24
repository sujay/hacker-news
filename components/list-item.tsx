import React from 'react';
import Link from 'next/link';

import styles from './list-item.module.css';

import { getItem } from '../helpers/fetch';

import Domain from './domain';
import Meta from './meta';

import { ItemProps } from '../types/interfaces';

export default async function ListItem({
  itemId,
  url,
  page,
}: {
  itemId: number;
  url: boolean;
  page: string;
}) {
  const item = (await getItem(itemId)) as ItemProps;

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
          <Link href={`/item/${item.id}`}>{item.title}</Link>
        )}
        {item.url && <Domain itemUrl={item.url} />}
      </h3>
      <Meta item={item} page={page} />
    </li>
  ) : (
    <li className={styles.li}>Error loading story.</li>
  );
}
