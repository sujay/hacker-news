import React, { Suspense } from 'react';
import type { Metadata } from 'next';

import styles from './page.module.css';
import styles2 from '../../../components/list-item.module.css';
import styles3 from '../../../components/comment.module.css';

import { getItem } from '../../../helpers/fetch';

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
    title: `Hacker News - ${item.title}`,
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
  );
}
