<template>
    <div>
        <br>
        <p><strong>Laravel</strong> (stylised as <strong>Laгavel</strong>) is a free, open-source PHP web framework,
            created by Taylor Otwell and intended for the development of web applications
            following the model–view–controller (MVC) architectural pattern and based
            on Symfony. Some of the features of Laravel are a modular packaging system with
            a dedicated dependency manager, different ways for accessing relational databases,
            utilities that aid in application deployment and maintenance, and its orientation
            toward syntactic sugar.
            The source code of Laravel is hosted on GitHub and licensed under the terms of MIT
            License.</p>
        <hr>
        <strong>Vue.js</strong> (commonly referred to as <strong>Vue</strong>; pronounced /vjuː/, like
        "view") is an
        open-source model–view–viewmodel front end JavaScript framework for building
        user interfaces and single-page applications. It was created by Evan You,
        and is maintained by him and the rest of the active core team members.

        <hr>
        This Laravel package is a template for writing single page applications with Vue
        in the frontend and Laravel in the backend. It includes VueRouter, Vuex, VueI18n,
        Laravel Socialite, Laravel JWT, and an authorization framework that is found in a
        typical Laravel application but is written as SPA.<br><br>
        <h3><strong>Features</strong></h3><br>

        <ul>
            <li>Laravel 7.30.0</li>
            <li>Vue + VueRouter + Vuex + VueI18n + ESlint</li>
            <li>Pages with dynamic import and custom layouts</li>
            <li>Login, register, email verification and password reset</li>
            <li>Authentication with JWT</li>
            <li>Socialite integration</li>
            <li>Bootstrap 4 + Font Awesome 5</li>
        </ul>

        <!--<br><br><button v-tooltip="'You have ' + 3 + ' new messages.'">Count</button>-->
    </div>

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
