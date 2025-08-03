<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="">
    </h1>
    <button class="button"
     @click="AtivarModoEscuro"> 
      {{ textoBotao }}
    </button>
  </header>
</template>

<script lang="ts">  //antes eu estava usando options api e era só exportar, agora para aproveitar mais o type eu preciso usar composition api.
import { defineComponent } from 'vue';

export default defineComponent({  //agora fazemos assim para o TS ser melhor aproveitado.
  name: 'BarraLateral',
  props: {
      textoBotao: {type: String, required: true}
    },
  methods: {
    AtivarModoEscuro() {
      this.$emit('aoAtivarModoEscuro');
    }
  },
  emits: ['aoAtivarModoEscuro']
});

</script>

<style scoped>
header {
  padding: 1rem;
  background-color: #0d3b66;
  width: 100%;
  height: 100vh;
}

.button {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>