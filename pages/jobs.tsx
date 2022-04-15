import React from 'react';
import useSWR, { SWRConfig } from 'swr';

import { getList } from '../helpers/fetch';
import Header from '../components/header';
import ListDetail from '../components/list-detail';

interface Props {
  fallback: number[];
}

function Job() {
  const { data: list, error } = useSWR('jobstories', getList);

  return (
    <>
      <Header>Jobs</Header>
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
      <Job />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const list = await getList('jobstories');
  return {
    props: {
      fallback: {
        jobstories: list,
      },
    },
    revalidate: 60,
  };
}
