import React from 'react';
import Link from 'next/link';

import { ListItemProps } from '../types/interfaces';

import styles from './list-item.module.css';

import Meta from './meta';

export default function ListItem({
  id,
  dead,
  deleted,
  points,
  author,
  time,
  commentCount,
  title,
}: ListItemProps) {
  if (deleted || dead) {
    return null;
  }

  return id ? (
    <li key={id} className={styles.li}>
      <div className={styles.title}>
        <h3 className={styles.h3}>
          <Link href={`/item/${id}`}>{title}</Link>
        </h3>
      </div>
      <Meta
        points={points}
        author={author}
        time={time}
        commentCount={commentCount}
      />
    </li>
  ) : (
    <li className={styles.li}>Error loading story.</li>
  );
}
