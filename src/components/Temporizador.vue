<template>
    <div class="column">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <Botao @botaoClicado="iniciarContagem"  
        :icone="'fas fa-play'" 
        :textoBotao="'play'" 
        :botaoDesabilitado="cronometroRodando" />"    <!--aqui eu chamo meu componente botão que foi criado para ser padronizado.-->

        <Botao @botaoClicado="finalizarContagem" 
        :icone="'fas fa-stop'" 
        :textoBotao="'Stop'" 
        :botaoDesabilitado="!cronometroRodando"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import Botao from './Botao.vue';

export default defineComponent({
    name:'TemporizadorTarefas',
    components: {
        Cronometro, Botao
    },
     data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciarContagem() {
            //1000 ms = 1 seg
            this.cronometroRodando = true;

            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            },1000);

            this.$emit('iniciarContagem');
        },
        finalizarContagem() {
            console.log("finalizando contagem.");

            this.cronometroRodando = false;

            if (!this.cronometroRodando) {
                
                clearInterval(this.cronometro);
                this.cronometro = 0;
                this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos); //eu emito e envio o tempoEmSegundos, para na classe pai usar esse method.
                this.tempoEmSegundos = 0
            }
        },
    },
    emits: ['iniciarContagem', 'aoTemporizadorFinalizado']
}); 
</script>