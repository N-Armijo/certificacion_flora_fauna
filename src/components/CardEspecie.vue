<script setup>
defineProps({
    nombreEspecie: {
        type: String,
    },
    tipoEspecie: {
        type: String,
    },
    imagenEspecie: {
        type: String,
    }
});
</script>
<template>
    <div class="col-12 col-md-4 col-lg-3">
        <div class="card m-5">
            <img :src="imagenEspecie" class="card-img-top" :alt="nombreEspecie">
            <div class="card-body">
                <p class="card-text">{{ nombreEspecie }}</p>
                <p class="card-text">{{ tipoEspecie }}</p>
                <a href="https://en.wikipedia.org/wiki/Star_Wa" class="btn btn-primary">Ver detalles</a>
            </div>
        </div>
    </div>
</template>