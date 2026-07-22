import React from 'react';

import styles from './meta.module.css';

import Time from './time';

export default function Meta({
  points,
  author,
  time,
  commentCount,
}: {
  points: number;
  author: string;
  time: number;
  commentCount: number;
}) {
  return (
    <div className={styles.meta}>
      {commentCount > 0 && (
        <span className={styles.comments}>
          {commentCount}
          {commentCount > 1 ? ' Comments' : ' Comment'}
        </span>
      )}
      {points > 0 && (
        <span className={styles.points}>{`${points} point${points > 1 ? 's' : ''}`}</span>
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
