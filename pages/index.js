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
        <ul className="list-group">
          {data.map((item) =>
          <li key={item.id} className="list-group-item">
            <Link href={`/item?id=${item.id}`}>
              <a>{item.title}</a>
            </Link>
            <div className="meta">
              {item.user} posted {item.time_ago}<br/>
              {item.comments_count} comments
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
            list-style-type: none;
          }
          .meta {
            font-size: 13px;
            color: #555;
          }
        `}</style>
      </Layout>
    )
  }
}
