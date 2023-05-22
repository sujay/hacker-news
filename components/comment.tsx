import React from 'react';

import { getItem } from '../helpers/fetch';

import CommentBody from './comment-body';

import { CommentProps } from '../types/interfaces';

export default async function Comment({ item }: { item: number }) {
  if (!item) return null;

  const comment = (await getItem(+item)) as CommentProps;

  if (!comment || comment.deleted || comment.dead) {
    return null;
  }

  return (
    <CommentBody comment={comment}>
      {comment.kids &&
        comment.kids.map((kid: number) => (
          /* @ts-expect-error Server Component */
          <Comment item={kid} key={kid} />
        ))}
    </CommentBody>
  );
}
