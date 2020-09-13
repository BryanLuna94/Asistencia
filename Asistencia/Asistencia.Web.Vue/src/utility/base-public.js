import axios from 'axios';
import functions from '@/utility/functions';


var base = {

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
        var token = functions.getUserData().token;
        return await axios.post(pUrl, pJson, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                
                if (res.data.isCorrect) {
                    
                    if (showMessageSuccess) {
                        // Notifications.Messages.info('Se insertó la información exitosamente');
                    }
                    return res;
                } else {
                    functions.getErrorResponse(res.data.status);
                }
            }).catch(error => {
                // functions.getErrorResponse(error.response.status);
            });
    },

    sendPostImage: async function (pUrl, pJson, pFormData, showMessageSuccess) {

        if (showMessageSuccess === undefined) showMessageSuccess = false;
        var token = functions.getUserData().token;
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
                    functions.getErrorResponse(res.data.status);
                }
            }).catch(error => {
                functions.getErrorResponse(error.response.status);
            });
    },

    sendPut: async function (pUrl, pJson) {
        var token = functions.getUserData().token;

        return await axios.put(pUrl, pJson, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.data.isCorrect) {
                    // Notifications.Messages.info('Se actualizó la información exitosamente');
                    return true;
                } else {
                    functions.getErrorResponse(res.data.status);
                }
            }).catch(error => {
                // functions.getErrorResponse(error.response.status);
            });

    },

    sendGet: async function (pUrl) {
        var token = functions.getUserData().token;

        return await axios.get(pUrl, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res;
            if (res.data.isCorrect) {
                return res;
            }

        })
        .catch(error => {
            // debugger;
            // functions.getErrorResponse(error.response.status);
        });
    },
    


}

export default base