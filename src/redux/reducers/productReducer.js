import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const createUser = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.CREATE_USER_INFO:
      return { ...state, userInfo:payload };
      default:
        return state;
  }
};
