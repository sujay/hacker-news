import React from 'react';
import Link from 'next/link';

import { ListItemProps } from '../types/interfaces';

import styles from './list-item.module.css';

import Domain from './domain';
import Meta from './meta';

export default function ListItem({
  id,
  url,
  dead,
  deleted,
  points,
  author,
  time,
  commentCount,
  title,
  page,
}: ListItemProps) {
  if (deleted || dead) {
    return null;
  }

  return id ? (
    <li key={id} className={styles.li}>
      <h3 className={styles.h3}>
        <Link href={`/item/${id}`}>{title}</Link>
        {url && <Domain itemUrl={url} />}
      </h3>
      <Meta
        points={points}
        author={author}
        time={time}
        commentCount={commentCount}
        page={page}
      />
    </li>
  ) : (
    <li className={styles.li}>Error loading story.</li>
  );
}
