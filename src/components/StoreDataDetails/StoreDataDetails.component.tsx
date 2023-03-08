import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { FC } from 'react';
import { StoreDataItemType } from 'types/StoreData.type';
import styles from './StoreDataDetails.module.scss';
import storeDataColumn from 'helpers/StoreDataColumns.helper';

type StoreDataDetailsPropType = {
  data: StoreDataItemType;
  isDialogOpen: boolean;
  handleDialogClose: () => void;
};

const StoreDataDetails: FC<StoreDataDetailsPropType> = ({ data, isDialogOpen, handleDialogClose }): JSX.Element => {
  return (
    <Dialog open={isDialogOpen} onClose={handleDialogClose} fullWidth maxWidth={'lg'}>
      <DialogContent
        sx={{
          bgcolor: '#c5e0b4',
        }}
      >
        <div className={styles.container}>
          <table>
            <tbody>
              {storeDataColumn.map((column) => {
                if (typeof data[column.value] === 'boolean') {
                  return (
                    <tr key={column.value}>
                      <td>{column.label}</td>
                      <td>{data[column.value] ? 'Yes' : 'No'}</td>
                      <td>
                        <button className={styles.editBtn}>Edit</button>{' '}
                      </td>
                    </tr>
                  );
                }
                return (
                  <tr key={column.value}>
                    <td>{column.label}</td>
                    <td>{data[column.value] ? data[column.value] : '-'}</td>
                    <td>
                      <button className={styles.editBtn}>Edit</button>{' '}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoreDataDetails;
