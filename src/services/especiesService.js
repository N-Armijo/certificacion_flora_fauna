import axios from 'axios'

const api = axios.create({
  baseURL: '/api/',
})

export const obtenerEspecies = async () => {
  try {
    const response = await api.get('/db.json')
    return response.data.especies //Nos interesa acceder a la propiedad especie, ya que esta contine a todas las especies y poder consumirla a medidad de que se itera
  } catch (error) {
    console.error('Error al obtener especies:', error)
    throw error
  }
}
export const obtenerEspeciePorId = async (id) => {
  try {
    const response = await api.get(`db.json/${id}`)
    return response.data
  } catch (error) {
    console.error('Error al obtener especie:', error)
  }
}
