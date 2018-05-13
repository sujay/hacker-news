import React, { Component } from 'react';

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
        <Header user={user}>User</Header>
        <div className="user">
          <h3>{user.id}</h3>
          <div className="meta"><label>Registered:</label> <span>{user.created}</span></div>
          <div className="meta"><label>Karma:</label> <span>{user.karma}</span></div>
          {user.avg && <div className="meta"><label>Average:</label> <span>{user.avg}</span></div>}
          {user.about && <div className="meta"><label>About:</label> <span className="about_text" dangerouslySetInnerHTML={{ __html: user.about }}></span></div>}
        </div>
        <style jsx>{`
          .user {
            padding: 20px;
          }
          h3 {
            font-weight: bold;
            font-size: 20px;
            margin-top: 0;
            margin-bottom: 10px;
          }
          .meta {
            font-size: 14px;
            display: flex;
            flex-direction: row;
          }
          label {
            color: #888;
            display: inline-flex;
            flex: 0 0 90px;
          }
          .meta span {
            width: auto;
            flex: 0 1 auto;
            word-wrap: break-word;
            overflow: scroll;
          }
        `}</style>
      </Layout>
    )
  }
}
