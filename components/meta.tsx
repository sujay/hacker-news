import React from 'react';

import styles from './meta.module.css';

import Time from './time';

export default function Meta({
  points,
  author,
  time,
  commentCount,
  page,
}: {
  points: number;
  author: string;
  time: number;
  commentCount: number;
  page: string;
}) {
  return (
    <div className={styles.meta}>
      {commentCount > 0 && page !== 'item' && (
        <span className={styles.comments}>
          {commentCount}
          {commentCount > 1 ? ' Comments' : ' Comment'}
        </span>
      )}
      {points && points > 1 && (
        <span className={styles.points}>{`${points} points`}</span>
      )}
      {author && <span className={styles.user}>{author}</span>}
      {time && (
        <span className={styles.time}>
          <Time time={time} />
        </span>
      )}
    </div>
  );
}
