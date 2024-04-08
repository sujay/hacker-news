import React from 'react';
import sanitizeHtml from 'sanitize-html';

import styles from './page.module.css';
import listStyles from '../../../components/list-item.module.css';

import { getUser } from '../../../helpers/fetch';

import Header from '../../../components/header';
import Time from '../../../components/time';

import { UserProps } from '../../../types/interfaces';

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const user = (await getUser(`${params!.name}`)) as UserProps;
  return {
    title: user.id,
    robots: {
      index: false,
    },
  };
}

export default async function User({ params }: { params: { name: string } }) {
  const user = (await getUser(`${params!.name}`)) as UserProps;

  return user ? (
    <>
      <Header>User</Header>
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
    </>
  ) : (
    <li className={listStyles.li}>Error loading user.</li>
  );
}
