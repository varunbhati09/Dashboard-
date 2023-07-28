// redux/actions.js
export const SET_FILTER = 'SET_FILTER';

export const setFilter = (filterName, selectedOptions) => ({
  type: SET_FILTER,
  payload: { filterName, selectedOptions },
});
