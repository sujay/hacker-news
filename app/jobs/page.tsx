import React, { Suspense } from 'react';

import Header from '../../components/header';
import List from '../../components/list';
import Loading from '../../components/loading';

export const metadata = {
  title: 'Job Listings',
};

export default function Job() {
  return (
    <>
      <Header>Jobs</Header>
      <Suspense fallback={<Loading />}>
        <List type="jobs" />
      </Suspense>
    </>
  );
}
