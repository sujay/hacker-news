import React from 'react';
import Head from 'next/head';

import fetchData from '../components/fetch';
import Layout from '../components/layout';
import ItemDetail from '../components/item-detail';
import CommentDetail from '../components/comment-detail';

function Item({ data }) {
  const { title } = data;
  return (
    <Layout>
      <Head>
        <title>{`Hacker News - ${title}`}</title>
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

export async function getServerSideProps({ query: { id } }) {
  const options = {
    type: 'item',
    item: id,
  };
  const data = await fetchData(options);
  return {
    props: {
      data,
    },
  };
}

export default Item;
