var Base = {

    sendAutocomplete: async function (pUrl, pValue) {

        var token = Functions.getUserData().token;

        return await axios.get(pUrl, {
            params: {
                pValue: pValue
            },
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.data.isCorrect) {
                    return (res.data.value.listBase) ? res.data.value.listBase : [];
                }

            })
            .catch(error => {
                Functions.getErrorResponse(error.response.status);
            });

    },

    sendPost: async function (pUrl, pJson, showMessageSuccess) {

        if (showMessageSuccess === undefined) showMessageSuccess = false;
        var token = Functions.getUserData().token;
        return await axios.post(pUrl, pJson, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.data.isCorrect) {
                    if (showMessageSuccess) {
                        Notifications.Messages.info('Se actualizó la información exitosamente');
                    }
                    return res;
                } else {
                    Functions.getErrorResponse(res.data.status);
                }
            }).catch(error => {
                Functions.getErrorResponse(error.response.status);
            });
    },

    sendPostImage: async function (pUrl, pJson, pFormData, showMessageSuccess) {

        if (showMessageSuccess === undefined) showMessageSuccess = false;
        var token = Functions.getUserData().token;
        return await axios.post(pUrl, pJson, pFormData, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.data.isCorrect) {
                    if (showMessageSuccess) {
                        Notifications.Messages.info('Se actualizó la información exitosamente');
                    }
                    return res;
                } else {
                    Functions.getErrorResponse(res.data.status);
                }
            }).catch(error => {
                Functions.getErrorResponse(error.response.status);
            });
    },

    sendPut: async function (pUrl, pJson) {

        var token = Functions.getUserData().token;

        return await axios.put(pUrl, pJson, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.data.isCorrect) {
                    Notifications.Messages.info('Se actualizó la información exitosamente');
                    return true;
                } else {
                    Functions.getErrorResponse(res.data.status);
                }
            }).catch(error => {
                Functions.getErrorResponse(error.response.status);
            });

    },

    sendGet: async function (pUrl) {

        var token = Functions.getUserData().token;

        return await axios.get(pUrl, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.data.isCorrect) {
                    return res;
                }

            })
            .catch(error => {
                Functions.getErrorResponse(error.response.status);
            });
    },

}