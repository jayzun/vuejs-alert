import Vue from 'vue';
import Alert from '../dist/vuejs-alert.min';
// import Alert from '../src/index';
import App from './App.vue';

Vue.use(Alert);

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
});