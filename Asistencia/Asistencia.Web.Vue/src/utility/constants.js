var constants = {

    configApiAsistencia: {

        // URL_BASE: 'https://localhost:44343/',
        URL_BASE: 'https://apimarcador.somee.com/',
        TIME_EXPIRE_TOKEN: '144000'

    },

    configWeb: {

        IDIOMA_DEFECTO: 'en',
        NAME: 'ASISTENCIA',
        COPYRIGHT: 'VR1 Software'

    },

    pathsWeb: {

        PATH_LOGO_WEB: 'AmpleAdmin/plugins/images/dynactrl-logo.png',
        PATH_LOGO_TEXT: 'AmpleAdmin/plugins/images/dynactrl-text.png',
        PATH_IMAGEN_USER: 'AmpleAdmin/plugins/images/user.png',
        PATH_ENTIRE_LOGO: 'AmpleAdmin/plugins/images/dynactrl-complete.png',
        
    },

    configSession : {

        USER: 'userLogin',
        LANGUAGE: 'languaje'

    },

    configUrlApiAsistencia: {

        USUARIO_LOGIN: 'api/Autenticacion/Login',
        USER_LIST: 'api/User/ListUser',
        USER_SELECT: 'api/User/SelectUser/{0}',
        USER_INSERT: 'api/User/InsertUser',
        USER_UPDATE: 'api/User/UpdateUser/{0}',
        USER_DISABLE: 'api/User/DisableUser/{0}',

        EMPLOYEE_INSERT: 'api/Empleado/InsertEmpleado',
        EMPLOYEE_UPDATE: 'api/Empleado/UpdateEmpleado/',
        EMPLOYEE_DISABLE: 'api/Empleado/DisableEmpleado/',
        EMPLOYEE_LIST: 'api/Empleado/ListEmpleado',
        EMPLOYEE_SELECT: 'api/Empleado/SelectEmpleado/',

        MARCADOR_INSERT: 'api/Marcador/InsertMarcador',
        MARCADOR_UPDATE: 'api/Marcador/UpdateMarcador/',
        MARCADOR_DISABLE: 'api/Marcador/DisableMarcador/',
        MARCADOR_LIST: 'api/Marcador/ListMarcador',
        MARCADOR_SELECT: 'api/Marcador/SelectMarcador/',

        COMPANY_INSERT: 'api/Company/InsertCompany',
        COMPANY_UPDATE: 'api/Company/UpdateCompany/{0}',
        COMPANY_DISABLE: 'api/Company/DisableCompany/{0}',
        COMPANY_LIST: 'api/Company/ListCompany',
        COMPANY_SELECT: 'api/Company/SelectCompany/{0}',

        COMPONENT_INSERT: 'api/Component/InsertComponent',
        COMPONENT_UPDATE: 'api/Component/UpdateComponent/{0}',
        COMPONENT_DISABLE: 'api/Component/DisableComponent/{0}',
        COMPONENT_LIST: 'api/Component/ListComponent',
        COMPONENT_SELECT: 'api/Component/SelectComponent/{0}',

        COUNTRY_INSERT: 'api/Country/InsertCountry',
        COUNTRY_UPDATE: 'api/Country/UpdateCountry/{0}',
        COUNTRY_DISABLE: 'api/Country/DisableCountry/{0}',
        COUNTRY_LIST: 'api/Country/ListCountry',
        COUNTRY_SELECT: 'api/Country/SelectCountry/{0}',

        CUSTOMER_INSERT: 'api/Customer/InsertCustomer',
        CUSTOMER_UPDATE: 'api/Customer/UpdateCustomer/{0}',
        CUSTOMER_DISABLE: 'api/Customer/DisableCustomer/{0}',
        CUSTOMER_LIST: 'api/Customer/ListCustomer',
        CUSTOMER_SELECT: 'api/Customer/SelectCustomer/{0}',

        DEALER_INSERT: 'api/Dealer/InsertDealer',
        DEALER_UPDATE: 'api/Dealer/UpdateDealer/{0}',
        DEALER_DISABLE: 'api/Dealer/DisableDealer/{0}',
        DEALER_LIST: 'api/Dealer/ListDealer',
        DEALER_SELECT: 'api/Dealer/SelectDealer/{0}',

        EQUIPMENT_INSERT: 'api/Equipment/InsertEquipment',
        EQUIPMENT_UPDATE: 'api/Equipment/UpdateEquipment/{0}',
        EQUIPMENT_DISABLE: 'api/Equipment/DisableEquipment/{0}',
        EQUIPMENT_LIST: 'api/Equipment/ListEquipment',
        EQUIPMENT_SELECT: 'api/Equipment/SelectEquipment/{0}',

        EQUIPMENTMODEL_INSERT: 'api/EquipmentModel/InsertEquipmentModel',
        EQUIPMENTMODEL_UPDATE: 'api/EquipmentModel/UpdateEquipmentModel/{0}',
        EQUIPMENTMODEL_DISABLE: 'api/EquipmentModel/DisableEquipmentModel/{0}',
        EQUIPMENTMODEL_LIST: 'api/EquipmentModel/ListEquipmentModel',
        EQUIPMENTMODEL_SELECT: 'api/EquipmentModel/SelectEquipmentModel/{0}',

        EQUIPMENTTYPE_INSERT: 'api/EquipmentType/InsertEquipmentType',
        EQUIPMENTTYPE_UPDATE: 'api/EquipmentType/UpdateEquipmentType/{0}',
        EQUIPMENTTYPE_DISABLE: 'api/EquipmentType/DisableEquipmentType/{0}',
        EQUIPMENTTYPE_LIST: 'api/EquipmentType/ListEquipmentType',
        EQUIPMENTTYPE_SELECT: 'api/EquipmentType/SelectEquipmentType/{0}',

        LANGUAGE_INSERT: 'api/Language/InsertLanguage',
        LANGUAGE_UPDATE: 'api/Language/UpdateLanguage/{0}',
        LANGUAGE_DISABLE: 'api/Language/DisableLanguage/{0}',
        LANGUAGE_LIST: 'api/Language/ListLanguage',
        LANGUAGE_SELECT: 'api/Language/SelectLanguage/{0}',

        REGION_INSERT: 'api/Region/InsertRegion',
        REGION_UPDATE: 'api/Region/UpdateRegion/{0}',
        REGION_DISABLE: 'api/Region/DisableRegion/{0}',
        REGION_LIST: 'api/Region/ListRegion',
        REGION_SELECT: 'api/Region/SelectRegion/{0}',

        ROLE_LIST: 'api/Role/ListRole',
        ROLE_SELECT: 'api/Role/SelectRole/{0}',
        ROLE_INSERT: 'api/Role/InsertRole',
        ROLE_UPDATE: 'api/Role/UpdateRole/{0}',
        ROLE_DISABLE: 'api/Role/DisableRole/{0}',
        ROLE_OPTIONS_LIST_TREEVIEW: 'api/Role/ListRoleOptionsTreeView/{0}',

        SUBEQUIPMENT_INSERT: 'api/SubEquipment/InsertSubEquipment',
        SUBEQUIPMENT_UPDATE: 'api/SubEquipment/UpdateSubEquipment/{0}',
        SUBEQUIPMENT_DISABLE: 'api/SubEquipment/DisableSubEquipment/{0}',
        SUBEQUIPMENT_LIST: 'api/SubEquipment/ListSubEquipment',
        SUBEQUIPMENT_SELECT: 'api/SubEquipment/SelectSubEquipment/{0}',

        SUBEQUIPMENTMODEL_INSERT: 'api/SubEquipmentModel/InsertSubEquipmentModel',
        SUBEQUIPMENTMODEL_UPDATE: 'api/SubEquipmentModel/UpdateSubEquipmentModel/{0}',
        SUBEQUIPMENTMODEL_DISABLE: 'api/SubEquipmentModel/DisableSubEquipmentModel/{0}',
        SUBEQUIPMENTMODEL_LIST: 'api/SubEquipmentModel/ListSubEquipmentModel',
        SUBEQUIPMENTMODEL_SELECT: 'api/SubEquipmentModel/SelectSubEquipmentModel/{0}',

        TEMPLATE_LIST: 'api/Template/ListTemplate',
        TEMPLATE_SELECT: 'api/Template/SelectTemplate/{0}',
        TEMPLATE_INSERT: 'api/Template/InsertTemplate',
        TEMPLATE_UPDATE: 'api/Template/UpdateTemplate/{0}',
        TEMPLATE_DISABLE: 'api/Template/DisableTemplate/{0}',
        TEMPLATE_DETAIL_LIST: 'api/Template/ListTemplateDetail',

        COMPANY_AUTOCOMPLETE: 'api/Base/ListCompanyAutocomplete/',
        COMPONENT_AUTOCOMPLETE: 'api/Base/ListComponentAutocomplete/',
        CONDITION_AUTOCOMPLETE: 'api/Base/ListConditionAutocomplete/',
        COUNTRY_AUTOCOMPLETE: 'api/Base/ListCountryAutocomplete/',
        CUSTOMER_AUTOCOMPLETE: 'api/Base/ListCustomerAutocomplete/',
        DEALER_AUTOCOMPLETE: 'api/Base/ListDealerAutocomplete/',
        EQUIPMENT_AUTOCOMPLETE: 'api/Base/ListEquipmentAutocomplete/{0}/',
        EQUIPMENTMODEL_AUTOCOMPLETE: 'api/Base/ListEquipmentModelAutocomplete/{0}/',
        EQUIPMENTTYPE_AUTOCOMPLETE: 'api/Base/ListEquipmentTypeAutocomplete/',
        LANGUAGE_AUTOCOMPLETE: 'api/Base/ListLanguageAutocomplete/',
        REGION_AUTOCOMPLETE: 'api/Base/ListRegionAutocomplete/',
        ROLE_AUTOCOMPLETE: 'api/Base/ListRoleAutocomplete/',
        SUBEQUIPMENT_AUTOCOMPLETE: 'api/Base/ListSubEquipmentAutocomplete/',
        SUBEQUIPMENTMODEL_AUTOCOMPLETE: 'api/Base/ListSubEquipmentModelAutocomplete/{0}/',
        USER_AUTOCOMPLETE: 'api/Base/ListUserAutocomplete/',
    },

    configMessageResponse: {

        USER_AUTHORIZE: 'Usuario Autorizado',
        NOT_SELECT_IMAGE_EQUIPMENT: 'Debe seleccionar una imagen de equipo de referencia',
        NOT_SELECT_IMAGE_SUBEQUIPMENT: 'Debe seleccionar una imagen de sub equipo de referencia',
        NOT_SELECT_IMAGE_LIST_EQUIPMENT: 'Datos de imágenes incompletas en sección de equipos',
        NOT_SELECT_CONDITION_LIST_EQUIPMENT: 'Datos de condición incompletas en sección de equipos',
        NOT_SELECT_ORDER_LIST_EQUIPMENT: 'Datos de order incompletas en sección de equipos',
        NOT_SELECT_MAXCHARS_LIST_EQUIPMENT: 'Datos de cantidad máxima de caracteres incompletas en sección de equipos',
        NOT_SELECT_IMAGE_LIST_SUBEQUIPMENT: 'Datos de imágenes incompletas en sección de sub equipos',
        NOT_SELECT_CONDITION_LIST_SUBEQUIPMENT: 'Datos de condición incompletas en sección de sub equipos',
        NOT_SELECT_ORDER_LIST_SUBEQUIPMENT: 'Datos de order incompletas en sección de sub equipos',
        NOT_SELECT_MAXCHARS_LIST_SUBEQUIPMENT: 'Datos de cantidad máxima de caracteres incompletas en sección de sub equipos',

        CHANGE_EQUIPMENTMODEL: 'Recuerde que si modifica este valor cambiará la lista de equipos',
        CHANGE_SUBEQUIPMENTMODEL: 'Recuerde que si modifica este valor cambiará la lista de sub equipos',
    },

}

export default constants