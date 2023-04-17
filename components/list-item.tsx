import React from 'react';
import Link from 'next/link';

import styles from './list-item.module.css';

import { getItem } from '../helpers/fetch';

import Domain from './domain';
import Meta from './meta';

export default async function ListItem({
  itemId,
  url,
  page,
}: {
  itemId: number;
  url: boolean;
  page: string;
}) {
  const getItemData = getItem(itemId);
  const [item] = await Promise.all([getItemData]);

  if (!item) {
    return <li className={styles.li}>Loading...</li>;
  }
  return (
    <li key={item.id} className={styles.li}>
      <h6 className={styles.h6}>
        {item.url && url ? (
          <a href={item.url} rel="nofollow">
            {item.title}
          </a>
        ) : (
          <Link href={`/item/${item.id}`}>{item.title}</Link>
        )}
        {item.url && <Domain itemUrl={item.url} />}
      </h6>
      <Meta item={item} page={page} />
    </li>
  );
}
