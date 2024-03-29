import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import Vuelidate from 'vuelidate';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';
import VueToast from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import VuePaginate from 'vue-paginate'; 

import Marcador from './components/Marcador.vue';
import Geolocation from './components/Geolocation.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Admin from './components/Admin.vue';
import Recover from './components/Recover.vue';


import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Offsidebar from './components/Offsidebar.vue';

import Turno from './components/Turno.vue';
import Empleado from './components/Empleado.vue';
import Usuario from './components/Usuario.vue';
import MarcadorMant from './components/MarcadorMant.vue';
import SucursalConfiguracionMant from './components/SucursalConfiguracionMant.vue';

// Font Awesome
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

// Simple line icons
import 'simple-line-icons/css/simple-line-icons.css';

import store from './store'

// Animate.CSS
import 'animate.css/animate.min.css';

// Install Bootstrap
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Install Vue Router
Vue.use(VueRouter);
// Install Vuelidate
Vue.use(Vuelidate);
// Install VueSweetalert2
Vue.use(VueSweetalert2);
// Install Vue Toast
Vue.use(VueToast);
// let instance = Vue.$toast.open('You did it!');
// instance.close();
// Vue.$toast.clear();
// Install Vuex
Vue.use(Vuex);
// Install Vue Paginate
Vue.use(VuePaginate);

Vue.config.productionTip = true;

// Registra una directiva personalizada global llamada `v-focus`
Vue.directive('focus', {
    // Cuando el elemento enlazado se inserta en el DOM...
    inserted: function (el) {
      // Enfoca el elemento
      el.focus()
    }
  })

  

const routes = [
    {path:'/marcador', component:Marcador},
    {path:'/geolocation', component:Geolocation},
    {path:'/login', component:Login},
    {path:'/home', component:Home},
    {
      path:'/admin', 
      component:Admin,
      children:[
        {
          path:'/turno', 
          component:Turno
        },
        {
          path:'/empleado', 
          component:Empleado
        },
        {
          path:'/usuario', 
          component:Usuario
        },
        {
          path:'/marcadorMant', 
          component:MarcadorMant
        },
        {
          path:'/sucursalConfiguracionMant', 
          component:SucursalConfiguracionMant
        }
      ]
    },
    {path:'/recover', component:Recover},
    {path:'/header', component:Header},
    {path:'/sidebar', component:Sidebar},
    {path:'/offsidebar', component:Offsidebar},

    

    {path:'/', redirect:'/login'},
]

const router = new VueRouter({
	routes, 
	mode: 'history'
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
