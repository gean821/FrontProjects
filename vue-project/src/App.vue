<script lang="ts">
  import Banner from './components/Banner.vue'; //então eu vou separar em componentes as etapas (header, main,) e chamar esses componentes no app que é o arquivo principal.
  import ConteudoPrincipal from './components/ConteudoPrincipal.vue';
  import Rodape from './components/Rodape.vue';
  
  export default {
    components: {
     Banner,
    ConteudoPrincipal, Rodape
  }
}
</script>

<template>
  <Banner/>
  <ConteudoPrincipal/>
  <Rodape />
</template>

<style scoped>

</style>
