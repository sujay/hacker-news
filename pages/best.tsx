import React from 'react';
import { GetServerSideProps } from 'next';

import { ListProps } from '../types/interfaces';

import { getList } from '../helpers/fetch';
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

export const Best = ({ list }: ListProps) => (
  <Layout>
    <Header>Best</Header>
    {list.length > 0 ? (
      <ListDetail items={list.slice(0, 30)} url={false} />
    ) : (
      <ul>
        <li className="load">Error loading posts.</li>
      </ul>
    )}
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const list = await getList('beststories');
  return {
    props: {
      list,
    },
  };
};

export default Best;
