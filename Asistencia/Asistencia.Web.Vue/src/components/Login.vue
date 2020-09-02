<template>
    <div class="block-center mt-4 wd-xl">
        <!-- START card-->
        <div class="card card-flat">
            <div class="card-header text-center bg-dark">
                <a href="#">
                    <img class="block-center rounded" src="img/logo.png" alt="Image" />
                </a>
            </div>
            <div class="card-body">
                <p class="text-center py-2">INICIAR SESION</p>
                <form class="mb-3" data-vv-scope="login">
                    <div class="form-group">
                        <div class="input-group with-focus">
                            <input :class="{'form-control border-right-0':true, 'is-invalid': ''}" 
                            v-model="objUser.Access"
                            id="Access"
                            type="text"
                            @@keypress.enter.prevent="login"
                            ref="Access"
                            placeholder="Usuario"
                            />
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-envelope"></em>
                                </span>
                            </div>
                            <!-- <span v-show="errors.has('login.email')" class="invalid-feedback">{{ errors.first('login.email') }}</span> -->
                            
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group with-focus">
                            <input :class="{'form-control  border-right-0':true, 'is-invalid': ''}" 
                            v-model="objUser.Password"
                            id="Password"
                            type="password"
                            @@keypress.enter.prevent="login"
                            ref="Password"
                            placeholder="Clave"
                            
                            />
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-lock"></em>
                                </span>
                            </div>
                            <!-- <span v-show="errors.has('login.password')" class="invalid-feedback">{{ errors.first('login.password') }}</span> -->
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="float-left">
                            <!-- <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="rememberme" id="rememberme" v-model="login.rememberme">
                                <label class="custom-control-label" for="rememberme">Remember Me</label>
                            </div> -->
                        </div>
                        <div class="float-right">
                            <router-link class="text-muted" to="/recover">
                                <small>¿Olvidó su contraseña?</small>
                            </router-link>
                         

                        </div>
                    </div>
                    <button class="btn btn-block btn-primary mt-3" type="submit"
                    v-on:click.prevent="login()"
                    ref="bntSubmit"
                    >Ingresar</button>
                </form>
                
            </div>
        </div>
        <!-- END card-->
        <div class="p-3 text-center">
            <span class="mr-2">&copy;</span>
            <span>2020</span>
            <span class="mr-2">-</span>
            <span>Asistencia v1.0</span>
            <br/>
            <span></span>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import constants from "@/utility/constants";
import functions from "@/utility/functions";
import base from "@/utility/base-public";



export default {
  name: "login",
  props: {
    msg: "String",
  },
  data() {
    return {
      titulo: "Login",
      flagRecuperarContraseña: false,
      objUser: {
        Access: "",
        Password: "",
        Email:"",
      },
      
    };
  },
  methods: {
    login: async function() {
      if (this.validateForm()) {
        let _this = this;

        await axios
          .post(functions.getUrlApiAsistencia("api/Autenticacion/Login"), {
            Acceso: this.objUser.Access,
            Clave: this.objUser.Password,
            MinutosExpiracion: constants.configApiAsistencia.TIME_EXPIRE_TOKEN,
          })
          .then(async (res) => {
            debugger;
            if (res.data.isCorrect) {
              _this.MostrarMensajeSucess("Bienvenido");
              
              functions.setSesion(
                constants.configSession.USER,
                JSON.stringify(res.data.value)
              );
              window.location.href =
                constants.configWebAsistencia.URL_BASE_ADMIN;
            } else {
              
              _this.MostrarMensajeInfo("Credenciales Incorrectas.");
            }
            _this.LimpiarDatosUsuario();
          })
          .catch((error) => {
            _this.MostrarMensajeError("Ocurrió una excepción en el sistema.");
          });
      } else {
        this.SetFocus();
      }
    },

    sendEmail: async function(){
      if (this.validateFormRecoveryPassword()) {
        
      } else {
        this.SetFocusRecoveryPassword();
      }
    },

    validateForm: function() {
      return this.objUser.Access && this.objUser.Password ? true : false;
    },

    validateFormRecoveryPassword(){
      return this.objUser.Email ? true:false;
    },

    SetFocus: function() {
      if (!this.objUser.Access) {
        this.$refs.Access.focus();
      } else if (!this.objUser.Password) {
        this.$refs.Password.focus();
      } else {
        this.$refs.bntSubmit.focus();
      }
    },

    SetFocusRecoveryPassword: function() {
      if (!this.objUser.Email) {
        this.$refs.Email.focus();
      } else {
        this.$refs.btnSend.focus();
      }
    },

    LimpiarDatosUsuario() {
      let _this = this;
      _this.objUser.Access = "";
      _this.objUser.Password = "";
    },

    MostrarMensajeInfo(msg) {
      this.$toast.open({
        message: msg,
        type: "info",
        position: "bottom",
        loaderBg: "#ff6849",
        icon: "info",
        hideAfter: 4000,
        stack: 1,
      });
    },
    MostrarMensajeError(msg) {
      this.$toast.open({
        message: msg,
        type: "error",
        position: "bottom",
        loaderBg: "#ff6849",
        icon: "error",
        hideAfter: 4000,
        stack: 1,
      });
    },

    MostrarMensajeSucess(msg) {
      this.$toast.open({
        message: msg,
        type: "success",
        position: "bottom",
        loaderBg: "#ff6849",
        icon: "success",
        hideAfter: 4000,
        stack: 1,
      });
    },

    RecuperarClave(valor){
      let _this=this;
      _this.flagRecuperarContraseña = valor;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* @import "../../src/styles/bootstrap.scss";
@import "../../src/styles/app.scss"; */



</style>
