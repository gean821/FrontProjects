<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input v-model="descricao" type="text" class="input" placeholder="Qual tarefa vc deseja iniciar">
            </div>
            <Temporizador 
                @iniciar-contagem="iniciarContagem"
                @ao-temporizador-finalizado="finalizarTarefa"/>

        </div>
    </div>  

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
import ITarefa from '@/ITarefa';

export default defineComponent({
    name: 'FormularioTarefa',
    components:  {
        Temporizador
    },
    data() {
        return {
            descricao: '',
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            if (!this.descricao.trim()) {
                alert('Descrição da tarefa é obrigatória!');
                return;
            }

            const tarefa: ITarefa = {
                Descricao: this.descricao,
                TempoEmSegundos: tempoDecorrido
            };
            
            console.log('Tempo decorrido da tarefa:', tarefa.TempoEmSegundos); 
            console.log('Descrição da tarefa:', tarefa.Descricao);

            this.$emit('finalizarTarefa', tarefa);
        },
        iniciarContagem() {
            this.$emit('iniciarContagem');
        }
    },
    emits: ['finalizarTarefa', 'iniciarContagem', 'salvarTarefa']
});

</script>

<style scoped>
.column {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>