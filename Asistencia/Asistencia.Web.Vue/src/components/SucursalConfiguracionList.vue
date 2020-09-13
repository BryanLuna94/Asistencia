<template>

    <div class="card">
        <div class="card-header">
        <div class="card-title"></div>
        <div class="text-sm">

            <div class="form-row align-items-center">
                <div class="col-auto">
                    <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="SUC CODIGO"
                        aria-controls="datatable1"
                        v-model="objFilter.codigo_sucursal"
                    />
                </div>
                <div class="col-auto">
                    <button
                        
                        class="btn btn-primary btn-sm mr-1"
                        type="button"
                        v-on:click.prevent="listSucursalConfiguracion(objFilter.codigo_sucursal)"
                        >
                    <em class="fa fa-search"></em>
                    </button>

                </div>
                <div class="float-right">
                    <button class="btn btn-success" type="submit" 
                    v-on:click.prevent="showEditor()"
                    >
                    Agregar</button>
                </div> 
            </div>
           
        </div>
        </div>

        <div class="card-body table-responsive">
        <table class="table table-striped my-4 w-100" id="datatable1">
            <thead>
            <tr>
                <th>SUC CODIGO</th>
                <th>DESCRIPCION SUCURSAL</th>
                <th>DIRECCION FISICA</th>
                <th>LATITUD</th>
                <th>LONGITUD</th>
                <th>DISTANCIA EN METROS PERMITIDA</th>
            </tr>
            </thead>

            <paginate
            name="list.sucursalConfiguracion"
            :list="list.sucursalConfiguracion"
            :per="10"
            tag="tbody"
            ref="listSucursalConfiguracion"
            >
            <tr
                v-for="sucursalconfiguracion in paginated('list.sucursalConfiguracion')"
                v-bind:key="sucursalconfiguracion.id"
            >
                <td>{{ sucursalconfiguracion.codigo_sucursal }}</td>
                <td>{{ sucursalconfiguracion.descripcion_sucursal }}</td>
                <td>{{ sucursalconfiguracion.direccion_fisica }}</td>
                <td>{{ sucursalconfiguracion.latitud }}</td>
                <td>{{ sucursalconfiguracion.longitud }}</td>
                <td>{{ sucursalconfiguracion.distancia_metros_permitida }}</td>
                <td>
                <button class="btn mr-1 mb-1 btn-outline-info" type="button"  @click="showEditor(sucursalconfiguracion)">Editar</button>
                </td>
            </tr>
            </paginate>
        </table>

        <paginate-links
            for="list.sucursalConfiguracion"
            :classes="{ ul: 'pagination', li: 'page-item', a: 'page-link' }"
            style="cursor:pointer;"
        ></paginate-links>
        </div>

        
        <b-modal id="myModal" v-model="modalShow" v-bind:hide-footer="true" title="Configuración Sucursal">

            <div class="modal-body" style="padding-top:5px;">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label>SUCURSAL</label>
                        <select
                        :class="{ 'form-control': true, 'is-invalid': '' }"
                        ref="selectedSucursal" v-model="objSucursalConfiguracion.codigo_sucursal"
                        v-bind:disabled="!createSucursalConfiguracion"
                        >
                            <option value="">Seleccionar Sucursal</option>
                            <option
                                v-for="sucursal in list.sucursales"
                                :value="sucursal.cod_ofi"
                                v-bind:key="sucursal.cod_ofi"
                                
                            >
                                {{ sucursal.nom_ofi }}
                            </option>
                        </select>
                    </div>


                    <div class="form-group">
                        <label>DIRECCION FISICA</label>
                        <input class="form-control" type="text"  v-model="objSucursalConfiguracion.direccion_fisica"/>
                    </div>
                    <div class="form-group">
                        <label>LATITUD</label>
                        <input class="form-control" type="number"  v-model.number="objSucursalConfiguracion.latitud"/>
                    </div>
                    <div class="form-group">
                        <label>LONGITUD</label>
                        <input class="form-control" type="number"  v-model.number="objSucursalConfiguracion.longitud"/>
                    </div>
                    <div class="form-group">
                        <label>DISTANCIA PERMITIDA EN METROS</label>
                        <input class="form-control" type="number"  v-model.number="objSucursalConfiguracion.distancia_metros_permitida"/>
                    </div>

                </form>
            </div>


                
            <div class="modal-footer">
                <button class="btn btn-primary waves-effect text-left" ref="btnSave" 
                v-bind:disabled="!FullSucursalConfiguracion"
                @click="saveSucursalConfiguracion()">
                    <span class="fa fa-save fa-fw"></span>Save
                </button>
                <button class="btn btn-secondary" @click="close(1)">
                    <span class="glyphicon glyphicon-log-out fa-fw"></span>Cancel
                </button>
            </div>

        </b-modal>
        

        <!-- Notification container -->
        <notifications group="notifdemo" :position="notifPosition"  />


    </div>


</template>
<script>

import moment from "moment";
import axios from "axios";
import constants from "@/utility/constants";
import functions from "@/utility/functions";
import base from "@/utility/base-public";
import notifications from "@/utility/notifications";

import Notifications from 'vue-notification'
import Vue from 'vue'
import { ALPN_ENABLED } from 'constants';
Vue.use(Notifications)

export default {
    name: "SucursalConfiguracionList",
    created(){
        this.listSucursalConfiguracion('');
        this.getSucursales('');
    },
    data() {
    return {
        notifPosition: 'right bottom',

      modalShow: false,
      value: 0,
      objSucursalConfiguracion: {
        id: 0,
        codigo_sucursal: '',
        descripcion_sucursal: '',
        direccion_fisica:'',
        latitud: 0,
        longitud: 0,
        distancia_metros_permitida: 0,
        distancia_metros_calculada : 0
      },
      objFilter:{
          codigo_sucursal: ''
      },
      list: {
        sucursalConfiguracion: [],
        sucursales: [],
      },
      paginate: ["list.sucursalConfiguracion"],
      createSucursalConfiguracion:true,
    };
  },
  methods:{

    getSucursales: async function(item) {
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
          _this.list.sucursales = data.data.value.listSucursal
            ? data.data.value.listSucursal
            : [];
        } else {
          // _this.alertMarcacionError();
        }
      });
    },
    
    listSucursalConfiguracion: async function(item){
        let _this = this;
        let data = {
            filterSucursalConfiguracion: {
                codigo_sucursal: item,
            },
        };
        var url = functions.getUrlApiAsistencia(
            constants.configUrlApiAsistencia.SUCURSALCONFIGURACION_LIST
        );
        await base.sendPost(url, JSON.stringify(data), true).then(function(data) {
            if (data !== undefined) {
                _this.list.sucursalConfiguracion = data.data.value.listSucursalConfiguracion
                    ? data.data.value.listSucursalConfiguracion
                    : [];

                _this.$nextTick(() => {
                    if (_this.list.sucursalConfiguracion.length > 0) {
                    _this.$refs.listSucursalConfiguracion.goToPage(1);
                        }
                    });
            } else {
                notifications.danger('Error','Ocurrió un error.');
            }
        });
    },

    insertSucursalConfiguracion: async function(){
        
        let _this = this;
        let data = {
            sucursalConfiguracion: _this.objSucursalConfiguracion
        };
        var valor;
        var url = functions.getUrlApiAsistencia(constants.configUrlApiAsistencia.SUCURSALCONFIGURACION_INSERT);
        await base.sendPost(url, JSON.stringify(data), true).then(function (data){
            if(data !== undefined){
                _this.close(1);
                _this.listSucursalConfiguracion('');
                valor = data.data.value;               
                notifications.success('Mensaje de Exito','Se guardó');
            }else{
                notifications.danger('Error','Ocurrió un error.');
            }
        });

    },

    selectSucursalConfiguracion: async function(item){
        
        let _this = this;
        _this.createSucursalConfiguracion = false;
        var url = functions.getUrlApiAsistencia(constants.configUrlApiAsistencia.SUCURSALCONFIGURACION_SELECT + item);

        await base.sendGet(url).then(function (data){
            if(data !== undefined){
                if (data.data.isCorrect) {
                    _this.objSucursalConfiguracion.id= data.data.value.objectSucursalConfiguracion.id;
                    _this.objSucursalConfiguracion.codigo_sucursal= data.data.value.objectSucursalConfiguracion.codigo_sucursal;
                    _this.objSucursalConfiguracion.descripcion_sucursal= data.data.value.objectSucursalConfiguracion.descripcion_sucursal;
                    _this.objSucursalConfiguracion.direccion_fisica= data.data.value.objectSucursalConfiguracion.direccion_fisica;
                    _this.objSucursalConfiguracion.latitud= data.data.value.objectSucursalConfiguracion.latitud;
                    _this.objSucursalConfiguracion.longitud= data.data.value.objectSucursalConfiguracion.longitud;
                    _this.objSucursalConfiguracion.distancia_metros_permitida= data.data.value.objectSucursalConfiguracion.distancia_metros_permitida;

                }else{
                    notifications.danger('Error','Ocurrió un error.');

                }
            }
            else{
                notifications.danger('Error','Ocurrió un error.');
            }
        })

    },

    updateSucursalConfiguracion: async function(){
        debugger;
        let _this = this;
        let data = {
            sucursalConfiguracion: _this.objSucursalConfiguracion
        };
        var valor;
        var url = functions.getUrlApiAsistencia(constants.configUrlApiAsistencia.SUCURSALCONFIGURACION_UPDATE + _this.objSucursalConfiguracion.id);
        await base.sendPut(url, JSON.stringify(data)).then(function (data){
            _this.close(1);
            _this.listSucursalConfiguracion('');
            notifications.success('Mensaje de Exito','Se actualizó');
        });
    },

    saveSucursalConfiguracion: async function(){
        let _this = this;
        if (_this.createSucursalConfiguracion) {
            await _this.insertSucursalConfiguracion();
        }else{
            await _this.updateSucursalConfiguracion();
        }
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

    showEditor: async function(item){
        let _this = this;
        _this.clearSucursalConfiguracion();

        if (item!== undefined) {
            _this.selectSucursalConfiguracion(item.id);
        }else{
            _this.createSucursalConfiguracion = true;
        }
        _this.modalShow = true;
    },

    clearSucursalConfiguracion: async function(){
        let _this=this;
        _this.objSucursalConfiguracion.id = 0;
        _this.objSucursalConfiguracion.codigo_sucursal = '';
        _this.objSucursalConfiguracion.descripcion_sucursal = '';
        _this.objSucursalConfiguracion.direccion_fisica = '';
        _this.objSucursalConfiguracion.latitud = 0;
        _this.objSucursalConfiguracion.longitud = 0;
        _this.objSucursalConfiguracion.distancia_metros_permitida = 0;
        _this.objSucursalConfiguracion.distancia_metros_calculada = 0;
    },
    validateForm: function () {
        return (this.objSucursalConfiguracion.codigo_sucursal &&
            this.objSucursalConfiguracion.direccion_fisica &&
            this.objSucursalConfiguracion.latitud &&
            this.objSucursalConfiguracion.longitud &&
            this.objSucursalConfiguracion.distancia_metros_permitida 
            || !this.createSucursalConfiguracion) ? true : false;
    },

    removeArrayList: function(myArray,toRemove ){
        debugger;
        for( var i=myArray.length - 1; i>=0; i--){
            for( var j=0; j<toRemove.length; j++){
                if(myArray[i] && (myArray[i].cod_ofi === toRemove[j].codigo_sucursal)){
                    myArray.splice(i, 1);
                }
            }
        }

    },

  },
  computed:{
      FullSucursalConfiguracion:function(){
          return this.validateForm();
      }
  },
}
</script>

<style lang="scss" scope>
</style