import React, { FC, useState } from 'react';
import styles from './style.module.scss';
import { theme } from 'setup/theme/theme';

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
      className={styles.menu_item}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      style={{
        backgroundColor: active ? theme.colors.grey[1] : theme.colors.white[0],
        padding: `10px ${isOpen ? '30px' : '15px'}`,
      }}
    >
      <Icon
        color={focus || active ? theme.colors.blue[0] : theme.colors.grey[0]}
      />

      {isOpen && (
        <span
          className={styles.menu_item_text}
          style={{
            color:
              focus || active ? theme.colors.blue[0] : theme.colors.grey[0],
          }}
        >
          {text}
        </span>
      )}

      {active && <div className={styles.menu_item_active}></div>}
    </a>
  );
};
