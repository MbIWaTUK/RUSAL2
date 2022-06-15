import React, { useState } from 'react';
import styles from './style.module.scss';
import { theme } from 'setup/theme/theme';

export const Item = (props) => {
  const { Icon, link, text, active } = props;

  const [focus, setFocus] = useState(false);
  return (
    <a
      href={link}
      className={styles.menu_item}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      style={{
        backgroundColor: active ? theme.colors.grey[1] : theme.colors.white[0],
      }}
    >
      <Icon
        color={focus || active ? theme.colors.blue[0] : theme.colors.grey[0]}
      />

      <span
        className={styles.menu_item_text}
        style={{
          color: focus || active ? theme.colors.blue[0] : theme.colors.grey[0],
        }}
      >
        {text}
      </span>

      {active && <div className={styles.menu_item_active}></div>}
    </a>
  );
};
