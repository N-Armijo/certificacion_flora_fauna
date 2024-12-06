<script setup>
defineProps({
    especie: {
        type: Object,
        required: true,
    }
});
</script>

<template>
    <div v-if="especie && especie.imagen && especie.nombre && especie.tipo">
        <div class="card m-3">
            <img :src="especie.imagen || 'ruta/a/imagen/por/defecto.jpg'" class="card-img-top"
                :alt="especie.nombre || 'Imagen de la especie'">
            <div class="card-body">
                <p class="card-text">{{ especie.nombre || 'Nombre no disponible' }}</p>
                <p class="card-text">{{ especie.tipo || 'Tipo no disponible' }}</p>
                <router-link class="btn btn-primary" :to="`/detalle/${especie.id}`">Ver detalles</router-link>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Cargando...</p>
    </div>
</template>

<style scoped lang="scss">
.card {
    a {
        font-weight: bold;
        color: #2c3e50;

        &.active {
            color: #42b983;
        }
    }
}
</style>
