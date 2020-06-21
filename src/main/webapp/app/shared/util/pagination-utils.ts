import { getSortState as getDefaultSortState } from 'react-jhipster';

export const getSortState = (location, itemsPerPage) => {
  const sortState = getDefaultSortState(location, itemsPerPage);
  if (typeof location.sortParam === 'undefined' && sortState.sort !== '') {
    sortState.sort = 'lastModifiedDate';
    sortState.order = 'desc';
  }
  return sortState;
};
