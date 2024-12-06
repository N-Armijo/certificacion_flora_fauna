<script setup>
import { onMounted, computed, ref, watch } from 'vue'
import { useEspeciesStore } from '@/stores/especies'
import { useFavoritosStore } from '@/stores/favoritos'
import { useRoute, useRouter } from 'vue-router'

const especieStore = useEspeciesStore()
const favoritosStore = useFavoritosStore()
const route = useRoute()
const router = useRouter()

//estado para los comentarios
const comentarios = ref([])
const nuevoComentario = ref('')

const especie = computed(() => {
  const id = parseInt(route.params.id)
  return especieStore.especies.find((e) => e.id === id) || null
})

// cargar comentarios desde LocalStorage
const loadComentarios = () => {
  const storedComentarios = localStorage.getItem(`comentarios-${especie.value?.id}`)
  if (storedComentarios) {
    comentarios.value = JSON.parse(storedComentarios)
  }
}

// guardar comentarios en LocalStorage
const saveComentarios = () => {
  if (especie.value) {
    localStorage.setItem(`comentarios-${especie.value.id}`, JSON.stringify(comentarios.value))
  }
}

// agregar nuevo comentario
const addComentario = () => {
  if (nuevoComentario.value.trim() !== '') {
    comentarios.value.push(nuevoComentario.value)
    nuevoComentario.value = '' // limpiar el campo de texto
    saveComentarios() // guardar en LocalStorage
  }
}

const addToFavorites = (especie) => {
  favoritosStore.add(especie)
}

const isFavorite = computed(() => {
  return especie.value ? favoritosStore.findEspecie(especie.value.id) !== undefined : false
})

onMounted(async () => {
  await especieStore.fetchEspecies()

  if (!especie.value) {
    router.push({ name: 'not-found' })
  } else {
    loadComentarios() // cargar comentarios al montar el componente
  }
})

// atento a cambios en comentarios y actualizar LocalStorage
watch(comentarios, saveComentarios, { deep: true })
</script>

<template>
  <div v-if="especie" class="especie-detalles container">
    <div class="row">
      <div class="mx-auto">
        <h2 class="especie-detalles__title text-primary">{{ especie.nombre }}</h2>
        <p class="especie-detalles__tipo text-muted fst-italic"><b>Tipo:</b> {{ especie.tipo }}</p>
        <p class="especie-detalles__ubicacion text-muted">
          <b>Ubicación:</b> {{ especie.ubicacion }}
        </p>
        <img :src="especie.imagen" :alt="especie.nombre" class="img-fluid rounded w-100" />
        <section class="especie-detalles__descripcion">
          <h3 class="text-secondary">Descripción</h3>
          <p>{{ especie.descripcion }}</p>
        </section>
        <section class="especie-detalles__estado">
          <h3 class="text-secondary">Estado de conservación</h3>
          <p>{{ especie.estadoConservacion }}</p>
        </section>

        <!-- section de conservacion con comentarios -->
        <section class="especie-detalles__conservacion">
          <h3 class="text-secondary">Iniciativas de Conservación</h3>
          <ul class="list-group mb-3">
            <li v-for="(comentario, index) in comentarios" :key="index" class="list-group-item">
              {{ comentario }}
            </li>
            <li v-if="comentarios.length === 0" class="list-group-item text-muted">
              No hay comentarios. ¡Sé el primero en añadir uno!
            </li>
          </ul>
          <div class="input-group">
            <input
              v-model="nuevoComentario"
              type="text"
              class="form-control"
              placeholder="Añade un comentario"
            />
            <button @click="addComentario" class="btn btn-outline-primary">Enviar</button>
          </div>
        </section>

        <!-- button para agregar a favoritos -->
        <button
          :disabled="isFavorite"
          @click="addToFavorites(especie)"
          class="btn btn-primary mb-2"
        >
          {{ isFavorite ? 'Ya está en favoritos' : 'Agregar a Favoritos' }}
        </button>
      </div>
    </div>
  </div>
  <p v-else>Cargando información...</p>
</template>

<style scoped lang="scss">
.especie-detalles {
  &__title {
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  &__descripcion,
  &__estado,
  &__conservacion {
    margin-top: 2rem;
  }

  &__conservacion {
    .input-group {
      margin-top: 1rem;
    }
  }
}
</style>
