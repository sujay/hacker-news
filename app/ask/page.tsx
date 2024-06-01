import React from 'react';

import Header from '../../components/header';
import List from '../../components/list';

export const metadata = {
  title: 'Ask',
};

export default function Ask() {
  return (
    <>
      <Header>Ask Hacker News</Header>
      <List type="ask" />
    </>
  );
}
