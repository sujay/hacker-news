import React from 'react';

import { getList } from '../helpers/fetch';
import ListDetail from '../components/list-detail';

export default async function Index() {
  const getListData = getList('topstories');
  const [list] = await Promise.all([getListData]);

  if (!list) {
    return (
      <ul>
        <li className="load">Error loading posts.</li>
      </ul>
    );
  }
  return <ListDetail items={list.slice(0, 30)} url={false} />;
}
