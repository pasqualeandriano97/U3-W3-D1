export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_TO_SEARCH_RESULTS = "ADD_TO_SEARCH_RESULTS";
export const QUERY_SEARCH = "QUERY_SEARCH";
export const RESET_SEARCH = "RESET_SEARCH";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";
const baseEndpointJob =
  "https://strive-benchmark.herokuapp.com/api/jobs?company=";
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavourites = (job) => {
  return { type: ADD_TO_FAVOURITES, payload: job };
};

export const removeFromFavourites = (job) => {
  return { type: REMOVE_FROM_FAVOURITES, payload: job };
};

export const resetSearch = () => {
  return { type: RESET_SEARCH };
};

export const querySearch = (query) => {
  return async (dispatch) => {
    dispatch({ type: TURN_ON_SPINNER });
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: QUERY_SEARCH, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: TURN_OFF_SPINNER,
      });
    }
  };
};

export const addToSearchResults = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(baseEndpointJob + params);
      if (response.ok) {
        let { data } = await response.json();

        dispatch({ type: ADD_TO_SEARCH_RESULTS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: TURN_OFF_SPINNER,
      });
    }
  };
};
