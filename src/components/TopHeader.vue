<template>
   <header class="bg-pink-300 text-white sticky top-0 shadow-lg z-50 w-full">
      <div class="max-w-7xl mx-auto flex items-center justify-between p-4">
    <!-- Logo or Title -->
    <div class="">
    <div class="text-center">
      <a href="/" class="text-green-600 text-xl font-bold hover:text-blue-500">LV Stack</a>
    </div>
    <div class="text-2xl font-bold text-blue-600">
    <!-- Each character gets an animation with increasing delay -->
    <span class="char animate-slideInOut" style="animation-delay: 0s;">K</span>
    <span class="char animate-slideInOut" style="animation-delay: 0.1s;">e</span>
    <span class="char animate-slideInOut" style="animation-delay: 0.2s;">d</span>
    <span class="char animate-slideInOut" style="animation-delay: 0.3s;">a</span>
    <span class="char animate-slideInOut" style="animation-delay: 0.4s;">r</span>
    <span class="char animate-slideInOut" style="animation-delay: 0.5s;"> </span>
    <span class="char animate-slideInOut pl-2" style="animation-delay: 0.6s;">C</span>
    <span class="char animate-slideInOut" style="animation-delay: 0.7s;">o</span>
    <span class="char animate-slideInOut" style="animation-delay: 0.8s;">d</span>
    <span class="char animate-slideInOut" style="animation-delay: 0.9s;">i</span>
    <span class="char animate-slideInOut" style="animation-delay: 1s;">n</span>
    <span class="char animate-slideInOut" style="animation-delay: 1.1s;">g</span>
    </div>
    </div>
    
    <!-- Navigation Links -->
    <nav class="hidden md:flex space-x-8">
      <ul class="flex space-x-8">
            <li>
              <router-link to="/" class="hover:text-voilets-700">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:ext-blue-700">About</router-link>
            </li>
            <li v-if="isAuthenticated">
              <router-link to="/profile" class="hover:text-gray-200">Profile</router-link>
            </li>
            <li v-if="!isAuthenticated">
              <router-link to="/login" class="hover:text-gray-200">Login</router-link>
            </li>
            <li v-else>
              <button type="button"  @click="handleLogout" class="hover:text-gray-200">Logout</button>
            </li>
          </ul>
    </nav>

    <!-- Profile Section -->
    <div class="flex items-center space-x-4">
      <!-- Notifications Icon -->
      <button class="relative text-gray-600 hover:text-blue-500 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.158c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <!-- Profile Photo -->
      <div class="relative">
        <button class="block w-10 h-10 rounded-full overflow-hidden focus:outline-none">
          <img src="/public/users/profile/user.png" alt="Profile Photo" class="w-full h-full object-cover">
        </button>
        <!-- Dropdown Menu -->
        <div class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
          <a href="#profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
          <a href="#settings" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
          <a href="#logout" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
        </div>
      </div>
    </div>
  </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  
  const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]
  
  const mobileMenuOpen = ref(false)
  </script>