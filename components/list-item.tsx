import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

import { getItem } from '../helpers/fetch';

import Domain from './domain';
import Meta from './meta';

interface Props {
  itemId: number;
  url: boolean;
  page: string;
}

export default function ListItem({ itemId, url, page }: Props) {
  const { data: item, error } = useSWR(`${itemId}`, getItem);

  return (
    <>
      {error ? (
        <li>Error loading post.</li>
      ) : !item ? (
        <li>Loading...</li>
      ) : (
        <li key={item.id}>
          <h6>
            {item.url && url ? (
              <a href={item.url} rel="nofollow">
                {item.title}
              </a>
            ) : (
              <Link href={`/item/${item.id}`} prefetch={false}>
                <a>{item.title}</a>
              </Link>
            )}
            {item.url && <Domain itemUrl={item.url} />}
          </h6>
          <Meta item={item} page={page} />
        </li>
      )}
      <style jsx>
        {`
          li {
            padding: 20px;
            list-style-type: none;
            border-bottom: solid 1px #eee;
          }
          h6 {
            font-size: 20px;
            margin: 0;
            margin-bottom: 2px;
          }
        `}
      </style>
    </>
  );
}
