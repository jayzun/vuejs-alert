import Vue from 'vue';
// import Alert from '../dist/vuejsAlert.min';
import Alert from '../src/index';
import App from './App.vue';

Vue.use(Alert);

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
});