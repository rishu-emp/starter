import { ChangeEventHandler, useEffect, useMemo, useState } from 'react';
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
  const [tableData, setTableData, handleSorting] = useSortableTable(storeData, columns);
  const [selectedStore, setSelectedStore] = useState<'' | StoreDataItemType>('');
  const [searchVal, setSearchVal] = useState('');

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

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchVal(e.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    const handleSearch = (): void => {
      if (!searchVal) {
        return setTableData(storeData);
      }

      setTableData(() => {
        return storeData.filter((data) => {
          let returnVal = false;
          const keys = Object.keys(data);
          const searchAbleKeys = keys.filter((key, idx) => {
            return columns[idx].value === key && columns[idx].searchable;
          });

          searchAbleKeys.forEach((key) => {
            if (data[key].toLocaleLowerCase().includes(searchVal)) {
              returnVal = true;
              return;
            }
          });

          return returnVal;
        });
      });
    };
    handleSearch();
  }, [searchVal, storeData, setTableData]);

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.search}>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" id="search" value={searchVal} onChange={handleChange} />
      </div>
      <div style={{ display: 'flex' }}>
        
        {storeData && storeData.length > 0 && (
          <table className={styles.storeTable}>
            <StoreDataTableHead {...{ columns, handleSorting }} />
            <StoreDataTableBody {...{ columns, tableData: paginatedData }} />
          </table>
        )}

        {tableData.length > 0 && (
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
        )}
      </div>
      {tableData.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          sx={{
            bgcolor: '#c5e0b4',
            height: '52px',
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}

      {selectedStore && (
        <StoreDataDetails data={selectedStore} isDialogOpen={isDialogOpen} handleDialogClose={handleDialogClose} />
      )}
    </div>
  );
}
