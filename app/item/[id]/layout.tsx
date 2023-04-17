import React from 'react';

import Header from '../../../components/header';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header>Story</Header>
      {children}
    </>
  );
}
