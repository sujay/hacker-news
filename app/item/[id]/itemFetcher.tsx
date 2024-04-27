import React from 'react';
import { notFound } from 'next/navigation';

import styles from './page.module.css';
import listStyles from '../../../components/list-item.module.css';

import { getItem } from '../../../helpers/fetch';

import Header from '../../../components/header';
import Comments from '../../../components/comments';
import ItemDetail from '../../../components/item-detail';

export default async function ItemFetcher({ id }: { id: string }) {
  if (Number.isNaN(+id)) {
    notFound();
  }

  const item = await getItem(+id);

  return item.id ? (
    <>
      <Header>{item.type === 'link' ? 'story' : item.type}</Header>
      {!item.dead && !item.deleted ? (
        <>
          <ItemDetail item={item} page="item" />
          {item.comments_count > 0 && (
            <div className={styles.comments}>
              <h4 className={styles.h4}>
                {item.comments_count}
                {item.comments_count > 1 ? ' Comments:' : ' Comment:'}
              </h4>
              <Comments comments={item.comments} />
            </div>
          )}
        </>
      ) : (
        <li className={listStyles.li}>
          {item.type[0].toUpperCase() + item.type.substring(1)} has been
          deleted.
        </li>
      )}
    </>
  ) : (
    notFound()
  );
}
