import React, { useState } from 'react';
import { AdvancedSearch } from '../../layouts/AdvancedSearch/AdvancedSearch';
import { SelectInput, DateInput } from 'components';

export const Documents = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
      <SelectInput
        options={[{ value: '123123', label: '321312' }]}
        label="Select smth"
      />

      <button onClick={() => setIsOpenFilter(true)}>open filter</button>

      <AdvancedSearch isOpen={isOpenFilter} />

      <DateInput label="date" />
    </div>
  );
};
