import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router';
import Marcador from './components/Marcador.vue';
import Geolocation from './components/Geolocation.vue';
// Install Bootstrap
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Install Vue Router
Vue.use(VueRouter);
// Install Vuelidate
Vue.use(Vuelidate);

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
