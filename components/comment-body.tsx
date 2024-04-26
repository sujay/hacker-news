'use client';

import React, { useState } from 'react';
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
  children: React.ReactNode | null | undefined;
  comment: CommentProps;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.comment} key={comment.id}>
      <div className={styles.meta}>
        <div className="details">
          <span className={styles.user}>
            <Link href={`/user/${comment.user}`}>{comment.user}</Link>
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
          {comment.content && (
            <div
              className={styles.content}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(
                  comment.content.replace(
                    /https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item\?id=/g,
                    '',
                  ),
                ),
              }}
            />
          )}
          {children}
        </div>
      )}
    </div>
  );
}
