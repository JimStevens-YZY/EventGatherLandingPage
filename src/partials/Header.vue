<template>
  <header class="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out" :class="{ 'bg-white backdrop-blur-sm shadow-lg': !top }">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link to="/EventGatherLandingPage" class="block" aria-label="Cruip">
<!--            <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                  <stop stop-color="#4FD1C5" offset="0%" />
                  <stop stop-color="#81E6D9" offset="25.871%" />
                  <stop stop-color="#338CF5" offset="100%" />
                </radialGradient>
              </defs>
              <rect width="32" height="32" rx="16" fill="url(#header-logo)" fill-rule="nonzero" />
            </svg>-->
            <img class="shadow-2xl" src="../images/logo.png" width="40" height="40" alt="Logo" />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">

          <!-- Desktop menu links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <router-link to="/EventGatherLandingPage" style="font-weight: 500" class="text-gray-900 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">EventGather</router-link>
            </li>
            <li>
              <router-link to="/EventGatherLandingPage" class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Home</router-link>
            </li>
            <li>
              <router-link to="/EventGatherLandingPage" class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Features</router-link>
            </li>
            <li>
              <router-link to="/EventGatherLandingPage" class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About us</router-link>
            </li>
            <li>
              <router-link to="/EventGatherLandingPage/support" class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Support</router-link>
            </li>
            <li>
              <a target="_blank" href="https://github.com/JimStevens-YZY/EventGather/releases" class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Download</a>
            </li>
            <!-- 1st level: hover -->
<!--            <Dropdown title="Resources">
              <li>
                <router-link to="/documentation" class="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Documentation</router-link>
              </li>
              <li>
                <router-link to="/support" class="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Support center</router-link>
              </li>
              <li>
                <router-link to="/404" class="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">404</router-link>
              </li>
            </Dropdown>-->
          </ul>

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <router-link to="/EventGatherLandingPage/signin" class="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</router-link>
            </li>
            <li>
              <router-link to="/EventGatherLandingPage/signup" class="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3" style="border-radius: 30px">
                <span>Sign up</span>
                <svg class="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero" />
                </svg>
              </router-link>
            </li>
          </ul>

        </nav>

        <!-- Mobile menu -->
        <div class="flex md:hidden">

          <!-- Hamburger button -->
          <button class="hamburger" ref="hamburger" :class="{ active: mobileNavOpen }" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen" @click="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg class="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <nav
              id="mobile-nav"
              ref="mobileNav"
              v-show="mobileNavOpen"
              class="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
            >
              <ul class="px-5 py-2">
                <li>
                  <router-link to="/pricing" class="flex text-gray-600 hover:text-gray-900 py-2">Pricing</router-link>
                </li>
                <li>
                  <router-link to="/about" class="flex text-gray-600 hover:text-gray-900 py-2">About us</router-link>
                </li>
                <li>
                  <router-link to="/tutorials" class="flex text-gray-600 hover:text-gray-900 py-2">Tutorials</router-link>
                </li>
                <li>
                  <router-link to="/blog" class="flex text-gray-600 hover:text-gray-900 py-2">Blog</router-link>
                </li>
<!--                <li class="py-2 my-2 border-t border-b border-gray-200">
                  <span class="flex text-gray-600 hover:text-gray-900 py-2">Resources</span>
                  <ul class="pl-4">
                    <li>
                      <router-link to="/documentation" class="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Documentation</router-link>
                    </li>
                    <li>
                      <router-link to="/support" class="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Support center</router-link>
                    </li>
                    <li>
                      <router-link to="/404" class="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">404</router-link>
                    </li>
                  </ul>
                </li>-->
                <li>
                  <router-link to="/signin" class="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center">Sign in</router-link>
                </li>
                <li>
                  <router-link to="/signup" class="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2">
                    <span>Sign up</span>
                    <svg class="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fill-rule="nonzero" />
                    </svg>
                  </router-link>
                </li>
              </ul>
            </nav>
          </transition>

        </div>

      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from './../utils/Dropdown.vue'

export default {
  name: 'Header',
  components: {
    Dropdown
  },
  data: function () {
    return {
      mobileNavOpen: false,
      top: true
    }
  },
  methods: {
    clickOutside(e) {
      if (!this.mobileNavOpen || this.$refs.mobileNav.contains(e.target) || this.$refs.hamburger.contains(e.target)) return
      this.mobileNavOpen = false
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return
      this.mobileNavOpen = false
    },
    handleScroll() {
      this.top = window.pageYOffset > 10 ? false : true
    }
  },
  mounted() {
    document.addEventListener('click', this.clickOutside)
    document.addEventListener('keydown', this.keyPress)
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickOutside)
    document.removeEventListener('keydown', this.keyPress)
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
