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
  const points = item.points || item.score;
  const user = item.user || item.by;
  const commentsCount = item.comments_count || item.descendants;

  return (
    <div className={styles.meta}>
      {points && points > 1 && (
        <span className={styles.points}>{`${points} points`}</span>
      )}
      {user && <span className={styles.user}>{user}</span>}
      {item.time && (
        <span className="time">
          {' posted '}
          <Time time={item.time} />
        </span>
      )}
      {commentsCount > 0 && page !== 'item' && (
        <div className={styles.comments_link}>
          <Link href={`/item/${item.id}`} prefetch={false}>
            {commentsCount}
            {commentsCount > 1 ? ' Comments' : ' Comment'}
          </Link>
        </div>
      )}
    </div>
  );
}
