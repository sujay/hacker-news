import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import List from '../../components/list';

import listStyles from '../../components/list-item.module.css';

export const metadata = {
  title: 'Show',
};

export default async function Show() {
  const list = await getList('show');

  return (
    <>
      <Header>Show Hacker News</Header>
      {list ? (
        <List items={list} url={false} />
      ) : (
        <ul>
          <li className={listStyles.li}>Error loading projects.</li>
        </ul>
      )}
    </>
  );
}
