import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig } from 'swr';

import { getItem } from '../../helpers/fetch';
import ItemDetail from '../../components/item-detail';
import Comment from '../../components/comment';
import { ItemProps } from '../../types/interfaces';

interface Props {
  fallback: { [key: string]: ItemProps };
}

interface Params {
  params: {
    id: number;
  };
}

function Item() {
  const router = useRouter();
  let { id } = router.query;
  const { data: item, error } = useSWR('' + id, getItem);

  return (
    <>
      <Head>
        <title>
          {item && item.title
            ? `Hacker News - ${item.title}`
            : 'Hacker News - Post'}
        </title>
        <meta name="robots" content="noindex" />
        <body className="item" />
      </Head>
      {error || item === null ? (
        <div className="load">Error loading post.</div>
      ) : !item ? (
        <div className="load">Loading...</div>
      ) : (
        <>
          <ItemDetail item={item} page="item" />
          {item.descendants > 0 && (
            <div className="comments">
              <h5>
                {item.descendants}
                {item.descendants > 1 ? ' Comments:' : ' Comment:'}
              </h5>
              {item.kids &&
                item.kids.map((comment: number) => (
                  <Comment item={comment} key={comment} />
                ))}
            </div>
          )}
        </>
      )}
      <style jsx>
        {`
          h5 {
            background-color: #eee;
            color: #111;
            padding: 15px 20px;
            margin-top: -20px;
            margin-bottom: 20px;
            margin-left: -20px;
            margin-right: -20px;
            font-size: 16px;
          }
          .comments {
            padding: 20px;
          }
        `}
      </style>
    </>
  );
}

export async function getStaticProps({ params: { id } }: Params) {
  const data = await getItem(id);
  return {
    props: {
      fallback: {
        [id]: data,
      },
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export default function Page({ fallback }: Props) {
  return (
    <SWRConfig value={{ fallback }}>
      <Item />
    </SWRConfig>
  );
}
