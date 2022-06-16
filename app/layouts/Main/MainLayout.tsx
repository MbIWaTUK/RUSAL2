import { HeaderLayout } from 'layouts/Header/HeaderLayout';
import { MenuLayout } from 'layouts/Menu/MenuLayout';
import React from 'react';
import styles from './style.module.less';

export const MainLayout = (props) => {
  const { children } = props;

  return (
    <div className={styles.mainLayout}>
      <HeaderLayout />

      <div className={styles.content}>
        <MenuLayout />

        {children}
      </div>
    </div>
  );
};
