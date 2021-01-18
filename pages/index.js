import React from 'react';

import fetchData from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';
import PageNav from '../components/page-nav';

function Index({ data, page }) {
  return (
    <Layout>
      <Header page={page}>Top</Header>
      <ListDetail items={data} />
      <PageNav page={page} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = '1' } }) {
  const options = {
    type: 'news',
    page,
  };
  const data = await fetchData(options);
  return {
    props: {
      data,
      page,
    },
  };
}

export default Index;
