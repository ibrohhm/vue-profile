import { createApp } from "vue";
import Vuex from "vuex";
import App from './App.vue'
import router from './router';
import './css/tailwind.css'
import './css/main.css'
import profileStore from './stores/profile'

const store = new Vuex.Store({
  modules: {
    profile: profileStore,
  }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app');