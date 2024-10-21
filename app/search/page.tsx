import React, { Suspense } from 'react';

import Header from '../../components/header';
import Loading from '../../components/loading';
import SearchBox from './search';
import SearchResults from './results';

export const metadata = {
  title: 'Search',
  alternates: {
    canonical: '/search',
  },
};

export default async function Search({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string | undefined }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';

  return (
    <>
      <Header>Search</Header>
      <SearchBox />
      {query && (
        <Suspense key={query} fallback={<Loading />}>
          <SearchResults query={query} />
        </Suspense>
      )}
    </>
  );
}

Search.defaultProps = {
  searchParams: {
    query: '',
  },
};
