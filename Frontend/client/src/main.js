import Vue from 'vue'

Vue.config.productionTip = false

// importar vue-router
import axios from 'axios'
import VueAxios from 'vue-axios'

// importar vuelidate
import Vuelidate from 'vuelidate'

// importar vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// importar hello-world
import Login from './components/Login.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  { path: '/', component: HelloWorld},
  { path: '/login', component: Login }
]

Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(Vuetify);

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes.find(route => route.path === this.currentRoute)
      return matchingView ? matchingView.component : Login
    }
  },
  render (h) { return h(this.ViewComponent) }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})