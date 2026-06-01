<template>
  <section class="quick-filter">
    <h2>🍿 O que está passando hoje?</h2>

    <div class="filter-container">
      <select>
        <option>Selecione a cidade</option>
        <option>Belém</option>
        <option>Ananindeua</option>
        <option>Castanhal</option>
      </select>

      <select>
        <option>Selecione o cinema</option>
        <option>Cinépolis</option>
        <option>Moviecom</option>
        <option>UCI</option>
      </select>

      <input type="date" />

      <button>
        Buscar Sessões
      </button>
    </div>
  </section>
</template>

<style scoped>
.quick-filter {
  background-color: #181818;
  padding: 40px 60px;
}

.quick-filter h2 {
  text-align: center;
  margin-bottom: 25px;
  color: white;
}

.filter-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-container select,
.filter-container input {
  padding: 12px;
  min-width: 220px;

  border: none;
  border-radius: 6px;

  background-color: #252525;
  color: white;
}

.filter-container button {
  padding: 12px 25px;

  border: none;
  border-radius: 6px;

  background-color: #e50914;
  color: white;

  cursor: pointer;
  transition: 0.3s;
}

.filter-container button:hover {
  background-color: #b20710;
}
</style>