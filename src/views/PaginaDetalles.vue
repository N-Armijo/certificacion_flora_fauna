<script setup>
import { onMounted, computed } from 'vue';
import { useEspeciesStore } from '@/stores/especies';
import { useRoute, useRouter } from 'vue-router';

// Accedemos al store y a la ruta actual
const especieStore = useEspeciesStore();
const route = useRoute();
const router = useRouter();

// Computada para obtener la especie específica
const especie = computed(() => {
    const id = parseInt(route.params.id);
    return especieStore.especies.find(e => e.id === id) || null;
});

// Al montar el componente, cargamos las especies
onMounted(async () => {
    await especieStore.fetchEspecies();

    // Si la especie no se encuentra, redirigimos a una página de "no encontrado"
    if (!especie.value) {
        router.push({ name: 'not-found' });
    }
});
</script>
<template>
    <div v-if="especie" class="especie-detalles container">
        <!-- Cabecera -->
        <h2 class="especie-detalles__title text-primary">{{ especie.nombre }}</h2>
        <p class="especie-detalles__tipo text-muted fst-italic">
            <b>Tipo:</b> {{ especie.tipo }}
        </p>
        <p class="especie-detalles__ubicacion text-muted">
            <b>Ubicación:</b> {{ especie.ubicacion }}
        </p>
        <img :src="especie.imagen" :alt="especie.nombre" class="img-fluid">

        <!-- descripcion -->
        <section class="especie-detalles__descripcion">
            <h3>Descripción</h3>
            <p>{{ especie.descripcion }}</p>
        </section>

        <!-- estado de conservacion -->
        <section class="especie-detalles__estado">
            <h3>Estado de conservación</h3>
            <p>{{ especie.estadoConservacion }}</p>
        </section>
    </div>
    <p v-else>Cargando información...</p>
</template>
<style scoped>
.especie-detalles {
    padding-bottom: 10vh;

    &__title {
        font-weight: bold;
        font-size: 2.5rem;
    }

    &__tipo,
    &__ubicacion {
        font-size: 1.2rem;
    }

    &__descripcion,
    &__estado {
        margin-top: 1.5rem;
    }
}
</style>