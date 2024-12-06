<script setup>
import { onMounted, ref, computed } from 'vue';
import { useEspeciesStore } from '@/stores/especies';
import CardEspecie from '@/components/CardEspecie.vue';

// acceso al store
const especiesStore = useEspeciesStore();

// estado para manejar la carga de datos y filtros
const loading = ref(true);
const filtroTipo = ref('');
const filtroRegion = ref('');
const filtroEstado = ref('');
const ordenacion = ref('');

// obtener las especies filtradas y ordenadas
const especiesFiltradas = computed(() => {
    let resultado = especiesStore.especies;

    // filtrado por tipo
    if (filtroTipo.value) {
        resultado = resultado.filter(especie => especie.tipo.toLowerCase() === filtroTipo.value.toLowerCase());
    }

    //filtrado por región de hábitat
    if (filtroRegion.value) {
        resultado = resultado.filter(especie => especie.ubicacion.toLowerCase().includes(filtroRegion.value.toLowerCase()));
    }

    //filtrado por estado de conservación
    if (filtroEstado.value) {
        resultado = resultado.filter(especie => especie.estadoConservacion.toLowerCase() === filtroEstado.value.toLowerCase());
    }

    // orden
    if (ordenacion.value === 'tipo') {
        resultado.sort((a, b) => a.tipo.localeCompare(b.tipo));
    } else if (ordenacion.value === 'peligro') {
        resultado.sort((a, b) => a.estadoConservacion.localeCompare(b.estadoConservacion));
    }

    return resultado;
});

// iniciallizador datos
onMounted(async () => {
    await especiesStore.fetchEspecies();
    loading.value = false;
    console.log(especiesStore.especies);
});
</script>

<template>
    <div class="container">
        <!-- filtros -->
        <div class="row mb-3">
            <div class="col-md-4">
                <select v-model="filtroTipo" class="form-select">
                    <option value="">Filtrar por tipo</option>
                    <option value="flora">Flora</option>
                    <option value="fauna">Fauna</option>
                </select>
            </div>
            <div class="col-md-4">
                <select v-model="filtroRegion" class="form-select">
                    <option value="">Filtrar por región</option>
                    <option value="Cordillera de los Andes, Patagonia">Cordillera de los Andes, Patagonia</option>
                    <option value="patagonia">Patagonia</option>
                    <option value="Zona Central y Sur de Chile">Zona Central y Sur de Chile</option>
                    <option value="Isla de Chiloé y Región de Los Lagos">Isla de Chiloé y Región de Los Lagos</option>
                    <option value="Zona Austral de Chile">Zona Austral de Chile</option>
                    <option value="Cordillera de los Andes y Cordillera de la Costa">Cordillera de los Andes y
                        Cordillera de la Costa</option>
                    <option value="Cordillera de los Andes, Patagonia y Región del Maule">Cordillera de los Andes,
                        Patagonia y Región del Maule</option>
                    <option value="Región de Magallanes">Región de Magallanes</option>
                </select>
            </div>
            <div class="col-md-4">
                <select v-model="filtroEstado" class="form-select">
                    <option value="">Filtrar por estado de conservación</option>
                    <option value="en peligro">En peligro</option>
                    <option value="vulnerable">Vulnerable</option>
                    <option value="preocupación menor">Preocupación menor</option>
                    <option value="seguro">Seguro</option>
                </select>
            </div>
        </div>

        <!-- orden -->
        <div class="mb-3">
            <label for="ordenacion" class="form-label">Ordenar por:</label>
            <select v-model="ordenacion" class="form-select" id="ordenacion">
                <option value="">Seleccione un criterio</option>
                <option value="tipo">Tipo</option>
                <option value="peligro">Estado de conservación</option>
            </select>
        </div>

        <!-- carga y visualizacion de datos -->
        <div v-if="loading" class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else class="row">
            <div v-for="especie in especiesFiltradas" :key="especie.id" class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <CardEspecie :especie="especie" />
            </div>
        </div>
    </div>
</template>
