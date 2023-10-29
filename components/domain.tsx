import React from 'react';
import Link from 'next/link';

import styles from './domain.module.css';

import extractDomain from '../helpers/domain';

export default function Domain({ itemUrl }: { itemUrl: string }) {
  const domain = extractDomain(itemUrl);

  if (domain) {
    return (
      <Link href={`/search?q=${domain}`} className={styles.domain}>
        {`(${domain})`}
      </Link>
    );
  }
}
