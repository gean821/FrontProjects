<template>
    <button class="button" @click="botaoClicado()" :disabled="botaoDesabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ textoBotao }}</span>
    </button>

</template>


<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
       name: 'BotaoFormulario',
       props: {
        textoBotao: {type: String, required:true},
        icone: {type: String, required: true},
        botaoDesabilitado: {type: Boolean, required: false}
    },
    methods: {
        botaoClicado(): void{
            this.$emit('botaoClicado')
        }
    },
    emits: ['botaoClicado']
    });
</script>


<style scoped>


</style>