import { SortableTableColumnDef } from 'types/sortableTable.type';

const StoreDataColumn: SortableTableColumnDef[] = [
  { value: 'storeId', label: 'Store ID', sortable: true, searchable: true },
  { value: 'displayName', label: 'Display Name', sortable: false, searchable: true },
  {
    value: 'mapIcon',
    label: 'Map Icon',
    sortable: false,
  },
  {
    value: 'description',
    label: 'Description',
    sortable: false,
    searchable: true,
  },
  {
    value: 'isClarkStore',
    label: 'Is Clarks Store?',
    sortable: false,
  },
  {
    value: 'isAppointmentStore',
    label: 'Is Appointment Store?',
    sortable: false,
  },
  {
    value: 'storeType',
    label: 'Store Type',
    sortable: false,
  },
  {
    value: 'storeProfile',
    label: 'Store Type',
    sortable: false,
  },
  {
    value: 'geocodingTimestamp',
    label: 'Geocoding Timestamp',
    sortable: false,
  },
  {
    value: 'geocodingTime',
    label: 'Geocoding Timestamp',
    sortable: false,
  },
  {
    value: 'address',
    label: 'Address',
    sortable: false,
    searchable: true,
  },
];

export default StoreDataColumn;
