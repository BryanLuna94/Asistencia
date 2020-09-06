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
          <p class="text-center py-2">CONFIGURAR LOCALIZACION MANUAL</p>

          <div class="card text-white bg-danger mb-3">
            <div class="card-body">
              <h5 class="card-title">
                Sorry, but the following error occurred:
              </h5>
              <p class="card-text">{{ errorStr }}</p>
            </div>
          </div>

          <form class="mb-3" data-vv-scope="geolocalizacion">
            <div class="form-group">
              <div class="input-group with-focus">
                <select
                  :class="{ 'form-control': true, 'is-invalid': '' }"
                  v-model="selectedEmpresa" ref="selectedEmpresa"
                >
                  <option value="">Seleccionar Empresa</option>
                  <option
                    v-for="empresa in empresas"
                    :value="empresa.com_codigo"
                    v-bind:key="empresa.com_codigo"
                  >
                    {{ empresa.com_descripcion }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group with-focus">
                <select
                  :class="{ 'form-control': true, 'is-invalid': '' }"
                  v-model="selectedSucursal" ref="selectedSucursal"
                  :disabled="sucursales.length == 0"
                >
                  <option value="">Seleccionar Sucursal</option>
                  <option
                    v-for="sucursal in sucursales"
                    :value="sucursal.cod_ofi"
                    v-bind:key="sucursal.cod_ofi"
                  >
                    {{ sucursal.nom_ofi }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group with-focus">
                <select
                  :class="{ 'form-control': true, 'is-invalid': '' }"
                  v-model="selectedArea"
                  :disabled="areas.length == 0" ref="selectedArea"
                >
                  <option value="">Seleccionar Area</option>
                  <option
                    v-for="area in areas"
                    :value="area.are_codigo"
                    v-bind:key="area.are_codigo"
                  >
                    {{ area.are_descripcion }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group with-focus">
                <select
                  :class="{ 'form-control': true, 'is-invalid': '' }"
                  v-model="selectedSubArea"
                  :disabled="subareas.length == 0" ref="selectedSubArea"
                >
                  <option value="">Seleccionar Sub Area</option>
                  <option
                    v-for="subarea in subareas"
                    :value="subarea.aresub_codigo"
                  >
                    {{ subarea.aresub_descripcion }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group with-focus">
                <select
                  :class="{ 'form-control': true, 'is-invalid': '' }"
                  v-model="selectedPuntodeVenta"
                  :disabled="puntodeventas.length == 0" ref="selectedPuntodeVenta"
                >
                  <option value="">Punto de Venta</option>
                  <option
                    v-for="puntodeventa in puntodeventas"
                    :value="puntodeventa.cod_oficina"
                    v-bind:key="puntodeventa.cod_oficina"
                  >
                    {{ puntodeventa.nom_oficina }}
                  </option>
                </select>
              </div>
            </div>
            <button
              class="btn btn-block btn-primary mt-3"
              type="submit"
              v-on:click.prevent="guardarLocalizacionManual()"
              ref="bntSubmit"
            >
              Guardar
            </button>
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
import constants from "@/utility/constants";
import functions from "@/utility/functions";
import base from "@/utility/base-public";

export default {
  name: "Geolocation",
  components: {},
  created() {
    this.obtenerEmpresas();

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
  mounted() {},
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

  methods: {
    obtenerEmpresas: async function() {
      let _this = this;

      var url = functions.getUrlApiAsistencia(
        constants.configUrlApiAsistencia.EMPRESA_LIST
      );
      await base.sendGet(url).then(function(data) {
        if (data.data.isCorrect) {
          _this.empresas = data.data.value.listEmpresa
            ? data.data.value.listEmpresa
            : [];
        }
      });
    },
    obtenerSucursales: async function(item) {
      let _this = this;
      let data = {
        filterSucursal: {
          com_codigo: item,
        },
      };
      var valor;
      var url = functions.getUrlApiAsistencia(
        constants.configUrlApiAsistencia.SUCURSAL_LIST
      );
      await base.sendPost(url, JSON.stringify(data), true).then(function(data) {
        if (data !== undefined) {
          _this.sucursales = data.data.value.listSucursal
            ? data.data.value.listSucursal
            : [];
        } else {
          // _this.alertMarcacionError();
        }
      });
    },

    obtenerAreas: async function(item) {
      let _this = this;
      let data = {
        filterArea: {
          com_codigo: item,
        },
      };
      var valor;
      var url = functions.getUrlApiAsistencia(
        constants.configUrlApiAsistencia.AREA_LIST
      );
      await base.sendPost(url, JSON.stringify(data), true).then(function(data) {
        if (data !== undefined) {
          _this.areas = data.data.value.listArea
            ? data.data.value.listArea
            : [];
        } else {
          // _this.alertMarcacionError();
        }
      });
    },

    obtenerSubAreas: async function(item) {
      let _this = this;
      let data = {
        filterSubArea: {
          com_codigo: item,
        },
      };
      var valor;
      var url = functions.getUrlApiAsistencia(
        constants.configUrlApiAsistencia.SUBAREA_LIST
      );
      await base.sendPost(url, JSON.stringify(data), true).then(function(data) {
        if (data !== undefined) {
          _this.subareas = data.data.value.listSubArea
            ? data.data.value.listSubArea
            : [];
        } else {
          // _this.alertMarcacionError();
        }
      });
    },

    obtenerPuntosdeVenta: async function(item) {
      let _this = this;
      let data = {
        filterPuntodeVenta: {
          com_codigo: item,
        },
      };
      var valor;
      var url = functions.getUrlApiAsistencia(
        constants.configUrlApiAsistencia.PUNTODEVENTA_LIST
      );
      await base.sendPost(url, JSON.stringify(data), true).then(function(data) {
        if (data !== undefined) {
          _this.puntodeventas = data.data.value.listPuntodeVenta
            ? data.data.value.listPuntodeVenta
            : [];
        } else {
          // _this.alertMarcacionError();
        }
      });
    },

    guardarLocalizacionManual: async function() {
      if (this.validateForm()) {
        var data = [
          this.selectedEmpresa,
          this.selectedSucursal,
          this.selectedArea,
          this.selectedSubArea,
          this.selectedPuntodeVenta,
        ];

        functions.setSesion(
          constants.configSession.LOCALIZACION_MANUAL,
          JSON.stringify(data)
        );

        window.location.href = constants.configWebAsistencia.URL_BASE_MARCADOR;
      } else {
        this.SetFocus();
      }
    },

    validateForm: function() {
      return this.selectedEmpresa &&
        this.selectedSucursal &&
        this.selectedArea &&
        this.selectedSubArea &&
        this.selectedPuntodeVenta
        ? true
        : false;
    },
    SetFocus: function() {
      if (!this.selectedEmpresa) {
        this.$refs.selectedEmpresa.focus();
      } else if (!this.selectedSucursal) {
        this.$refs.selectedSucursal.focus();
      } else if (!this.selectedArea) {
        this.$refs.selectedArea.focus();
      } else if (!this.selectedSubArea) {
        this.$refs.selectedSubArea.focus();
      } else if (!this.selectedPuntodeVenta) {
        this.$refs.selectedPuntodeVenta.focus();
      } else {
        this.$refs.bntSubmit.focus();
      }
    },
  },
  watch: {
    selectedEmpresa: function() {
      this.sucursales = [];
      this.areas = [];
      this.subareas = [];
      this.puntodeventas = [];

      this.selectedSucursal = "";
      this.selectedArea = "";
      this.selectedSubArea = "";
      this.selectedPuntodeVenta = "";

      if (this.selectedEmpresa.length > 0) {
        let _this = this;
        //Obtiene Sucursales
        _this.obtenerSucursales(this.selectedEmpresa);
      }
    },
    selectedSucursal: function() {
      this.areas = [];
      this.subareas = [];
      this.puntodeventas = [];

      this.selectedArea = "";
      this.selectedSubArea = "";
      this.selectedPuntodeVenta = "";

      if (this.selectedSucursal.length > 0) {
        let _this = this;
        //Obtiene Areas
        _this.obtenerAreas(this.selectedEmpresa);
      }
    },
    selectedArea: function() {
      this.subareas = [];
      this.puntodeventas = [];
      this.selectedSubArea = "";
      this.selectedPuntodeVenta = "";
      if (this.selectedArea.length > 0) {
        let _this = this;
        //Obtiene Areas
        _this.obtenerSubAreas(this.selectedEmpresa);
      }
    },
    selectedSubArea: function() {
      this.puntodeventas = [];
      this.selectedPuntodeVenta = "";
      if (this.selectedSubArea.length > 0) {
        let _this = this;
        //Obtiene Areas
        _this.obtenerPuntosdeVenta(this.selectedEmpresa);
      }
    },
  },
  mounted() {},
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
