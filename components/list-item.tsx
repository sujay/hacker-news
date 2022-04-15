import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { ItemProps } from '../types/interfaces';

import { getItem } from '../helpers/fetch';

import Domain from './domain';
import Meta from './meta';

interface Props {
  itemId: number;
  url: boolean;
}

  const [item, setItem] = useState<ItemProps>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItem(itemId).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, []);
export default function ListItem({ itemId, url, page }: Props) {
  return (
    <>
      {!loading ? (
        <>
          {item ? (
            <li key={item.id}>
              <h6>
                {item.url && url ? (
                  <>
                    <a href={item.url} rel="nofollow">
                      {item.title}
                    </a>
                  </>
                ) : (
                    <a>{item.title}</a>
                  </Link>
                )}
                {item.url && <Domain itemUrl={item.url} />}
              </h6>
            </li>
          ) : (
            <li>Error loading this post.</li>
          )}
        </>
      ) : (
        <li>Loading...</li>
              <Link href={`/item/${item.id}`}>
          <Meta item={item} page={page} />
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
