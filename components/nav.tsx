'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import NavLinks from './nav-links';

export default function Nav() {
  const pathname = usePathname();

  return <NavLinks active={pathname} />;
}
