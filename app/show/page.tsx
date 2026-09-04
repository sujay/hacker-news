import React, { Suspense } from 'react';

import Header from '../../components/header';
import List from '../../components/list';
import Loading from '../../components/loading';

export const metadata = {
  title: 'Show',
};

export default function Show() {
  return (
    <>
      <Header>Show Hacker News</Header>
      <Suspense fallback={<Loading />}>
        <List type="show" />
      </Suspense>
    </>
  );
}
