'use client';

import React from 'react';

import styles from '../components/list-item.module.css';

import Header from '../components/header';

export default function Loading() {
  return (
    <>
      <Header>Error</Header>
      <ul>
        <li className={styles.li}>Error loading.</li>
      </ul>
    </>
  );
}
