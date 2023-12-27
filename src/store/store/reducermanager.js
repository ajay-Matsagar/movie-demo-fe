import { combineReducers } from "@reduxjs/toolkit";
import LoaderSlice from "../reducers/loader/LoaderSlice";
import ToasterSlice from "../reducers/toaster/ToasterSlice";
//
const rootReducer = combineReducers({
  loader: LoaderSlice,
  toaster: ToasterSlice,

  //Add other reducers main file as needed
});
//
export default rootReducer;
