<template>
  <div class="limiter">
    <div class="container-login100">
      <div v-if="flagRecuperarContraseña==false" class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
        <form
          class="login100-form validate-form"
          id="loginform"
          method="get"
          autocomplete="off"
        >
          <span class="login100-form-title p-b-33">
            Iniciar sesión
          </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input100"
              v-model="objUser.Access"
              id="Access"
              type="text"
              @@keypress.enter.prevent="login"
              ref="Access"
              placeholder="Usuario"
            />
            <span class="focus-input100-1"></span>
            <span class="focus-input100-2"></span>
          </div>

          <div
            class="wrap-input100 rs1 validate-input"
            data-validate="Password is required"
          >
            <input
              class="input100"
              v-model="objUser.Password"
              id="Password"
              type="password"
              @@keypress.enter.prevent="login"
              ref="Password"
              placeholder="Clave"
            />
            <span class="focus-input100-1"></span>
            <span class="focus-input100-2"></span>
          </div>

          <div class="container-login100-form-btn m-t-20">
            <button
              class="login100-form-btn"
              v-on:click.prevent="login()"
              ref="bntSubmit"
              type="submit"
            >
              Ingresar
            </button>
          </div>

          <div class="text-center p-t-45 p-b-4">
            <!-- <span class="txt1">
              Olvi
            </span> -->

            <a href="javascript:void(0)" v-on:click.prevent="RecuperarClave(true)" class="txt2 hov1">
              ¿Olvidó su contraseña?
            </a>
          </div>

          <div class="text-center">
            <!-- <span class="txt1">
              Create an account?
            </span>

            <a href="#" class="txt2 hov1">
              Sign up
            </a> -->
          </div>
        </form>
      </div>

      <div v-else class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          <form
            class="login100-form validate-form"
            id="loginformRecoverPassword"
            method="get"
            autocomplete="off"
          >
            <span class="login100-form-title p-b-33">
              Recuperar Acceso
            </span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                class="input100"
                v-model="objUser.Email"
                id="Email"
                type="email"
                ref="Email"
                placeholder="Correo"
              />
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
            </div>
            <div class="container-login100-form-btn m-t-20">
              <button
                class="login100-form-btn"
                v-on:click.prevent="sendEmail()"
                ref="btnSend"
                type="submit"
              >
                Enviar
              </button>
            </div>

            <div class="text-center p-t-45 p-b-4">
               <a href="javascript:void(0)" v-on:click.prevent="RecuperarClave(false)" class="txt2 hov1">
                Login
              </a>
            </div>

          </form>
      </div>
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
<style type="scss" scoped>
@import "../../src/styles/main.css";
@import "../../src/styles/util.css";

input {
  outline: none;
  border: none;
}
</style>
