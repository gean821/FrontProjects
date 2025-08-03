<template>
  <div class="lista-tarefas">
    <div v-if="tarefas.length">
      <div
        v-for="(tarefa, index) in tarefas" :key="index" class="box tarefa-item">
        <div class="columns">
          <div class="column is-8">
            {{ tarefa.Descricao }}
          </div>
          <div class="column is-4">
            <Cronometro :tempo-em-segundos="tarefa.TempoEmSegundos" />
          </div>
        </div>
      </div>
    </div>
    <p v-else class="mensagem-erro">
      Sua lista de tarefas está vazia, comece uma para incluir aqui.
    </p>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType} from 'vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '@/ITarefa';

export default defineComponent({
    name: 'ListaDetarefas',
    components: {
        Cronometro
    },
    props: {
        tarefas: {
            type: Object as PropType<ITarefa[]>,
            required:true}
    }
});
</script>

<style scoped>
.box {
    background-color: #FAF0CA;
    color: black;
}

.lista-tarefas {
  padding: 1rem;
}

.tarefa-item {
  margin-bottom: 1rem;
  background-color: #FAF0CA;
  border-radius: 6px;
}

.mensagem-erro {
  color: var(--texto-primario);
}

</style>