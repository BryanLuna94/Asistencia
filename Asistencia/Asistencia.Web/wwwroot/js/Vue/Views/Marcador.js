let apMarcador = new Vue({
    el: '#appMarcador',
    data: {
        message: "",
        fechaHoy: '',
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
        objFilter: {
            id: 0,
            descripcion: ''
        },
        list: {
            Marcador: []
        },
        paginate: ['list.Marcador'],
        createMarcador: true,
    },
    created: async function () {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        $('.js-switch').each(function () {
            new Switchery($(this)[0], $(this).data());
        });
    },
    mounted: async function () {
        //this.callFunction()
        setInterval(this.callFunction, 1000);
    },
    methods: {

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

        callFunction: function () {

            var currentDate = new Date();
            //console.log(currentDate);

            var currentDateWithFormat = moment(currentDate, 'YYYY-MM-DD hh:mm:ss').format('hh:mm:ss a');
            //console.log(currentDateWithFormat);
            this.message = currentDateWithFormat;
            this.fechaHoy = moment(currentDate, 'YYYY-MM-DD hh:mm:ss').format('DD-MM-YYYY');

        },

        listMarcador: async function () {
            let _this = this;

            //let url = "https://192.168.1.3:444/api/Marcadors";

            //await Base.getList(url).then(function (data) {
            //    _this.list.Marcador = [];
            //});

            axios.get('https://localhost/api/Marcadors')
                .then((respuesta) => {
                    _this.list.Marcador = respuesta.data;
                })
                .catch(error => {
                    //error.response.status;
                    console.log(error);
                });


        },

        showEditor: async function (itemMarcador) {

            var _this = this;

            _this.clearMarcador();
            //await this.getRoles('');
            //await this.getCompanys('');

            if (itemMarcador !== undefined) {
                _this.selectMarcador(itemMarcador);
            } else {
                _this.createMarcador = true;
            }
            $('#appEditMarcador').modal('show');

        },

        saveMarcador: async function () {

            var _this = this;

            if (_this.createMarcador) {
                await _this.insertMarcador();
            } else {
                await _this.updateMarcador();
            }

        },

        insertMarcador: async function () {

            let _this = this;

            let data = {
                ObjectMarcador: _this.objMarcador
            };

            //let url = Functions.getUrlApiDynactrl(Constants.configUrlApiDynaCtrl.USER_INSERT);

            //await Base.sendPost(url, JSON.stringify(data), true).then(function (data) {
            //    if (data !== undefined) {
            //        _this.close(1);
            //        _this.listUser();
            //    }
            //});

            axios.post('https://localhost/api/Marcadors', {
                id: 0,
                descripcion: _this.objMarcador.descripcion,
            })
                .then((respuesta) => {
                    console.log(respuesta);
                    if (respuesta.status == 201) {
                        _this.close(1);
                        _this.listMarcador();
                    }
                }).catch((error) => {
                    console.log(error);
                });


        },

        updateMarcador: async function () {

            let _this = this;

            //let data = {
            //    ObjectUser: _this.objUser
            //};

            //var url = Functions.getUrlApiDynactrl(String.format(Constants.configUrlApiDynaCtrl.USER_UPDATE, _this.objUser.UserId));

            //await Base.sendPut(url, JSON.stringify(data)).then(function (data) {
            //    _this.close(1);
            //    _this.listUser();
            //});

            axios.put('https://localhost/api/Marcadors/' + _this.objMarcador.id, {
                id: _this.objMarcador.id,
                descripcion: _this.objMarcador.descripcion,
            },
                {
                    headers: { "Access-Control-Allow-Origin": "*" }
                })
                .then((respuesta) => {
                    console.log(respuesta);
                    if (respuesta.status == 200) {
                        _this.close(1);
                        _this.listMarcador();
                    }
                }).catch((error) => {
                    console.log(error);
                });



        },

        selectMarcador: async function (itemMarcador) {
            let _this = this;

            _this.createMarcador = false;

            //var url = Functions.getUrlApiDynactrl(String.format(Constants.configUrlApiDynaCtrl.USER_SELECT, itemUser.userId));

            //await Base.sendGet(url).then(function (data) {
            //    _this.objUser.UserId = data.data.value.objectUser.userId;
            //    _this.objUser.RoleId = data.data.value.objectUser.roleId;
            //    _this.objUser.UserName = data.data.value.objectUser.userName;
            //    _this.objUser.UserPassword = data.data.value.objectUser.userPassword;
            //    _this.objUser.UserLastName = data.data.value.objectUser.userLastName;
            //    _this.objUser.UserFirstName = data.data.value.objectUser.userFirstName;
            //    _this.objUser.UserMail = data.data.value.objectUser.userMail;
            //    _this.objUser.IsDisable = data.data.value.objectUser.isDisable;
            //    _this.objUser.CompanyId = data.data.value.objectUser.companyId;
            //});

            axios.get('https://localhost/api/Marcadors/' + itemMarcador.id)
                .then((respuesta) => {
                    _this.objMarcador.id = respuesta.data.id;
                    _this.objMarcador.descripcion = respuesta.data.descripcion;
                });

        },

        deleteMarcador: async function (itemMarcador) {
            let _this = this;

            //var url = Functions.getUrlApiDynactrl(String.format(Constants.configUrlApiDynaCtrl.USER_DISABLE, itemUser.userId));

            //await Functions.showConfirm().then(function (data) {
            //    if (data) {
            //        Base.sendPut(url, undefined, true).then(function (data) {
            //            _this.listUser();
            //        });
            //    }
            //});
            await Functions.showConfirm().then(function (data) {
            if (data) {
                axios.delete('https://localhost/api/Marcadors/' + itemMarcador.id)
                        .then(response => {
                            _this.listMarcador();
                        });
                }
            });

        },

        clearMarcador: async function () {

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

        validateForm: function () {
            return (
                (this.objMarcador.id || this.objMarcador.descripcion || !this.createMarcador)) ? true : false;
        },

        //SetFocus: function () {
        //    if (!this.objUsuario.Acceso) {
        //        this.$refs.Acceso.focus();
        //    } else if (!this.objUsuario.Clave) {
        //        this.$refs.Clave.focus();
        //    } else {
        //        this.$refs.bntSubmit.focus();
        //    }
        //},

        close: function (code) {
            if (code === 1) {
                this.clearMarcador();
                $('#appEditMarcador').modal('hide');
                this.$nextTick(() => {

                });
            }
        }
    },
    computed: {
        FullMarcador: function () {
            return this.validateForm();
        }
    },
    watch: {

    }
});