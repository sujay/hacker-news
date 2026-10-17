import React from 'react';

import listStyles from '../../components/list-item.module.css';

import { getSearch } from '../../helpers/fetch';

import ListItem from '../../components/list-item';

export default async function SearchResults({ query }: { query: string }) {
  if (!query) {
    return null;
  }

  const data = await getSearch(query);
  const results = data.hits ?? [];

  return (
    <ul>
      {results.length > 0 ? (
        results.map((item) => (
          <ListItem
            id={item.objectID}
            title={item.title ?? ''}
            points={item.points ?? 0}
            author={item.author ?? ''}
            time={item.created_at_i}
            commentCount={item.num_comments ?? 0}
            key={item.objectID}
          />
        ))
      ) : (
        <li className={listStyles.li}>No results found.</li>
      )}
    </ul>
  );
}
