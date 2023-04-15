'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import sanitizeHtml from 'sanitize-html';

import styles from './page.module.css';
import styles2 from '../../../components/list-item.module.css';

import { getUser } from '../../../helpers/fetch';

import Time from '../../../components/time';

export default async function User() {
  const params = useParams();
  const getUserData = getUser(`${params!.name}`);
  const [user] = await Promise.all([getUserData]);

  return (
    <>
      <Head>
        <title>
          {user && user.id ? `Hacker News - ${user.id}` : 'Hacker News - User'}
        </title>
      </Head>
      {user ? (
        <div className={styles.user}>
          <h3 className={styles.h3}>{user.id}</h3>
          {user.created && (
            <div className={styles.meta}>
              <span className={styles.label}>Registered:</span>
              <span className={styles.content}>
                <Time time={user.created} />
              </span>
            </div>
          )}
          {user.karma && (
            <div className={styles.meta}>
              <span className={styles.label}>Karma:</span>
              <span className={styles.content}>{`${user.karma} points`}</span>
            </div>
          )}
          {user.submitted && (
            <div className={styles.meta}>
              <span className={styles.label}>Posted:</span>
              <span
                className={styles.content}
              >{`${user.submitted.length} times`}</span>
            </div>
          )}
          {user.about && (
            <div className={styles.meta}>
              <span className={styles.label}>About:</span>
              <span
                className="content about_text"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(user.about),
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <li className={styles2.li}>Error loading user.</li>
      )}
    </>
  );
}
