import React from 'react';

import styles from '../app/item/[id]/page.module.css';

import { getItem } from '../helpers/fetch';

import Comment from './comment';

export default async function Comments({ id }: { id: number }) {
  let data;
  try {
    data = await getItem(+id);
  } catch {
    return null;
  }

  if (!data || !data.comments || data.comments.length === 0) {
    return null;
  }

  const { comments, comments_count } = data;
  const count = comments_count ?? 0;

  return (
    <div className={styles.comments}>
      <h4 className={styles.h4}>
        {count}
        {count > 1 ? ' Comments:' : ' Comment:'}
      </h4>

      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
