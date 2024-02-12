const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [action.payload, ...state.favourites.content],
        },
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (job) => job._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
