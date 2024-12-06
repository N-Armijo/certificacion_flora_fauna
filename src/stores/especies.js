import { defineStore } from 'pinia'
import { ref } from 'vue'
import { obtenerEspecies } from '@/services/especiesService' // ruta de "api" consumida con axios

export const useEspeciesStore = defineStore('especies', () => {
  const especies = ref([])

  const fetchEspecies = async () => {
    try {
      const data = await obtenerEspecies()
      especies.value = data
      console.log('Especies cargadas:', especies.value)
    } catch (error) {
      alert('No se ha podido cargar la lista de especies')
      console.error(error.message)
    }
  }

  //obtener una especie por su id
  const fetchEspeciePorId = (id) => {
    return especies.value.find((especie) => especie.id === id)
  }

  return { especies, fetchEspecies, fetchEspeciePorId }
})
