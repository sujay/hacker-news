import React from 'react';
import { GetServerSideProps } from 'next';

import { ListProps } from '../types/interfaces';

import { getList } from '../helpers/fetch';
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

export const Index = ({ list }: ListProps) => (
  <Layout>
    <Header>Top</Header>
    {list && list.length > 0 ? (
      <ListDetail items={list.slice(0, 30)} url={false} />
    ) : (
      <ul>
        <li className="load">Error loading posts.</li>
      </ul>
    )}
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const list = await getList('topstories');
  return {
    props: {
      list,
    },
  };
};

export default Index;
