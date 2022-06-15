import React from 'react';

import { SelectInput, DateInput } from 'components';

export const Documents = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
      <SelectInput
        options={[{ value: '123123', label: '321312' }]}
        label="Select smth"
      />
      <DateInput label="date" />
    </div>
  );
};
