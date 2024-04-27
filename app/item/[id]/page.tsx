import React from 'react';

import styles from './page.module.css';
import listStyles from '../../../components/list-item.module.css';

import { getItem } from '../../../helpers/fetch';

import Header from '../../../components/header';
import ItemDetail from '../../../components/item-detail';
import Comments from '../../../components/comments';

import { ItemProps } from '../../../types/interfaces';

export async function generateMetadata({ params }: { params: { id: string } }) {
  let item;

  if (!Number.isNaN(+params!.id)) {
    item = (await getItem(+params!.id)) as ItemProps;
    if (item.id) {
      return {
        title: item.title
          ? item.title
          : item.type.charAt(0).toUpperCase() + item.type.slice(1),
        robots: {
          index: false,
          follow: false,
        },
      };
    }
  }

  return {
    robots: {
      index: false,
    },
  };
}

export default async function Item({ params }: { params: { id: string } }) {
  let item;

  if (!Number.isNaN(+params!.id)) {
    item = (await getItem(+params!.id)) as ItemProps;
  }

  return item?.id ? (
    <>
      <Header>{item.type === 'link' ? 'story' : item.type}</Header>
      {!item.dead && !item.deleted ? (
        <>
          <ItemDetail item={item} page="item" />
          {item.comments_count > 0 && (
            <div className={styles.comments}>
              <h4 className={styles.h4}>
                {item.comments_count}
                {item.comments_count > 1 ? ' Comments:' : ' Comment:'}
              </h4>
              <Comments comments={item.comments} />
            </div>
          )}
        </>
      ) : (
        <li className={listStyles.li}>
          {item.type[0].toUpperCase() + item.type.substring(1)} has been
          deleted.
        </li>
      )}
    </>
  ) : (
    <>
      <Header>Error</Header>
      <li className={listStyles.li}>Item not found.</li>
    </>
  );
}
