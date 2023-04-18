import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import List from '../../components/list';

import styles2 from '../../components/list-item.module.css';

export const metadata = {
  title: 'Show',
};

export default async function Show() {
  const getListData = getList('showstories');
  const [list] = await Promise.all([getListData]);

  return (
    <>
      <Header>Show Hacker News</Header>
      {list ? (
        <List items={list.slice(0, 30)} url={false} />
      ) : (
        <ul>
          <li className={styles2.li}>Error loading projects.</li>
        </ul>
      )}
    </>
  );
}
