import React from 'react';

import styles from './domain.module.css';

import extractDomain from '../helpers/domain';

interface Props {
  itemUrl: string;
}

export default function Domain({ itemUrl }: Props) {
  return <span className={styles.domain}>{`(${extractDomain(itemUrl)})`}</span>;
}
