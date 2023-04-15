import React from 'react';

import styles from './header.module.css';

export default function Header({ children }: React.PropsWithChildren<{}>) {
  return <h2 className={styles.h2}>{children}</h2>;
}
