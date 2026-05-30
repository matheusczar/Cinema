<template>
  <div class="container">
    
    <!-- MENU -->
    <header class="navbar">
      <h1 class="logo">🎥 CineMax</h1> 

      <nav>
        <a href="#">Início</a>
        <NuxtLink to="/filmes">Filmes</NuxtLink>
    
        <a href="#">Contato</a>

        <!--adicionado botao-->
        <NuxtLink to="/login" class="login-btn">
          Entrar
        </NuxtLink>
      </nav>
    </header>

    <!-- BANNER -->
    <section class="banner">
      <div class="banner-content">
        <h2>Cinema em um só lugar</h2>

        <p>
          Descubra filmes incríveis, trailers, lançamentos
          e experiências cinematográficas.
        </p>

        <button>Explorar Filmes</button>
      </div>
    </section>

    <!-- FILMES/CARTAS -->
    <section class="movies">

      <h2>Filmes em Alta</h2>

      <div class="movie-grid">

        <div class="movie-card">
          <img
            src="https://ingresso-a.akamaihd.net/prd/img/movie/michael/a10e5eb8-6bef-4612-9288-5eae9dfe0377.webp"
            alt="Filme"
          />

          <h3>Michael</h3>
          <p>Cinebiografia</p>
        </div>

        <div class="movie-card">
          <img
            src="https://ingresso-a.akamaihd.net/prd/img/movie/o-diabo-veste-prada-2/4e042f1b-0072-4560-96f9-409c59dd0da2.webp"
            alt="Filme"
          />

          <h3>O Diabo Veste Prada 2</h3>
          <p>Comedia</p>
        </div>

        <div class="movie-card">
          <img
            src="https://ingresso-a.akamaihd.net/prd/img/movie/mortal-kombat-2/5e25856e-33f3-401b-8655-d8c016ffad1d.webp"
            alt="Filme"
          />

          <h3>Mortal Kombat 2</h3>
          <p>Ação/Aventura</p>
        </div>

      </div>
    </section>

  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #111;
  color: white;
}

/* NAVBAR */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 60px;
  background-color: #000;
}

.logo {
  color: #e50914;
  font-size: 32px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  transition: 0.3s;
}
/* BOTAO */
nav a:hover {
  color: #e50914;
}

.login-btn {
  margin-left: 20px;
  padding: 10px 18px;
  background-color: #e50914;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
}

.login-btn:hover {
  background-color: #b20710;
}

/* BANNER */

.banner {
  height: 80vh;

  background-image: linear-gradient(
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
    ),
    url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba');

  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;

  padding: 0 60px;
}

.banner-content {
  max-width: 600px;
}

.banner-content h2 {
  font-size: 55px;
  margin-bottom: 20px;
}

.banner-content p {
  font-size: 18px;
  margin-bottom: 25px;
  line-height: 1.6;
}

.banner-content button {
  padding: 14px 30px;
  border: none;
  background-color: #e50914;
  color: white;

  font-size: 16px;
  border-radius: 5px;

  cursor: pointer;
  transition: 0.3s;
}

.banner-content button:hover {
  background-color: #b20710;
}

/* FILMES */

.movies {
  padding: 60px;
}

.movies h2 {
  margin-bottom: 30px;
  font-size: 35px;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.movie-card {
  background-color: #1b1b1b;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s;
  width: 350px;
}

.movie-card:hover {
  transform: scale(1.03);
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
  padding: 0 15px 20px;
  color: #ccc;
}
</style>