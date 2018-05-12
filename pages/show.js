import React, { Component } from 'react';
import Head from 'next/head';

import { get } from "../components/fetch";
import Layout from '../components/layout';
import ListDetail from '../components/list-detail';

export default class Show extends Component {
  static async getInitialProps({ query: { type = "show", page = "1" } }) {
    const json = await get({ type, page });
    return { data: json };
  }
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Head>
          <title>Hacker News - Show</title>
        </Head>
        <ListDetail data={data} />
      </Layout>
    )
  }
}
