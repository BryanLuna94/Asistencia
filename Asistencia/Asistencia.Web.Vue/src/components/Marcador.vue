<template>
	<ContentWrapper>
    <div class="col-sm-12 container-login100">
		<div>
            <div v-if="gettingLocation">
                <!-- <i>Obteniendo su ubicación...</i> -->
            </div>
			<div v-else-if="errorStr && errorLocalizacionManual">
                <!-- Lo sentimos, pero ocurrió el siguiente error: {{errorStr}} -->
				<Geolocation />
			</div>
			<div v-else>
				<div class="col-sm-12">
					<!-- <div v-if="errorStr==null">
						<div class="card text-white bg-dark mb-3">
							<div class="card-body">
								<h5 class="card-title">
									<b v-if="errorLocalizacionManual">Localización por GPS</b>
									<b v-else>Localización Manual</b>
									<div class="float-right">
										<button v-on:click.prevent="obtenerSucursalConfiguracion('')" class="btn btn-info btn-xs mr-1" type="button">
											Actualizar
											<em class="fas fa-sync"></em>
										</button>
									</div>
								</h5>
								<div class="card-text" v-if="listSucursalConfiguracionFiltrada.length > 0">
									Sucursal más proxima...
									<table>
										<tr>
											<th>Sucursal</th>
											<th>Distancia Actual</th>
											<th>Distancia Permitida</th>
											<th></th>
										</tr>
										<tr v-for="configuracion in listSucursalConfiguracionFiltrada" v-bind:key="configuracion.id">
											
											<td>{{configuracion.descripcion_sucursal}}</td>
											<td>{{configuracion.distancia_metros_calculada}} metros</td>
											<td>{{configuracion.distancia_metros_permitida}} metros</td>
											<td>
												<div v-if="configuracion.distancia_metros_calculada < configuracion.distancia_metros_permitida">
													<button  
													class="btn btn-primary btn-xs mr-1" type="button">Marcación Permitida</button>
													<button class="btn btn-success btn-xs mr-1" 
														v-on:click.prevent="showMarcador(configuracion)"
														type="button">
														Seleccionar
														<em class="far fa-hand-pointer"></em>
													</button>
												</div>
												<div v-else>
													<button class="btn btn-danger btn-xs mr-1" type="button">Marcación No Permitida</button>
												</div>
											</td>
											
										</tr>
									</table>
									
								</div>
							
							</div>
						</div>
					</div> -->
					<!-- <div class="row" v-if="flagSeleccionarSucursal"> -->
					<div class="row" v-if="flagSeleccionarSucursal">
						
						<div class="col-lg-12 card card-default">
							<div class="panel-heading">
								<div class="form-group m-b-0">
									<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
										
										<div class="row" style="padding-top:10px;">
											
											<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
												<h4><span>FECHA:</span></h4>
											</div>
											<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" >
												<h4><span class="label label-default">
													{{fechaHoy}}
												</span></h4>
											</div>
											<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" >
												<h4><span>SUCURSAL:</span></h4>
											</div>
											<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
												<h4><label class="label label-default">
													{{objSucursal.codigo_sucursal}} - {{objSucursal.descripcion_sucursal}} 
												</label></h4>
											</div>
											<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 float-right">
												<div class="float-right">
													<button v-on:click.prevent="toLogin" class="btn btn-default btn-xs mr-1" type="button">
														Ingresar
														<em class="fas fa-sign-in-alt"></em>
													</button>
												</div>

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
													<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" >

														<label class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0" 
														style="font-size:50px; text-align:center; background-color:black; color:white">
															{{message}}
														</label>
													</div>
													<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
														<div class="form-group" :class="{ 'form-group--error': $v.codigo.$error }">
															<label>N° DOCUMENTO</label>
															<div class="m-b-30">
																<input v-focus class="form-control" type="password"  v-model.trim="codigo" @input="setCodigo($event.target.value)" v-on:keyup.enter="LlenarDatosEmpleado" v-on:keyup.delete="LimpiarDatosEmpleado" />
															</div>
														</div>
														<div class="error" v-if="!$v.codigo.required">El campo es requerido.</div>
														<div class="error" v-if="!$v.codigo.minLength">El codigo debe tener al menos {{$v.codigo.$params.minLength.min}} caracteres.</div>
														<div v-if="mensaje">{{mensaje}}</div>
													</div>
													<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pull-right">
														<div class="form-group">
															<!-- <label >MARCADO ESPECIAL</label>
															<div class="m-b-30">
																<input type="checkbox" data-color="#f96262" data-size="small" />
															</div> -->
														</div>
													</div>
												</div>
												<hr />
												<div>
													<h4><label>DATOS DEL TRABAJADOR</label></h4>
												</div>
												<div class="row">
													<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
														<label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="vertical-align: central;">
															TRABAJADOR:
														</label>
													</div>
													<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
														<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.emp_codigo" />
													</div>
													<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
														<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.emp_tipo" />
													</div>
													<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
														<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.emp_nombre" />
													</div>

													<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
														<label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style=" vertical-align: central;">
															AREA:
														</label>
													</div>
													<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
														<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.are_codigo" />
													</div>
													<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
														<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.are_descripcion" />
													</div>
												</div>
												<div class="row">
													<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
														<label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="vertical-align: central;">
															SUCURSAL:
														</label>
													</div>
													<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
														<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.suc_codigo" />
													</div>
													<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
														<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.suc_nombre" />
													</div>
													<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px;">
														<label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="vertical-align: central;">
															SUB AREA:
														</label>
													</div>
													<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
														<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.aresub_codigo" />
													</div>
													<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="padding-left:1px; padding-right:2px; padding-bottom:2px;">
														<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" disabled v-model="objEmpleado.aresub_descripcion" />
													</div>
												</div>
												<hr />
										
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="panel-footer">
								<div class="form-group m-b-0">
									<div class="row">
										<div class="col text-center col-sm-12">
											<button class="btn btn-success btn-lg btn-block" v-on:click.prevent="GuardarMarcadorEmpleado()" :disabled="isDisabled">MARCAR</button>
										</div>							
									</div>
								</div>
							</div>
						</div>
						
					</div>
					<div class="row" v-else>
						<div class="col-lg-12 card card text-white bg-warning">
							FUERA DE RANGO
						</div>
					</div>
				</div>
			</div>		
            
		</div>
		
    </div>
	</ContentWrapper>
</template>


<script>
	import CardTool from './Common/CardTool';

	import moment from 'moment';
	import axios from 'axios';
	import constants from '@/utility/constants';
	import functions from '@/utility/functions';
	import base from '@/utility/base-public';

	
	
	import { required, minLength, between } from 'vuelidate/lib/validators';
	import Geolocation from './Geolocation';

    export default {
		name: 'marcador',
     
		created(){
			this.obtenerGeolocation();
			this.obtenerLocalizacionManual();
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
				errorLocalizacionManual:null,

				flagSeleccionarSucursal: false,
				latitud:0,
				longitud:0,
				mensajePorDistancia:'',
				distanciaEnMetros:0,
				GPSTimeout : 0,
				listSucursalConfiguracionFiltrada:[],
				listSucursalConfiguracion:[
					{
						id: 0,
						direccion_fisica :'',
						descripcion_sucursal:'',
						latitud: 0,
						longitud: 0,
						distancia_metros_permitida:0,
						distancia_metros_calculada:0,
						flag_permitido: false,
					}

				],
				listSucursalConfiguracionValida:[],
				objEmpleado: {
					emp_codigo: '',
					emp_tipo: '',
					emp_nombre:'',
					suc_codigo:'',
					suc_nombre:'',
					are_codigo:'',
					are_descripcion:'',
					aresub_codigo:'',
					aresub_descripcion:'',

		            codigo: '',
					flagUbicacion: false,
					flagHabilitarMarcado:false,
				},
				objFilter :{
					codigoAsistencia: 0,
				},
		        objMarcador: {
					id: 0,
					emp_codigo: '',
					fecha_hora_marcador:'',
					longitud:0,
					latitud:0,
				},
				objSucursal:{
					codigo_sucursal:'',
					descripcion_sucursal:'',
				}
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

				let _this = this;
				_this.obtenerSucursalConfiguracion('')

				_this.getSucursalConfiguracionValida(_this.listSucursalConfiguracionFiltrada);

				// console.log(_this.listSucursalConfiguracion);
				// console.log(_this.listSucursalConfiguracionValida);
				
				if (_this.listSucursalConfiguracionValida.length>0) {
					// console.log(_this.listSucursalConfiguracionValida[0]);
					_this.showMarcador(_this.listSucursalConfiguracionValida[0]);
				}else{
					_this.flagSeleccionarSucursal = false;
				}


	        },
			
			LlenarDatosEmpleado: function (e) {
				
				let _this = this;
				_this.ObtenerEmpleado(this.objFilter.codigoAsistencia);
			},
			
	        GuardarMarcadorEmpleado: function () {

	            var currentDate = new Date();
				currentDate.toLocaleString('en-US', { timeZone: 'America/New_York' })

				this.objMarcador.id = 0;
				this.objMarcador.emp_codigo = this.objEmpleado.emp_codigo;
				this.objMarcador.fecha_hora_marcador = moment(currentDate).format("YYYY-MM-DDTHH:mm:ss"); 
				this.objMarcador.longitud = this.location.coords.longitude; 
				this.objMarcador.latitud = this.location.coords.latitude; 
				
				// debugger;
				this.GuardarMarcador(this.objMarcador);
			},
			
			ObtenerFechaHoraMarcador: function (){
	            var currentDate = new Date();
	            this.objMarcador.fIngresoUno = moment(currentDate, 'YYYY-MM-DD hh:mm:ss').format('DD-MM-YYYY');
	            this.objMarcador.hIngresoUno = moment(currentDate, 'YYYY-MM-DD hh:mm:ss').format('hh:mm a');
			},

	        LimpiarDatosEmpleado() {
	            let _this = this;
				_this.objEmpleado.emp_codigo= '';
				_this.objEmpleado.emp_tipo= '';
				_this.objEmpleado.emp_nombre= '';
				_this.objEmpleado.suc_codigo= '';
				_this.objEmpleado.suc_nombre= '';
				_this.objEmpleado.are_codigo= '';
				_this.objEmpleado.are_descripcion= '';
				_this.objEmpleado.aresub_codigo= '';
				_this.objEmpleado.aresub_descripcion= '';

				_this.mensaje = '';
				_this.codigo = '';
				_this.objEmpleado.flagHabilitarMarcado = false;

			},

			obtenerGeolocation(){

				let _this = this;
				// no soporta geolocalizacion
				if (!("geolocation" in navigator)) {
					this.errorStr = 'Geolocation is not available.';
					
					return;
				}

				this.gettingLocation = true;
				
				//get position
				
				navigator.geolocation.getCurrentPosition(pos=>{
					// debugger;
					this.gettingLocation = false;
					
					this.location = pos;
					this.latitud = pos.coords.latitude
					this.longitud = pos.coords.longitude


				},err => {
					this.gettingLocation = false;
					
					this.errorStr = err.message;
				})
			},
			
			ObtenerEmpleado: async function(itemEmpleado){
		
				let _this = this;
				var url = functions.getUrlApiAsistencia(constants.configUrlApiAsistencia.EMPLOYEE_SELECT + itemEmpleado);
				await base.sendGet(url).then(function (data){
					
					if (data.data.isCorrect) {
						_this.objEmpleado.emp_codigo= data.data.value.empleado.emp_codigo;
						_this.objEmpleado.emp_tipo= data.data.value.empleado.emp_tipo;
						_this.objEmpleado.emp_nombre= data.data.value.empleado.emp_nombre;
						_this.objEmpleado.suc_codigo= data.data.value.empleado.suc_codigo;
						_this.objEmpleado.suc_nombre= data.data.value.empleado.suc_nombre;
						_this.objEmpleado.are_codigo= data.data.value.empleado.are_codigo;
						_this.objEmpleado.are_descripcion= data.data.value.empleado.are_descripcion;
						_this.objEmpleado.aresub_codigo= data.data.value.empleado.aresub_codigo;
						_this.objEmpleado.aresub_descripcion= data.data.value.empleado.aresub_descripcion;
						_this.objEmpleado.flagHabilitarMarcado = true;

						_this.mensaje='';
					}else{
						
						_this.LimpiarDatosEmpleado();
						_this.mensaje='No Encontrado';
					}

				})

			},
			
			alertMarcacionIngreso(item) {
				this.$swal({
					position: 'top',
					icon: 'success',
					title: 'Marcación de Ingreso',
					showConfirmButton: false,
					timer: 1500,
					timerProgressBar: true,
					html:
						'Fecha: <b style="color:#08C142">' + moment(item.fecha_hora_marcador, 'YYYY-MM-DD hh:mm:ss').format('DD-MM-YYYY') + '</b>  ' +
						'Hora: <b style="color:#08C142">' + moment(item.fecha_hora_marcador, 'YYYY-MM-DD hh:mm:ss').format('hh:mm a') + '</b> '
				}).then((result)=>{
					this.LimpiarDatosEmpleado();
				});
			},
			
			alertMarcacionSalida(item) {
				this.$swal({
					position: 'top',
					icon: 'success',
					title: 'Marcación de Salida',
					showConfirmButton: false,
					timer: 1500,
					html:
						'Fecha: <b style="color:#EE3811">' + moment(item.fecha_hora_marcador, 'YYYY-MM-DD hh:mm:ss').format('DD-MM-YYYY') + '</b>  ' +
						'Hora: <b style="color:#EE3811">' + moment(item.fecha_hora_marcador, 'YYYY-MM-DD hh:mm:ss').format('hh:mm a') + '</b> '
				}).then((result)=>{
					this.LimpiarDatosEmpleado();
				});
			},
			
			alertMarcacionError() {
				this.$swal({
					position: 'center-center',
					icon: 'error',
					title: 'Ocurrió un error',
					showConfirmButton: false,
					timer: 1500
					
				});
			},
			
			GuardarMarcador: async function(item){
				// debugger;
				let _this = this;
				let data = {
					marcador: item
				};
				var valor;
				var url = functions.getUrlApiAsistencia(constants.configUrlApiAsistencia.MARCADOR_INSERT);
				await base.sendPost(url, JSON.stringify(data), true).then(function (data){
					if(data !== undefined){
						// debugger;
						valor = data.data.value;
						if (valor == 1) {
							_this.alertMarcacionIngreso(item);
						}else if (valor == 2){
							_this.alertMarcacionSalida(item);
						};
						
					}else{
						_this.alertMarcacionError();
					}
				});

			},
			
			obtenerLocalizacionManual(){
				var value = localStorage.getItem(constants.configSession.LOCALIZACION_MANUAL);
				if (value === null) {
					this.errorLocalizacionManual = "SinConfiguracionManual";
				}
			},
			
			degreesToRadians: function(degrees) {
				return degrees * (Math.PI / 180);
			},
			
			distanceEnMetrosEntreCoordenadas: function(lat1, lon1, lat2, lon2) {

				
				var earthRadiusKm = 6371;
				var factorConversionToMeters = 1000;

				var dLat = this.degreesToRadians(lat2-lat1);
				var dLon = this.degreesToRadians(lon2-lon1);

				lat1 = this.degreesToRadians(lat1);
				lat2 = this.degreesToRadians(lat2);

				var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
						Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
				return Math.round(earthRadiusKm * c * factorConversionToMeters);
			},
			
			obtenerSucursalConfiguracion: async function(item){
				let _this = this;
				let data = {
					filterSucursalConfiguracion: {
						codigo_sucursal: item,
					},
				};
				var url = functions.getUrlApiAsistencia(
					constants.configUrlApiAsistencia.SUCURSALCONFIGURACION_LIST
				);
				// debugger;
				axios.post(url, JSON.stringify(data), {
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(res => {
					// debugger;
					if (res.data.isCorrect) {
						_this.listSucursalConfiguracion = res.data.value.listSucursalConfiguracion
							? res.data.value.listSucursalConfiguracion
							: [];

						_this.calcularDistanciaEnMetrosPorSucursal(_this.listSucursalConfiguracion);
					} else {
						
					}
				}).catch(error => {
				});

			},
			
			calcularDistanciaEnMetrosPorSucursal: function(item){
				let _this = this;

				for (let index = 0; index < item.length; index++) {
					item[index].distancia_metros_calculada =
					_this.distanceEnMetrosEntreCoordenadas(
						_this.latitud,_this.longitud,
						item[index].latitud,
						item[index].longitud);

					item[index].flag_permitido = 
					(item[index].distancia_metros_permitida >= item[index].distancia_metros_calculada)
					? true : false;
				}

				this.obtenerSucursalConfiguracionCercana(item);

			},

			obtenerSucursalConfiguracionCercana: function(item){
				let _this = this;
				// filtrar solo disponibles
				let min = Math.min(...item.map(item => item.distancia_metros_calculada))
				_this.listSucursalConfiguracionFiltrada = item.filter(item => item.distancia_metros_calculada === min)
			},
  
			getSucursalConfiguracionValida: function(item){
				let _this = this;
				_this.listSucursalConfiguracionValida = item.filter(item => item.flag_permitido === true)
			},

			showMarcador: function(item){
				let _this = this;
				_this.flagSeleccionarSucursal = true;
				_this.objSucursal.codigo_sucursal = item.codigo_sucursal;
				_this.objSucursal.descripcion_sucursal = item.descripcion_sucursal;
				// console.log(item);
			},

			toLogin(){
				window.location.href = constants.configWebAsistencia.URL_BASE_LOGIN;
			},


        },
        components:{
		  Geolocation,
		  CardTool
        },
		validations: {
			codigo: {
				required,
				minLength: minLength(8)
			}
		},
		computed:{
			isDisabled(){
				return !this.objEmpleado.flagHabilitarMarcado;
			}
		}
    };
</script>

<style type="text/css" scoped>

button:disabled {
	background-color:darkslategrey;
}

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
