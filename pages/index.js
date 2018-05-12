import React, { Component } from 'react';

import Link from 'next/link';

import { get } from "../components/fetch";
import Layout from '../components/layout';

export default class Index extends Component {
  static async getInitialProps({ query: { type = "news", page = "1" } }) {
    const json = await get({ type, page });
    return { data: json };
  }
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <ul>
          {data.map((item) =>
          <li key={item.id}>
            <h6>
              <Link prefetch href={`/item?id=${item.id}`}><a>{item.title}</a></Link>
            </h6>
            <div className="meta">
              <Link prefetch href={`/item?id=${item.id}`}><a>{item.user} posted {item.time_ago}<br/>
              {item.comments_count} comments</a></Link>
            </div>
          </li>
          )}
        </ul>
        <style jsx>{`
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            padding: 20px;
            list-style-type: none;
            border-top: none;
            border-bottom: solid 1px #eee !important;
            /* cursor: pointer; */
          }
          li a {
            color: #000;
            border-bottom: none !important;
            text-decoration: none;
          }
          h6 {
            font-size: 20px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 10px;
          }
          .meta {
            font-size: 12px;
            color: #555;
          }
          .meta a {
            color: #555;
          }
        `}</style>
      </Layout>
    )
  }
}
