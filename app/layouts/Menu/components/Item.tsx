import React, { FC, useState } from 'react';
import styles from './style.module.scss';

type Props = {
  Icon: any;
  link: string;
  text: string;
  active: boolean;
  isOpen: boolean;
};

export const Item: FC<Props> = (props) => {
  const { Icon, link, text, active, isOpen } = props;

  const [focus, setFocus] = useState(false);

  return (
    <a
      href={link}
      className={active || focus ? styles.menu_item_active : styles.menu_item}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      style={{
        padding: `10px ${isOpen ? '30px' : '15px'}`,
      }}
    >
      <Icon className={styles.menu_item_icon} />

      {isOpen && <span className={styles.menu_item_text}>{text}</span>}

      {active && <div className={styles.menu_item_column}></div>}
    </a>
  );
};
