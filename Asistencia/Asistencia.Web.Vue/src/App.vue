<template>
    <div id="app">
        <Home msg="Logo Manoooooo!" />
        <geolocation>
            
        </geolocation>
        <router-view>
      
        </router-view>

    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Geolocation from './components/Geolocation.vue';

    export default {
        name: 'app',
        components: {
            Home,
            Geolocation
        }
    };
</script>

<style>
</style>

