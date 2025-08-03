
<template>
  <main class="columns is-gapless is-multline" :class="{'modo-escuro': modoEscuroAtivo}">  <!-- foi usado o bulma para css, então o foco não é o CSS e sim o VUE-->
    <div class="column is-one-quarter">
        <!-- aqui criamos um componente para isso.-->
         <BarraLateral @ao-ativar-modo-escuro="AtivarModoEscuro" :texto-botao='textoBotao'/> 
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @finalizar-tarefa="salvarTarefa"/>
      <!-- aqui vamos receber a lista de tarefas que o formulário entrega!!-->
       <div class="lista-tarefas">
          <ListaDeTarefa :tarefas="tarefa"/>
      </div>
    </div>  
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import ListaDeTarefa from './components/ListaDeTarefa.vue';
import ITarefa from './ITarefa';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    ListaDeTarefa
  },
  data() {
    return{
      tarefa: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    textoBotao() {
      if (this.modoEscuroAtivo) {
        return 'Desativar modo Escuro';
      }
      return 'Ativar modo escuro';
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa): void {  
      this.tarefa.push(tarefa)
      this.$emit('salvarTarefa', tarefa)
    },
    AtivarModoEscuro() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
    }
  }
});
</script>

<style>
.lista-tarefas {
  padding: 1rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
