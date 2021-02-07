import React from 'react';
import { GetServerSideProps } from 'next';

import { ListProps } from '../types/interfaces';

import { getList } from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

export const Jobs = ({ list }: ListProps) => (
  <Layout>
    <Header>Jobs</Header>
    {list.length > 0 ? (
      <ListDetail items={list.slice(0, 30)} url />
    ) : (
      <ul>
        <li className="load">Error loading posts.</li>
      </ul>
    )}
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const list = await getList('jobstories');
  return {
    props: {
      list,
    },
  };
};

export default Jobs;
