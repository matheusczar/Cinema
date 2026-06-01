<template>
  <div class="filmes-container">
    <div class="hero">
      <h1>🎬 Catálogo de Filmes</h1>
      <p>Explore os principais lançamentos e filmes em destaque.</p>
    </div>

    <div class="filtros">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Pesquisar filme..."
      />
    </div>

    <div class="movie-grid">
      <MovieCard
        v-for="filme in filmesFiltrados"
        :key="filme.id"
        :filme="filme"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { filmes } from '~/data/filmes'
/*import MovieCard from '~/components/MovieCard.vue'*/

const searchQuery = ref('')

const filmesFiltrados = computed(() => {
  if (!searchQuery.value) {
    return filmes
  }

  return filmes.filter(filme =>
    filme.titulo.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    filme.genero.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<style scoped>
.filmes-container {
  min-height: 100vh;
  background: #111;
  color: white;

  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;

  overflow-x: hidden;
}

.hero {
  text-align: center;
  margin-bottom: 50px;
}

.hero h1 {
  font-size: 42px;
}

.hero p {
  margin-top: 10px;
  color: #ccc;
}

.filtros {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.filtros input {
  width: 400px;
  max-width: 90%;
  padding: 12px;
  border: none;
  border-radius: 8px;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  justify-content: center;
  gap: 18px;
}
</style>