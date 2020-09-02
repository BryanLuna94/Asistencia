<template>
  <div id="Geolocation" class="col-sm-12">
    <!-- <div class="col-sm-12">
      <div v-if="errorStr">
        Sorry, but the following error occurred: {{ errorStr }}
      </div>

      <div v-if="gettingLocation">
        <i>Obteniendo su ubicación...</i>
      </div>

      <div v-if="location">
        Su ubicación es: Latitud: {{ location.coords.latitude }}, Longitud:
        {{ location.coords.longitude }}
      </div>
    </div> -->

    <div class="block-center mt-4 wd-xl">
      <!-- START card-->
      <div class="card card-flat">
        <div class="card-header text-center bg-dark">
          <a href="#">
            <img class="block-center rounded" src="img/logo.png" alt="Image" />
          </a>
        </div>
        <div class="card-body">
          <p class="text-center py-2">GEOLOCALIZACION</p>
          <form class="mb-3" data-vv-scope="geolocalizacion">
            <div class="form-group">
              <div class="input-group with-focus">
                <select
                  :class="{ 'form-control': true, 'is-invalid': '' }"
                  v-model="selectedEmpresa"
                >
                  <option value="">Seleccionar Empresa</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group with-focus">
                <select
                  :class="{ 'form-control': true, 'is-invalid': '' }"
                  v-model="selectedSucursal"
                  :disabled="sucursales.length == 0"
                >
                  <option selected="">Seleccionar Sucursal</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group with-focus">
                <select
                  :class="{ 'form-control': true, 'is-invalid': '' }"
                  v-model="selectedArea"
                  :disabled="areas.length == 0"
                >
                  <option selected="">Seleccionar Area</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group with-focus">
                <select
                  :class="{ 'form-control': true, 'is-invalid': '' }"
                  v-model="selectedSubArea"
                  :disabled="subareas.length == 0"
                >
                  <option selected="">Seleccionar Sub Area</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group with-focus">
                <select
                  :class="{ 'form-control': true, 'is-invalid': '' }"
                  v-model="selectedPuntodeVenta"
                  :disabled="puntodeventas.length == 0"
                >
                  <option selected="">Punto de Venta</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- END card-->
      <div class="p-3 text-center">
        <span class="mr-2">&copy;</span>
        <span>2020</span>
        <span class="mr-2">-</span>
        <span>Asistencia v1.0</span>
        <br />
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Geolocation",
  components: {},
  created() {
    // no soporta geolocalizacion
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      // return;
    }

    this.gettingLocation = true;

    //get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;

        this.location = pos;
      },
      (err) => {
        this.gettingLocation = false;

        this.errorStr = err.message;
      }
    );
  },
  data() {
    appName: "Nombre de otra aplicación";
    errorStr: null;
    return {
      location: null,
      gettingLocation: false,
      valor: "De componente Geolocalitation",
      errorStr: null,
      selectedEmpresa: "",
      selectedSucursal: "",
      selectedArea: "",
      selectedSubArea: "",
      selectedPuntodeVenta: "",

      empresas: [],
      sucursales: [],
      areas: [],
      subareas: [],
      puntodeventas: [],
    };
  },
  methods: {},
  watch: {
    selectedEmpresa: function() {
      this.empresas = [];
      this.sucursales = [];
      this.areas = [];
      this.subareas = [];
      this.selectedSucursal = "";
      this.selectedArea = "";
      this.selectedSubArea = "";
      this.selectedPuntodeVenta = "";

      if (this.selectedEmpresa.length > 0) {
          debugger;
          //Obtiene Sucursales
          this.sucursales = [];
      }
    },
    selectedSucursal: function() {},
    selectedArea: function() {},
    selectedSubArea: function() {},
  },
  mounted() {},
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
