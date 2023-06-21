import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuelidate from 'vuelidate'

Vue.use(VueAxios, axios);
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app')
