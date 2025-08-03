<script lang="ts">
import type IReceita from '@/Interfaces/IReceita';
import { EmitFlags } from 'typescript';
import type { PropType } from 'vue';

export default{
    components: {
    },
    props: {
        Receitas: {type: Object as PropType<IReceita>, required: false},
        Texto: {type: String, required: true}
    },
    methods: {
        BuscarReceitas() {
            this.$emit('buscarReceitas');
        }
    },
    emits: ['buscarReceitas']
}
</script>

<template>
    <button class="buscar-receita"
        @click="BuscarReceitas()">
        {{ Texto }}    
    </button>
</template>

<style scoped>

.buscar-receita {
  width: 19.5rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 700;
  color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
  cursor: pointer;
  transition: 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
}

.buscar-receita:hover {
  background: var(--ocre-hover, #D1451E);
}
</style>