import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router';
import Marcador from './components/Marcador.vue';
// Install Bootstrap
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Install Vue Router
Vue.use(VueRouter);
// Install Vuelidate
Vue.use(Vuelidate);

Vue.config.productionTip = true;

const routes = [
    {path:'/marcador', component:Marcador},
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
