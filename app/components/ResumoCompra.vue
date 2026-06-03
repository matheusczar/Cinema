<!--
  Componente: ResumoCompra.vue
  Criado por: Enzo Yuri
  Descrição: Exibe o resumo dos bilhetes selecionados e o valor total da compra.
  Recebe como props: filme, sessao, assentos selecionados e categoria do bilhete.
-->

<template>
  <div class="resumo-container">

    <h2 class="resumo-titulo">🎟️ Resumo da Compra</h2>

    <!-- Informações do filme -->
    <div class="resumo-secao">
      <h3>Filme</h3>
      <p>{{ filme }}</p>
    </div>

    <!-- Informações da sessão -->
    <div class="resumo-secao">
      <h3>Sessão</h3>
      <p>{{ sessao }}</p>
    </div>

    <!-- Assentos selecionados -->
    <div class="resumo-secao">
      <h3>Assentos</h3>
      <div class="assentos-lista">
        <span
          v-for="assento in assentos"
          :key="assento"
          class="assento-tag"
        >
          {{ assento }}
        </span>
      </div>
    </div>

    <!-- Categoria do bilhete -->
    <div class="resumo-secao">
      <h3>Categoria</h3>
      <div class="categoria-opcoes">
        <button
          :class="['btn-categoria', { ativo: categoria === 'inteira' }]"
          @click="$emit('update:categoria', 'inteira')"
        >
          Inteira — R$ {{ precoInteira.toFixed(2) }}
        </button>
        <button
          :class="['btn-categoria', { ativo: categoria === 'meia' }]"
          @click="$emit('update:categoria', 'meia')"
        >
          Meia — R$ {{ precoMeia.toFixed(2) }}
        </button>
      </div>
    </div>

    <!-- Valor total -->
    <div class="resumo-total">
      <span>Total</span>
      <span class="valor-total">R$ {{ valorTotal.toFixed(2) }}</span>
    </div>

    <!-- Botão de confirmar -->
    <button
      class="btn-confirmar"
      :disabled="assentos.length === 0"
      @click="$emit('confirmar')"
    >
      Confirmar Compra
    </button>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  filme: { type: String, default: '' },
  sessao: { type: String, default: '' },
  assentos: { type: Array, default: () => [] },
  categoria: { type: String, default: 'inteira' }
})

defineEmits(['update:categoria', 'confirmar'])

// Preços base
const precoInteira = 25.00
const precoMeia = 12.50

// Calcula o valor total com base na categoria e quantidade de assentos
const valorTotal = computed(() => {
  const preco = props.categoria === 'meia' ? precoMeia : precoInteira
  return preco * props.assentos.length
})
</script>

<style scoped>
.resumo-container {
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  padding: 30px;
  color: white;
  font-family: Arial, sans-serif;
  width: 100%;
  max-width: 380px;
}

.resumo-titulo {
  font-size: 20px;
  margin-bottom: 25px;
  color: white;
}

.resumo-secao {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #2a2a2a;
}

.resumo-secao h3 {
  font-size: 13px;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.resumo-secao p {
  font-size: 16px;
  color: white;
}

/* Assentos */
.assentos-lista {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.assento-tag {
  background-color: #e50914;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
}

/* Categoria */
.categoria-opcoes {
  display: flex;
  gap: 10px;
}

.btn-categoria {
  flex: 1;
  padding: 10px;
  background-color: #2a2a2a;
  color: #ccc;
  border: 1px solid #333;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-family: Arial, sans-serif;
  transition: 0.3s;
}

.btn-categoria:hover {
  border-color: #e50914;
  color: white;
}

.btn-categoria.ativo {
  background-color: #e50914;
  border-color: #e50914;
  color: white;
  font-weight: bold;
}

/* Total */
.resumo-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-top: 5px;
}

.resumo-total span {
  font-size: 16px;
  color: #aaa;
}

.valor-total {
  font-size: 28px;
  font-weight: bold;
  color: white !important;
}

/* Botão confirmar */
.btn-confirmar {
  width: 100%;
  padding: 14px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  font-family: Arial, sans-serif;
  transition: background-color 0.3s;
}

.btn-confirmar:hover:not(:disabled) {
  background-color: #b20710;
}

.btn-confirmar:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>