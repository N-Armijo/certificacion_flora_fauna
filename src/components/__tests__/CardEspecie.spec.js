// import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CardEspecie from '@/components/CardEspecie.vue'

import { shallowMount } from '@vue/test-utils'

describe('CardEspecie.vue', () => {
  it('muestra la información de la especie correctamente', () => {
    const especie = {
      id: 1,
      imagen: 'https://example.com/imagen.jpg',
      nombre: 'Especie 1',
      tipo: 'Tipo 1',
    }

    const wrapper = shallowMount(CardEspecie, {
      props: { especie },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(especie.imagen)
    expect(img.attributes('alt')).toBe(especie.nombre)
    expect(wrapper.text()).toContain(especie.nombre)
    expect(wrapper.text()).toContain(especie.tipo)
    expect(wrapper.find('router-link').attributes('to')).toBe(`/detalle/${especie.id}`)
  })

  it('muestra mensaje de cargando cuando falta información', () => {
    const wrapper = shallowMount(CardEspecie, {
      props: { especie: null },
    })

    expect(wrapper.text()).toContain('Cargando...')
  })

  it('muestra imagen y texto por defecto cuando faltan propiedades', () => {
    const especie = {
      id: 2,
      imagen: null,
      nombre: null,
      tipo: null,
    }

    const wrapper = shallowMount(CardEspecie, {
      props: { especie },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://via.placeholder.com/600/92c952') // Ruta actualizada
    expect(img.attributes('alt')).toBe('Imagen de la especie') // Texto alternativo actualizado

    expect(wrapper.text()).toContain('Nombre no disponible') // Verifica el valor por defecto del nombre
    expect(wrapper.text()).toContain('Tipo no disponible') // Verifica el valor por defecto del tipo
  })
})
