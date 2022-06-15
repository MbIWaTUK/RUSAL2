import React from 'react';
import styles from './style.module.scss';

export const AdvancedSearch = (props) => {
  const { children, isOpen } = props;

  return (
    <div className={styles.container} style={{ right: isOpen ? 300 : 0 }}>
      {children}
    </div>
  );
};
