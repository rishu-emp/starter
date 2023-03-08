import { FC, useState } from 'react';
import { SortableTableColumnDef } from 'types/sortableTable.type';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

const StoreDataTableHead: FC<{
  columns: SortableTableColumnDef[];
  handleSorting: (sortField: string, sortOrder: string) => void;
}> = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSortingChange = (value: string): void => {
    const sortOrder = value === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(value);
    setOrder(sortOrder);
    handleSorting(value, sortOrder);
  };

  const handleClick = (sortable: boolean, value: string): void => {
    if (sortable) {
      handleSortingChange(value);
    }
  };
  return (
    <thead>
      <tr>
        {columns.map(({ label, value, sortable }) => {
          const sortIcon = sortable ? (
            sortField === value && order === 'asc' ? (
              <FaSortUp />
            ) : sortField === value && order === 'desc' ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )
          ) : (
            ''
          );
          return (
            <th key={value} onClick={(): void => handleClick(sortable, value)}>
              <div
                style={{
                  cursor: sortable ? 'pointer' : 'default',
                  display: 'inline-flex',
                  gap: '4px',
                }}
              >
                <span>{label}</span>
                <span>{sortIcon}</span>
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default StoreDataTableHead;
