import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';

import Marcador from './components/Marcador.vue';
import Geolocation from './components/Geolocation.vue';
import Login from './components/Login.vue';
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

Vue.config.productionTip = true;

// Registra una directiva personalizada global llamada `v-focus`
Vue.directive('focus', {
    // Cuando el elemento enlazado se inserta en el DOM...
    inserted: function (el) {
      // Enfoca el elemento
      el.focus()
    }
  })

  // Vue.prototype.$appName = 'Mi aplicación'
  
  // Vue.mixin({
  //     data: function() {
  //         return {
  //             flagLocation:false
  //         }
  //     }
  // })


const routes = [
    {path:'/marcador', component:Marcador},
    {path:'/geolocation', component:Geolocation},
    {path:'/login', component:Login},
    {path:'/', component:App},
]

const router = new VueRouter({
	routes, 
	mode: 'history'
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
