import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { links } from './components/config';
import { Item } from './components/Item';
import styles from './style.module.scss';

export const MenuLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.menu}>
      {links.map((item) => (
        <Item
          Icon={item.icon}
          link={item.link}
          text={item.text}
          active={pathname == item.link}
          id={item.id}
        />
      ))}
    </div>
  );
};
