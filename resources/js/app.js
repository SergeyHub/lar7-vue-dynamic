/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import { Form, HasError, AlertError } from 'vform';

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component('pagination', require('laravel-vue-pagination'));
//..............................................
import Vue from 'vue'
import VueRouter from 'vue-router'
//..............................................
import Swal from 'sweetalert2'
window.swal = Swal;
const toast = swal.mixin({
    toast: true,
    width: '32rem',
    background: '#e2cd3b',
    grow: 'fullscreen',
    position: 'center',//'top-end',
    showConfirmButton: false,
    timer: 1000
});
window.toast = toast;

Vue.use(VueRouter)

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
    color: '#e2cd3b',
    failedColor: '#874b4b',
    thickness: '35px',
    transition: {
        speed: '0.02s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'right',
    //position: 'relative',
    inverse: false
})

let routes = [
    { path: '/dashboard', component: require('./pages/Dashboard.vue').default },
    { path: '/developer', component: require('./pages/Developer.vue').default },
    { path: '/profile', component: require('./pages/Profile.vue').default },
    { path: '/users', component: require('./pages/Users.vue').default },
    { path: '/contact', component: require('./pages/Contact.vue').default },
    { path: '/about', component: require('./lar7vue/resources/js/pages/About.vue').default },


    { path: '/gallery', component: require('./pages/Gallery.vue').default }
]
//  Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
    return moment(created).format('MMMM Do YYYY');
});

window.Fire =  new Vue();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//const app = new Vue({
//    el: '#app',
//});

const app = new Vue({
    router
}).$mount('#application')

