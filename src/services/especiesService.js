import axios from 'axios'

export const obtenerEspecies = async () => {
  try {
    const response = await axios.get('/api/db.json')
    return response.data.especies //Nos interesa acceder a la propiedad especie, ya que esta contine a todas las especies y poder consumirla a medidad de que se itera
  } catch (error) {
    console.error('Error al obtener especies:', error)
    throw error
  }
}
