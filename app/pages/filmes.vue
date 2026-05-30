<template>
  <div class="filmes-container">

    <div class="hero">
      <h1>🎬 Catálogo de Filmes</h1>
      <p>Explore os principais lançamentos e filmes em destaque.</p>
    </div>

    <div class="filtros">
      <input
        type="text"
        placeholder="Pesquisar filme..."
      />
    </div>

    <div class="movie-grid">

      <div class="movie-card">
        <img
          src="https://ingresso-a.akamaihd.net/prd/img/movie/michael/a10e5eb8-6bef-4612-9288-5eae9dfe0377.webp"
          alt="Michael"
        />
        <h3>Michael</h3>
        <p>Cinebiografia</p>
      </div>

      <div class="movie-card">
        <img
          src="https://ingresso-a.akamaihd.net/prd/img/movie/o-diabo-veste-prada-2/4e042f1b-0072-4560-96f9-409c59dd0da2.webp"
          alt="O Diabo Veste Prada"
        />
        <h3>O Diabo Veste Prada 2</h3>
        <p>Comédia</p>
      </div>

      <div class="movie-card">
        <img
          src="https://ingresso-a.akamaihd.net/prd/img/movie/mortal-kombat-2/5e25856e-33f3-401b-8655-d8c016ffad1d.webp"
          alt="Mortal Kombat 2"
        />
        <h3>Mortal Kombat 2</h3>
        <p>Ação / Aventura</p>
      </div>

      <div class="movie-card">
        <img
          src="https://ingresso-a.akamaihd.net/prd/img/movie/avatar-fogo-e-cinzas/716c20d3-c76d-4e3d-9365-3a0d94eca6a5.webp"
          alt="Avatar"
        />
        <h3>Avatar: Fogo E Cinzas</h3>
        <p>Ficção Científica</p>
      </div>

    </div>

  </div>
</template>

<style scoped>

.filmes-container {
  min-height: 100vh;
  background: #111;
  color: white;
  padding: 40px;
}

.hero {
  text-align: center;
  margin-bottom: 50px;
}

.hero h1 {
  font-size: 48px;
  color: #e50914;
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
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.movie-card {
  background: #1b1b1b;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s;
}

.movie-card:hover {
  transform: translateY(-8px);
}

.movie-card img {
  width: 100%;
  height: 420px;
  object-fit: cover;
}

.movie-card h3 {
  padding: 15px 15px 5px;
}

.movie-card p {
  padding: 0 15px 15px;
  color: #ccc;
}

</style>