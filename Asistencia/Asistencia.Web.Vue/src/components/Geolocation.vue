<template>
    <div id="Geolocation" class="col-sm-12">
		<div class="col-sm-12">
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
    

    </div>
    
</template>

<script>

    // import marcador from './Marcador';

    export default {
        name: 'Geolocation',
        components: {
            // marcador
        },
        created (){
            
            debugger;
            // no soporta geolocalizacion
            if (!("geolocation" in navigator)) {
                this.errorStr = 'Geolocation is not available.';
                // return;
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
            appName: 'Nombre de otra aplicación';
            errorStr:null;
            return {
                location:null,
                gettingLocation: false,
                valor:'De componente Geolocalitation',
                
            }
        },
        mounted(){
            
        },
    };
</script>

<style>
    [v-cloak] {
    display: none;
    }
</style>
