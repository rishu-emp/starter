import { SortableTableColumnDef } from 'types/sortableTable.type';

const columns: SortableTableColumnDef[] = [
  { value: 'storeId', label: 'Store ID', sortable: true },
  { value: 'displayName', label: 'Display Name', sortable: false },
  {
    value: 'mapIcon',
    label: 'Map Icon',
    sortable: false,
  },
  {
    value: 'description',
    label: 'Description',
    sortable: false,
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
  },
];

export default columns;
