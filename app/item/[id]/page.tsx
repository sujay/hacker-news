import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';

import listStyles from '../../../components/list-item.module.css';

import Header from '../../../components/header';
import Comments from '../../../components/comments';
import ItemDetail from '../../../components/item-detail';
import Loading from '../../../components/loading';
import { getMeta } from '../../../helpers/fetch';

export default async function ItemRender({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getMeta(+id);

  if (Number.isNaN(+id) || !item) {
    return notFound();
  }

  const title = `${
    item.title || `${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`
  } - Hacker News`;

  return (
    <>
      <title>{title}</title>
      <meta name="robots" content="none" />
      <Header>{item.type === 'link' ? 'story' : item.type}</Header>
      {!item.dead && !item.deleted ? (
        <>
          <ItemDetail item={item} />
          {item.descendants > 0 && (
            <Suspense fallback={<Loading />}>
              <Comments id={item.id} />
            </Suspense>
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
