import React, { Suspense } from 'react';

import { getMeta } from '../../../helpers/fetch';

import ItemFetcher from './itemFetcher';
import LoadingPage from '../../loading';

export async function generateMetadata({ params }: { params: { id: string } }) {
  if (!Number.isNaN(+params!.id)) {
    const item = await getMeta(+params!.id);
    if (item.id) {
      return {
        title: item.title
          ? item.title
          : item.type.charAt(0).toUpperCase() + item.type.slice(1),
        robots: {
          index: false,
          follow: false,
        },
      };
    }
  }
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function Item({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <Suspense fallback={<LoadingPage />}>
      <ItemFetcher id={id} />
    </Suspense>
  );
}
