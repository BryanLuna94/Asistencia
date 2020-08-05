<template>
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
				<form class="login100-form validate-form" id="loginform" method="get" autocomplete="off">
					<span class="login100-form-title p-b-33">
						Account Login
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <input class="input100" 
                            v-model="objUser.Access"
                            id="Access"
                            type="text"
                            @@keypress.enter.prevent="login"
                            ref="Access"
                            placeholder="Email">
						<span class="focus-input100-1"></span>
						<span class="focus-input100-2"></span>
					</div>

					<div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
						<input class="input100" 
                            v-model="objUser.Password"
                            id="Password"
                            type="password"
                            @@keypress.enter.prevent="login"
                            ref="Password"
                            placeholder="Password">
						<span class="focus-input100-1"></span>
						<span class="focus-input100-2"></span>
					</div>

					<div class="container-login100-form-btn m-t-20">
						<button class="login100-form-btn"
                        v-on:click.prevent="login()" ref="bntSubmit" type="submit"
                        >
							Sign in
						</button>
					</div>

					<div class="text-center p-t-45 p-b-4">

						<span class="txt1">
							Forgot
						</span>

						<a href="javascript:void(0)" class="txt2 hov1">
							Username / Password?
						</a>
					</div>

					<div class="text-center">
						<span class="txt1">
							Create an account?
						</span>

						<a href="#" class="txt2 hov1">
							Sign up
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	
</template>

<script>
    export default {
        name: 'login',
        props: {
            msg: 'String'
        },
        data(){
            return {
                titulo: 'Login',
                objUser: {
                    Access: '',
                    Password: ''
                }


            }
        },
        methods:{
            login: async function () {
                if (this.validateForm()) {

                    // await axios.post(Functions.getUrlApiDynactrl('api/Autenticacion/Login'), {
                    //     Acceso: this.objUser.Access,
                    //     Clave: this.objUser.Password,
                    //     MinutosExpiracion: Constants.configApiDynaCtrl.TIME_EXPIRE_TOKEN
                    // })
                    // .then(async res => {
                    //     if (res.data.isCorrect) {
                    //         Notifications.Messages.success(Constants.configMessageResponse.USER_AUTHORIZE);
                    //         Functions.setSesion(Constants.configSession.USER, JSON.stringify(res.data.value));
                    //         window.location.href = rutaIndex;
                    //     } else {
                    //         Functions.getErrorResponse(res.data.status);
                    //     }
                    // })
                    // .catch(error => {
                    //     Functions.getErrorResponse(error.response.status);
                    // });

                } else {
                    this.SetFocus();
                }
            },
            validateForm: function () {
                return (this.objUser.Access && this.objUser.Password) ? true : false;
            },

            SetFocus: function () {
                if (!this.objUser.Access) {
                    this.$refs.Access.focus();
                } else if (!this.objUser.Password) {
                    this.$refs.Password.focus();
                } else {
                    this.$refs.bntSubmit.focus();
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="scss" scoped>
@import '../../src/styles/main.css';
@import '../../src/styles/util.css';

input {
	outline: none;
	border: none;
}


</style>

