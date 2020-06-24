import api from '../utils/api';
import {setAlert} from './alert';
import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  ADD_PRODUCT,
} from './types';

//get products
export const getProducts = () => async dispatch => {
  try {
    const res = await api.get ('/admin/products');

    dispatch ({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch ({
      type: PRODUCT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//add project
export const addProduct = formData => async dispatch => {
  try {
    // const res =

    const res = await api.post (`/admin/products`, formData);

    dispatch ({
      type: ADD_PRODUCT,
      payload: res.data,
    });

    dispatch (setAlert ('Product Created', 'success'));
  } catch (err) {
    dispatch ({
      type: PRODUCT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//EDIT PROJECT
export const editProduct = (id, formData) => async dispatch => {
  try {
    // const res =

    const res = await api.put (`/admin/products/${id}`, formData);

    dispatch ({
      type: EDIT_PRODUCT,
      payload: res.data,
    });

    dispatch (setAlert ('Product Editted.', 'success'));
  } catch (err) {
    dispatch ({
      type: PRODUCT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//del project
export const deleteProduct = id => async dispatch => {
  try {
    // const res =

    await api.delete (`/admin/products/${id}`);

    dispatch ({
      type: DELETE_PRODUCT,
      payload: id,
    });

    dispatch (setAlert ('Product Removed', 'success'));
  } catch (err) {
    dispatch ({
      type: PRODUCT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//gets single project
export const getProduct = id => async dispatch => {
  try {
    const res = await api.get (`/admin/products/${id}`);

    dispatch ({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch ({
      type: PRODUCT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};
