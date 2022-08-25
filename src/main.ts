import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {START_LOCATION} from 'vue-router'
import {useRoute} from 'vue-router/composables'
import {Promised} from 'vue-promised'

console.log({Promised})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
