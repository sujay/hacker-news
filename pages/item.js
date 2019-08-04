import React, { Component } from 'react';
import Head from 'next/head';

import fetchData from '../components/fetch';
import Layout from '../components/layout';
import ItemDetail from '../components/item-detail';
import CommentDetail from '../components/comment-detail';

export default class Item extends Component {
  static async getInitialProps({ query: { id } }) {
    const options = {
      type: 'item',
      item: id,
    };
    const data = await fetchData(options);
    return { data };
  }

  render() {
    const {
      data,
      data: { title },
    } = this.props;
    return (
      <Layout>
        <Head>
          <title>Hacker News - {title}</title>
          <meta name="robots" content="noindex" />
        </Head>
        <ItemDetail item={data} />
        <CommentDetail item={data} />
        <style jsx global>
          {`
            .item .comments_link {
              display: none;
            }
          `}
        </style>
      </Layout>
    );
  }
}
