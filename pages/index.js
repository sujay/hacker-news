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
              <Link prefetch href={item.url}><a rel="nofollow">{item.title}</a></Link>
            </h6>
            <div className="meta">
              <span className="points">{item.points} points </span> <span> | </span>
              {item.user} posted {item.time_ago}<br/>
              <Link prefetch href={`/item?id=${item.id}`}><a>{item.comments_count} comments</a></Link>
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
            border-bottom: solid 1px #eee;
            line-height: 1.5em;
          }
          h6 {
            font-size: 20px;
            margin: 0;
            margin-bottom: 1px;
          }
          .meta {
            font-size: 13px;
            color: #888;
          }
        `}</style>
      </Layout>
    )
  }
}
