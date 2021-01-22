import React from 'react';
import Head from 'next/head';
import timeago from 'epoch-timeago';

import { getUser } from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';

export default function Show({ user }) {
  return (
    <Layout>
      <Head>
        <title>{user.id ? `Hacker News - ${user.id}` : 'Hacker News'}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Header>User</Header>
      {user.id ? (
        <div className="user">
          <h3>{user.id}</h3>
          {user.created && (
            <div className="meta">
              <span className="label">Registered:</span>
              <span className="content">{timeago(user.created * 1000)}</span>
            </div>
          )}
          {user.karma && (
            <div className="meta">
              <span className="label">Karma:</span>
              <span className="content">{`${user.karma} points`}</span>
            </div>
          )}
          {user.submitted && (
            <div className="meta">
              <span className="label">Posted:</span>
              <span className="content">{`${user.submitted.length} times`}</span>
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
      ) : (
        <div className="load">Error loading user.</div>
      )}
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
  const user = await getUser(name);
  return {
    props: {
      user,
    },
  };
}
