import React from 'react';

import styles from './domain.module.css';

import extractDomain from '../helpers/domain';

export default function Domain({ itemUrl }: { itemUrl: string }) {
  if (itemUrl) {
    const domain = extractDomain(itemUrl);
    if (domain) {
      return <span className={styles.domain}>{`(${domain})`}</span>;
    }
  }
}
