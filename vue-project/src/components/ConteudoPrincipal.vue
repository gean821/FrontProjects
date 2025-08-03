<script lang="ts">
import BuscarReceitas from './BotaoPrincipal.vue';
import MostrarReceitas from './MostrarReceita.vue';
import Rodape from './Rodape.vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';
type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas' //entao aqui eu declaro pagina sendo selecionarIngredientes e mostrarReceitas.

export default {
  components: { SelecionarIngredientes, Tag, SuaLista, BuscarReceitas, Rodape, MostrarReceitas},
  data() {
    return {
      ingredientes: [] as string[],  //tipei aqui para dizer que pode ser uma string vazia.
      conteudo: 'SelecionarIngredientes' as Pagina // o conteudo foi criado para mostrar ou o componente de ingredientes ou o de mostrarReceitas. (no caso pag1 e pag2.) 
    }
  },
  methods: {
    adicionarIngrediente(ingrediente: string) {
        this.ingredientes.push(ingrediente);
    },
    removerIngrediente(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(x => x !== ingrediente)
    }
  }
}
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />
    <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"  
      @adicionar-ingrediente="adicionarIngrediente"      
      @remover-ingrediente="removerIngrediente"
      @buscar-receitas="conteudo ='MostrarReceitas'"/>
      <!--so vai mostrar os ingredientes se o seu conteudo for ele mesmo -->
      <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'" :ingrediente-selecionavel="ingredientes" 
      @editar-lista="conteudo ='SelecionarIngredientes'"/>
          <!-- aqui so mostraReceitas se o componente de mostrarReceitas tiver o conteudo com retorno igual a ele-->  
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}
</style>