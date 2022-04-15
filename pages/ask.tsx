import React from 'react';
import useSWR, { SWRConfig } from 'swr';

import { getList } from '../helpers/fetch';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

interface Props {
  fallback: number[];
}

function Ask() {
  const { data: list, error } = useSWR('askstories', getList);

  return (
    <>
      <Header>Ask</Header>
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
      <Ask />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const list = await getList('askstories');
  return {
    props: {
      fallback: {
        askstories: list,
      },
    },
    revalidate: 60,
  };
}
