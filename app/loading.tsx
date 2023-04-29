import React from 'react';

import styles from '../components/list-item.module.css';

import Header from '../components/header';

export default function Loading() {
  return (
    <>
      <Header>Loading...</Header>
      <ul>
        <li className={styles.li}>...</li>
      </ul>
    </>
  );
}
