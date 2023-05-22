import React from 'react';

import { getList } from '../../helpers/fetch';

import Header from '../../components/header';
import List from '../../components/list';

import listStyles from '../../components/list-item.module.css';

import { ListProps } from '../../types/interfaces';

export const metadata = {
  title: 'Best',
};

export default async function Best() {
  const list = (await getList('beststories')) as ListProps;

  return (
    <>
      <Header>Best Stories</Header>
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
