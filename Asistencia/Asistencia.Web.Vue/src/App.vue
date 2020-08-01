<template>
    <div id="app">

        <marcador>
            
        </marcador>

        <!-- <router-view>
      
        </router-view> -->

    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Geolocation from './components/Geolocation.vue';
    import Marcador from './components/Marcador.vue';

    export default {
        name: 'app',
        components: {
            Home,
            Geolocation,
            Marcador
        }
    };
</script>

<style>
</style>

