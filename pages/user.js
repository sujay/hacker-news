import React from 'react';
import Head from 'next/head';

import fetchData from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';

function Show({ data }) {
  const user = data;
  return (
    <Layout>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Header>User</Header>
      <div className="user">
        <h3>{user.id}</h3>
        <div className="meta">
          <span className="label">Registered:</span>
          <span className="content">{user.created}</span>
        </div>
        <div className="meta">
          <span className="label">Karma:</span>
          <span className="content">{user.karma}</span>
        </div>
        {user.avg && (
          <div className="meta">
            <span className="label">Average:</span>
            <span className="content">{user.avg}</span>
          </div>
        )}
        {user.about && (
          <div className="meta">
            <span className="label">About:</span>
            <span
              className="content about_text"
              dangerouslySetInnerHTML={{ __html: user.about }}
            />
          </div>
        )}
      </div>
      <style jsx>
        {`
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
          .label {
            color: #666;
            display: inline-flex;
            flex: 0 0 90px;
          }
          .content {
            width: auto;
            flex: 0 1 auto;
            word-wrap: break-word;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getServerSideProps({ query: { name } }) {
  const options = {
    type: 'user',
    user: name,
  };
  const data = await fetchData(options);
  return {
    props: {
      data,
    },
  };
}

export default Show;
