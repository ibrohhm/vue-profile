import { createApp } from "vue";
import Vuex from "vuex";
import App from './App.vue'
import router from './router';
import './css/tailwind.css'
import './css/main.css'
import authStore from './stores/auth'
import profileStore from './stores/profile'
import FontAwesomeIcon from './plugins/fontawesome.js'

const store = new Vuex.Store({
  modules: {
    auth: authStore,
    profile: profileStore,
  }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');