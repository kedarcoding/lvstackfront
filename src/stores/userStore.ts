import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  // Get token from localStorage or initialize with null
  const token = ref<string | null>(localStorage.getItem('userToken'));

  const setToken = (newToken: string) => {
    token.value = newToken;
    localStorage.setItem('userToken', newToken); // Persist token to localStorage
  };

  return {
    token,
    setToken,
  };
});
