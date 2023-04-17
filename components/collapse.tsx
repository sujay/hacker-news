'use client';

import React, { useState } from 'react';

import styles from './comment.module.css';

export default function Collapse() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles.collapse}>
      <button type="button" className={styles.button} onClick={toggleCollapse}>
        {collapsed ? `+` : `−`}
      </button>
    </div>
  );
}
