<script setup>
import { computed } from 'vue';
import { useFavoritosStore } from '@/stores/favoritos';

const favoritosStore = useFavoritosStore();

// Computada para obtener la lista de favoritos
const favoritos = computed(() => favoritosStore.favoritos);

// Función para eliminar una especie de favoritos
const removeFromFavorites = (id) => {
    favoritosStore.remove(id);
};
</script>

<template>
    <div class="container">
        <div class="row">
            <h2 class="text-primary">Mis Favoritos</h2>
            <div v-for="especie in favoritos" :key="especie.id" class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div class="card">
                    <h3 class="card-title">{{ especie.nombre }}</h3>
                    <img :src="especie.imagen" :alt="especie.nombre" class="card__image img-fluid mb-2">
                    <div class="card__body">
                        <p class="favoritos-view__item-text"><b>Tipo:</b> {{ especie.tipo }}</p>
                        <p class="favoritos-view__item-text"><b>Ubicación:</b> {{ especie.ubicacion }}</p>
                        <p class="favoritos-view__item-text"><b>Estado de conservación:</b> {{
                            especie.estadoConservacion }}
                        </p>
                    </div>
                    <button @click="removeFromFavorites(especie.id)" class="btn btn-primary">
                        Eliminar de Favoritos
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.card {
    &__image {
        // Aquí puedes personalizar los estilos para la imagen
        width: auto; // Ajuste para que ocupe el ancho del contenedor
        height: 15rem; // Mantiene la proporción de la imagen
        object-fit: cover; //para tener paridad en la altura de las fotos y se acomode
        border-radius: 8px; // Ejemplo de borde redondeado
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra opcional
    }

    &__body {
        height: 9rem;
    }
}
</style>