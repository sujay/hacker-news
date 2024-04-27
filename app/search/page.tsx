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

export const revalidate = 86400;

export default function Search({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
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
