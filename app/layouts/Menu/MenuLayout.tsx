import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowLeft } from '../../assets/svg';
import { links } from './components/config';
import { Item } from './components/Item';
import styles from './style.module.scss';

export const MenuLayout = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.menu} style={{ width: isOpen ? 330 : 50 }}>
      <div className={styles.menu_arrow_block}>
        <div
          className={styles.menu_arrow}
          onClick={() => setIsOpen(!isOpen)}
          style={{ transform: isOpen ? 'rotate(0)' : 'rotate(180deg)' }}
        >
          <ArrowLeft />
        </div>
      </div>

      {links.map((item) => (
        <Item
          Icon={item.icon}
          link={item.link}
          text={item.text}
          active={pathname == item.link}
          isOpen={isOpen}
        />
      ))}
    </div>
  );
};
