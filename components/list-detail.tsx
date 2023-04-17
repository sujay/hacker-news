import React, { Suspense } from 'react';

import ListItem from './list-item';
import Loading from '../app/loading';

export default function ListDetail({
  items,
  url,
}: {
  items: number[];
  url: boolean;
}) {
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
