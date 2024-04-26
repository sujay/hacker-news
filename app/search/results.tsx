import React from 'react';
import Link from 'next/link';

import listStyles from '../../components/list-item.module.css';
import metaStyles from '../../components/meta.module.css';

import Time from '../../components/time';

import { getSearch } from '../../helpers/fetch';

interface SearchResult {
  objectID: number;
  points: number;
  title: string;
  created_at_i: number;
  num_comments: number;
}

export default async function SearchResults({ query }: { query: string }) {
  const data = await getSearch(query);
  const results = data.hits;

  return (
    query && (
      <ul>
        {results.length > 0 ? (
          results.map((item: SearchResult) => (
            <li key={item.objectID} className={listStyles.li}>
              <h3 className={listStyles.h3}>
                <Link href={`/item/${item.objectID}`}>{item.title}</Link>
              </h3>
              <div className={metaStyles.meta}>
                {item.points && item.points > 1 && (
                  <span
                    className={metaStyles.score}
                  >{`${item.points} points`}</span>
                )}
                {item.created_at_i && (
                  <span className={metaStyles.time}>
                    {' posted '}
                    <Time time={item.created_at_i} />
                  </span>
                )}
                {item.num_comments > 0 && (
                  <div className={metaStyles.comments_link}>
                    <Link href={`/item/${item.objectID}`}>
                      {item.num_comments}
                      {item.num_comments > 1 ? ' Comments' : ' Comment'}
                    </Link>
                  </div>
                )}
              </div>
            </li>
          ))
        ) : (
          <ul>
            <li className={listStyles.li}>No results found.</li>
          </ul>
        )}
      </ul>
    )
  );
}
