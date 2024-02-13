import { ADD_TO_FAVOURITES } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,

        content: [action.payload, ...state.content],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,

        content: state.content.filter((job) => job._id !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
