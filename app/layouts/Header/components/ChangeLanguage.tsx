import React, { useState } from 'react';
import { Internet, ArrowDown } from 'assets/svg';
import styles from './style.module.less';

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
            className={
              active || focus
                ? styles.container_content_icon_active
                : styles.container_content_icon
            }
          />

          <span
            className={
              active || focus
                ? styles.container_content_language_active
                : styles.container_content_language
            }
          >
            {language}
          </span>

          <ArrowDown
            className={
              active || focus
                ? styles.container_content_icon_active
                : styles.container_content_icon
            }
          />
        </div>

        <div
          className={
            active
              ? styles.container_selectBlock_active
              : styles.container_selectBlock
          }
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
