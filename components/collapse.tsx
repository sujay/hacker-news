import React, { MouseEventHandler } from 'react';

import styles from './comment.module.css';

export default function Collapse({
  onToggle,
  collapsed,
}: {
  onToggle: MouseEventHandler;
  collapsed: boolean;
}) {
  return (
    <div className={styles.collapse}>
      <button type="button" className={styles.button} onClick={onToggle}>
        {collapsed ? `+` : `−`}
      </button>
    </div>
  );
}
