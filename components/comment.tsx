import React from 'react';

import CommentBody from './comment-body';

import { CommentProps } from '../types/interfaces';

export default async function Comment({ comment }: { comment: CommentProps }) {
  if (!comment || comment.deleted || comment.dead) {
    return null;
  }

  return (
    <CommentBody comment={comment}>
      {comment.comments &&
        comment.comments.length > 0 &&
        comment.comments.map((commentChild: CommentProps) => (
          <Comment comment={commentChild} key={commentChild.id} />
        ))}
    </CommentBody>
  );
}
