import React, { FC } from 'react';
import { Reload, Building } from 'assets/svg';
import styles from './style.module.less';
import { FormattedMessage } from 'react-intl';
import { messages } from './messages';

type Props = {
  children: any;
  isOpen: boolean;
  handleClose: () => void;
};

export const AdvancedSearch: FC<Props> = ({
  children,
  isOpen,
  handleClose,
}) => {
  return (
    <>
      {isOpen && <div className={styles.base} onClick={handleClose}></div>}

      <div className={isOpen ? styles.container_isOpen : styles.container}>
        <div className={styles.container_header}>
          <span className={styles.container_header_label}>
            <FormattedMessage {...messages.label} />
          </span>

          <div className={styles.container_header_iconsBlock}>
            <div className={styles.container_header_iconsBlock_container}>
              <Reload />
            </div>

            <div className={styles.container_header_iconsBlock_container}>
              <Building />
            </div>
          </div>
        </div>

        <div className={styles.container_content}>{children}</div>
      </div>
    </>
  );
};
