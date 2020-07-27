<template>
    <div id="app">
        <Home msg="Logo Manoooooo!" />

        <router-view>
      
        </router-view>
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home
        }
    };
</script>

<style>
</style>

