import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import List from '../../components/list';

import listStyles from '../../components/list-item.module.css';

import { ListProps } from '../../types/interfaces';

export const metadata = {
  title: 'Job Listings',
};

export default async function Job() {
  const list = (await getList('jobstories')) as ListProps;

  return (
    <>
      <Header>Jobs</Header>
      {list ? (
        <List items={list.slice(0, 30)} url={false} />
      ) : (
        <ul>
          <li className={listStyles.li}>Error loading jobs.</li>
        </ul>
      )}
    </>
  );
}
