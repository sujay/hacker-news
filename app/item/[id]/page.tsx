'use client';

import React, { Suspense } from 'react';
import Head from 'next/head';
import { useParams } from 'next/navigation';

import styles from './page.module.css';
import styles2 from '../../../components/list-item.module.css';
import styles3 from '../../../components/comment.module.css';

import { getItem } from '../../../helpers/fetch';
import ItemDetail from '../../../components/item-detail';
import Comment from '../../../components/comment';

export default async function Item() {
  const params = useParams();
  const getItemData = getItem(+params!.id);
  const [item] = await Promise.all([getItemData]);

  return (
    <>
      <Head>
        <title>
          {item && item.title
            ? `Hacker News - ${item.title}`
            : 'Hacker News - Post'}
        </title>
        <meta name="robots" content="noindex" />
      </Head>
      {item ? (
        <>
          <ItemDetail item={item} page="item" />
          {item.descendants > 0 && (
            <div className={styles.comments}>
              <h5 className={styles.h5}>
                {item.descendants}
                {item.descendants > 1 ? ' Comments:' : ' Comment:'}
              </h5>
              {item.kids &&
                item.kids.map((comment: number) => (
                  <Suspense
                    fallback={
                      <div className={styles3.comment}>
                        <div className={styles3.loading}>
                          <span>Loading...</span>
                        </div>
                      </div>
                    }
                    key={comment}
                  >
                    {/* @ts-expect-error Server Component */}
                    <Comment item={comment} />
                  </Suspense>
                ))}
            </div>
          )}
        </>
      ) : (
        <li className={styles2.li}>Error loading item.</li>
      )}
    </>
  );
}
