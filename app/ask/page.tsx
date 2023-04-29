import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import List from '../../components/list';

import listStyles from '../../components/list-item.module.css';

export const metadata = {
  title: 'Ask',
};

export default async function Ask() {
  const getListData = getList('askstories');
  const [list] = await Promise.all([getListData]);

  return (
    <>
      <Header>Ask Hacker News</Header>
      {list ? (
        <List items={list.slice(0, 30)} url={false} />
      ) : (
        <ul>
          <li className={listStyles.li}>Error loading questions.</li>
        </ul>
      )}
    </>
  );
}
