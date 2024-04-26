import React, { Suspense } from 'react';

import Header from '../../components/header';
import List from '../../components/list';
import Loading from '../../components/loading';

export const metadata = {
  title: 'Best',
};

export default async function Best() {
  return (
    <>
      <Header>Best Stories</Header>
      <Suspense fallback={<Loading />}>
        <List type="best" url={false} />
      </Suspense>
    </>
  );
}
