import React from 'react';
import useSWR, { SWRConfig } from 'swr';

import { getList } from '../helpers/fetch';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

interface Props {
  fallback: number[];
}

function Best() {
  const { data: list, error } = useSWR('beststories', getList);

  return (
    <>
      <Header>Best</Header>
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
      <Best />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const list = await getList('beststories');
  return {
    props: {
      fallback: {
        beststories: list,
      },
    },
    revalidate: 60,
  };
}
