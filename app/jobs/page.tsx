import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import List from '../../components/list';

import listStyles from '../../components/list-item.module.css';

export const metadata = {
  title: 'Job Listings',
};

export default async function Job() {
  const list = await getList('jobs');

  return (
    <>
      <Header>Jobs</Header>
      {list ? (
        <List items={list} url={false} />
      ) : (
        <ul>
          <li className={listStyles.li}>Error loading jobs.</li>
        </ul>
      )}
    </>
  );
}
