import React from 'react';
import sanitizeHtml from 'sanitize-html';

import styles from './comment.module.css';

import CommentBody from './comment-body';

import { CommentProps } from '../types/interfaces';

export default function Comment({ comment }: { comment: CommentProps }) {
  if (!comment || comment.deleted || comment.dead) {
    return null;
  }

  return (
    <CommentBody comment={comment}>
      {comment.content && (
        <div
          className={styles.content}
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
      {comment.comments &&
        comment.comments.length > 0 &&
        comment.comments.map((commentChild: CommentProps) => (
          <Comment comment={commentChild} key={commentChild.id} />
        ))}
    </CommentBody>
  );
}
