import React from 'react';
import { Metadata } from 'next';

import { getList } from '../../helpers/fetch';
import Header from '../../components/header';
import ListDetail from '../../components/list-detail';

import styles2 from '../../components/list-item.module.css';

export const metadata: Metadata = {
  title: 'Hacker News - Ask',
};

export default async function Ask() {
  const getListData = getList('askstories');
  const [list] = await Promise.all([getListData]);

  return (
    <>
      <Header>Ask</Header>
      {list ? (
        <ListDetail items={list.slice(0, 30)} url={false} />
      ) : (
        <ul>
          <li className={styles2.li}>Error loading item.</li>
        </ul>
      )}
    </>
  );
}
