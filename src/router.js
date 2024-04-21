import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Tutorials from './pages/Tutorials.vue'
import Pricing from './pages/Pricing.vue'
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import About from './pages/About.vue'
import Documentation from './pages/Documentation.vue'
import Support from './pages/Support.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'
import PageNotFound from './pages/PageNotFound.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/EventGatherLandingPage',
      component: Home
    },
    {
      path: '/EventGatherLandingPage/tutorials',
      component: Tutorials
    },
    {
      path: '/EventGatherLandingPage/pricing',
      component: Pricing
    },
    {
      path: '/EventGatherLandingPage/blog',
      component: Blog
    },
    {
      path: '/EventGatherLandingPage/blog-post',
      component: BlogPost
    },
    {
      path: '/EventGatherLandingPage/about',
      component: About
    },
    {
      path: '/EventGatherLandingPage/documentation',
      component: Documentation
    },
    {
      path: '/EventGatherLandingPage/support',
      component: Support
    },
    {
      path: '/EventGatherLandingPage/signin',
      component: SignIn
    },
    {
      path: '/EventGatherLandingPage/signup',
      component: SignUp
    },
    {
      path: '/EventGatherLandingPage/reset-password',
      component: ResetPassword
    },
    {
      path: '/EventGatherLandingPage/:pathMatch(.*)*',
      component: PageNotFound
    }
  ]
})

export default router
