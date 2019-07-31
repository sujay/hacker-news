import React, { Component } from 'react';

import fetchData from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';
import PageNav from '../components/page-nav';

export default class Index extends Component {
  static async getInitialProps({ query: { page = '1' } }) {
    const options = {
      type: 'news',
      page,
    };
    const data = await fetchData(options);
    return { data, page };
  }

  render() {
    const { data, page } = this.props;
    return (
      <Layout>
        <Header page={page}>Top</Header>
        <ListDetail items={data} />
        <PageNav page={page} />
      </Layout>
    );
  }
}
