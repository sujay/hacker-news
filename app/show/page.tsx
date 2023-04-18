import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import ListDetail from '../../components/list-detail';

import styles2 from '../../components/list-item.module.css';

export const metadata = {
  title: 'Show',
};

export default async function Show() {
  const getListData = getList('showstories');
  const [list] = await Promise.all([getListData]);

  return list ? (
    <>
      <Header>Show Hacker News</Header>
      <ListDetail items={list.slice(0, 30)} url={false} />
    </>
  ) : (
    <ul>
      <li className={styles2.li}>Error loading item.</li>
    </ul>
  );
}
