import React, { useState } from 'react';
import { Internet, ArrowDown } from 'assets/svg';
import styles from './style.module.scss';
import { theme } from 'setup/theme/theme';

export const ChangeLanguage = () => {
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);
  const [language, setLanguage] = useState('RU');

  return (
    <>
      {active && (
        <div onClick={() => setActive(false)} className={styles.base}></div>
      )}

      <div onClick={() => setActive(!active)} className={styles.container}>
        <div
          className={styles.container_content}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          <Internet
            color={
              active || focus ? theme.colors.blue[0] : theme.colors.grey[0]
            }
          />

          <span
            className={styles.container_content_language}
            style={{
              color:
                active || focus ? theme.colors.blue[0] : theme.colors.grey[0],
            }}
          >
            {language}
          </span>

          <ArrowDown
            color={
              active || focus ? theme.colors.blue[0] : theme.colors.grey[0]
            }
          />
        </div>

        <div
          className={styles.container_selectBlock}
          style={{ display: `${active ? 'flex' : 'none'}` }}
        >
          <span
            className={styles.container_selectBlock_text}
            onClick={() => setLanguage('EN')}
          >
            English (EN)
          </span>

          <span
            className={styles.container_selectBlock_text}
            style={{ marginTop: 10 }}
            onClick={() => setLanguage('RU')}
          >
            Русский (RU)
          </span>
        </div>
      </div>
    </>
  );
};
