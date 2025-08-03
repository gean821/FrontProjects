<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: {Tag},
    props: { 
        ingrediente: {type: String, required: true }
    },
    data(){
        return {
            Selecionado: false
        }
    },
    methods: {
        AoClicar() { //evento personalizado para o nosso clique no botão, usamos o emit para esse evento.
            
            this.Selecionado = !this.Selecionado;

            if (this.Selecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente);
            }else {
                this.$emit('removerIngrediente', this.ingrediente);
            }
        }
    },
    emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
    <button class="ingrediente" 
        @click="AoClicar()"
        :aria-pressed="Selecionado"> 
        <Tag :texto="ingrediente" :ativa="Selecionado" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>