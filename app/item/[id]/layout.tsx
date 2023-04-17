import React from 'react';

import Header from '../../../components/header';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <meta name="robots" content="noindex" />
      <Header>Story</Header>
      {children}
    </>
  );
}
