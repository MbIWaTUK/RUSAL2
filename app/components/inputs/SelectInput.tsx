import React, { ReactElement, FC } from 'react';

import { Select, Button } from 'antd';

type Props = {
  children?: never;
  options: {
    label: string | React.ReactElement | JSX.Element;
    value: unknown;
  }[];
  label: string;
  onChange?: (value: unknown) => void;
};

export const SelectInput: FC<Props> = ({ options, label, onChange }: Props) => {
  return (
    <>
      <Select placeholder={label} onChange={onChange}>
        {options.map((option) => (
          <Select.Option key={option.value as string} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
      <Button />
    </>
  );
};
