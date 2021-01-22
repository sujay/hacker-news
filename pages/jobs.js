import React from 'react';

import { getList } from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

export default function Jobs({ list }) {
  return (
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
}

export async function getServerSideProps() {
  const list = await getList('jobstories');
  return {
    props: {
      list,
    },
  };
}
