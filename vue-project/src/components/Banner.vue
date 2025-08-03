<template>
  <header class="banner">
    <div class="apresentacao">
      <img src="../assets/images/logo.svg" alt="logo-cookin'up" class="logo"> 

      <p class="cabecalho-lg frase-cabecalho">
        <span class="texto-verde">Um banquete de ideias para</span>
        despertar o chef que há em você!
      </p>

      <p class="subtitulo-lg frase-subtitulo">
        Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance.
      </p>
    </div>
    
    <img src="../assets/images/foto-banner.png" alt="foto do banner" class="foto-banner">    
  </header>
</template>

<style scoped>

.banner {
  padding:4rem 7.5rem;
  color: var(--creme);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  margin-bottom: 3rem;
  height: 4.5rem;
}

.texto-verde {
  color: var(--verde-medio, #3D6D4A);
}

.frase-subtitulo {
  margin-top: 2.5rem;
}

.foto-banner {
  width: 35rem;
}
  
@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
