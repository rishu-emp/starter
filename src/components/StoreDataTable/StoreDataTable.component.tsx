import { useMemo, useState } from 'react';
import { StoreDataItemType } from 'types/StoreData.type';
import styles from './StoreDataTable.module.scss';
import { TablePagination } from '@mui/material';
import columns from './columns';
import { useSortableTable } from '@hooks/useSortableTable';
import StoreDataTableHead from './components/StoreDataTableHead.component';
import StoreDataTableBody from './components/StoreDataTableBody.component';

type StoreDataTablePropType = {
  storeData: StoreDataItemType[];
};

export default function StoreDataTable({ storeData }: StoreDataTablePropType): JSX.Element {
  const [tableData, handleSorting] = useSortableTable(storeData, columns);
  const [page, setPage] = useState(0);

  // FIXME: change rows per page to 50
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginatedData = useMemo(() => {
    return tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [tableData, page, rowsPerPage]);

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={styles.tableWrapper}>
      <div style={{ display: 'flex' }}>
        {storeData && storeData.length > 0 && (
          <table className={styles.storeTable}>
            <StoreDataTableHead {...{ columns, handleSorting }} />
            <StoreDataTableBody {...{ columns, tableData: paginatedData }} />
          </table>
        )}
        <table className={styles.actionTable}>
          <thead>
            <tr>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((store: StoreDataItemType) => (
              <tr key={store.storeId}>
                <td>
                  <p>Details</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TablePagination
        rowsPerPageOptions={[rowsPerPage]}
        component="div"
        count={storeData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        sx={{
          bgcolor: '#c5e0b4',
          height: '52px',
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
