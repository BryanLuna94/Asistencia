<template>
	
    <div class="col-sm-12">
		<div class="col-sm-12">
            <div v-if="gettingLocation">
                <i>Obteniendo su ubicación...</i>
            </div>
			<div v-else-if="errorStr">
                Lo sentimos, pero ocurrió el siguiente error: {{errorStr}}
            </div>
			<div v-else>
				<div class="col-sm-12">
					<div class="row">
						<div class="col-lg-12">
							<div>
								<div class="panel-heading">
									<div class="form-group m-b-0">
										<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-5">
											<!-- <hr /> -->
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
															<div class="form-group" :class="{ 'form-group--error': $v.codigo.$error }">
																<label>COD. DE ASISTENCIA</label>
																<div class="m-b-30">
																	<input v-focus class="form-control" type="password"  v-model.trim="codigo" @input="setCodigo($event.target.value)" v-on:keyup="LlenarDatosTrabajador" />
																</div>
															</div>
															<div class="error" v-if="!$v.codigo.required">El campo es requerido.</div>
															<div class="error" v-if="!$v.codigo.minLength">El codigo debe tener al menos {{$v.codigo.$params.minLength.min}} caracteres.</div>
															<div v-if="mensaje">{{mensaje}}</div>
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
															<label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="vertical-align: central;">
																TRABAJADOR:
															</label>
														</div>
														<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
															<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.codigo" />
														</div>
														<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
															<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.tipo" />
														</div>
														<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
															<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.nombre" />
														</div>

														<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
															<label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style=" vertical-align: central;">
																AREA:
															</label>
														</div>
														<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
															<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.codigoArea" />
														</div>
														<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
															<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.nombreArea" />
														</div>
													</div>
													<div class="row">
														<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
															<label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="vertical-align: central;">
																SUCURSAL:
															</label>
														</div>
														<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
															<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.codigoSucursal" />
														</div>
														<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
															<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.nombreSucursal" />
														</div>
														<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
															<label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="vertical-align: central;">
																SUB AREA:
															</label>
														</div>
														<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
															<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.codigoSubArea" />
														</div>
														<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
															<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.nombreSubArea" />
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
											<div class="col text-center col-sm-6">
												<button class="btn btn-success btn-block" v-on:click.prevent="LlenarDatosTrabajadorMarcado()">Marcar</button>
											</div>
											<div class="col text-center col-sm-6">
												<button class="btn btn-danger btn-block" v-on:click.prevent="clearMarcador()">Nuevo</button>
											</div>

								
										</div>
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
	import axios from 'axios';
	import constants from '@/utility/constants';
	import functions from '@/utility/functions';
	import base from '@/utility/base-public';
	
	import { required, minLength, between } from 'vuelidate/lib/validators';
	

    export default {
		name: 'marcador',
     
		created(){
			this.obtenerGeolocation();
		},
        mounted(){
			
            setInterval(this.callFunction,1000);
        },
        data(){
            return {
                titulo: 'Marcador',
				message: '',
				mensaje: '',
				fechaHoy: '',
				codigo: '',
				flagMarcadoEspecial: false,

                location:null,
                gettingLocation: false,
                errorStr:null,

				objEmpleado: {
		            codigo: '',
		            tipo: '',
					nombre: '',
		            codigoSucursal: '',
		            nombreSucursal: '',
		            codigoArea: '',
		            nombreArea: '',
		            codigoSubArea: '',
					nombreSubArea: '',
					flagUbicacion: false
				},
				objFilter :{
					codigoAsistencia: 0,
				},
		        objMarcador: {
		            id: 0,
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
			setCodigo(value) {
				this.objFilter.codigoAsistencia = value;
				this.codigo = value;
				this.$v.codigo.$touch()
			},

	        callFunction() {

	            var currentDate = new Date();

	            var currentDateWithFormat = moment(currentDate, 'YYYY-MM-DD hh:mm:ss').format('hh:mm:ss a');
	            this.message = currentDateWithFormat;
	            this.fechaHoy = moment(currentDate, 'YYYY-MM-DD hh:mm:ss').format('DD-MM-YYYY');

	        },
	        LlenarDatosTrabajador: function (e) {
				debugger;
				let _this = this;
				if (this.$v.$invalid) {
				}else {
					
					if (e.keyCode === 13) {
						
						_this.ObtenerEmpleado(this.objFilter.codigoAsistencia);

					} else {
						this.clearMarcador();
					}
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

	            
				_this.objEmpleado.codigo= '';
				_this.objEmpleado.tipo= '';
				_this.objEmpleado.nombre= '';
				_this.objEmpleado.codigoSucursal= '';
				_this.objEmpleado.nombreSucursal= '';
				_this.objEmpleado.codigoArea= '';
				_this.objEmpleado.nombreArea= '';
				_this.objEmpleado.codigoSubArea= '';
				_this.objEmpleado.nombreSubArea= '';

				_this.mensaje = '';

	            _this.objMarcador.fIngresoUno = '';
	            _this.objMarcador.hIngresoUno = '';
	            _this.objMarcador.cod2Sucursal = '';
	            _this.objMarcador.nom2Sucursal = '';
	            _this.objMarcador.cod2Area = '';
	            _this.objMarcador.nom2Area = '';
	            _this.objMarcador.cod2SubArea = '';
	            _this.objMarcador.nom2SubArea = '';
			},

			obtenerGeolocation(){

				let _this = this;
				// no soporta geolocalizacion
				if (!("geolocation" in navigator)) {
					this.errorStr = 'Geolocation is not available.';
					_this.objEmpleado.flagUbicacion = false;
					return;
				}

				this.gettingLocation = true;
				_this.objEmpleado.flagUbicacion = true;
				//get position
				navigator.geolocation.getCurrentPosition(pos=>{
					this.gettingLocation = false;
					_this.objEmpleado.flagUbicacion = false;
					this.location = pos;
				},err => {
					this.gettingLocation = false;
					_this.objEmpleado.flagUbicacion = false;
					this.errorStr = err.message;
				})
			},
			
			ObtenerEmpleado: async function(itemEmpleado){
		
				let _this = this;
				
				var url = functions.getUrlApiAsistencia(constants.configUrlApiAsistencia.EMPLOYEE_SELECT + itemEmpleado);

				await base.sendGet(url).then(function (data){
					_this.objEmpleado.codigo= data.data.value.empleado.emp_codigo;
					_this.objEmpleado.tipo= data.data.value.empleado.emp_tipo;
					_this.objEmpleado.nombre= data.data.value.empleado.emp_nombre;
					_this.objEmpleado.codigoSucursal= data.data.value.empleado.suc_codigo;
					_this.objEmpleado.nombreSucursal= data.data.value.empleado.suc_nombre;
					_this.objEmpleado.codigoArea= data.data.value.empleado.are_codigo;
					_this.objEmpleado.nombreArea= data.data.value.empleado.are_descripcion;
					_this.objEmpleado.codigoSubArea= data.data.value.empleado.aresub_codigo;
					_this.objEmpleado.nombreSubArea= data.data.value.empleado.aresub_descripcion;
				})

			}

        },
        components: {
           
		},
		props: ['numero'],
		validations: {
			codigo: {
				required,
				minLength: minLength(4)
			}
		},
		computed:{
			
		}
    };
</script>

<style type="text/css">
.form-group--error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: .6s;
  animation-timing-function: ease-in-out; }

.form-group--error input,
.form-group--error textarea,
.form-group--error input:focus,
.form-group--error input:hover {
  border-color: #f79483; }

.form-group__message, .error {
  font-size: 0.75rem;
  line-height: 1;
  display: none;
  margin-left: 14px;
  margin-bottom: 0.9375rem; }

.form-group--error + .form-group__message, .form-group--error + .error {
  display: block;
  color: #f57f6c; }

@keyframes shakeError {
  0% {
    transform: translateX(0); }
  15% {
    transform: translateX(0.375rem); }
  30% {
    transform: translateX(-0.375rem); }
  45% {
    transform: translateX(0.375rem); }
  60% {
    transform: translateX(-0.375rem); }
  75% {
    transform: translateX(0.375rem); }
  90% {
    transform: translateX(-0.375rem); }
  100% {
    transform: translateX(0); } }

</style>
