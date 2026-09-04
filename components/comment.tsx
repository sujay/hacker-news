import React from 'react';
import sanitizeHtml from 'sanitize-html';

import styles from './comment.module.css';

import CommentWrap from './comment-wrap';

import { CommentProps } from '../types/interfaces';

const HN_ITEM_LINK_RE =
  /https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item\?id=/g;

export default function Comment({ comment }: { comment: CommentProps }) {
  if (!comment || comment.deleted || comment.dead) {
    return null;
  }

  const hasContent = Boolean(comment.content);
  const hasChildren = Boolean(comment.comments && comment.comments.length > 0);

  return (
    <CommentWrap comment={{ ...comment }}>
      {hasContent && (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(
              comment.content.replace(HN_ITEM_LINK_RE, '/item/'),
            ),
          }}
        />
      )}
      {hasChildren &&
        comment.comments.map((commentChild: CommentProps) => (
          <Comment comment={commentChild} key={commentChild.id} />
        ))}
    </CommentWrap>
  );
}
