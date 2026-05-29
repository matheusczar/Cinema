<template>
  <div class="container">
    
    <!-- MENU -->
    <header class="navbar">
      <h1 class="logo">🎥 CineMax</h1> 

      <nav>
        <a href="#">Início</a>
        <a href="#">Filmes</a>
        <a href="#">Trailers</a>
        <a href="#">Contato</a>
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
            src=""
            alt="Filme"
          />

          <h3>Michael</h3>
          <p>Cinebiografia</p>
        </div>

        <div class="movie-card">
          <img
            src=""
            alt="Filme"
          />

          <h3>O Diabo Veste Prada</h3>
          <p>Comedia</p>
        </div>

        <div class="movie-card">
          <img
            src=""
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

nav a:hover {
  color: #e50914;
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

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 25px;
}

.movie-card {
  background-color: #1b1b1b;
  border-radius: 10px;

  overflow: hidden;

  transition: 0.3s;
}

.movie-card:hover {
  transform: scale(1.03);
}

.movie-card img {
  width: 100%;
  height: 320px;
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