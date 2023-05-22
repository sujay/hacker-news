import React from 'react';

import { getList } from '../helpers/fetch';

import Header from '../components/header';
import List from '../components/list';

import listStyles from '../components/list-item.module.css';

import { ListProps } from '../types/interfaces';

export const metadata = {
  description:
    'A Hacker News clone built with React and Next.js. Hacker News is a social news website focusing on computer science and entrepreneurship.',
};

export default async function Index() {
  const list = (await getList('topstories')) as ListProps;

  return (
    <>
      <Header>Top Stories</Header>
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
