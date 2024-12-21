import axios from 'axios';

// Function to get the token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('userToken'); // Retrieve the token from localStorage
};

// Function to set the authentication token in axios headers
const setAuthToken = (token: string | null) => {
  if (token) {
    // Dynamically set the Authorization header if token exists
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // If no token, delete the Authorization header
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Initialize axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Replace with your actual backend URL
  // timeout: 10000, // Set a timeout for all requests (10 seconds)
});

// Request interceptor to add the token to headers or redirect if not found
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken(); // Get token from localStorage
    if (token) {
      config.headers['Accept'] = 'application/json';
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      // If the token doesn't exist, handle the redirect outside the interceptor
      setTimeout(() => {
        window.location.href = '/login'; // Redirect to login manually
      }, 0);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle any errors
  }
);

// General method for making GET requests
const get = async (url: string, params: object = {}) => {
  console.log('Calling GET request:', url, params); // Logging for debugging
  try {
    const response = await api.get(url, { params });
    console.log('GET Response:', response.data); // Log the response data
    return response.data; // Return the response data directly
  } catch (error) {
    handleError(error);
    throw error; // Re-throw the error to be handled in the component
  }
};

// General method for making POST requests
const post = async (url: string, body: object = {}) => {
  console.log('Calling POST request:', url, body); // Logging for debugging
  try {
    const response = await api.post(url, body);
    console.log('POST Response:', response.data); // Log the response data
    return response.data; // Return the response data directly
  } catch (error) {
    handleError(error);
    throw error; // Re-throw the error to be handled in the component
  }
};

// Enhanced error handling function
const handleError = (error: any) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error('API error response:', error.response.data);
    console.error('API error status:', error.response.status);
  } else if (error.request) {
    // Request was made but no response received
    console.error('API error request:', error.request);
    alert('Network error: No response received from the server. Please try again later.');
  } else {
    // Something happened in setting up the request
    console.error('API error message:', error.message);
    alert('An error occurred: ' + error.message);
  }
};

// Exporting the common API methods and token setter
export { api, get, post, setAuthToken };
