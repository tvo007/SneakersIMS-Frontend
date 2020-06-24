import {
    GET_PRODUCTS,
  PRODUCT_ERROR,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  ADD_PRODUCT,
  
  } from '../actions/types';
  
  const initialState = {
    products: [],
    product: null,
    loading: true,
    error: {},
  };
  
  export default function (state = initialState, action) {
    const {type, payload} = action;
  
    switch (type) {
      case GET_PRODUCTS:
        return {
          ...state,
          products: payload,
          loading: false,
        };
      case GET_PRODUCT:
      case EDIT_PRODUCT:
        return {
          ...state,
          product: payload,
          loading: false,
        };
      case ADD_PRODUCT:
        return {
          ...state,
          products: [payload, ...state.products],
          loading: false,
        };
      case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter (product => product.id !== payload),
          loading: false,
        };
      case PRODUCT_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  