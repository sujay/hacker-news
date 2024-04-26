import Header from '../components/header';

import styles from '../components/list-item.module.css';

export default function NotFound() {
  return (
    <>
      <Header>Not Found</Header>
      <ul>
        <li className={styles.li}>This page could not be found.</li>
      </ul>
    </>
  );
}
