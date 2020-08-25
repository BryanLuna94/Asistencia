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
                <p class="text-center py-2">RESTABLECIMIENTO DE CONTRASEÑA</p>
                <form data-vv-scope="recover">
                    <p class="text-center">Complete con su correo para recibir instrucciones sobre cómo restablecer su contraseña.</p>
                    <div class="form-group">
                        <label class="text-muted" for="resetInputEmail1">Dirección de correo electrónico</label>
                        <div class="input-group with-focus">

                            <input :class="{'form-control border-right-0':true, 'is-invalid': ''}" placeholder="Ingresar correo" v-model="recover.email" v-validate="'required|email'" type="text" name="email"/>
                            <div class="input-group-append">
                                <span class="input-group-text text-muted bg-transparent border-left-0">
                                    <em class="fa fa-envelope"></em>
                                </span>
                            </div>
                            <!-- <span v-show="errors.has('recover.email')" class="invalid-feedback">{{ errors.first('recover.email') }}</span> -->
                        </div>
                    </div>
                    <button class="btn btn-danger btn-block" type="submit">Restablecer</button>
                </form>
                <div class="clearfix">
                    <div class="float-left">
                    </div>
                    <div class="float-right">
                        <router-link class="text-muted" to="/login">
                            <small>Login</small>
                        </router-link>
                        

                    </div>
                </div>

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
    import Vue from 'vue'
    // import VeeValidate from 'vee-validate';

    // Vue.use(VeeValidate, {
    //     fieldsBagName: 'formFields'  // fix issue with b-table
    // })

    export default {
        data() {
            return {
                recover: {
                    email: ''
                }
            }
        },
        methods: {
            validateBeforeSubmit(scope) {
                // this.$validator.validateAll(scope).then((result) => {
                //     if (result) {
                //         console.log('Form Submitted!');
                //         console.log(`Email: ${this.recover.email}`)
                //         return;
                //     }
                //     console.log('Correct them errors!');
                // });
            }
        }
    }
</script>
