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
    <div className={isOpen ? styles.menu_isOpen : styles.menu}>
      <div className={styles.menu_arrow_block}>
        <div
          className={isOpen ? styles.menu_arrow_isOpen : styles.menu_arrow}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ArrowLeft />
        </div>
      </div>

      {links.map((item, index) => (
        <Item
          key={`${item.id}-${index}`}
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
