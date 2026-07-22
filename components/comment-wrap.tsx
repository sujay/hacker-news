import React from 'react';

import styles from './comment.module.css';

import Time from './time';

import { CommentProps } from '../types/interfaces';

export default function CommentWrap({
  children,
  comment,
}: {
  children: React.ReactNode | null | undefined;
  comment: CommentProps;
}) {
  return (
    <details className={styles.comment} open>
      <summary className={styles.meta}>
        <div className={styles.details}>
          <span className={styles.user}>{comment.user}</span>
          {comment.time && (
            <span className="time">
              <Time time={comment.time} />
            </span>
          )}
          :
        </div>
      </summary>
      <div className="tree">{children}</div>
    </details>
  );
}
