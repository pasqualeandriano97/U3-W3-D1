import { QUERY_SEARCH } from "../actions/index";
import { RESET_SEARCH } from "../actions/index";
import { TURN_OFF_SPINNER } from "../actions/index";
import { TURN_ON_SPINNER } from "../actions/index";
const initialState = {
  array: [],
  isLoading: false,
};

const querySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_SEARCH:
      return {
        ...state,
        array: action.payload,
      };
    case RESET_SEARCH:
      return {
        array: [],
      };
    case TURN_OFF_SPINNER:
      return {
        ...state,
        isLoading: false,
      };
    case TURN_ON_SPINNER:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default querySearchReducer;
