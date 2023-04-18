import React from 'react';

import { getList } from '../helpers/fetch';

import Header from '../components/header';
import List from '../components/list';

import styles2 from '../components/list-item.module.css';

export const metadata = {
  title: 'Hacker News',
  description:
    'A Hacker News clone built with React and Next.js. Hacker News is a social news website focusing on computer science and entrepreneurship.',
};

export default async function Index() {
  const getListData = getList('topstories');
  const [list] = await Promise.all([getListData]);

  return (
    <>
      <Header>Top Stories</Header>
      {list ? (
        <List items={list.slice(0, 30)} url={false} />
      ) : (
        <ul>
          <li className={styles2.li}>Error loading stories.</li>
        </ul>
      )}
    </>
  );
}
