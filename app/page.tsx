import React from 'react';
import { Metadata } from 'next';

import { getList } from '../helpers/fetch';

import Header from '../components/header';
import ListDetail from '../components/list-detail';

export const metadata: Metadata = {
  title: 'Hacker News',
  description:
    'A Hacker News clone built with React and Next.js. Hacker News is a social news website focusing on computer science and entrepreneurship.',
};

export default async function Index() {
  const getListData = getList('topstories');
  const [list] = await Promise.all([getListData]);

  if (!list) {
    return (
      <ul>
        <li className="load">Error loading posts.</li>
      </ul>
    );
  }
  return (
    <>
      <Header>Top Stories</Header>
      <ListDetail items={list.slice(0, 30)} url={false} />
    </>
  );
}
