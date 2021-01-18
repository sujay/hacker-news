import React from 'react';

import fetchData from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';
import PageNav from '../components/page-nav';

function Show({ data, page }) {
  return (
    <Layout>
      <Header page={page}>Show</Header>
      <ListDetail items={data} />
      <PageNav page={page} limit={2} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = '1' } }) {
  const options = {
    type: 'show',
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

export default Show;
