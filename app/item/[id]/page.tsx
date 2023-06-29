import React, { Suspense } from 'react';

import styles from './page.module.css';
import listStyles from '../../../components/list-item.module.css';
import commentStyles from '../../../components/comment.module.css';

import { getItem } from '../../../helpers/fetch';

import Header from '../../../components/header';
import ItemDetail from '../../../components/item-detail';
import Comments from '../../../components/comments';

import { ItemProps } from '../../../types/interfaces';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const item = (await getItem(+params.id)) as ItemProps;
  return {
    title: item.title
      ? item.title
      : item.type.charAt(0).toUpperCase() + item.type.slice(1),
    robots: {
      index: false,
    },
  };
}

export default async function Item({ params }: { params: { id: string } }) {
  const item = (await getItem(+params!.id)) as ItemProps;

  return item ? (
    <>
      <Header>{item.type}</Header>
      {!item.dead && !item.deleted ? (
        <>
          <ItemDetail item={item} page="item" />
          {item.descendants > 0 && (
            <div className={styles.comments}>
              <h4 className={styles.h4}>
                {item.descendants}
                {item.descendants > 1 ? ' Comments:' : ' Comment:'}
              </h4>
              <Suspense
                fallback={
                  <div className={commentStyles.comment}>
                    <div className={commentStyles.loading}>
                      <span>Loading...</span>
                    </div>
                  </div>
                }
              >
                <Comments itemId={item.id} key={item.id} />
              </Suspense>
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
    <li className={listStyles.li}>Error loading story.</li>
  );
}
