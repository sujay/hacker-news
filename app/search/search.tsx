'use client';

import React, { useEffect, useRef } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import styles from './page.module.css';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cancel any pending navigation when the component unmounts so a stale
  // debounce cannot redirect the user after they have navigated away.
  useEffect(
    () => () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    },
    [],
  );

  const handleChange = (term: string) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    }, 500);
  };

  return (
    <div className={styles.searchbox}>
      <input
        type="search"
        placeholder="Enter search term"
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={searchParams.get('query') ?? ''}
      />
    </div>
  );
}
