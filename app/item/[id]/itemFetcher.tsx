import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';

import styles from './page.module.css';
import listStyles from '../../../components/list-item.module.css';

import Header from '../../../components/header';
import Comments from '../../../components/comments';
import ItemDetail from '../../../components/item-detail';
import Loading from '../../../components/loading';
import { getMeta } from '../../../helpers/fetch';

export default async function ItemFetcher({ id }: { id: string }) {
  const item = await getMeta(+id);

  const title = `${
    item.title || `${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`
  } - Hacker News`;

  if (!item.id) {
    notFound();
  }

  return (
    <>
      <title>{title}</title>
      <meta name="robots" content="none" />
      <Header>{item.type === 'link' ? 'story' : item.type}</Header>
      {!item.dead && !item.deleted ? (
        <>
          <ItemDetail item={item} page="item" />
          {item.descendants > 0 && (
            <div className={styles.comments}>
              <h4 className={styles.h4}>
                {item.descendants}
                {item.descendants > 1 ? ' Comments:' : ' Comment:'}
              </h4>
              <Suspense fallback={<Loading />}>
                <Comments id={item.id} />
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
  );
}
