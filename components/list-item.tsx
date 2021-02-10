import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { ItemProps } from '../types/interfaces';

import { getItem } from '../helpers/fetch';
import Meta from './meta';

interface Props {
  itemId: number;
  url: boolean;
}

export default function ListItem({ itemId, url }: Props) {
  const [item, setItem] = useState<ItemProps>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItem(itemId).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {!loading ? (
        <>
          {item ? (
            <li key={item.id}>
              <h6>
                {item.url && url ? (
                  <a href={item.url} rel="nofollow">
                    {item.title}
                  </a>
                ) : (
                  <Link href={{ pathname: '/item', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                )}
              </h6>
              <Meta item={item} />
            </li>
          ) : (
            <li>Error loading this post.</li>
          )}
        </>
      ) : (
        <li>Loading...</li>
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
