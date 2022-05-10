import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response.status &&
    error.response.status > 400 &&
    error.response.status < 500;
  if (!expectedError) {
    alert("An unexpected error has been occurred.");
  }
  return Promise.reject(error);
});

export default {
  put: axios.put,
  get: axios.get,
  delete: axios.delete,
};
