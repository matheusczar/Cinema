<template>
  <div class="home-container">
    <Banner />
    <QuickFilter />
    <section class="movies">
      <h2>Filmes em Alta</h2>
      <div class="movie-grid">
        <MovieCaard
          v-for="filme in filmes"
          :key="filme.id"
          :filme="filme"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { filmes } from '~/data/filmes'
</script>

<style scoped>
.home-container {
  min-height: 100vh;
}
.movies {
  padding: 60px;
  background-color: #111;
  color: white;
}
.movies h2 {
  margin-bottom: 30px;
  font-size: 35px;
}
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 20px;
  max-width: 1600px;
}
</style>