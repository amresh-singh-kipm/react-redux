import { combineReducers } from "redux";
import { createUser, productReducer,selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProduct: productReducer,
  product:selectedProductReducer,
  userInfo:createUser,
});

export default reducers;
