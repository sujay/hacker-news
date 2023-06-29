'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import styles from './page.module.css';
import listStyles from '../../components/list-item.module.css';
import metaStyles from '../../components/meta.module.css';

import Header from '../../components/header';
import Time from '../../components/time';

interface SearchResult {
  objectID: number;
  points: number;
  title: string;
  created_at_i: number;
  num_comments: number;
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`,
    );
    const data = await response.json();
    setResults(data.hits);
    setIsLoading(false);
  };

  return (
    <>
      <Header>Search</Header>
      <div className={styles.searchbox}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
      </div>
      {
        // eslint-disable-next-line no-nested-ternary
        isLoading ? (
          <ul>
            <li className={listStyles.li}>Loading...</li>
          </ul>
        ) : results.length > 0 ? (
          <ul>
            {results.map((item: SearchResult) => (
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
            ))}
          </ul>
        ) : (
          <ul>
            <li className={listStyles.li}>No results found.</li>
          </ul>
        )
      }
    </>
  );
}
