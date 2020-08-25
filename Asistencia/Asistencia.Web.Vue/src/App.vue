<template>
   

        <router-view>
      
        </router-view>

    
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

<style lang="scss">
    @import '@/styles/bootstrap.scss';
    @import '@/styles/app.scss';

</style>

