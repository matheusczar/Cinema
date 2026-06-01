<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

html, body {
  background-color: #111;
  color: white;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>