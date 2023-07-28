// filterActions.js
// Action Types
export const SET_FILTER = 'SET_FILTER';

// Action Creators
// filterActions.js
export const setFilter = (columnName, selectedValues) => ({
    type: 'SET_FILTER',
    payload: {
      columnName,
      selectedValues,
    },
  });
  