<template>
    <div id="Geolocation" v-cloak>
        <div v-if="errorStr">
            Sorry, but the following error
            occurred: {{errorStr}}
        </div>
        
        <div v-if="gettingLocation">
            <i>Obteniendo su ubicación...</i>
        </div>
        
        <div v-if="location">
            Su ubicación es: Latitud: {{ location.coords.latitude }}, Longitud: {{ location.coords.longitude}}
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Geolocation',
        created (){
            // no soporta geolocalizacion
            if (!("geolocation" in navigator)) {
                this.errorStr = 'Geolocation is not available.';
                return;
            }

            this.gettingLocation = true;

            //get position
            navigator.geolocation.getCurrentPosition(pos=>{
                this.gettingLocation = false;
                this.location = pos;
            },err => {
                this.gettingLocation = false;
                this.errorStr = err.message;
            })
        },
        data(){
            return {
                location:null,
                gettingLocation: false,
                errorStr:null
            }
        }
    };
</script>

<style>
    [v-cloak] {
    display: none;
    }
</style>
