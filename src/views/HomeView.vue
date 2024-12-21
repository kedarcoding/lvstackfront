<template>
  <div class="users">
    <h2 class="text-xl font-bold mb-4 mx-20 text-blue-400">Users List</h2>
    <div class="grid grid-cols-4 gap-4 mx-20"> <!-- Apply grid on the container div -->
    <div v-for="user in users" :key="user.id" class="w-full hover:border-blue-200 overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer rounded-md border-2 border-gray-100 overflow-hidden shadow-lg">
      <img class="w-[100px] " src="/users/profile/user.png" alt="User image">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ user.name }}</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
</div>
</div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, watch, reactive } from 'vue';
import { api,get,post } from '@/utils/apiService';
// State for users
const users = ref([
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' }
]);

// Reactive state
const userStatus = reactive({
  isFetching: false,
  error: null
});

// Watcher for changes in the users array
watch(users, (newUsers, oldUsers) => {
  // console.log('Users changed', { newUsers, oldUsers });
});

// Hook: onBeforeMount
onBeforeMount(() => {
  // console.log('Before mount');
});

// Hook: onMounted
onMounted(() => {
  // console.log('Mounted');
  // Simulate fetching data or performing any side-effect after the component mounts
  setTimeout(() => {
    users.value.push({ id: 4, name: 'Bob Martin' });
  }, 2000);

  fetchJobProfile();
});


// Hook: onBeforeUpdate
onBeforeUpdate(() => {
  // console.log('Before update');
});

// Hook: onUpdated
onUpdated(() => {
  // console.log('Updated');
});

// Hook: onBeforeUnmount
onBeforeUnmount(() => {
  console.log('Before unmount');
});

// Hook: onUnmounted
onUnmounted(() => {
  // console.log('Unmounted');
});

// Optionally, you can have methods that interact with the lifecycle hooks

const fetchUsers = async () => {
  userStatus.isFetching = true;
  try {
    // Simulate an API call
    setTimeout(() => {
      users.value = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Bob Martin' }
      ];
      userStatus.isFetching = false;
    }, 1000);
  } catch (error) {
    userStatus.isFetching = false;
    userStatus.error = error;
  }
};

const fetchJobProfile= async()=>{
  get('/home')
  .then((data) => console.log('Data from GET:', data))
  .catch((error) => console.error('GET Error:', error));

}

// Example GET call

// Example POST call
// post('/some-endpoint', { key1: 'value1', key2: 'value2' })
//   .then((data) => console.log('Data from POST:', data))
//   .catch((error) => console.error('POST Error:', error));

fetchUsers();

</script>

<style scoped>
.users {
  padding: 1rem;
  background-color: #f9fafb;
}

.users ul {
  list-style-type: none;
  padding: 0;
}

.users li {
  padding: 0.5rem;
  background-color: #e5e7eb;
  margin-bottom: 0.5rem;
  border-radius: 5px;
}
</style>
