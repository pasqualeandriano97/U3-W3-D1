import { ADD_TO_SEARCH_RESULTS } from "../actions/index";
import { TURN_OFF_SPINNER } from "../actions/index";
import { TURN_ON_SPINNER } from "../actions/index";

const initialState = {
  array: [],
  isLoading: false,
};

const searchResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH_RESULTS:
      return {
        ...state,
        array: action.payload,
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

export default searchResultReducer;
