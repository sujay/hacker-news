import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import ListDetail from '../../components/list-detail';

import styles2 from '../../components/list-item.module.css';

export const metadata = {
  title: 'Newest',
};

export default async function Newest() {
  const getListData = getList('newstories');
  const [list] = await Promise.all([getListData]);

  return list ? (
    <>
      <Header>Newest Stories</Header>
      <ListDetail items={list.slice(0, 30)} url={false} />
    </>
  ) : (
    <ul>
      <li className={styles2.li}>Error loading item.</li>
    </ul>
  );
}
