<!--
  Página: compra/index.vue
  Criado por: Enzo Yuri
  Descrição: Página de finalização de compra do CineMax.
  Exibe o resumo da compra e abre o modal de confirmação ao finalizar.
-->

<template>
  <div class="compra-container">

    <h1 class="compra-titulo">🎟️ Finalizar Compra</h1>

    <div class="compra-conteudo">

      <div class="compra-esquerda">
        <div class="sessao-info">
          <h2>Sessão Selecionada</h2>

          <div class="info-item">
            <span class="info-label">Filme</span>
            <span class="info-valor">{{ filmeAtual }}</span>
          </div>

          <div class="info-item">
            <span class="info-label">Data</span>
            <span class="info-valor">{{ sessaoAtual }}</span>
          </div>

          <div class="info-item">
            <span class="info-label">Sala</span>
            <span class="info-valor">Sala 1 — Formato 2D</span>
          </div>
        </div>

        <div class="assentos-section">
          <h2>Escolha seus Assentos</h2>
          <p class="assentos-legenda">
            <span class="legenda-item"><span class="bolinha livre"></span> Livre</span>
            <span class="legenda-item"><span class="bolinha ocupado"></span> Ocupado</span>
            <span class="legenda-item"><span class="bolinha selecionado"></span> Selecionado</span>
          </p>

          <div class="assentos-grade">
            <button
              v-for="assento in todosAssentos"
              :key="assento.codigo"
              :class="['assento', {
                ocupado: assento.ocupado,
                selecionado: assentosSelecionados.includes(assento.codigo)
              }]"
              :disabled="assento.ocupado"
              @click="toggleAssento(assento.codigo)"
            >
              {{ assento.codigo }}
            </button>
          </div>
        </div>
      </div>

      <div class="compra-direita">
        <ResumoCompra
          :filme="filmeAtual"
          :sessao="sessaoAtual"
          :assentos="assentosSelecionados"
          :categoria="categoria"
          @update:categoria="categoria = $event"
          @confirmar="abrirModal"
        />
      </div>

    </div>

    <ModalConfirmacao
      :visivel="modalVisivel"
      :filme="filmeAtual"
      :sessao="sessaoAtual"
      :assentos="assentosSelecionados"
      :categoria="categoria"
      :total="valorTotalFormatado"
      @fechar="modalVisivel = false"
    />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// Pega o filme e sessão da URL
const route = useRoute()
const filmeAtual = ref(route.query.filme || 'Filme não selecionado')
const sessaoAtual = ref(route.query.sessao || 'Sessão não selecionada')

const assentosSelecionados = ref([])
const categoria = ref('inteira')
const modalVisivel = ref(false)

const precoInteira = 25.00
const precoMeia = 12.50

// Gera os assentos da sala (fileiras A-F, 8 assentos cada)
const todosAssentos = ref(
  ['A','B','C','D','E','F'].flatMap(fileira =>
    Array.from({ length: 8 }, (_, i) => ({
      codigo: `${fileira}${i + 1}`,
      ocupado: ['A3', 'B5', 'C2', 'D7', 'E1', 'F4'].includes(`${fileira}${i + 1}`)
    }))
  )
)

function toggleAssento(codigo) {
  const index = assentosSelecionados.value.indexOf(codigo)
  if (index === -1) {
    assentosSelecionados.value.push(codigo)
  } else {
    assentosSelecionados.value.splice(index, 1)
  }
}

const valorTotal = computed(() => {
  const preco = categoria.value === 'meia' ? precoMeia : precoInteira
  return preco * assentosSelecionados.value.length
})

const valorTotalFormatado = computed(() => valorTotal.value.toFixed(2))

function abrirModal() {
  modalVisivel.value = true
}
</script>

<style scoped>
.compra-container {
  min-height: 100vh;
  background-color: #111;
  color: white;
  padding: 40px 60px;
  font-family: Arial, sans-serif;
}
.compra-titulo {
  font-size: 32px;
  margin-bottom: 40px;
}
.compra-conteudo {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  flex-wrap: wrap;
}
.compra-esquerda {
  flex: 1;
  min-width: 300px;
}
.compra-direita {
  width: 380px;
}
.sessao-info {
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 30px;
}
.sessao-info h2 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #e50914;
}
.info-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #2a2a2a;
}
.info-item:last-child {
  border-bottom: none;
}
.info-label {
  color: #aaa;
  font-size: 14px;
}
.info-valor {
  color: white;
  font-size: 14px;
  font-weight: bold;
}
.assentos-section {
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  padding: 25px;
}
.assentos-section h2 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #e50914;
}
.assentos-legenda {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.legenda-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #aaa;
}
.bolinha {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  display: inline-block;
}
.bolinha.livre { background-color: #2a2a2a; border: 1px solid #555; }
.bolinha.ocupado { background-color: #555; }
.bolinha.selecionado { background-color: #e50914; }
.assentos-grade {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
}
.assento {
  padding: 8px 4px;
  background-color: #2a2a2a;
  border: 1px solid #555;
  border-radius: 4px;
  color: white;
  font-size: 11px;
  cursor: pointer;
  transition: 0.2s;
  font-family: Arial, sans-serif;
}
.assento:hover:not(:disabled):not(.selecionado) {
  background-color: #444;
  border-color: #e50914;
}
.assento.selecionado {
  background-color: #e50914;
  border-color: #e50914;
  font-weight: bold;
}
.assento.ocupado {
  background-color: #333;
  border-color: #444;
  color: #555;
  cursor: not-allowed;
}
</style>