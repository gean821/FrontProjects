<script lang="ts">
import type IReceita from '@/Interfaces/IReceita';
import type { PropType } from 'vue';

 
export default{
 props: {
    receitas: {type: Object as PropType<IReceita>, required:true}
 }
}
</script>

<template>
    <article class="receita">
        <header class="receita-cabecalho">7
            <img :src="`/receitas/${receitas.imagem}`" alt="imagem da receita recebida" class="receita-imagem">
        </header>
        <main class="receita-nomes">
            <h2 class="receita-nome">
                {{ receitas.nome }}
            </h2>
        </main>
    </article>
</template>

<style scoped>

.receita {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.receita-imagem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.receita-nome {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}
</style>