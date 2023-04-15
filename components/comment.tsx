import React, { Suspense, useState } from 'react';
import Link from 'next/link';

import styles from './comment.module.css';

import { getItem } from '../helpers/fetch';

import Time from './time';

interface Props {
  item: number;
}

export default async function Comment({ item }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const getCommentData = getItem(+item);
  const [comment] = await Promise.all([getCommentData]);

  if (!comment || comment.deleted || comment.dead) {
    return null;
  }

  return (
    <div className={styles.comment} key={comment.id}>
      <div className={styles.meta}>
        <div className="details">
          <span className={styles.user}>
            <Link href={`/user/${comment.by}`} prefetch={false}>
              {comment.by}
            </Link>
          </span>
          <span> said </span>
          {comment.time && (
            <span className="time">
              <Time time={comment.time} />
            </span>
          )}
          :
        </div>
        <div className={styles.collapse}>
          <button
            type="button"
            className={styles.button}
            onClick={toggleCollapse}
          >
            {collapsed ? `+` : `-`}
          </button>
        </div>
      </div>
      {!collapsed && (
        <div className="tree">
          {comment.text && (
            <div className={styles.content}>
              {comment.text.replace(
                /https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item\?id=/g,
                '',
              )}
            </div>
          )}
          {comment.kids &&
            comment.kids.map((kid: number) => (
              <Suspense
                fallback={
                  <div className={styles.comment}>
                    <div className={styles.loading}>
                      <span>Loading...</span>
                    </div>
                  </div>
                }
              >
                {/* @ts-expect-error Server Component */}
                <Comment item={kid} key={kid} />
              </Suspense>
            ))}
        </div>
      )}
    </div>
  );
}
