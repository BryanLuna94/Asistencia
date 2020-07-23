let appLogin = new Vue({
    i18n: Functions.geti18n(_locale.login),
    el: '#appLogin',
    data: {
        objUser: {
            Access: '',
            Password: ''
        }
    },
    created: async function () {

    },
    mounted: async function () {
        this.$nextTick(() => {

        });
    },
    methods: {

        login: async function () {

            let _this = this;

            if (_this.validateForm()) {

                await axios.post(Functions.getUrlApiDynactrl('api/Autenticacion/Login'), {
                    Acceso: _this.objUser.Access,
                    Clave: _this.objUser.Password,
                    MinutosExpiracion: Constants.configApiDynaCtrl.TIME_EXPIRE_TOKEN
                })
                    .then(async res => {
                        if (res.data.isCorrect) {
                            Notifications.Messages.info(Constants.configMessageResponse.USER_AUTHORIZE);
                            Functions.setSesion(Constants.configSession.USER, JSON.stringify(res.data.value));
                            window.location.href = rutaIndex;
                        } else {
                            Functions.getErrorResponse(res.data.status);
                        }
                    })
                    .catch(error => {
                        Functions.getErrorResponse(error.response.status);
                    });

            } else {
                _this.SetFocus();
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
    },
    computed: {
        FullFields: function () {
            return this.validateForm();
        }
    },
    watch: {

    }
});