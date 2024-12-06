<script setup>
</script>

<template>
  <main class="container">
    <div class="layout">
      <section class="layout__section layout__section--left me-5">
        <div>
          <h2 class="text-center">Flora y fauna chilena</h2>
          <p class="layout__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat suscipit
            maiores
            minima, repudiandae mollitia nam expedita quia modi? Ea qui laborum expedita. Iure nemo neque architecto
            iusto
            necessitatibus autem!</p>
        </div>
      </section>
      <section class="layout__section layout__section--right">
        <img class="layout__image" src="https://storage.googleapis.com/chile-travel-cdn/2021/03/PN-La-campana.jpg"
          alt="Cactus sobre elevación de piedras cubiertas por vegetación y cielo azul con nubes blancas">
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
/* BEM styling */
.layout {
  display: flex;
  height: 100vh;
  /* Ocupa toda la altura de la ventana */
  width: 100%;
  /* Ocupa todo el ancho de la ventana */

  &__section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    /* Ocupa el 50% del ancho de la pantalla */
  }

  &__section--left {
    /* Estilos específicos para la sección izquierda */
  }

  &__section--right {
    /* Estilos específicos para la sección derecha */
  }

  &__text {
    text-align: center;
    /* Centra el texto */
  }

  &__image {
    max-width: 100%;
    /* Asegura que la imagen no sobresalga del contenedor */
    height: auto;
    /* Mantiene la relación de aspecto de la imagen */
  }
}
</style>
