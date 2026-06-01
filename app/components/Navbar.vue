<template>
  <header class="navbar">
    <h1 class="logo">🎥 CineMax</h1>

    <nav>
      <NuxtLink to="/">Início</NuxtLink>
      <NuxtLink to="/filmes">Filmes</NuxtLink>

      <NuxtLink to="/login" class="login-btn">
        Entrar
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
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

nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}

nav a:hover {
  color: #e50914;
}

.login-btn {
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
</style>