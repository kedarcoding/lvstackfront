<template>
  <div class="max-w-lg mx-20 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-bold text-center mb-4">Name Management</h2>

    <!-- Form to input first name and last name -->
    <form @submit.prevent="addName" class="space-y-4">
      <div>
        <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
        <input 
          v-model="firstName" 
          type="text" 
          id="firstName" 
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter first name"
        />
      </div>

      <div>
        <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
        <input 
          v-model="lastName" 
          type="text" 
          id="lastName" 
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter last name"
        />
      </div>

      <div class="flex justify-center space-x-2">
        <button 
          type="submit" 
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Name
        </button>
      </div>
    </form>

    <!-- List of names -->
    <div class="mt-6">
      <h3 class="text-lg font-semibold">Name List</h3>
      <ul class="space-y-2 mt-4">
        <li v-for="(name, index) in names" :key="index" class="flex justify-between items-center p-2 border rounded-md">
          <span>{{ name.firstName }} {{ name.lastName }}</span>
          <button 
            @click="removeName(index)" 
            class="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      names: [],
    };
  },
  methods: {
    // Add the name to the names array
    addName() {
      if (this.firstName && this.lastName) {
        this.names.push({
          firstName: this.firstName,
          lastName: this.lastName,
        });
        // Clear input fields after adding name
        this.firstName = '';
        this.lastName = '';
      }
    },

    // Remove name by index
    removeName(index) {
      this.names.splice(index, 1);
    }
  }
};
</script>

<style scoped>
/* Additional styling, if necessary */
</style>
