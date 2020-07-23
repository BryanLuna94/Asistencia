let appLayout = new Vue({
    el: '#appLeftSidebar',
    data: {

        objUser: {
            Name: Functions.getUserData().usuario.userFirstName,
        },
        objAppWeb: {
            Name: Constants.configWeb.NAME
        }

    },
    created: async function () {
        
    },
    mounted: async function () {
        this.$nextTick(() => {

        });
    },
    methods: {

        obtenerDatos: async function () {
            
        },

        close: function () {
            Functions.logout();
        },

    },
    computed: {
        FullFields: function () {
            return this.validateForm();
        }
    },
    watch: {

    }
});