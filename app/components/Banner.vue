<template>
  <section class="banner">
    <div class="banner-content">
      <h2>Cinema em um só lugar</h2>

      <p>
        Descubra filmes incríveis, trailers, lançamentos
        e experiências cinematográficas.
      </p>

      <NuxtLink to="/filmes">
        <button>Explorar Filmes</button>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.banner {
  height: 80vh;

  background-image: linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
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
</style>