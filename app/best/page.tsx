import React from 'react';

import Header from '../../components/header';
import List from '../../components/list';

export const metadata = {
  title: 'Best',
};

export default function Best() {
  return (
    <>
      <Header>Best Stories</Header>
      <List type="best" />
    </>
  );
}
