<template>
  <NuxtLink :to="`/filmes/${filme.id}`" class="movie-link">
    <div class="movie-card">
      <img
        :src="filme.imagem"
        :alt="filme.titulo"
        class="movie-image"
      />

      <h3>{{ filme.titulo }}</h3>

      <p>{{ filme.genero }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  filme: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.movie-link {
  text-decoration: none;
  color: white;
  display: block;
  width: 100%;
}

.movie-card {
  background: transparent;
  overflow: visible;
  transition: transform 0.15s ease;
  cursor: pointer;
}

.movie-link:hover .movie-card {
  transform: translateY(-4px);
}

.movie-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}

.movie-card h3 {
  margin-top: 10px;
  padding: 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3;
}

.movie-card p {
  margin-top: 4px;
  padding: 0;
  color: #cfcfcf;
  font-size: 14px;
}
</style>