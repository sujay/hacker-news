import React from 'react';
import Link from 'next/link';

import styles from './meta.module.css';

import Time from './time';

import { ItemProps } from '../types/interfaces';

export default function Meta({
  item,
  page,
}: {
  item: ItemProps;
  page: string;
}) {
  return (
    <div className={styles.meta}>
      {item.score && item.score > 1 && (
        <span className={styles.points}>{`${item.score} points`}</span>
      )}
      {item.by && (
        <span className={styles.user}>
          <Link href={`/user/${item.by}`}>{item.by}</Link>
        </span>
      )}
      {item.time && (
        <span className="time">
          {' posted '}
          <Time time={item.time} />
        </span>
      )}
      {item.descendants > 0 && page !== 'item' && (
        <div className={styles.comments_link}>
          <Link href={`/item/${item.id}`}>
            {item.descendants}
            {item.descendants > 1 ? ' Comments' : ' Comment'}
          </Link>
        </div>
      )}
    </div>
  );
}
