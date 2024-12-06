<!-- <template>
    <h2>Pagina Principal</h2>
</template> -->

<script setup>
import { onMounted } from 'vue';
import { useEspeciesStore } from '@/stores/especies';
import CardEspecie from '@/components/CardEspecie.vue'

// Acceso a la store
const especiesStore = useEspeciesStore();

// Función para inicializar datos
onMounted(() => {
    especiesStore.fetchEspecies();
    console.log(especiesStore.especies);
});
</script>
<template>
    <div class="container">
        <div class="row">
            <CardEspecie v-for="especie in especiesStore.especies" :key="especie.id" :nombreEspecie="especie.nombre"
                :imagenEspecie="especie.imagen" :tipoEspecie="especie.tipo" />
        </div>
    </div>
</template>