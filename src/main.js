// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import './styles/element-variables.scss'
import store from './store'
import i18n from './lang' // internationalization
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import Cookies from 'js-cookie'

import '@/styles/index.scss' // global css
import * as filters from './filters' // global filters

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'small', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
