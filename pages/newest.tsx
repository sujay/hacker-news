import React from 'react';
import useSWR, { SWRConfig } from 'swr';

import { getList } from '../helpers/fetch';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

interface Props {
  fallback: number[];
}

function Newest() {
  const { data: list, error } = useSWR('newstories', getList);

  return (
    <>
      <Header>Newest</Header>
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
      <Newest />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const list = await getList('newstories');
  return {
    props: {
      fallback: {
        newstories: list,
      },
    },
    revalidate: 60,
  };
}
