import React, { Suspense } from 'react';

import Header from '../../components/header';
import List from '../../components/list';
import Loading from '../../components/loading';

export const metadata = {
  title: 'Newest',
};

export default async function Newest() {
  return (
    <>
      <Header>Newest Stories</Header>
      <Suspense fallback={<Loading />}>
        <List type="newest" url={false} />
      </Suspense>
    </>
  );
}
