// favoritos.js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritosStore = defineStore('favoritos', () => {
  const favoritos = ref([])
  if (localStorage.getItem('favoritos')) {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
  }

  const add = (especie) => {
    if (!findEspecie(especie.id)) {
      favoritos.value.push(especie)
      localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
      console.log('Especie agregada a favoritos:', especie)
    } else {
      console.log('La especie ya está en favoritos:', especie)
    }
  }

  const remove = (id) => {
    favoritos.value = favoritos.value.filter((especie) => especie.id !== id)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  const findEspecie = (id) => {
    const found = favoritos.value.find((item) => item.id === id)
    console.log('Buscar especie con id', id, 'en favoritos:', found)
    return found
  }

  return { favoritos, add, remove, findEspecie }
})
