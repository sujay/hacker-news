import React from 'react';

import Header from '../../components/header';
import List from '../../components/list';

export const metadata = {
  title: 'Newest',
};

export default function Newest() {
  return (
    <>
      <Header>Newest Stories</Header>
      <List type="newest" />
    </>
  );
}
