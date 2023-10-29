import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import List from '../../components/list';

import listStyles from '../../components/list-item.module.css';

export const metadata = {
  title: 'Ask',
};

export default async function Ask() {
  const list = await getList('ask');

  return (
    <>
      <Header>Ask Hacker News</Header>
      {list ? (
        <List items={list} url={false} />
      ) : (
        <ul>
          <li className={listStyles.li}>Error loading questions.</li>
        </ul>
      )}
    </>
  );
}
