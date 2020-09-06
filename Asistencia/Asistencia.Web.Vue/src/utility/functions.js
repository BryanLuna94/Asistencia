import constants from '@/utility/constants';

var functions = {

    getSesion: function (nameItem) {
        var value = localStorage.getItem(nameItem);
        return value;
    },

    setSesion: function (nameItem, valueItem) {
        localStorage.setItem(nameItem, valueItem);
    },

    logout: function () {
        localStorage.removeItem(constants.configSession.USER);
        window.location.href = constants.configWebAsistencia.URL_BASE_LOGIN;
    },


    getUrlApiAsistencia: function (url) {
        return constants.configApiAsistencia.URL_BASE + url;
    },

    getUserData: function () {
        var value = localStorage.getItem(constants.configSession.USER);
        if (value === null) {
            this.logout();
        }
        return JSON.parse(value);
    },


    getErrorResponse: function (status) {
        if (status) {
            switch (status) {

                case 401:
                    Notifications.Messages.warning('Acceso Denegado');
                    this.logout();
                    break;
                case 404:
                    Notifications.Messages.error('Recurso no encontrado');
                    break;
                case 500:
                    Notifications.Messages.error('Error Interno');
                    break;
                case 501:
                    Notifications.Messages.warning('Registro ya existe');
                    break;
                case 502:
                    Notifications.Messages.warning('Credenciales incorrectas');
                    break;
                default:
                    Notifications.Messages.error('Error no indentificado');
                    break;
            }
        }
    },

    geti18n: function (message) {

        return new VueI18n({
            locale: Functions.getCurrentLanguage(),
            fallbackLocale: 'en',
            messages: message
        });
    },

    showConfirm: function (text, confirmButtonText) {

        if (text === undefined) text = 'Deseas eliminar este registro';
        if (confirmButtonText === undefined) confirmButtonText = 'Sì, Eliminar Registro';

        return Swal.fire({
            title: '¿Estas Seguro?',
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtonText
        }).then((result) => {
            if (result.value) {
                //swal-end
                return true;
            }
        });
    },

    getUrlBase: function (alternativePath) {
        return location.origin + '/' + alternativePath;
    },

    getSrcFromDropify: function (inputFile) {
        var valorSrc = $(inputFile).parent().find('.dropify-preview').find('.dropify-render').find("img").attr("src");
        if (valorSrc === undefined) valorSrc = '';
        return valorSrc;
    },

    showImageBase64: function (inputFile, base64) {
        if (base64 !== '') {
            $(inputFile).parent().find('.dropify-preview').find('.dropify-render').html('<img src="' + base64 + '">');
            $(inputFile).parent().find('.dropify-preview').css("display", "block");
            $(inputFile).parent().addClass("has-preview");
        } else {
            var drEvent = $(inputFile).dropify();
            drEvent = drEvent.data('dropify');
            if (drEvent !== undefined) {
                drEvent.resetPreview();
                drEvent.clearElement();
            }
        }
    },


}

export default functions