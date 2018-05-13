import React, { Component } from 'react';
import Head from 'next/head';

import { get } from "../components/fetch";
import Layout from '../components/layout';
import Header from '../components/header';

export default class Show extends Component {
  static async getInitialProps({ query: { name = props.url.query.name } }) {
    const json = await get({ name });
    return { data: json };
  }
  render() {
    const user = this.props.data;
    return (
      <Layout>
        <Head>
          <title>Hacker News - User {user.id}</title>
        </Head>
        <Header>User</Header>
        <div className="user">
          <h3>{user.id}</h3>
          <div className="meta">Created: <span>{user.created}</span></div>
          <div className="meta">Karma: <span>{user.karma}</span></div>
          {user.avg && <div className="meta">Average: <span>{user.avg}</span></div>}
          {user.about && <div className="meta"><p>About: <span dangerouslySetInnerHTML={{ __html: user.about }}></span></p></div>}
        </div>
        <style jsx>{`
          .user {
            padding: 20px;
          }
          h3 {
            font-weight: bold;
            font-size: 20px;
            margin-top: 0;
          }
          .meta {
            font-size: 14px;
            color: #888;
          }
          .meta span {
            font-size: 15px;
            color: #111;
          }
        `}</style>
      </Layout>
    )
  }
}
