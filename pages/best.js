import React from 'react';

import fetchData from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';
import PageNav from '../components/page-nav';

function Best({ data, page }) {
  return (
    <Layout>
      <Header page={page}>Best</Header>
      <ListDetail items={data} />
      <PageNav page={page} limit={7} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = '1' } }) {
  const options = {
    type: 'best',
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

export default Best;
