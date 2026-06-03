<template>
  <div v-if="filme" class="detalhes-container">
    <div class="filme-header">
      <img
        :src="filme.imagem"
        :alt="filme.titulo"
        class="poster"
      />

      <div class="info">
        <h1>{{ filme.titulo }}</h1>

        <p class="genero">
           {{ filme.genero }}
        </p>

        <p>
           Estreia: 2026
        </p>

        <p>
           Duração: {{ filme.duracao }}
        </p>

        <p>
           Classificação: {{ filme.classificacao }}
        </p>

        <!-- ATUALIZADO: LINK PARA CHECKOUT -->
        <NuxtLink :to="`/checkout/${filme.id}`">
          <button class="btn-ingresso">
            Comprar Ingresso
          </button>
        </NuxtLink>
      </div>
    </div>

    <div class="sinopse">
      <h2>Sinopse</h2>
      <p>{{ filme.sinopse }}</p>
    </div>   
  </div>

  <div v-else class="erro">
    <h1>Filme não encontrado</h1>
    <NuxtLink to="/filmes">
      <button>Voltar ao Catálogo</button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { filmes } from '~/data/filmes'
import { useRoute } from 'vue-router'

const route = useRoute()
const filme = filmes.find(f => f.id === route.params.id)
</script>

<style scoped>
.detalhes-container {
  min-height: 100vh;
  background: #111;
  color: white;
  padding: 40px;
}

.filme-header {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.poster {
  width: 280px;
  border-radius: 12px;
}

.info {
  max-width: 600px;
}

.info h1 {
  font-size: 42px;
  margin-bottom: 20px;
}

.info p {
  margin-bottom: 12px;
  font-size: 18px;
}

.btn-ingresso {
  margin-top: 20px;
  padding: 12px 25px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-ingresso:hover {
  background: #b20710;
}

.sinopse {
  margin-top: 50px;
}

.sinopse h2 {
  margin-bottom: 15px;
}

.sinopse p {
  line-height: 1.8;
}

.sessoes {
  margin-top: 50px;
}

.horarios {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.horarios button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #222;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.horarios button:hover {
  background: #e50914;
}

.erro {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.erro button {
  padding: 12px 25px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
