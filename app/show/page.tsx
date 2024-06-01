import React from 'react';

import Header from '../../components/header';
import List from '../../components/list';

export const metadata = {
  title: 'Show',
};

export default function Show() {
  return (
    <>
      <Header>Show Hacker News</Header>
      <List type="show" />
    </>
  );
}
