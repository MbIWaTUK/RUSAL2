import React, { useState } from 'react';
import { AdvancedSearch } from '../../layouts/AdvancedSearch/AdvancedSearch';
import { SelectInput, DateInput } from 'components';
import { Table } from '../../components/table/Table';

const columns = [
  {
    id: 1,
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name - b.name,
    width: 150,
    ellipsis: true,
  },
  {
    id: 2,
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    width: 150,
    ellipsis: true,
  },
  {
    id: 3,
    title: 'Address',
    dataIndex: 'address',
    sorter: (a, b) => a.address - b.address,
    width: 150,
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 1,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 2,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 3,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 4,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'John Brown',
    age: 5,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Jim Green',
    age: 6,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 7,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '8',
    name: 'Jim Red',
    age: 8,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '9',
    name: 'John Brown',
    age: 9,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '10',
    name: 'Jim Green',
    age: 10,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '11',
    name: 'Joe Black',
    age: 11,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '12',
    name: 'Jim Red',
    age: 12,
    address: 'London No. 2 Lake Park',
  },
];

export const Documents = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        // display: 'flex',
        // flexDirection: 'column',
      }}
    >
      <Table data={data} columns={columns} />
      <SelectInput
        options={[{ value: '123123', label: '321312' }]}
        label="Select smth"
      />

      <button onClick={() => setIsOpenFilter(true)}>open filter</button>

      <DateInput label="date" />

      <AdvancedSearch
        isOpen={isOpenFilter}
        handleClose={() => setIsOpenFilter(false)}
      >
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <SelectInput
          options={[{ value: '123123', label: '321312' }]}
          label="Select smth"
        />
        <DateInput label="date" />
        <DateInput label="date" />
      </AdvancedSearch>
    </div>
  );
};
