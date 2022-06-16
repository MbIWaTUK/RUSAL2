import React, { FC } from 'react';

import { DatePicker } from 'antd';

import './styles.less';

type Props = {
  children?: never;
  onChange?: (value: unknown) => void;
  label: string;
};

export const DateInput: FC<Props> = ({ onChange, label }: Props) => {
  return (
    <DatePicker
      size="middle"
      onChange={onChange}
      placeholder={label}
      format="DD.MM.yyyy"
    />
  );
};
