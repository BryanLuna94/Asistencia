<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title"></div>
      <div class="text-sm">
        <div class="col-sm-12 col-md-6">
          EMP CODIGO
        </div>
        <div class="col-sm-12 col-md-6">
          <div id="datatable1_filter">
            <label>
              <input
                type="search"
                class="form-control form-control-sm"
                placeholder=""
                aria-controls="datatable1"
                v-model="objMarcador.emp_codigo"
              />
            </label>
            <button
              style="margin-left:10px;"
              class="btn btn-primary btn-sm mr-1"
              type="button"
              v-on:click.prevent="obtenerMarcadores(objMarcador.emp_codigo)"
            >
              <em class="fa fa-search"></em>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card-body table-responsive">
      <table class="table table-striped my-4 w-100" id="datatable1">
        <thead>
          <tr>
            <th>EMP CODIGO</th>
            <th>FECHA | HORA INGRESO</th>
            <th>FECHA | HORA SALIDA</th>
            <th>LONGITUD</th>
            <th>LATITUD</th>
            <th>ACCION</th>
          </tr>
        </thead>

        <paginate
          name="list.Marcador"
          :list="list.Marcador"
          :per="10"
          tag="tbody"
          ref="listMarcador"
        >
          <tr
            v-for="marcador in paginated('list.Marcador')"
            v-bind:key="marcador.id"
          >
            <td>{{ marcador.emp_codigo }}</td>
            <td>{{ marcador.fecha_Hora_Inicial }}</td>
            <td>{{ marcador.fecha_Hora_Final }}</td>
            <td>{{ marcador.longitud }}</td>
            <td>{{ marcador.latitud }}</td>
            <td>
              <button class="btn mr-1 mb-1 btn-outline-info" type="button"  @click="obtenerId(marcador.id,modalShow)">Editar</button>
            </td>
          </tr>
        </paginate>
      </table>

      <paginate-links
        for="list.Marcador"
        :classes="{ ul: 'pagination', li: 'page-item', a: 'page-link' }"
        style="cursor:pointer;"
      ></paginate-links>
    </div>

    
        <b-modal id="myModal" v-model="modalShow" v-bind:hide-footer="true" title="Actualizar Fecha">
    
            <div class="modal-body" style="padding-top:5px;">
                <form class="form-horizontal">
                    <div class="form-group m-b-0">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-12">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0">Fecha Final Manual</label>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
                                    <input class="form-control" type="text" placeholder="Fecha Final" />
                                </div>
                            </div>
                        </div>
                    </div>


                </form>
            </div>


                
            <div class="modal-footer">
                <button class="btn btn-primary waves-effect text-left" ref="btnSave" @click="actualizarMarcador()">
                    <span class="fa fa-save fa-fw"></span>Save
                </button>
                <button class="btn btn-secondary" @click="close(1)">
                    <span class="glyphicon glyphicon-log-out fa-fw"></span>Cancel
                </button>
            </div>
    
        </b-modal>
    

  </div>

    


</template>
<script>
import moment from "moment";
import axios from "axios";
import constants from "@/utility/constants";
import functions from "@/utility/functions";
import base from "@/utility/base-public";

import Notifications from 'vue-notification'
import Vue from 'vue'
Vue.use(Notifications)

export default {
  name: "MarcadorList",
  created() {
    this.obtenerMarcadores("");
  },
  data() {
    return {
      modalShow: false,
      value: 0,
      objMarcador: {
        id: 0,
        emp_codigo: "",
        fecha_hora_marcador: "",
        longitud: 0,
        latitud: 0,
      },
      list: {
        Marcador: [],
      },
      paginate: ["list.Marcador"],
    };
  },
  methods: {
    obtenerId(idMarcador, modalShow){
        let _this = this;
        _this.modalShow = !modalShow
        _this.objMarcador.id = idMarcador;
    },

    obtenerMarcadores: async function(item) {
      let _this = this;
      let data = {
        filterMarcador: {
          emp_codigo: item,
        },
      };
      var valor;
      var url = functions.getUrlApiAsistencia(
        constants.configUrlApiAsistencia.MARCADOR_LIST
      );
      await base.sendPost(url, JSON.stringify(data), true).then(function(data) {
        if (data !== undefined) {
          _this.list.Marcador = data.data.value.listMarcador
            ? data.data.value.listMarcador
            : [];

          _this.$nextTick(() => {
            if (_this.list.Marcador.length > 0) {
              _this.$refs.listMarcador.goToPage(1);
            }
          });
        } else {
          // _this.alertMarcacionError();
        }
      });
    },

    actualizarMarcador() {
        let _this = this;

        console.log(_this.objMarcador.id);
    },

    close: function (code) {
        if (code === 1) {
            // this.clearMarcador();
            // $('#editMarcador').modal('hide');
            // this.$nextTick(() => {

            // });

            this.$root.$emit('bv::hide::modal', 'myModal', '#btnShow')
        }
    },

    clearMarcador: async function(){
        let _this = this;
        _this.objMarcador.id= 0;
        _this.objMarcador.emp_codigo= "";
        _this.objMarcador.fecha_hora_marcador= "";
        _this.objMarcador.longitud= 0;
        _this.objMarcador.latitud= 0;
    }
  },
};
</script>

<style lang="scss" scope>
</style
