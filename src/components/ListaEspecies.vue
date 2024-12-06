<script setup>
import { onMounted, ref } from 'vue';
import { useEspeciesStore } from '@/stores/especies';
import CardEspecie from '@/components/CardEspecie.vue';

// acceso a la store
const especiesStore = useEspeciesStore();

// estado para manejar la carga de datos
const loading = ref(true);

// inicializar datos
onMounted(async () => {
    await especiesStore.fetchEspecies();
    loading.value = false;
    console.log(especiesStore.especies);
});
</script>

<template>
    <div class="container">
        <div v-if="loading" class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else class="row">
            <div v-for="especie in especiesStore.especies" :key="especie.id"
                class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <CardEspecie :especie="especie" />
            </div>
        </div>
    </div>
</template>
