<script setup>
import { onMounted, computed } from 'vue';
import { useEspeciesStore } from '@/stores/especies';
import { useFavoritosStore } from '@/stores/favoritos';
import { useRoute, useRouter } from 'vue-router';

const especieStore = useEspeciesStore();
const favoritosStore = useFavoritosStore();
const route = useRoute();
const router = useRouter();

const especie = computed(() => {
    const id = parseInt(route.params.id);
    return especieStore.especies.find(e => e.id === id) || null;
});

onMounted(async () => {
    await especieStore.fetchEspecies();

    if (!especie.value) {
        router.push({ name: 'not-found' });
    }
});

const addToFavorites = (especie) => {
    favoritosStore.add(especie);
};

const isFavorite = computed(() => {
    return especie.value ? favoritosStore.findEspecie(especie.value.id) !== undefined : false;
});
</script>

<template>
    <div v-if="especie" class="especie-detalles container">
        <h2 class="especie-detalles__title text-primary">{{ especie.nombre }}</h2>
        <p class="especie-detalles__tipo text-muted fst-italic"><b>Tipo:</b> {{ especie.tipo }}</p>
        <p class="especie-detalles__ubicacion text-muted"><b>Ubicación:</b> {{ especie.ubicacion }}</p>
        <img :src="especie.imagen" :alt="especie.nombre" class="img-fluid">
        <section class="especie-detalles__descripcion">
            <h3>Descripción</h3>
            <p>{{ especie.descripcion }}</p>
        </section>
        <section class="especie-detalles__estado">
            <h3>Estado de conservación</h3>
            <p>{{ especie.estadoConservacion }}</p>
        </section>

        <!-- button para agregar a favoritos -->
        <button :disabled="isFavorite" @click="addToFavorites(especie)" class="btn btn-primary mb-2">
            {{ isFavorite ? 'Ya está en favoritos' : 'Agregar a Favoritos' }}
        </button>
    </div>
    <p v-else>Cargando información...</p>
</template>