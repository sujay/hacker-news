import React, { Suspense } from 'react';

import Header from '../../components/header';
import List from '../../components/list';
import Loading from '../../components/loading';

export const metadata = {
  title: 'Show',
};

export const revalidate = 21600;

export default async function Show() {
  return (
    <>
      <Header>Show Hacker News</Header>
      <Suspense fallback={<Loading />}>
        <List type="show" url={false} />
      </Suspense>
    </>
  );
}
