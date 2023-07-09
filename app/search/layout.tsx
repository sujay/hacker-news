import React from 'react';

import Header from '../../components/header';

export const metadata = {
  title: 'Search',
  alternates: {
    canonical: '/search',
  },
};

export default async function SearchPage({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <Header>Search</Header>
      {children}
    </>
  );
}
