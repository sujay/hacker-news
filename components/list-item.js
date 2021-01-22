import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { getItem } from './fetch';
import Meta from './meta';

export default function ListItem({ item: itemId, url }) {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItem(itemId).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [itemId]);
  return (
    <>
      {!loading ? (
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
