import React, { Suspense } from 'react';

import Header from '../../components/header';
import List from '../../components/list';
import Loading from '../../components/loading';

export const metadata = {
  title: 'Ask',
};

export default async function Ask() {
  return (
    <>
      <Header>Ask Hacker News</Header>
      <Suspense fallback={<Loading />}>
        <List type="ask" url={false} />
      </Suspense>
    </>
  );
}
