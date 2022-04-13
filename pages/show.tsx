import React from 'react';
import { GetServerSideProps } from 'next';

import { ListProps } from '../types/interfaces';

import { getList } from '../helpers/fetch';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

export const Show = ({ list }: ListProps) => (
  <>
    <Header>Show</Header>
    {list && list.length > 0 ? (
      <ListDetail items={list.slice(0, 30)} url={false} />
    ) : (
      <ul>
        <li className="load">Error loading posts.</li>
      </ul>
    )}
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const list = await getList('showstories');
  return {
    props: {
      list,
    },
  };
};

export default Show;
