import React, { Suspense } from 'react';
import type { Metadata } from 'next';

import styles from './page.module.css';
import styles2 from '../../../components/list-item.module.css';
import styles3 from '../../../components/comment.module.css';

import { getItem } from '../../../helpers/fetch';

import Header from '../../../components/header';
import ItemDetail from '../../../components/item-detail';
import Comment from '../../../components/comment';

async function getItemWrapper(id: number) {
  return getItem(id);
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const item = await getItemWrapper(+params.id);
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
  const getItemData = getItemWrapper(+params!.id);
  const [item] = await Promise.all([getItemData]);

  return item ? (
    <>
      <Header>{item.type}</Header>
      <ItemDetail item={item} page="item" />
      {item.descendants > 0 && (
        <div className={styles.comments}>
          <h4 className={styles.h4}>
            {item.descendants}
            {item.descendants > 1 ? ' Comments:' : ' Comment:'}
          </h4>
          <Suspense
            fallback={
              <div className={styles3.comment}>
                <div className={styles3.loading}>
                  <span>Loading...</span>
                </div>
              </div>
            }
          >
            {item.kids &&
              item.kids.map((comment: number) => (
                /* @ts-expect-error Server Component */
                <Comment item={comment} key={comment} />
              ))}
          </Suspense>
        </div>
      )}
    </>
  ) : (
    <li className={styles2.li}>Error loading story.</li>
  );
}
