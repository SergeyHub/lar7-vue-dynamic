<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
               <div class="card-body">
                    I'm Developer an example component.
               </div>
                <passport-clients></passport-clients>
                <passport-authorized-clients></passport-authorized-clients>
                <passport-personal-access-tokens></passport-personal-access-tokens>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>