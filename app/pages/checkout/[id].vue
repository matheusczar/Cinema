<template>
  <div v-if="filme" class="checkout-container">
    <div class="checkout-header">
      <h1>Finalizar Compra: {{ filme.titulo }}</h1>
      <NuxtLink :to="`/filmes/${filme.id}`" class="back-link">← Voltar aos detalhes</NuxtLink>
    </div>

    <div class="checkout-content">
      <!-- LADO ESQUERDO: PASSOS DA COMPRA -->
      <div class="selection-section">
        
        <!-- PASSO 1: SESSÃO -->
        <section class="step">
          <h2>1. Selecione a Sessão</h2>
          <div class="session-selectors">
            <div class="selector-group">
              <label>Cidade</label>
              <select v-model="session.city">
                <option value="">Selecione a cidade</option>
                <option>Belém</option>
                <option>Ananindeua</option>
                <option>Castanhal</option>
              </select>
            </div>

            <div class="selector-group">
              <label>Cinema</label>
              <select v-model="session.cinema" :disabled="!session.city">
                <option value="">Selecione o cinema</option>
                <option>Cinépolis</option>
                <option>Moviecom</option>
                <option>UCI</option>
              </select>
            </div>

            <div class="selector-group">
              <label>Data</label>
              <input type="date" v-model="session.date" :disabled="!session.cinema" :min="hoje" :max="fimDoAno" />
            </div>
          </div>

          <div v-if="session.date" class="time-selection">
            <label>Horário</label>
            <div class="horarios">
              <button 
                v-for="hora in ['14:00', '16:30', '19:00', '21:30']" 
                :key="hora"
                :class="{ 'active': session.time === hora }"
                @click="session.time = hora"
              >
                {{ hora }}
              </button>
            </div>
          </div>
        </section>

        <!-- PASSO 2: ASSENTOS -->
        <section class="step" :class="{ 'disabled-step': !isSessionComplete }">
          <h2>2. Escolha seus assentos</h2>
          <div v-if="isSessionComplete">
            <SeatMap v-model="selectedSeats" />
          </div>
          <p v-else class="step-hint">Por favor, complete a seleção da sessão primeiro.</p>
        </section>
      </div>

      <!-- LADO DIREITO: RESUMO -->
      <div class="summary-section">
        <h2>Resumo do Pedido</h2>
        <div class="summary-card">
          <div class="movie-info-mini">
            <img :src="filme.imagem" :alt="filme.titulo" />
            <div>
              <h3>{{ filme.titulo }}</h3>
              <p>{{ filme.genero }}</p>
            </div>
          </div>

          <div v-if="session.city || session.cinema || session.date || session.time" class="session-summary">
            <p v-if="session.city">📍 {{ session.city }} - {{ session.cinema }}</p>
            <p v-if="session.date">📅 {{ session.date }} às {{ session.time || '--:--' }}</p>
          </div>

          <div class="tickets-list">
            <p v-if="selectedSeats.length === 0" class="empty-msg">Nenhum assento selecionado.</p>
            <div v-else v-for="seat in selectedSeats" :key="seat" class="ticket-item">
              <span>Assento {{ seat }}</span>
              <span>R$ 30,00</span>
            </div>
          </div>

          <div class="total-section">
            <div class="total-row">
              <span>Total</span>
              <span class="total-price">R$ {{ totalValue.toFixed(2) }}</span>
            </div>
            <button class="btn-finish" :disabled="!canFinish" @click="finishPurchase">
              Confirmar Pagamento
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const supabase = useSupabaseClient() // Conecta com o Supabase

const { data: filme, error } = await supabase
  .from('filmes')
  .select('*')
  .eq('id', route.params.id)
  .single()

console.log('Filme:', filme)
console.log('Erro:', error)
const selectedSeats = ref([])
const loading = ref(false)

const session = reactive({
  city: '',
  cinema: '',
  date: '',
  time: ''
})
const hoje = new Date().toISOString().split('T')[0]

const fimDoAno = `${new Date().getFullYear()}-12-31`

const isSessionComplete = computed(() => {
  return (
    session.city &&
    session.cinema &&
    session.date &&
    session.time
  )
})

const totalValue = computed(() => {
  return selectedSeats.value.length * 30
})

const canFinish = computed(() => {
  return (
    isSessionComplete.value &&
    selectedSeats.value.length > 0
  )
})

const finishPurchase = async () => {
  loading.value = true
  
  try {
    const { error } = await supabase.from('compras').insert({
      filme_titulo: filme.titulo,
      cidade: session.city,
      cinema: session.cinema,
      data_sessao: session.date,
      horario: session.time,
      assentos: selectedSeats.value,
      valor_total: totalValue.value
    })

    if (error) throw error

    alert('✅ Compra salva no Supabase com sucesso!')
    router.push('/')
  } catch (e) {
    console.error(e)
    alert('❌ Erro ao salvar no banco: ' + e.message)
  } finally {
    loading.value = false
  }
}
</script>


<style scoped>
/* O estilo permanece o mesmo do anterior, com adições para os passos */
.checkout-container { padding: 40px 60px; min-height: 100vh; background: #111; color: white; }
.checkout-header { margin-bottom: 40px; }
.back-link { color: #e50914; text-decoration: none; }
.checkout-content { display: grid; grid-template-columns: 1fr 400px; gap: 40px; }
.step { margin-bottom: 50px; }
.disabled-step { opacity: 0.3; pointer-events: none; }
.step-hint { color: #888; font-style: italic; margin-top: 20px; }
h2 { margin-bottom: 25px; font-size: 24px; border-bottom: 1px solid #333; padding-bottom: 10px; color: #e50914; }
.session-selectors { display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 30px; }
.selector-group { display: flex; flex-direction: column; gap: 8px; flex: 1; min-width: 150px; }
.selector-group label { font-size: 14px; color: #888; }
.selector-group select, .selector-group input { padding: 12px; background: #222; border: 1px solid #444; border-radius: 8px; color: white; }
.horarios { display: flex; gap: 15px; flex-wrap: wrap; }
.horarios button { padding: 10px 20px; border: 1px solid #444; border-radius: 8px; background: #222; color: white; cursor: pointer; transition: 0.3s; }
.horarios button.active { background: #e50914; border-color: #e50914; }
.summary-card { background: #1a1a1a; padding: 25px; border-radius: 15px; position: sticky; top: 20px; }
.movie-info-mini { display: flex; gap: 15px; margin-bottom: 20px; }
.movie-info-mini img { width: 70px; height: 100px; object-fit: cover; border-radius: 5px; }
.session-summary { background: #252525; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-size: 14px; }
.tickets-list { margin-bottom: 25px; min-height: 80px; }
.ticket-item { display: flex; justify-content: space-between; margin-bottom: 10px; }
.total-section { border-top: 2px solid #333; padding-top: 20px; }
.total-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.total-price { font-size: 24px; font-weight: bold; color: #e50914; }
.btn-finish { width: 100%; padding: 15px; background: #e50914; color: white; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer; }
.btn-finish:disabled { background: #333; color: #666; cursor: not-allowed; }
</style>
