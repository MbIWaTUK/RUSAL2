import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Table as TableAntd } from 'antd';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

const type = 'DraggableBodyRow';

const DraggableBodyRow = ({
  index,
  className,
  style,
  onDrag,
  ...restProps
}) => {
  const ref = useRef(null);

  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName:
          dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: (item: { index: number }) => {
      onDrag(item, index);
    },
  });

  const [, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drop(drag(ref));

  return (
    <th
      ref={ref}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  );
};

export const Table = ({ data, columns }) => {
  const [tableData, setTableData] = useState(data);
  const [tableColumns, setTableColumns] = useState(columns);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const handleDrag = (col, index: number) => (_, data) => {
    console.log('1+++', index, col);
    setTableColumns(columns);
  };

  const mergeColumns = tableColumns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      onDrag: handleDrag(column, index),
    }),
  }));

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleTableChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
    setPagination(pagination);
  };

  const components = {
    header: {
      cell: DraggableBodyRow,
    },
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <TableAntd
        columns={mergeColumns}
        dataSource={tableData}
        rowSelection={rowSelection}
        pagination={pagination}
        onChange={handleTableChange}
        // @ts-ignore
        components={components}
      />
    </DndProvider>
  );
};
