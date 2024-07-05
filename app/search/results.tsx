import React from 'react';

import listStyles from '../../components/list-item.module.css';

import { SearchResultProps } from '../../types/interfaces';

import { getSearch } from '../../helpers/fetch';

import ListItem from '../../components/list-item';

export default async function SearchResults({ query }: { query: string }) {
  const data = await getSearch(query);
  const results = data.hits;

  return (
    query && (
      <>
        <title>{`Hacker News - Search (${query})`}</title>
        <ul>
          {results.length > 0 ? (
            results.map((item: SearchResultProps) => (
              <ListItem
                id={item.objectID}
                title={item.title}
                points={item.points}
                author={item.author}
                time={item.created_at_i}
                commentCount={item.num_comments}
                key={item.objectID}
              />
            ))
          ) : (
            <ul>
              <li className={listStyles.li}>No results found.</li>
            </ul>
          )}
        </ul>
      </>
    )
  );
}
