import React from 'react';

import styles from '../app/item/[id]/page.module.css';

import { getItem } from '../helpers/fetch';

import Comment from './comment';

import { CommentProps } from '../types/interfaces';

export default async function Comments({ id }: { id: number }) {
  const data = await getItem(+id);

  if (!data || !data.comments || data.comments.length === 0) {
    return null;
  }

  const { comments, comments_count } = data;

  return (
    <div className={styles.comments}>
      <h4 className={styles.h4}>
        {comments_count}
        {comments_count > 1 ? ' Comments:' : ' Comment:'}
      </h4>

      {comments.map((comment: CommentProps) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
