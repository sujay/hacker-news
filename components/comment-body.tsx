'use client';

import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';

import styles from './comment.module.css';

import Time from './time';
import Collapse from './collapse';

import { CommentProps } from '../types/interfaces';

export default function CommentBody({
  children,
  comment,
}: {
  // eslint-disable-next-line no-undef
  children: JSX.Element[];
  comment: CommentProps;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.comment} key={comment.id}>
      <div className={styles.meta}>
        <div className="details">
          <span className={styles.user}>
            <Link href={`/user/${comment.by}`}>{comment.by}</Link>
          </span>
          <span> said </span>
          {comment.time && (
            <span className="time">
              <Time time={comment.time} />
            </span>
          )}
          :
        </div>
        <Collapse
          collapsed={collapsed}
          onToggle={() => {
            setCollapsed(!collapsed);
          }}
        />
      </div>
      {!collapsed && (
        <div className="tree">
          {comment.text && (
            <div
              className={styles.content}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(
                  comment.text.replace(
                    /https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item\?id=/g,
                    '',
                  ),
                ),
              }}
            />
          )}
          <Suspense
            fallback={
              <div className={styles.comment}>
                <div className={styles.loading}>
                  <span>Loading...</span>
                </div>
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
      )}
    </div>
  );
}
