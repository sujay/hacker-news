import React from 'react';

import { getList } from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

export default function Best({ list }) {
  return (
    <Layout>
      <Header>Best</Header>
      {list.length > 0 ? (
        <ListDetail items={list.slice(0, 30)} />
      ) : (
        <ul>
          <li className="load">Error loading posts.</li>
        </ul>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const list = await getList('beststories');
  return {
    props: {
      list,
    },
  };
}
