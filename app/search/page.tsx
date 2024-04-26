import React, { Suspense } from 'react';

import SearchBox from './search';
import SearchResults from './results';
import Loading from '../../components/loading';

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
      <SearchBox />
      <Suspense key={Math.random()} fallback={<Loading />}>
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
