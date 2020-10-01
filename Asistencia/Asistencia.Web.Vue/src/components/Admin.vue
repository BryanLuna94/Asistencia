<template>
    <div class="wrapper">
        

        <!-- top navbar-->
        <Header />

        <!-- sidebar-->
        <Sidebar />

        <!-- offsidebar-->
        <Offsidebar />

        <section class="section-container">
            <!-- Page content-->
            <router-view/>
        </section>




    </div>
</template>

<script>

    import functions from "@/utility/functions";
    import Vue from 'vue';
    import Header from './Header'
    import Sidebar from './Sidebar'
    import Offsidebar from './Offsidebar'
    import Footer from './Footer'
    import ContentWrapper from './ContentWrapper'

    Vue.component('ContentWrapper', ContentWrapper)

    export default {
        name: 'Admin',
        components: {
            Header,
            Sidebar,
            Offsidebar,
            Footer
        },
        created(){
            
        },
        mounted(){
            // functions.getUserData();
        },
        props: {
            msg: String
        },
        data() {
            return {
            titulo: "admin",
            
            };
        },
        methods:{
            logout: async function(){
                functions.logout();
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

