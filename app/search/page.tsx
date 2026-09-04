import React, { Suspense } from 'react';

import Header from '../../components/header';
import Loading from '../../components/loading';
import SearchBox from './search';
import SearchResults from './results';

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string | undefined }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';

  return {
    title: query ? `Search (${query})` : 'Search',
    alternates: {
      canonical: '/search',
    },
  };
}

export default function Search({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string | undefined }>;
}) {
  return (
    <>
      <Header>Search</Header>
      <Suspense fallback={null}>
        <SearchBox />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SearchContent searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function SearchContent({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string | undefined }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';

  if (!query) {
    return null;
  }

  return <SearchResults key={query} query={query} />;
}
