var Functions = {

    getSesion: function (nameItem) {
        var value = localStorage.getItem(nameItem);
        return value;
    },

    setSesion: function (nameItem, valueItem) {
        localStorage.setItem(nameItem, valueItem);
    },

    logout: function () {
        localStorage.removeItem(Constants.configSession.USER);
        window.location.href = rutaLogin;
    },

    getUrlApiDynactrl: function (url) {
        return Constants.configApiDynaCtrl.URL_BASE + url;
    },

    getUserData: function () {
        var value = localStorage.getItem(Constants.configSession.USER);
        if (value === null) {
            this.logout();
        }
        return JSON.parse(value);
    },

    getCurrentLanguage: function () {
        var value = localStorage.getItem(Constants.configSession.LANGUAGE);
        if (value === null) {
            value = Constants.configWeb.LANGUAGE;
        }
        return value;
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
            $(inputFile).parent().find('.dropify-preview').find('.dropify-render').html('');
            $(inputFile).parent().find('.dropify-preview').css("display", "none");
            $(inputFile).parent().removeClass("has-preview");
        }
    },

    onlyNumber: function(e) {
        const key = e.key;
        // If is '.' key, stop it
        if (key === '.')
            return e.preventDefault();

        // OPTIONAL
        // If is 'e' key, stop it
        if (key === 'e')
            return e.preventDefault();
    },

    // This can also prevent copy + paste invalid character
    filterInput: function (e) {
        e.target.value = e.target.value.replace(/[^0-9]+/g, '');
    }

}