import React, { useState } from 'react';
import styles from './style.module.less';
import { Logo } from 'assets/svg/';
import { menuList } from './components/config';
import { Item } from './components/Item';
import { ChangeLanguage } from './components/ChangeLanguage';

export const HeaderLayout = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={styles.header}>
      <div style={{ cursor: 'pointer' }}>
        <Logo />
      </div>

      <div className={styles.header_btnBlog}>
        <ChangeLanguage />

        {menuList.map((icon, index) => (
          <Item
            key={`${icon.id}-${index}`}
            Icon={icon.icon}
            id={icon.id}
            active={icon.id == active}
            onClick={(id) => setActive(id)}
          />
        ))}
      </div>
    </div>
  );
};
