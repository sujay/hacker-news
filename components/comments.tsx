import React from 'react';

import { getItem } from '../helpers/fetch';

import Comment from './comment';

import { CommentProps } from '../types/interfaces';

export default async function Comments({ id }: { id: number }) {
  const { comments } = await getItem(+id);

  return (
    comments &&
    comments.length > 0 &&
    comments.map((comment: CommentProps) => (
      <Comment comment={comment} key={comment.id} />
    ))
  );
}
