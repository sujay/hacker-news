import React from 'react';

import { getItem } from '../helpers/fetch';

import CommentBody from './comment-body';

export default async function Comment({ item }: { item: number }) {
  if (!item) return null;

  const getCommentData = getItem(+item);
  const [comment] = await Promise.all([getCommentData]);

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
