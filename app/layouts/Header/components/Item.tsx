import React, { FC, useState } from 'react';
import styles from '../style.module.scss';
import { theme } from '../../../../theme';

type Props = {
  Icon: any;
  active: boolean;
  id: number;
  onClick: (id: number) => void;
};

export const Item: FC<Props> = (props) => {
  const { Icon, active, id, onClick } = props;

  const [focus, setFocus] = useState(false);

  return (
    <div
      className={styles.header_btnBlog_item}
      onClick={() => onClick(id)}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <Icon
        color={focus || active ? theme.colors.primary[0] : theme.colors.grey[0]}
      />
    </div>
  );
};
