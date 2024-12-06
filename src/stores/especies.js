import { defineStore } from 'pinia'
import { ref } from 'vue'
import { obtenerEspecies } from '@/services/especiesService' // ruta de nuestra "api" consumida con axios

export const useEspeciesStore = defineStore('especies', () => {
  const especies = ref([])

  const fetchEspecies = async () => {
    try {
      const data = await obtenerEspecies()
      especies.value = data
      console.log('especies cargadas:', especies.value)
    } catch (error) {
      alert('No se ha encontrado la especie')
      console.error(error.message)
    }
  }

  return { especies, fetchEspecies }
})
