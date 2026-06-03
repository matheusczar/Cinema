<template>
  <div v-if="filme" class="detalhes-container">
    <div class="filme-header">
      <img :src="filme.imagem" :alt="filme.titulo" class="poster" />
      <div class="info">
        <h1>{{ filme.titulo }}</h1>
        <p class="genero">🎭 {{ filme.genero }}</p>
        <p>📅 Estreia: 2026</p>
        <p>⏱️ Duração: {{ filme.duracao }}</p>
        <p>🔞 Classificação: {{ filme.classificacao }}</p>

        <div class="sessoes">
          <h3>Horários Disponíveis</h3>
          <div class="horarios">
            <button
              v-for="horario in horarios"
              :key="horario"
              :class="['btn-horario', { ativo: horarioSelecionado === horario }]"
              @click="horarioSelecionado = horario"
            >
              {{ horario }}
            </button>
          </div>
        </div>

        <button class="btn-ingresso" @click="comprarIngresso">
          Comprar Ingresso
        </button>

        <p v-if="aviso" class="aviso">{{ aviso }}</p>
      </div>
    </div>

    <div class="sinopse">
      <h2>Sinopse</h2>
      <p>{{ filme.sinopse }}</p>
    </div>
  </div>

  <div v-else class="erro">
    <h1>Filme não encontrado</h1>
    <NuxtLink to="/filmes">
      <button>Voltar ao Catálogo</button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { filmes } from '~/data/filmes'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const filme = filmes.find(f => f.id === route.params.id)

const horarios = ['14:00', '16:30', '19:00', '21:30']
const horarioSelecionado = ref('')
const aviso = ref('')

function comprarIngresso() {
  if (!horarioSelecionado.value) {
    aviso.value = 'Selecione um horário antes de continuar!'
    return
  }

  aviso.value = ''

  router.push(`/checkout/${filme.id}`)
}
</script>

<style scoped>
.detalhes-container {
  min-height: 100vh;
  background: #111;
  color: white;
  padding: 40px;
}
.filme-header {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}
.poster {
  width: 280px;
  border-radius: 12px;
}
.info {
  max-width: 600px;
}
.info h1 {
  font-size: 42px;
  margin-bottom: 20px;
}
.info p {
  margin-bottom: 12px;
  font-size: 18px;
}
.sessoes {
  margin-top: 25px;
  margin-bottom: 20px;
}
.sessoes h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #ccc;
}
.horarios {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.btn-horario {
  padding: 10px 20px;
  border: 1px solid #444;
  border-radius: 8px;
  background: #222;
  color: white;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s;
  font-family: Arial, sans-serif;
}
.btn-horario:hover {
  border-color: #e50914;
}
.btn-horario.ativo {
  background: #e50914;
  border-color: #e50914;
  font-weight: bold;
}
.btn-ingresso {
  margin-top: 10px;
  padding: 12px 25px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
  font-family: Arial, sans-serif;
}
.btn-ingresso:hover {
  background: #b20710;
}
.aviso {
  margin-top: 12px;
  color: #ff6b6b;
  font-size: 14px;
}
.sinopse {
  margin-top: 50px;
}
.sinopse h2 {
  margin-bottom: 15px;
  font-size: 24px;
}
.sinopse p {
  line-height: 1.8;
  font-size: 16px;
  color: #ccc;
}
.erro {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.erro button {
  padding: 12px 25px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.erro button:hover {
  background: #b20710;
}
</style>