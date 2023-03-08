import { FC } from 'react';
import { StoreDataItemType } from 'types/StoreData.type';

const StoreDataTableBody: FC<{ tableData: StoreDataItemType[] }> = ({ tableData }) => {
  return (
    <tbody>
      {tableData.map((data: StoreDataItemType) => {
        return (
          <tr key={data.storeId}>
            <td>
              <span> {data.storeId}</span>
            </td>
            <td>{data.displayName}</td>
            {/* TODO: Need to check the possible value for map icon here */}
            <td>{data.mapIcon ? 'Y' : 'X'}</td>
            <td>{data.description}</td>
            <td>{data.isClarkStore ? 'Yes' : 'No'}</td>
            <td>{data.isAppointmentStore ? 'Yes' : 'No'}</td>
            <td>{data.storeType}</td>
            <td>{data.storeProfile}</td>
            <td>{data.geocodingTimestamp}</td>
            <td>{data.geocodingTime}</td>
            <td>{data.address}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default StoreDataTableBody;
