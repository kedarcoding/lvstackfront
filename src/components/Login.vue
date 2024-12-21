<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            required
            class="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            required
            class="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <input type="checkbox" id="remember" class="mr-2">
            <label for="remember" class="text-sm text-gray-600">Remember me</label>
          </div>
          <a href="#" class="text-sm text-blue-500 hover:underline">Forgot password?</a>
        </div>
        
        <button
          type="submit"
          class="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore'; // Correct import of the user store
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '', // To store any error messages
    };
  },
  methods: {
    async submitForm() {
      try {
        // Access the Pinia store here
        const userStore = useUserStore();
        
        // Make the login API call
        const response = await axios.post('http://localhost:8000/api/login', {
          email: this.email,
          password: this.password,
        });

        // Assuming the API response contains a token
        const newToken = response.data.token;

        // Set the token using the store method
        userStore.setToken(newToken);

        // Redirect after successful login
        this.$router.push('profile');
      } catch (error) {
        // Handle error and display an appropriate message
        if (error.response) {
          this.errorMessage = error.response.data.message || 'Login failed. Please check your credentials.';
        } else if (error.request) {
          this.errorMessage = 'No response from the server. Please check your network connection.';
        } else {
          this.errorMessage = 'An error occurred. Please try again.';
        }
      }
    },
  },
  mounted() {
    console.log('Component mounted');
  }
};
</script>

<style scoped>
/* Add any additional scoped styling if needed */
</style>
