import React, { Component } from 'react';
import Head from 'next/head';

import { get } from "../components/fetch";
import Layout from '../components/layout';
import ListDetail from '../components/list-detail';
import PageNav from '../components/page-nav';

export default class Newest extends Component {
  static async getInitialProps({ query: { type = "newest", page = "1" } }) {
    const json = await get({ type, page });
    return { data: json, page: page };
  }
  render() {
    const { data, page } = this.props;
    return (
      <Layout>
        <Head>
          <title>Hacker News - Newest</title>
        </Head>
        <ListDetail data={data} />
        <PageNav page={page} />
      </Layout>
    )
  }
}