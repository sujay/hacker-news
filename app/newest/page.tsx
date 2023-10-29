import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import List from '../../components/list';

import listStyles from '../../components/list-item.module.css';

export const metadata = {
  title: 'Newest',
};

export default async function Newest() {
  const list = await getList('newest');

  return (
    <>
      <Header>Newest Stories</Header>
      {list ? (
        <List items={list} url={false} />
      ) : (
        <ul>
          <li className={listStyles.li}>Error loading stories.</li>
        </ul>
      )}
    </>
  );
}
