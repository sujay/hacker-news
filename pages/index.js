import React, { Component } from 'react';

import { get } from "../components/fetch";
import Layout from '../components/layout';
import ListDetail from '../components/list-detail';

export default class Index extends Component {
  static async getInitialProps({ query: { type = "news", page = "1" } }) {
    const json = await get({ type, page });
    return { data: json };
  }
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <ListDetail data={data} />
      </Layout>
    )
  }
}
