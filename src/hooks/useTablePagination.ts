import { useState } from 'react';

type UseTablePaginationType = {
  currentPage: number;
  rowsOnEveryPage: number;
};

type HandleChangePageDef = (event: unknown, newPage: number) => void;
type HandleChangeRowsPerPageDef = (event: React.ChangeEvent<HTMLInputElement>) => void;

export default function useTablePagination({
  currentPage,
  rowsOnEveryPage,
}: UseTablePaginationType): [number, number, HandleChangePageDef, HandleChangeRowsPerPageDef] {
  const [page, setPage] = useState(() => currentPage || 0);
  const [rowsPerPage, setRowsPerPage] = useState(() => rowsOnEveryPage || 10);

  const handleChangePage: HandleChangePageDef = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage: HandleChangeRowsPerPageDef = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return [page, rowsPerPage, handleChangePage, handleChangeRowsPerPage];
}
