import React, { useState } from 'react';
import styles from './style.module.scss';
import { Logo } from 'assets/svg/';
import { menuList } from './components/config';
import { Item } from './components/Item';
import { ChangeLanguage } from './components/ChangeLanguage';

export const HeaderLayout = () => {
  const [active, setActive] = useState(null);

  return (
    <div className={styles.header}>
      <div style={{ cursor: 'pointer' }}>
        <Logo />
      </div>

      <div className={styles.header_btnBlog}>
        <ChangeLanguage />

        {menuList.map((icon) => (
          <Item
            Icon={icon.icon}
            id={icon.id}
            active={icon.id == active}
            onClick={(id) => setActive(id)}
          />
        ))}

        {/* <div className={styles.header_btnBlog_item}>
                    <Internet />
                </div>

                <div className={styles.header_btnBlog_item}>
                <Filter />
</div>

<div className={styles.header_btnBlog_item}>
                <Call />
</div>

<div className={styles.header_btnBlog_item}>
                <Info />
</div>

<div className={styles.header_btnBlog_item}>
                <Profile />
</div>

<div className={styles.header_btnBlog_item}>
                <Logout />
                </div> */}
      </div>
    </div>
  );
};
