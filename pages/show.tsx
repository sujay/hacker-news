import React from 'react';
import useSWR, { SWRConfig } from 'swr';

import { getList } from '../helpers/fetch';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

interface Props {
  fallback: number[];
}

function Show() {
  const { data: list, error } = useSWR('showstories', getList);

  return (
    <>
      <Header>Show</Header>
      {error ? (
        <ul>
          <li className="load">Error loading posts.</li>
        </ul>
      ) : !list ? (
        <ul>
          <li className="load">Loading...</li>
        </ul>
      ) : (
        <ListDetail items={list.slice(0, 30)} url={false} />
      )}
    </>
  );
}

export default function Page({ fallback }: Props) {
  return (
    <SWRConfig value={{ fallback }}>
      <Show />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const list = await getList('showstories');
  return {
    props: {
      fallback: {
        showstories: list,
      },
    },
    revalidate: 60,
  };
}
