<template>
  <div class="cinema-room">
    <div class="screen">TELA</div>

    <div class="seats-grid">
      <div v-for="row in rows" :key="row" class="row">
        <span class="row-label">{{ row }}</span>
        <div 
          v-for="col in cols" 
          :key="col"
          class="seat"
          :class="{ 
            'selected': isSelected(row, col),
            'occupied': isOccupied(row, col)
          }"
          @click="toggleSeat(row, col)"
        >
          {{ col }}
        </div>
      </div>
    </div>

    <div class="legend">
      <div class="legend-item"><div class="seat"></div> Disponível</div>
      <div class="legend-item"><div class="seat selected"></div> Selecionado</div>
      <div class="legend-item"><div class="seat occupied"></div> Ocupado</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])

const rows = ['A', 'B', 'C', 'D', 'E', 'F']
const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Simulação de assentos ocupados
const occupiedSeats = ['A1', 'A2', 'C5', 'D8']

const isSelected = (row, col) => {
  return props.modelValue.includes(`${row}${col}`)
}

const isOccupied = (row, col) => {
  return occupiedSeats.includes(`${row}${col}`)
}

const toggleSeat = (row, col) => {
  const seatId = `${row}${col}`
  if (isOccupied(row, col)) return

  let newSelection = [...props.modelValue]
  if (isSelected(row, col)) {
    newSelection = newSelection.filter(s => s !== seatId)
  } else {
    newSelection.push(seatId)
  }
  
  emit('update:modelValue', newSelection)
}
</script>

<style scoped>
.cinema-room {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 15px;
}

.screen {
  width: 80%;
  height: 10px;
  background: #555;
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
  text-align: center;
  font-size: 12px;
  color: #888;
  margin-bottom: 40px;
}

.seats-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.row {
  display: flex;
  gap: 10px;
  align-items: center;
}

.row-label {
  width: 20px;
  font-weight: bold;
  color: #888;
}

.seat {
  width: 30px;
  height: 30px;
  background: #444;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  transition: 0.2s;
}

.seat:hover:not(.occupied) {
  background: #666;
  transform: scale(1.1);
}

.seat.selected {
  background: #e50914;
  color: white;
}

.seat.occupied {
  background: #222;
  color: #444;
  cursor: not-allowed;
}

.legend {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  font-size: 14px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend .seat {
  width: 15px;
  height: 15px;
  cursor: default;
}
</style>
