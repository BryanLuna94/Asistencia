<template>
    <div class="col-sm-12">
        <h2>Este es el {{ titulo }}</h2>

		<div class="col-sm-12">
			<div class="row">
				<div class="col-lg-12">
					<div>

		        		<div class="panel-heading">
		        			<div class="form-group m-b-0">
		                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-5">
		                        	<hr />
		                        	<div class="row">
		                                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
		                                    <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0">FECHA:</label>
		                                </div>
		                                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:2px; padding-right:2px;">
		                                    <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0 text-black-50">
		                                        {{fechaHoy}}
		                                    </label>
		                                </div>

		                                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
		                                    <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0">SUCURSAL:</label>
		                                </div>
		                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="padding-left:1px; padding-right:2px;">
		                                    <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0 text-black-50">003 - 06 TERMINAL FLORES LIMA </label>
		                                </div>
		                            </div>
		                        </div>
                            	
		        			</div>
		        		</div>

		                <div>
		                    <div class="panel-body">

		                        <form class="form-horizontal">
		                            <div class="form-group m-b-0">
		                            	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-5">

		                                    <div class="row">

		                                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="padding-left:1px; padding-right:2px;">

		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0" style="font-size:50px; text-align:center; background-color:black; color:white">
		                                                {{message}}
		                                            </label>
		                                        </div>

		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
		                                            <div class="form-group">
		                                                <label for="codigo">COD. DE ASISTENCIA</label>
		                                                <div class="m-b-30">
		                                                    <input class="form-control" type="password" v-on:keyup="LlenarDatosTrabajador" />
		                                                </div>
		                                            </div>
		                                        </div>


		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pull-right">
		                                            <div class="form-group">
		                                                <label >MARCADO ESPECIAL</label>
		                                                <div class="m-b-30">
		                                                    <input type="checkbox" data-color="#f96262" data-size="small" />
		                                                </div>
		                                            </div>
		                                        </div>

		                                    </div>

		                                    <hr />
		                                    <div>
		                                        <label>DATOS DEL TRABAJADOR</label>
		                                    </div>

		                                    <div class="row">
		                                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                TRABAJADOR:
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.codTrabajador" />
		                                        </div>
		                                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.cod2Trabajador" />
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.nombreTrabajador" />
		                                        </div>

		                                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style=" vertical-align: central;">
		                                                AREA:
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.codArea" />
		                                        </div>
		                                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.nomArea" />
		                                        </div>

		                                    </div>

		                                    <div class="row">
		                                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                SUCURSAL:
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.codSucursal" />
		                                        </div>
		                                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.nomSucursal" />
		                                        </div>

		                                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="vertical-align: central;">
		                                                SUB AREA:
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.codSubArea" />
		                                        </div>
		                                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.nomSubArea" />
		                                        </div>

		                                    </div>

		                                    <hr />
		                                    <label>DATOS DEL MARCADO</label>

		                                    <div class="row">
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                F. INGRESO 1
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.fIngresoUno" />
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                F. INGRESO 2
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled />
		                                        </div>
		                                    </div>

		                                    <div class="row">
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                H. INGRESO 1
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.hIngresoUno" />
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                H. INGRESO 2
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled />
		                                        </div>
		                                    </div>

		                                    <div class="row">
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                F. SALIDA 1
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled />
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                F. SALIDA 2
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled />
		                                        </div>
		                                    </div>

		                                    <div class="row">
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                H. SALIDA 1
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled />
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                H. SALIDA 2
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled />
		                                        </div>
		                                    </div>

		                                    <div class="row">
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                SUCURSAL:
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.cod2Sucursal" />
		                                        </div>
		                                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.nom2Sucursal" />
		                                        </div>
		                                    </div>

		                                    <div class="row">
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                AREA:
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.cod2Area" />
		                                        </div>
		                                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.nom2Area" />
		                                        </div>
		                                    </div>

		                                    <div class="row">
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px;">
		                                            <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left: 50px; vertical-align: central;">
		                                                SUB AREA:
		                                            </label>
		                                        </div>
		                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.cod2SubArea" />
		                                        </div>
		                                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
		                                            <input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objMarcador.nom2SubArea" />
		                                        </div>
		                                    </div>


		                            	</div>
		                        	</div>
		                        </form>

		                    </div>
	                    </div>

		                <div class="panel-footer">
		                    <div class="form-group m-b-0">
		                        <div class="row">
		                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="padding-left:150px; padding-right:2px;">
		                                <button class="btn btn-success waves-effect text-center" v-on:click.prevent="LlenarDatosTrabajadorMarcado()">
		                                    <span class="fa fa-save fa-fw"></span>Marcar
		                                </button>
		                            </div>
		                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="padding-left:150px; padding-right:2px;">
		                                <button class="btn btn-danger waves-effect text-left" v-on:click.prevent="clearMarcador()">
		                                    <span class="fa fa-save fa-fw"></span>Nuevo
		                                </button>
		                            </div>
		                        </div>
		                    </div>
		                </div>

					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
    import moment from 'moment';
	import { required, minLength, between } from 'vuelidate/lib/validators';

    export default {
		name: 'marcador',
		
        mounted(){
            setInterval(this.callFunction,1000);
        },
        data(){
            return {
                titulo: 'Marcador',
				message: '',
				fechaHoy: '',
				codigo: '',
		        objMarcador: {
		            id: 0,
		            
		            flagMarcadoEspecial: false,
		            codigoAsistencia: 0,
		            codTrabajador: '',
		            cod2Trabajador: '',
		            nombreTrabajador: '',
		            codSucursal: '',
		            nomSucursal: '',
		            codArea: '',
		            nomArea: '',
		            codSubArea: '',
		            nomSubArea: '',

		            cod2Sucursal: '',
		            nom2Sucursal: '',
		            cod2Area: '',
		            nom2Area: '',
		            cod2SubArea: '',
		            nom2SubArea: '',

		            fIngresoUno: '',
		            hIngresoUno: '',
		        },
            }
        },
        methods:{
	        callFunction() {

	            var currentDate = new Date();
	            //console.log(currentDate);

	            var currentDateWithFormat = moment(currentDate, 'YYYY-MM-DD hh:mm:ss').format('hh:mm:ss a');
	            //console.log(currentDateWithFormat);
	            this.message = currentDateWithFormat;
	            this.fechaHoy = moment(currentDate, 'YYYY-MM-DD hh:mm:ss').format('DD-MM-YYYY');

	        },
	        LlenarDatosTrabajador: function (e) {
	            if (e.keyCode === 13) {
	                this.objMarcador.codTrabajador = 'E0014';
	                this.objMarcador.cod2Trabajador= 'E';
	                this.objMarcador.nombreTrabajador= 'PEDRO ENRIQUE';
	                this.objMarcador.codSucursal= '003';
	                this.objMarcador.nomSucursal= '06 TERMINAL FLORES LIMA';
	                this.objMarcador.codArea = '01';
	                this.objMarcador.nomArea = 'ADMINISTRACION';
	                this.objMarcador.codSubArea = '01';
	                this.objMarcador.nomSubArea = 'ADMINISTRACION';

	            } else {
	                this.clearMarcador();
	            }
	        },
	        LlenarDatosTrabajadorMarcado: function () {

	            var currentDate = new Date();

	            this.objMarcador.fIngresoUno = moment(currentDate, 'YYYY-MM-DD hh:mm:ss').format('DD-MM-YYYY');
	            this.objMarcador.hIngresoUno = moment(currentDate, 'YYYY-MM-DD hh:mm:ss').format('hh:mm a');

	            this.objMarcador.cod2Sucursal = '003';
	            this.objMarcador.nom2Sucursal = '06 TERMINAL FLORES LIMA';
	            this.objMarcador.cod2Area = '01';
	            this.objMarcador.nom2Area = 'ADMINISTRACION';
	            this.objMarcador.cod2SubArea = '01';
	            this.objMarcador.nom2SubArea = 'ADMINISTRACION';

	        },

	        clearMarcador() {

	            let _this = this;

	            
	            _this.objMarcador.codTrabajador = '';
	            _this.objMarcador.codigoAsistencia = 0;
	            _this.objMarcador.codTrabajador = '';
	            _this.objMarcador.cod2Trabajador = '';
	            _this.objMarcador.nombreTrabajador = '';
	            _this.objMarcador.codSucursal = '';
	            _this.objMarcador.nomSucursal = '';
	            _this.objMarcador.codArea = '';
	            _this.objMarcador.nomArea = '';
	            _this.objMarcador.codSubArea = '';
	            _this.objMarcador.nomSubArea = '';

	            _this.objMarcador.fIngresoUno = '';
	            _this.objMarcador.hIngresoUno = '';

	            _this.objMarcador.cod2Sucursal = '';
	            _this.objMarcador.nom2Sucursal = '';
	            _this.objMarcador.cod2Area = '';
	            _this.objMarcador.nom2Area = '';
	            _this.objMarcador.cod2SubArea = '';
	            _this.objMarcador.nom2SubArea = '';
	        },

        },
        components: {
            
		},
		validations: {
			codigo: {
				required,
				minLength: minLength(4)
			}
		}
    };
</script>

<style>
</style>
