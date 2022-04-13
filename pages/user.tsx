import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import DOMPurify from 'isomorphic-dompurify';

import { UserProps } from '../types/interfaces';
import { getUser } from '../helpers/fetch';

import Header from '../components/header';
import Time from '../components/time';

interface Props {
  user?: UserProps | null;
}

export const User = ({ user }: Props) => (
  <>
    <Head>
      <title>
        {user && user.id ? `Hacker News - ${user.id}` : 'Hacker News'}
      </title>
      <meta name="robots" content="noindex" />
    </Head>
    <Header>User</Header>
    {user && user.id ? (
      <div className="user">
        <h3>{user.id}</h3>
        {user.created && (
          <div className="meta">
            <span className="label">Registered:</span>
            <span className="content">
              <Time time={user.created} />
            </span>
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
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(user.about),
              }}
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
  </>
);

export const getServerSideProps: GetServerSideProps = async ({
  query: { name },
}) => {
  let user;
  if (typeof name === 'string') {
    user = await getUser(name);
  } else {
    user = null;
  }
  return {
    props: {
      user,
    },
  };
};

export default User;
