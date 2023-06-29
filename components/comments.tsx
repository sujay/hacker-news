import React from 'react';

import { getComments } from '../helpers/fetch';

import Comment from './comment';

import { CommentProps } from '../types/interfaces';

export default async function Comments({ itemId }: { itemId: number }) {
  const comments: CommentProps[] = await getComments(+itemId);

  return (
    comments &&
    comments.map((comment: CommentProps) => (
      <Comment comment={comment} key={comment.id} />
    ))
  );
}
