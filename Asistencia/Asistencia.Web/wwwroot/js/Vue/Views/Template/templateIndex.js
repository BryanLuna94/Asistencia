let app = new Vue({
    i18n: Functions.geti18n(_locale.template),
    el: '#app',
    data: {
        objFilter: {
            TemplateDescription: '',
            EquipmentModelId: 0,
            EquipmentTypeId: 0,
            SubEquipmentModelId: 0
        },
        list: {
            Template: [],
            Condition: [],
            EquipmentType: [],
            EquipmentModel: [],
            SubEquipmentModel: []
        },
        paginate: ['list.Template'],
        equipmentType: 0,
        imgEquipment: [],
        imgSubEquipment: []
    },
    created: async function () {
        await this.listTemplate();
        await this.getEquipmentTypes('');
    },
    mounted: async function () {
        this.$nextTick(() => {

        });
    },
    methods: {

        listTemplate: async function () {

            let _this = this;

            let data = {
                FilterTemplate: _this.objFilter
            };

            let url = Functions.getUrlApiDynactrl(Constants.configUrlApiDynaCtrl.TEMPLATE_LIST);

            await Base.sendPost(url, JSON.stringify(data)).then(function (data) {
                _this.list.Template = (data.data.value.listTemplate) ? data.data.value.listTemplate : [];
            });
        },

        showEditor: async function (itemRole) {

            let _this = this;

            if (itemRole === undefined) {
                _this.createTemplate = true;
            } else {
                Functions.setSesion('templateId', itemRole.templateId);
            }
            window.location.href = '/Template/Editor';

        },

        getConditions: async function (value) {

            let _this = this;
            let url = Functions.getUrlApiDynactrl(Constants.configUrlApiDynaCtrl.EQUIPMENTTYPE_AUTOCOMPLETE);

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

        getEquipmentModels: async function (value) {

            let _this = this;
            let url = Functions.getUrlApiDynactrl(String.format(Constants.configUrlApiDynaCtrl.EQUIPMENTMODEL_AUTOCOMPLETE, _this.objTemplate.EquipmentTypeId));

            await Base.sendAutocomplete(url, value).then(function (data) {
                _this.list.EquipmentModel = data;
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

        selectRole: async function (itemRole) {
            let _this = this;

            _this.createRole = false;

            var url = Functions.getUrlApiDynactrl(String.format(Constants.configUrlApiDynaCtrl.ROLE_SELECT, itemRole.roleId));

            await Base.sendGet(url).then(function (data) {
                _this.objRole.RoleId = data.data.value.objectRole.roleId;
                _this.objRole.RoleDescription = data.data.value.objectRole.roleDescription;
                _this.objRole.IsDisable = data.data.value.objectRole.isDisable;
            });
        },

    },
    computed: {
        
    },
    watch: {

    }
});