import api from './api';

const setAuthToken = token => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.setItem ('token', token);
  } else {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.removeItem ('token');
  }
};

export default setAuthToken;


