import React, { Component } from 'react';
import Head from 'next/head';

import { get } from "../components/fetch";
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';
import PageNav from '../components/page-nav';

export default class Ask extends Component {
  static async getInitialProps({ query: { type = "ask", page = "1" } }) {
    const json = await get({ type, page });
    return { data: json, page: page };
  }
  render() {
    const { data, page } = this.props;
    return (
      <Layout>
        <Header page={page}>Ask</Header>
        <ListDetail data={data} />
        <PageNav page={page} limit={4} />
      </Layout>
    )
  }
}
