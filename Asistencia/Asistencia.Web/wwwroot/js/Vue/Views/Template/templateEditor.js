let app = new Vue({
    i18n: Functions.geti18n(_locale.template),
    el: '#app',
    data: {
        objTemplate: {
            TemplateId: 0,
            EquipmentModelId: 0,
            EquipmentTypeId: 0,
            SubEquipmentModelId: 0,
            TemplateDescription: '',
            ShowCustomer: true,
            ShowDealer: true,
            ShowEquipment: true,
            ShowEquipmentImageRef: true,
            ShowSubEquipment: true,
            ShowSubEquipmentImageRef: true,
            EquipmentImageName: '',
            SubEquipmentImageName: '',
            EquipmentModelIdOld: 0,
            SubEquipmentModelIdOld: 0
        },
        list: {
            TemplateDetailEquipment: [],
            ImgTemplateDetailEquipment: [],
            TemplateDetailSubEquipment: [],
            ImgTemplateDetailSubEquipment: [],
            Components: [],
            Condition: [],
            EquipmentType: [],
            EquipmentModel: [],
            SubEquipmentModel: []
        },
        equipmentType: 0,
        imgEquipment: '',
        imgSubEquipment: '',
        createTemplate: true,
        modifyEquipment: false,
        modifySubEquipment: false
    },
    created: async function () {
        await this.getTemplate();
        await this.getEquipmentTypes('');
        await this.cargarTabs();
        await this.cargarDropify();
        await this.cargarSwitch();
        await this.getConditions('');
        await this.cargarImagen();
        
    },
    mounted: async function () {
        this.$nextTick(() => {

        });
    },
    methods: {

        getTemplate: async function () {
            let _this = this;
            let id = Functions.getSesion('templateId');
            if (id !== null) {
                _this.objTemplate.TemplateId = parseInt(id);
                await _this.selectTemplate(id);

                localStorage.removeItem('templateId');
            }
        },

        cargarImagen: async function () {

            let _this = this;
            Functions.showImageBase64($('#fileEquipment'), _this.objTemplate.EquipmentImageName);
            Functions.showImageBase64($('#fileSubEquipment'), _this.objTemplate.SubEquipmentImageName);

        },

        cargarImagenList: async function (list, table) {
            for (var i = 0; i < list.length; i++) {
                var image = list[i].imageName;
                var input = $(table).find(".imageFile")[i];
                Functions.showImageBase64(input, image);
            }
        },  

        listTemplateDetailEquipment: async function () {

            let _this = this;

            if (_this.list.TemplateDetailEquipment.length === 0 || _this.modifyEquipment) {

                let data = {
                    TemplateId: _this.objTemplate.TemplateId,
                    IsSubEquipment: false,
                    OptionId: _this.objTemplate.EquipmentModelId
                };

                let url = Functions.getUrlApiDynactrl(Constants.configUrlApiDynaCtrl.TEMPLATE_DETAIL_LIST);

                await Base.sendPost(url, JSON.stringify(data)).then(function (data) {
                    var result = (data.data.value.listTemplateDetail) ? data.data.value.listTemplateDetail : [];
                    _this.list.TemplateDetailEquipment = result;
                    _this.objTemplate.EquipmentModelIdOld = _this.objTemplate.EquipmentModelId;
                    _this.modifyEquipment = false;
                });
            }
        },

        listTemplateDetailSubEquipment: async function () {

            let _this = this;

            if (_this.list.TemplateDetailSubEquipment.length === 0) {
                let data = {
                    TemplateId: _this.objTemplate.TemplateId,
                    IsSubEquipment: true,
                    OptionId: _this.objTemplate.SubEquipmentModelId
                };

                let url = Functions.getUrlApiDynactrl(Constants.configUrlApiDynaCtrl.TEMPLATE_DETAIL_LIST);

                await Base.sendPost(url, JSON.stringify(data)).then(function (data) {
                    var result = (data.data.value.listTemplateDetail) ? data.data.value.listTemplateDetail : [];
                    _this.list.TemplateDetailSubEquipment = result;
                });
            }
        },

        getConditions: async function (value) {

            let _this = this;
            let url = Functions.getUrlApiDynactrl(Constants.configUrlApiDynaCtrl.CONDITION_AUTOCOMPLETE);

            await Base.sendAutocomplete(url, value).then(function (data) {
                _this.list.Condition = data;
            });

        },

        getEquipmentTypes: async function (value) {

            let _this = this;
            let url = Functions.getUrlApiDynactrl(Constants.configUrlApiDynaCtrl.EQUIPMENTTYPE_AUTOCOMPLETE);

            await Base.sendAutocomplete(url, value).then(function (data) {
                _this.list.EquipmentType = data;
            });

        },

        getEquipmentModels: async function (value, id) {

            let _this = this;
            let url = Functions.getUrlApiDynactrl(String.format(Constants.configUrlApiDynaCtrl.EQUIPMENTMODEL_AUTOCOMPLETE, _this.objTemplate.EquipmentTypeId));

            await Base.sendAutocomplete(url, value).then(function (data) {
                _this.list.EquipmentModel = data;
                if (id !== undefined) _this.objTemplate.EquipmentModelId = id;
            });

        },

        getSubEquipmentModels: async function (value) {

            let _this = this;
            let url = Functions.getUrlApiDynactrl(Constants.configUrlApiDynaCtrl.SUBEQUIPMENTMODEL_AUTOCOMPLETE);

            await Base.sendAutocomplete(url, value).then(function (data) {
                _this.list.SubEquipmentModel = data;
            });

        },

        changeEquipmentType: async function (e) {

            let _this = this;
            _this.equipmentType = e;
            _this.objTemplate.EquipmentModelId = 0;
            await _this.getEquipmentModels('');
            await _this.getSubEquipmentModels('');
        },

        changeEquipmentModel: function (e) {
            let _this = this;

            if (_this.objTemplate.EquipmentModelIdOld !== 0 && _this.list.TemplateDetailEquipment.length > 0) {
                if (_this.objTemplate.EquipmentModelIdOld !== _this.objTemplate.EquipmentModelId) {
                    Notifications.Messages.warning(Constants.configMessageResponse.CHANGE_EQUIPMENTMODEL);
                    _this.modifyEquipment = true;
                } else {
                    _this.modifyEquipment = false;
                }
            }
        },

        changeSubEquipmentModel: function (e) {
            let _this = this;

            if (_this.objTemplate.SubEquipmentModelIdOld !== 0 && _this.list.TemplateDetailSubEquipment.length > 0) {
                if (_this.objTemplate.SubEquipmentModelIdOld !== _this.objTemplate.SubEquipmentModelId) {
                    Notifications.Messages.warning(Constants.configMessageResponse.CHANGE_SUBEQUIPMENTMODEL);
                    _this.modifySubEquipment = true;
                } else {
                    _this.modifySubEquipment = false;
                }
            }
            
        },

        uploadImageEquipment: async function (input, isSubEquipment) {
            let _this = this;

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    if (isSubEquipment) {
                        _this.imgEquipment = e.target.result;
                    } else {
                        _this.imgSubEquipment = e.target.result;
                    }
                    
                }

                reader.readAsDataURL(input.files[0]); // convert to base64 string
            }
        },

        uploadImageSubEquipment: async function (item, e) {
            let _this = this;
            let img = e.target.files[0];
            _this.list.ImgTemplateDetailSubEquipment.push(img);
            item.imageName = img.name;
        },

        saveTemplate: async function () {

            var _this = this;

            _this.imgEquipment = Functions.getSrcFromDropify($('#fileEquipment'));
            _this.imgSubEquipment = Functions.getSrcFromDropify($('#fileSubEquipment'));

            if (_this.objTemplate.ShowEquipmentImageRef && _this.imgEquipment === '') {
                Notifications.Messages.warning(Constants.configMessageResponse.NOT_SELECT_IMAGE_EQUIPMENT);
                return;
            }

            if (_this.objTemplate.ShowSubEquipmentImageRef && _this.imgSubEquipment === '') {
                Notifications.Messages.warning(Constants.configMessageResponse.NOT_SELECT_IMAGE_SUBEQUIPMENT);
                return;
            }

            let noImage = false;
            let noCondition = false;
            let noOrder = false;
            let noMaximunChars = false;

            $('#tblEquipment > tbody  > tr').each(function (index, tr) {
                let srcImage = Functions.getSrcFromDropify($(tr).find('.imageFile'));
                let inputCondition = _this.list.TemplateDetailEquipment[index].conditionId;
                let inputOrder = _this.list.TemplateDetailEquipment[index].orderNumber;
                let inputChars = _this.list.TemplateDetailEquipment[index].charMaximum;
                let inputShowComment = _this.list.TemplateDetailEquipment[index].showComment;

                if (srcImage === '') {
                    noImage = true;
                    return;
                }
                if (inputCondition === 0) {
                    noCondition = true;
                    return;
                }
                if (inputOrder === '0' || inputOrder === '') {
                    noOrder = true;
                    return;
                }
                if ((inputChars === '0' || inputChars === '') && inputShowComment) {
                    noMaximunChars = true;
                    return;
                }

                _this.list.TemplateDetailEquipment[index].imageBase64 = srcImage;
            });

            if (noImage) {
                Notifications.Messages.warning(Constants.configMessageResponse.NOT_SELECT_IMAGE_LIST_EQUIPMENT);
                return;
            }

            if (noOrder) {
                Notifications.Messages.warning(Constants.configMessageResponse.NOT_SELECT_ORDER_LIST_EQUIPMENT);
                return;
            }

            if (noMaximunChars) {
                Notifications.Messages.warning(Constants.configMessageResponse.NOT_SELECT_MAXCHARS_LIST_EQUIPMENT);
                return;
            }

            $('#tblSubEquipment > tbody  > tr').each(function (index, tr) {
                let srcImage = Functions.getSrcFromDropify($(tr).find('.imageFile'));
                let inputCondition = _this.list.TemplateDetailSubEquipment[index].conditionId;
                let inputOrder = _this.list.TemplateDetailSubEquipment[index].orderNumber;
                let inputChars = _this.list.TemplateDetailSubEquipment[index].charMaximum;
                let inputShowComment = _this.list.TemplateDetailSubEquipment[index].showComment;

                if (srcImage === '') {
                    noImage = true;
                    return;
                }
                if (inputCondition === 0) {
                    noCondition = true;
                    return;
                }
                if (inputOrder === '0' || inputOrder === '') {
                    noOrder = true;
                    return;
                }
                if ((inputChars === '0' || inputChars === '') && inputShowComment) {
                    noMaximunChars = true;
                    return;
                }

                _this.list.TemplateDetailSubEquipment[index].imageBase64 = srcImage;
            });

            if (noImage) {
                Notifications.Messages.warning(Constants.configMessageResponse.NOT_SELECT_IMAGE_LIST_SUBEQUIPMENT);
                return;
            }

            if (noCondition) {
                Notifications.Messages.warning(Constants.configMessageResponse.NOT_SELECT_CONDITION_LIST_SUBEQUIPMENT);
                return;
            }

            if (noOrder) {
                Notifications.Messages.warning(Constants.configMessageResponse.NOT_SELECT_ORDER_LIST_SUBEQUIPMENT);
                return;
            }

            if (noMaximunChars) {
                Notifications.Messages.warning(Constants.configMessageResponse.NOT_SELECT_MAXCHARS_LIST_SUBEQUIPMENT);
                return;
            }

            if (_this.createTemplate) {
                await _this.insertTemplate();
            } else {
                await _this.updateTemplate();
            }

        },

        insertTemplate: async function () {

            let _this = this;

            let data = {
                ListDetailEquipment: _this.list.TemplateDetailEquipment,
                ListDetailSubEquipment: _this.list.TemplateDetailSubEquipment,
                ObjectTemplate: _this.objTemplate,
                ImageEquipment: _this.imgEquipment,
                ImageSubEquipment: _this.imgSubEquipment
            };

            let url = Functions.getUrlApiDynactrl(Constants.configUrlApiDynaCtrl.TEMPLATE_INSERT);

            await Base.sendPost(url, JSON.stringify(data), true).then(function (res) {
                if (res !== undefined) {
                    _this.redirectToIndex();
                }
            });

        },

        updateTemplate: async function () {

            let _this = this;

            let data = {
                ListDetailEquipment: _this.list.TemplateDetailEquipment,
                ListDetailSubEquipment: _this.list.TemplateDetailSubEquipment,
                ObjectTemplate: _this.objTemplate,
                ImageEquipment: _this.imgEquipment,
                ImageSubEquipment: _this.imgSubEquipment
            };

            let url = Functions.getUrlApiDynactrl(String.format(Constants.configUrlApiDynaCtrl.TEMPLATE_UPDATE, _this.objTemplate.TemplateId));

            await Base.sendPost(url, JSON.stringify(data), true).then(function (res) {
                if (res !== undefined) {
                    _this.redirectToIndex();
                }
            });

        },

        selectTemplate: async function (templateId) {
            let _this = this;

            _this.createTemplate = false;

            var url = Functions.getUrlApiDynactrl(String.format(Constants.configUrlApiDynaCtrl.TEMPLATE_SELECT, templateId));

            await Base.sendGet(url).then(function (data) {
                _this.objTemplate.TemplateId = data.data.value.objectTemplate.templateId;
                _this.objTemplate.EquipmentTypeId = data.data.value.objectTemplate.equipmentTypeId;
                _this.getEquipmentModels('', data.data.value.objectTemplate.equipmentModelId);
                _this.objTemplate.EquipmentModelId = data.data.value.objectTemplate.equipmentModelId;
                _this.objTemplate.SubEquipmentModelId = data.data.value.objectTemplate.subEquipmentModelId;
                _this.objTemplate.TemplateDescription = data.data.value.objectTemplate.templateDescription;
                _this.objTemplate.ShowCustomer = data.data.value.objectTemplate.showCustomer;
                _this.objTemplate.ShowDealer = data.data.value.objectTemplate.showDealer;
                _this.objTemplate.ShowEquipment = data.data.value.objectTemplate.showEquipment;
                _this.objTemplate.ShowEquipmentImageRef = data.data.value.objectTemplate.showEquipmentImageRef;
                _this.objTemplate.ShowSubEquipment = data.data.value.objectTemplate.showSubEquipment;
                _this.objTemplate.ShowSubEquipmentImageRef = data.data.value.objectTemplate.showSubEquipmentImageRef;
                _this.objTemplate.EquipmentImageName = data.data.value.objectTemplate.equipmentImageName;
                _this.objTemplate.SubEquipmentImageName = data.data.value.objectTemplate.subEquipmentImageName;
            });
        },

        cargarDropify: async function () {
            $('.dropify').dropify();

            let _this = this;
            $("#fileEquipment").change(function () {
                _this.uploadImageEquipment(this, false);
            });

            $("#fileSubEquipment").change(function () {
                _this.uploadImageEquipment(this, true);
            });
        },

        cargarTabs: async function () {

            let _this = this;
            [].slice.call(document.querySelectorAll('.sttabs')).forEach(function (el) {
                new CBPFWTabs(el);
            });

            $('nav li').click(function () {
                let tab = $(this).find('a').attr("data-tab");
                _this.listByTab(parseInt(tab));
            });
        },

        cargarSwitch: async function () {
            var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
            $('.js-switch').each(function () {
                new Switchery($(this)[0], $(this).data());
            });
        },

        validateTab: function (tab) {
            if (tab === 1 || tab === 2) {
                return (this.objTemplate.EquipmentModelId &&
                    this.objTemplate.EquipmentTypeId &&
                    this.objTemplate.SubEquipmentModelId &&
                    this.objTemplate.TemplateDescription) ? true : false;
            }
            return true;

        },

        goIndex: function () {
            window.location.href = '/Template/Index';
        },

        listByTab: async function (tab) {
            if (tab === 1) {
                await this.listTemplateDetailEquipment();
                await this.cargarDropify();
                await this.cargarImagenList(this.list.TemplateDetailEquipment, $("#tblEquipment"));

            } else if (tab === 2) {
                await this.listTemplateDetailSubEquipment();
                await this.cargarDropify();
                await this.cargarImagenList(this.list.TemplateDetailSubEquipment, $("#tblSubEquipment"));
            }
        },

        goTab: async function (tab) {

            if (this.validateTab(tab)) {
                await this.listByTab(tab);
                $('.sticon')[tab].click(); 
            }

        },

        SetFocus: function () {
            if (!this.objUsuario.Acceso) {
                this.$refs.Acceso.focus();
            } else if (!this.objUsuario.Clave) {
                this.$refs.Clave.focus();
            } else {
                this.$refs.bntSubmit.focus();
            }
        },

        redirectToIndex: function () {
            window.location.href = '/Template/Index';
        },

        close: function (code) {
            if (code === 1) {
                this.clearRole();
                $('#appEditRole').modal('hide');
                this.$nextTick(() => {

                });
            } else if (code === 2) {
                $('#appEditOptions').modal('hide');
                this.$nextTick(() => {

                });
            }
        }
    },
    computed: {
        FullTab1: function () {
            return this.validateTab(1);
        },

    },
    watch: {

    }
});