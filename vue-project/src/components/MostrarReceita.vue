certo, mas por algum motivo dessa forma ainda não mostra nada, aparece o v-else

<script lang="ts">
import type {PropType } from 'vue';
import type IReceita from '@/Interfaces/IReceita';
import { ObterReceitas } from '@/Http';
import CardReceita from './CardReceita.vue';
import BotaoEditarLista from './BotaoEditarLista.vue';
import IngredienteSelecionavel from './IngredienteSelecionavel.vue';

export default{
    components: {CardReceita, BotaoEditarLista, IngredienteSelecionavel},
    props: {
        ingredienteSelecionavel: {type: Array as PropType<string[]>,
            required:true
        }
    },
    data() {
        return {
            receitas: [] as IReceita[]
        }
    },
    async created() {
        const receitasEncontradas = await ObterReceitas();

        this.receitas = receitasEncontradas.filter(receita => receita)
      },
    emits: ['editarLista']
}
</script>


<template>
    <h1 class="title">
        Receitas
    </h1>
    <div class="resultados-encontrados">
        Resultados Encontrados: {{receitas.length}}
    </div>

    <div v-if="receitas.length" class="receitas-wrapper">
        <p class="opcoes-receitas">
            Veja as opções de receitas que encontramos com os ingredientes que você tem por ai! 
        </p>
    </div>
    

    <section class="receitas">
        <ul v-if="receitas.length" class="receitas-encontradas">
            <li v-for="receita in receitas" class="receitas">
                <CardReceita :receitas="receita" />
            </li>
        </ul>

        <p v-else class="receita-nao-encontrada">
            Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
        </p>
        <img src="../assets/images/sem-receitas.png" 
        alt="Foto de ovo quebrado sem receita encontrada para a combinação">
    </section>
    <BotaoEditarLista Texto="Editar Lista"
    @editarLista="$emit('editarLista')" />
</template>


<style scoped>

.receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 648px;
  margin: 0 auto;
  color: #3D6D4A;
}

.receitas-encontradas {
  display: flex;
  flex-wrap: wrap;;
  justify-content: center;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

.resultados-encontrados {
  font-size: 1.25rem;
  font-weight: 600;
  color: #3D6D4A;
  margin-bottom: 0.5rem;
}

.opcoes-receitas {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #444;
  text-align: center;
  max-width: 600px;
}

.receita-nao-encontrada {
  font-size: 1rem;
  text-align: center;
  color: #666;
  margin-top: 2rem;
}

.receita-nao-encontrada img {
  margin-top: 1rem;
  width: 100px;
  height: auto;
}


</style>