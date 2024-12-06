<script setup>
import { onMounted, ref } from 'vue';
import { useEspeciesStore } from '@/stores/especies';
import CardEspecie from '@/components/CardEspecie.vue';

// Acceso a la store
const especiesStore = useEspeciesStore();

// Estado para manejar la carga de datos
const loading = ref(true);

// Función para inicializar datos
onMounted(async () => {
    await especiesStore.fetchEspecies();
    loading.value = false;
    console.log(especiesStore.especies);
});
</script>

<template>
    <div class="container">
        <div v-if="loading" class="d-flex justify-content-center mt-5">
            <span>Cargando...</span> <!-- Puedes usar un spinner de Bootstrap u otro componente de carga aquí -->
        </div>
        <div v-else class="row">
            <div v-for="especie in especiesStore.especies" :key="especie.id"
                class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <CardEspecie :especie="especie" />
            </div>
        </div>
    </div>
</template>
