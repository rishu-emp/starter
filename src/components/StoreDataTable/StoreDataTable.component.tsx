import { useMemo, useState } from 'react';
import { StoreDataItemType } from 'types/StoreData.type';
import styles from './StoreDataTable.module.scss';
import { TablePagination } from '@mui/material';
import columns from '../../helpers/StoreDataColumns.helper';
import { useSortableTable } from '@hooks/useSortableTable';
import StoreDataTableHead from './components/StoreDataTableHead.component';
import StoreDataTableBody from './components/StoreDataTableBody.component';
import useDialog from '@hooks/useDialog';
import StoreDataDetails from '@components/StoreDataDetails/StoreDataDetails.component';
import useTablePagination from '@hooks/useTablePagination';

type StoreDataTablePropType = {
  storeData: StoreDataItemType[];
};

export default function StoreDataTable({ storeData }: StoreDataTablePropType): JSX.Element {
  const [tableData, handleSorting] = useSortableTable(storeData, columns);
  const [selectedStore, setSelectedStore] = useState<'' | StoreDataItemType>('');

  const [page, rowsPerPage, handleChangePage, handleChangeRowsPerPage] = useTablePagination({
    currentPage: 0,
    rowsOnEveryPage: 10,
  });

  const paginatedData = useMemo(() => {
    return tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [tableData, page, rowsPerPage]);

  const [isDialogOpen, handleDialogOpen, handleDialogClose] = useDialog();

  const handleOpenStoreDetailsDialog = (storeId: string): void => {
    handleDialogOpen();
    setSelectedStore(() => tableData.filter((store: StoreDataItemType) => store.storeId === storeId)[0]);
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
                  <p onClick={(): void => handleOpenStoreDetailsDialog(store.storeId)}>Details</p>
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

      {selectedStore && (
        <StoreDataDetails data={selectedStore} isDialogOpen={isDialogOpen} handleDialogClose={handleDialogClose} />
      )}
    </div>
  );
}
