import axios from 'axios'

const api = axios.create({
  baseURL: '../public/api',
})

export const obtenerEspecies = async () => {
  try {
    const response = await api.get('/db.json')
    return response.data
  } catch (error) {
    console.error('Error al cargar lugares:', error)
    throw new Error('No se pudo cargar las especies')
  }
}
