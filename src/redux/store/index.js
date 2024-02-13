import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import searchResultReducer from "../reducers/searchResult";
import querySearchReducer from "../reducers/querySearch";

const globalReducer = combineReducers({
  favourites: favouritesReducer,
  searchResult: searchResultReducer,
  querySearch: querySearchReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
