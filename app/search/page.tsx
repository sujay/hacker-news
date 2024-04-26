import React, { Suspense } from 'react';

import Header from '../../components/header';
import SearchBox from './search';
import SearchResults from './results';
import Loading from '../../components/loading';

export const metadata = {
  title: 'Search',
  alternates: {
    canonical: '/search',
  },
};

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
      <Suspense key={query} fallback={<Loading />}>
        <SearchResults query={query} />
      </Suspense>
    </>
  );
}

Search.defaultProps = {
  searchParams: {
    query: '',
  },
};
