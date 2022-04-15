import React from 'react';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig } from 'swr';
import Head from 'next/head';
import DOMPurify from 'isomorphic-dompurify';

import { getUser } from '../../helpers/fetch';

import Header from '../../components/header';
import Time from '../../components/time';
import { UserProps } from '../../types/interfaces';

interface Props {
  fallback: { [key: string]: UserProps };
}

interface Params {
  params: {
    name: string;
  };
}

function User() {
  const router = useRouter();
  const { name } = router.query;
  const { data: user, error } = useSWR(`${name}`, getUser);

  return (
    <>
      <Header>User</Header>
      <Head>
        <title>
          {user && user.id ? `Hacker News - ${user.id}` : 'Hacker News - User'}
        </title>
        <meta name="robots" content="noindex" />
      </Head>
      {error || user === null ? (
        <div className="load">Error loading user.</div>
      ) : !user ? (
        <div className="load">Loading...</div>
      ) : (
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
}

export async function getStaticProps({ params: { name } }: Params) {
  const data = await getUser(name);
  return {
    props: {
      fallback: {
        [name]: data,
      },
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export default function Page({ fallback }: Props) {
  return (
    <SWRConfig value={{ fallback }}>
      <User />
    </SWRConfig>
  );
}
