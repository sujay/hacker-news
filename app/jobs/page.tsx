import React from 'react';

import Header from '../../components/header';
import List from '../../components/list';

export const metadata = {
  title: 'Job Listings',
};

export default function Job() {
  return (
    <>
      <Header>Jobs</Header>
      <List type="jobs" />
    </>
  );
}
