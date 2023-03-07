/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { StoreDataItemType } from 'types/StoreData.type';

import styles from './StoreDataTable.module.scss';
import { TablePagination } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

type StoreDataTablePropType = {
  storeData: StoreDataItemType[];
};

export default function StoreDataTable({ storeData }: StoreDataTablePropType) {
  console.log(storeData);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={styles.tableWrapper}>
      <div style={{ display: 'flex' }}>
        <table aria-label="caption table" className={styles.storeTable}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.field}>{column.headerName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {storeData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <tr key={row.storeId} className={styles.storeDataItem}>
                <td>
                  <span> {row.storeId}</span>
                </td>
                <td>{row.displayName}</td>
                {/* TODO: Need to check the possible value for map icon here */}
                <td>{row.mapIcon ? 'Y' : 'X'}</td>
                <td>{row.description}</td>
                <td>{row.isClarkStore ? 'Yes' : 'No'}</td>
                <td>{row.isAppointmentStore ? 'Yes' : 'No'}</td>
                <td>{row.storeType}</td>
                <td>{row.storeProfile}</td>
                <td>{row.geocodingTimestamp}</td>
                <td>{row.geocodingTime}</td>
                <td>{row.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className={styles.actionTable}>
          <thead>
            <tr>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {storeData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((store) => (
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
        rowsPerPageOptions={[10]}
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

const columns: GridColDef[] = [
  { field: 'storeId', headerName: 'Store ID', width: 130 },
  { field: 'displayName', headerName: 'Display Name', width: 130 },
  {
    field: 'mapIcon',
    headerName: 'Map Icon',
    width: 100,
    valueGetter: (params: GridValueGetterParams) => (params.row.mapIcon ? 'y' : 'X'),
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 200,
  },
  {
    field: 'isClarkStore',
    headerName: 'Is Clarks Store?',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => (params.row.isClarkStore ? 'Yes' : 'No'),
  },
  {
    field: 'isAppointmentStore',
    headerName: 'Is Appointment Store?',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => (params.row.isAppointmentStore ? 'Yes' : 'No'),
  },
  {
    field: 'storeType',
    headerName: 'Store Type',
    sortable: false,
    width: 160,
  },
  {
    field: 'storeProfile',
    headerName: 'Store Type',
    sortable: false,
    width: 160,
  },
  {
    field: 'geocodingTimestamp',
    headerName: 'Geocoding Timestamp',
    sortable: false,
    width: 160,
  },
  {
    field: 'geocodingTime',
    headerName: 'Geocoding Timestamp',
    sortable: false,
    width: 160,
  },
  {
    field: 'address',
    headerName: 'Address',
    sortable: false,
    width: 160,
  },
];

{
  /* <TableCell align="center">Display Name</TableCell>
              <TableCell align="center">Map Icon</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Is Clarks Store?</TableCell>
              <TableCell align="center">Is Appointment Store?</TableCell>
              <TableCell align="center">Store Type</TableCell>
              <TableCell align="center">Store Profile</TableCell>
              <TableCell align="center">Geocoding Timestamp</TableCell>
              <TableCell align="center">Geocoding Timestamp</TableCell>
              <TableCell align="center">Address</TableCell> */
}
