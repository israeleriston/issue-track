// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root'
import router from './router'
import store from './store'
import '../node_modules/bulma-start/css/main.css'
import '../node_modules/bulmaswatch/flatly/bulmaswatch.min.css'

import Http from './support/http'

Vue.use(Http)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Root)
})
