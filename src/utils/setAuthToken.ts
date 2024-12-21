// src/utils/setAuthToken.ts
import axios from 'axios';

// Function to set the authentication token in the Axios request headers
const setAuthToken = (token: string | null) => {
  if (token) {
    // If token exists, set it in the Authorization header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // If no token, remove the Authorization header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
