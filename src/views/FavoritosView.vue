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
    <div class="favoritos-view container">
        <h2 class="favoritos-view__title text-primary">Mis Favoritos</h2>
        <div v-if="favoritos.length > 0">
            <div v-for="especie in favoritos" :key="especie.id" class="favoritos-view__item">
                <h3 class="favoritos-view__item-title">{{ especie.nombre }}</h3>
                <img :src="especie.imagen" :alt="especie.nombre" class="favoritos-view__item-image img-fluid mb-2">
                <p class="favoritos-view__item-text"><b>Tipo:</b> {{ especie.tipo }}</p>
                <p class="favoritos-view__item-text"><b>Ubicación:</b> {{ especie.ubicacion }}</p>
                <p class="favoritos-view__item-text"><b>Estado de conservación:</b> {{ especie.estadoConservacion }}</p>
                <button @click="removeFromFavorites(especie.id)" class="favoritos-view__item-remove-btn btn btn-danger">
                    Eliminar de Favoritos
                </button>
            </div>
        </div>
        <p v-else class="favoritos-view__empty-message">No tienes especies en favoritos.</p>
    </div>
</template>

<style scoped lang="scss">
.favoritos-view {
    padding-bottom: 10vh;

    &__title {
        font-size: 2rem;
        font-weight: bold;
    }

    &__item {
        margin-bottom: 2rem;
        border: 1px solid #ddd;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
        position: relative;

        &-title {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }

        &-image {
            max-width: 100%;
            height: auto;
            margin-bottom: 1rem;
        }

        &-text {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        &-remove-btn {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
        }
    }

    &__empty-message {
        font-size: 1.2rem;
        color: #888;
    }
}
</style>
