import React from 'react';

import styles from './domain.module.css';

import extractDomain from '../helpers/domain';

export default function Domain({ itemUrl }: { itemUrl: string }) {
  return <span className={styles.domain}>{`(${extractDomain(itemUrl)})`}</span>;
}
