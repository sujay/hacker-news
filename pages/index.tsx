import React from 'react';
import useSWR, { SWRConfig } from 'swr';

import { getList } from '../helpers/fetch';
import ListDetail from '../components/list-detail';

interface Props {
  fallback: number[];
}

function Index() {
  const { data: list, error } = useSWR('topstories', getList);

  if (error) {
    return (
      <ul>
        <li className="load">Error loading posts.</li>
      </ul>
    );
  }
  if (!list) {
    return (
      <ul>
        <li className="load">Error loading posts.</li>
      </ul>
    );
  }
  return <ListDetail items={list.slice(0, 30)} url={false} />;
}

export default function Page({ fallback }: Props) {
  return (
    <SWRConfig value={{ fallback }}>
      <Index />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const list = await getList('topstories');
  return {
    props: {
      fallback: {
        topstories: list,
      },
    },
    revalidate: 60,
  };
}
