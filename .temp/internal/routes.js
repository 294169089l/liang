/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\86191\\Desktop\\个人博客\\liang\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-5fc33dca",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5fc33dca").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-3ffb6f44",
    path: "/blodsMds/about1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3ffb6f44").then(next)
    },
  },
  {
    name: "v-c7921c26",
    path: "/arithmetic/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c7921c26").then(next)
    },
  },
  {
    path: "/arithmetic/index.html",
    redirect: "/arithmetic/"
  },
  {
    name: "v-cead30c4",
    path: "/blodsMds/about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-cead30c4").then(next)
    },
  },
  {
    name: "v-4b3cc4c3",
    path: "/dataStructure/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4b3cc4c3").then(next)
    },
  },
  {
    path: "/dataStructure/index.html",
    redirect: "/dataStructure/"
  },
  {
    name: "v-0c96e5da",
    path: "/interview/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0c96e5da").then(next)
    },
  },
  {
    path: "/interview/index.html",
    redirect: "/interview/"
  },
  {
    name: "v-0402a0ad",
    path: "/web/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0402a0ad").then(next)
    },
  },
  {
    path: "/web/index.html",
    redirect: "/web/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]