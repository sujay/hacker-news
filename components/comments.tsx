import React from 'react';

import Comment from './comment';

import { CommentProps } from '../types/interfaces';

export default function Comments({
  comments,
}: {
  comments: CommentProps[] | null | undefined;
}) {
  return (
    comments &&
    comments.length &&
    comments.map((comment: CommentProps) => (
      <Comment comment={comment} key={comment.id} />
    ))
  );
}
