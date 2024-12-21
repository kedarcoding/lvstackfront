<template>
    <div>
      <h3>Child Component</h3>
      <p>{{ userInfo.name }} - Age: {{ userInfo.age }}</p>
      
      <button @click="updateUser">Update User Info</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, watch } from 'vue';
  
  // Define props (Receiving data from parent)
  const props = defineProps({
    userInfo: {
      type: Object,
      required: true
    }
  });
  
  // Define emits (Emitting events to the parent)
  const emit = defineEmits(['updateUserInfo']);
  
  // Watch for changes in userInfo (prop)
  watch(() => props.userInfo, (newValue) => {
    console.log('User Info changed in child:', newValue);
  });
  
  // Method to emit event to update user info in parent
  const updateUser = () => {
    // Emitting updated info
    emit('updateUserInfo', { name: 'Alice', age: 28 });
  };
  </script>
  