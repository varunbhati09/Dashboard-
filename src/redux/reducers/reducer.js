import { SET_FILTER } from './actions';

const initialState = {
  filters: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterName]: action.payload.selectedOptions,
        },
      };
    default:
      return state;
  }
};

export default reducer;
