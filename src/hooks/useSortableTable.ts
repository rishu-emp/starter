import { Dispatch } from 'react';
import { useState } from 'react';
import { SortableTableColumnDef } from 'types/sortableTable.type';

function getDefaultSorting(defaultTableData: any, columns: any[]): any {
  const sorted = [...defaultTableData].sort((a, b) => {
    const filterColumn = columns.filter((column) => column.sortbyOrder);

    // Merge all array objects into single object and extract value and sortbyOrder keys
    const { value = 'storeId', sortbyOrder = 'asc' } = Object.assign({}, ...filterColumn);

    if (a[value] === null) return 1;
    if (b[value] === null) return -1;
    if (a[value] === null && b[value] === null) return 0;

    const ascending = a[value].toString().localeCompare(b[value].toString(), 'en', {
      numeric: true,
    });

    return sortbyOrder === 'asc' ? ascending : -ascending;
  });
  return sorted;
}

export const useSortableTable = (
  data: any,
  columns: SortableTableColumnDef[],
): [any, Dispatch<any>, (sortField: string, sortOrder: string) => void] => {
  const [tableData, setTableData] = useState(getDefaultSorting(data, columns));

  const handleSorting = (sortField: string, sortOrder: string): void => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return [tableData, setTableData, handleSorting];
};
