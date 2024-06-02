import React from 'react';

import Header from '../components/header';
import List from '../components/list';

export const metadata = {
  description:
    'A Hacker News clone built with React and Next.js. Hacker News is a tech news social platform.',
};

export default function Index() {
  return (
    <>
      <Header>Top Stories</Header>
      <List type="news" />
    </>
  );
}
