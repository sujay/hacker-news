import React from 'react';

import listStyles from '../../components/list-item.module.css';

import { SearchResult } from '../../types/interfaces';

import { getSearch } from '../../helpers/fetch';

import ListItem from '../../components/list-item';

export default async function SearchResults({ query }: { query: string }) {
  const data = await getSearch(query);
  const results = data.hits;

  return (
    query && (
      <ul>
        {results.length > 0 ? (
          results.map((item: SearchResult) => (
            <ListItem
              id={item.objectID}
              title={item.title}
              points={item.points}
              author={item.author}
              url={item.url}
              time={item.created_at_i}
              commentCount={item.num_comments}
              dead={false}
              deleted={false}
              key={item.objectID}
            />
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
