import Notifications from 'vue-notification'
import Vue from 'vue'
Vue.use(Notifications)

var notifications = {
    danger: function (title, data) {
        return Vue.notify({
            group: 'notifdemo',
            title: title,
            text: data,
            type: `bg-danger text-white`
        });
    },
    info: function (title, data) {
        return Vue.notify({
            group: 'notifdemo',
            title: title,
            text: data,
            duration:5000,
            type: `bg-info text-white`,
        });
    },
    warning: function (title, data) {
        return Vue.notify({
            group: 'notifdemo',
            title: title,
            text: data,
            duration:5000,
            type: `bg-warning text-white`,
        });
    },
    success: function (title, data) {
        return Vue.notify({
            group: 'notifdemo',
            title: title,
            text: data,
            duration:5000,
            type: `bg-success text-white`,
        });
    },

}

export default notifications