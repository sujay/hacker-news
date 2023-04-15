import React, { Suspense } from 'react';

import ListItem from './list-item';
import Loading from '../app/loading';

interface Props {
  items: number[];
  url: boolean;
}

export default function ListDetail({ items, url }: Props) {
  return (
    <ul>
      {items.map((itemId: number) => (
        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Server Component */}
          <ListItem itemId={itemId} key={itemId} url={url} page="list" />
        </Suspense>
      ))}
    </ul>
  );
}
