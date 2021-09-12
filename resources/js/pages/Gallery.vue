<template>
    <div class="container">
        <br>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <carousel :items="1" :loop="true" :autoplay="true" :autoHeight="true">
                    <img class="img-fluid" src="{{url('./public/images/oslo.jpg')}}">
                    <img class="img-fluid" src="{{asset('./images/oslo_Victoria_Terrasse.jpg')}}">
                    <img class="img-fluid" src="{{asset('./images/trondheimDyreHalses.jpg')}}">
                    <img class="img-fluid" src="{{asset('./images/trondheimFromRoof.jpg')}}">
                    <img class="img-fluid" src="{{asset('./images/trondheimSolsiden.jpg')}}">
                </carousel>

            </div>
        </div>
    </div>

</template>

<script>
    import carousel from 'vue-owl-carousel'
    export default {
        components: { carousel }
    }
</script>



