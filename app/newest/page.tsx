import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import List from '../../components/list';

import listStyles from '../../components/list-item.module.css';

import { ListProps } from '../../types/interfaces';

export const metadata = {
  title: 'Newest',
};

export default async function Newest() {
  const list = (await getList('newstories')) as ListProps;

  return (
    <>
      <Header>Newest Stories</Header>
      {list ? (
        <List items={list.slice(0, 30)} url={false} />
      ) : (
        <ul>
          <li className={listStyles.li}>Error loading stories.</li>
        </ul>
      )}
    </>
  );
}
