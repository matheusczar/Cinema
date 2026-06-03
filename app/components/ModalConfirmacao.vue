<!--
  Componente: ModalConfirmacao.vue
  Criado por: Enzo Yuri
  Descrição: Modal de confirmação exibido após o usuário finalizar a compra.
  Exibe os detalhes do pedido e permite fechar ou voltar ao início.
-->

<template>
  <!-- Fundo escuro do modal -->
  <div v-if="visivel" class="modal-overlay" @click.self="$emit('fechar')">

    <div class="modal-box">

      <!-- Ícone de sucesso -->
      <div class="modal-icone">✅</div>

      <h2 class="modal-titulo">Compra Confirmada!</h2>
      <p class="modal-subtitulo">Seu ingresso foi reservado com sucesso.</p>

      <!-- Detalhes da compra -->
      <div class="modal-detalhes">

        <div class="detalhe-item">
          <span class="detalhe-label">Filme</span>
          <span class="detalhe-valor">{{ filme }}</span>
        </div>

        <div class="detalhe-item">
          <span class="detalhe-label">Sessão</span>
          <span class="detalhe-valor">{{ sessao }}</span>
        </div>

        <div class="detalhe-item">
          <span class="detalhe-label">Assentos</span>
          <span class="detalhe-valor">{{ assentos.join(', ') }}</span>
        </div>

        <div class="detalhe-item">
          <span class="detalhe-label">Categoria</span>
          <span class="detalhe-valor">{{ categoria === 'meia' ? 'Meia-entrada' : 'Inteira' }}</span>
        </div>

        <div class="detalhe-item detalhe-total">
          <span class="detalhe-label">Total pago</span>
          <span class="detalhe-valor valor-destaque">R$ {{ total }}</span>
        </div>

      </div>

      <!-- Botões -->
      <div class="modal-botoes">
        <button class="btn-voltar" @click="$emit('fechar')">
          Fechar
        </button>
        <NuxtLink to="/" class="btn-inicio">
          Ir para o Início
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  visivel: { type: Boolean, default: false },
  filme: { type: String, default: '' },
  sessao: { type: String, default: '' },
  assentos: { type: Array, default: () => [] },
  categoria: { type: String, default: 'inteira' },
  total: { type: String, default: '0.00' }
})

defineEmits(['fechar'])
</script>

<style scoped>
/* Fundo escuro que cobre a tela */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 20px;
}

/* Caixa do modal */
.modal-box {
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 45px 40px;
  width: 100%;
  max-width: 460px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.modal-icone {
  font-size: 52px;
  margin-bottom: 20px;
}

.modal-titulo {
  font-size: 26px;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
}

.modal-subtitulo {
  font-size: 15px;
  color: #aaa;
  margin-bottom: 30px;
}

/* Detalhes */
.modal-detalhes {
  background-color: #111;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
}

.detalhe-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #2a2a2a;
}

.detalhe-item:last-child {
  border-bottom: none;
}

.detalhe-label {
  font-size: 13px;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.detalhe-valor {
  font-size: 15px;
  color: white;
  font-weight: 500;
}

.detalhe-total {
  margin-top: 5px;
}

.valor-destaque {
  font-size: 22px;
  font-weight: bold;
  color: #e50914 !important;
}

/* Botões */
.modal-botoes {
  display: flex;
  gap: 12px;
}

.btn-voltar {
  flex: 1;
  padding: 13px;
  background-color: #2a2a2a;
  color: white;
  border: 1px solid #333;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  transition: 0.3s;
}

.btn-voltar:hover {
  background-color: #333;
}

.btn-inicio {
  flex: 1;
  padding: 13px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  font-family: Arial, sans-serif;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.btn-inicio:hover {
  background-color: #b20710;
}
</style>