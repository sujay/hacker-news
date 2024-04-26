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
      {item.points && item.points > 1 && (
        <span className={styles.points}>{`${item.points} points`}</span>
      )}
      {item.user && (
        <span className={styles.user}>
          <Link href={`/user/${item.user}`}>{item.user}</Link>
        </span>
      )}
      {item.time && (
        <span className="time">
          {' posted '}
          <Time time={item.time} />
        </span>
      )}
      {item.comments_count > 0 && page !== 'item' && (
        <div className={styles.comments_link}>
          <Link href={`/item/${item.id}`}>
            {item.comments_count}
            {item.comments_count > 1 ? ' Comments' : ' Comment'}
          </Link>
        </div>
      )}
    </div>
  );
}
