import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';

import listStyles from '../../../components/list-item.module.css';

import Header from '../../../components/header';
import Comments from '../../../components/comments';
import ItemDetail from '../../../components/item-detail';
import Loading from '../../../components/loading';
import { getMeta } from '../../../helpers/fetch';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (Number.isNaN(+id)) {
    return { title: 'Not Found' };
  }

  const item = await getMeta(+id);

  if (!item?.id && !item?.title) {
    return { title: 'Not Found' };
  }

  const type = item.type ?? 'item';
  const title = `${
    item.title || `${type.charAt(0).toUpperCase() + type.slice(1)}`
  } - Hacker News`;

  return {
    title,
    robots: { index: false, follow: false },
  };
}

export default function ItemRender({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <>
          <Header>story</Header>
          <Loading />
        </>
      }
    >
      <ItemContent params={params} />
    </Suspense>
  );
}

async function ItemContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (Number.isNaN(+id)) {
    return notFound();
  }

  const item = await getMeta(+id);

  if (!item?.id && !item?.title) {
    return notFound();
  }

  const type = item.type ?? 'item';

  return (
    <>
      <Header>{type === 'link' ? 'story' : type}</Header>
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
          {type[0].toUpperCase() + type.substring(1)} has been deleted.
        </li>
      )}
    </>
  );
}
