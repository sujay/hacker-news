import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { get } from "../components/fetch";
import Layout from '../components/layout';
import ItemDetail from '../components/item-detail';
import CommentDetail from '../components/comment-detail';

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
          <title>HN - {data.title}</title>
        </Head>
        <ItemDetail data={data} />
        <div className="comments">
          {data.comments.map((comment) =>
            <CommentDetail comment={comment} />
          )}
        </div>
      </Layout>
    )
  }
}