import React from 'react';

import Header from '../../../components/header';

export default async function User({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header>User</Header>
      {children}
    </>
  );
}
