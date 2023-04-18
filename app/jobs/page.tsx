import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import List from '../../components/list';

import styles2 from '../../components/list-item.module.css';

export const metadata = {
  title: 'Job Listings',
};

export default async function Job() {
  const getListData = getList('jobstories');
  const [list] = await Promise.all([getListData]);

  return (
    <>
      <Header>Jobs</Header>
      {list ? (
        <List items={list.slice(0, 30)} url={false} />
      ) : (
        <ul>
          <li className={styles2.li}>Error loading jobs.</li>
        </ul>
      )}
    </>
  );
}
