import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { get } from "../components/fetch";
import Layout from '../components/layout';
import ItemDetail from '../components/item';

export default class Item extends Component {
  static async getInitialProps({ query: { id = props.url.query.id } }) {
    const json = await get({ id });
    return { data: json };
  }
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Head>
          <title>{data.title} - Hacker News</title>
        </Head>
        {/* <ItemDetail /> */}
        <div className="item">
          <h3><a href={data.url}>{data.title}</a></h3>
          <div className="content">
            <div className="content" dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </div>
          <div className="meta">
            <p><span className="link">{data.domain}</span>)<br/>
            <span className="user">{data.user}</span> posted <span className="time">{data.time_ago}</span><br/>
            <span className="points">{data.points} points</span></p>
          </div>
        </div>
        <div className="comments">
          {data.comments.map((comment) =>
          <div className="comment" key={comment.id}>
            <div className="meta"><span className="user">{comment.user}</span> said <span className="time" title={comment.time}>{comment.time_ago}</span>:</div>
            <div className="content" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
          </div>
          )}
        </div>
        <style jsx>{`
          .item {
            padding-bottom: 30px;
          }
          .item .content {
            font-size: 15px;
            margin: 20px 0;
          }
          .item .meta {
            font-size: 14px;
            color: #888;
          }
          .item .meta span {
            color: #555;
          }
          .comment {
            font-size: 14px;
            padding: 20px;
            border: solid 1px #eee;
            margin-bottom: 10px;
            border-radius: 5px;
          }
          .comment .meta {
            font-size: 12px;
            color: #888;
          }
          .comment .user {
            font-weight: bold;
            color: #111;
          }
          .comment .content {
            margin-top: 10px;
            margin-bottom: -1em
          }
          .comment .content p:last-child {
            margin-bottom: 0
          }
        `}</style>
      </Layout>
    )
  }
}
