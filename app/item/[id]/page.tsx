import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';

import ItemFetcher from './itemFetcher';
import LoadingPage from '../../loading';

export default function Item({ params }: { params: { id: string } }) {
  if (Number.isNaN(+params!.id)) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      <ItemFetcher id={params.id} />
    </Suspense>
  );
}
