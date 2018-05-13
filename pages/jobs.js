import React, { Component } from 'react';
import Link from 'next/link';

import { get } from "../components/fetch";
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

export default class Jobs extends Component {
  static async getInitialProps({ query: { type = "jobs", page = "1" } }) {
    const json = await get({ type, page });
    return { data: json, page: page };
  }
  render() {
    const { data, page } = this.props;
    return (
      <Layout>
        <Header>Jobs</Header>
        <ul>
          {data.map((item) =>
          <li key={item.id}>
            <h6>
              <Link href={item.url}><a rel="nofollow">{item.title}</a></Link>
            </h6>
          </li>
          )}
        </ul>
        <style jsx>{`
          li {
            padding: 20px;
            list-style-type: none;
            border-bottom: solid 1px #eee;
          }
          h6 {
            font-size: 15px;
            margin: 0;
            margin-bottom: 2px;
          }
        `}</style>
      </Layout>
    )
  }
}
