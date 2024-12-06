<script setup>
defineProps({
  especie: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div v-if="especie">
    <div class="card m-3">
      <img
        :src="especie.imagen || 'https://via.placeholder.com/600/92c952'"
        class="card__img"
        :alt="especie.nombre || 'Imagen de la especie'"
      />
      <div class="card__body">
        <p class="card__text">{{ especie.nombre || 'Nombre no disponible' }}</p>
        <p class="card__text">{{ especie.tipo || 'Tipo no disponible' }}</p>
        <router-link class="card__link card__link--primary" :to="`/detalle/${especie.id}`"
          >Ver detalles</router-link
        >
      </div>
    </div>
  </div>
  <div v-else>
    <p>Cargando...</p>
  </div>
</template>

<style scoped lang="scss">
.card {
  &__img {
    width: auto;
    height: 15rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  &__body {
    padding: 1rem;
    background-color: #f9f9f9;
  }

  &__text {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  &__link {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;

    &--primary {
      color: #2f00ff;

      &:hover {
        color: #b30095;
      }
    }

    &--active {
      color: #3d3ac2;
    }
  }
}
</style>
