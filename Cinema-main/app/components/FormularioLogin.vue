<!-- 
  Componente: FormularioLogin.vue
  Criado por: Enzo Yuri
  Descrição: Componente reutilizável de formulário usado nas páginas de Login e Cadastro.
  Recebe como parâmetros: título, subtítulo e imagem de fundo (bgImage).
  Exibe a logo do CineMax, título, subtítulo e um slot para o conteúdo do formulário.
-->

<template>
  <div class="form-wrapper">
    <div class="form-box">

      <!-- Logo do sistema -->
      <div class="form-logo">
        <span class="logo-icon">🎥</span>
        <span class="logo-text">CineMax</span>
      </div>

      <!-- Título e subtítulo dinâmicos recebidos por props -->
      <h2 class="form-title">{{ titulo }}</h2>
      <p class="form-subtitle">{{ subtitulo }}</p>

      <!-- Slot principal: recebe o formulário da página pai -->
      <slot />

      <!-- Slot de rodapé: recebe links como "Já tem conta?" -->
      <div class="form-footer">
        <slot name="footer" />
      </div>

    </div>
  </div>
</template>

<script setup>
// Propriedades recebidas pelas páginas de login e cadastro
const props = defineProps({
  titulo: { type: String, default: 'Entrar' },
  subtitulo: { type: String, default: '' },
  bgImage: { type: String, default: "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')" }
})

const bgImage = props.bgImage
</script>

<style scoped>
/* Wrapper que ocupa a tela inteira com imagem de fundo dinâmica */
.form-wrapper {
  min-height: 100vh;
  background-color: #111;
  background-image:
    linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
    v-bind(bgImage);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}
/* Caixa central do formulário */
.form-box {
  background-color: rgba(0,0,0,0.85);
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  padding: 50px 45px;
  width: 100%;
  max-width: 440px;
}
.form-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}
.logo-icon { font-size: 28px; }
.logo-text {
  font-size: 26px;
  font-weight: bold;
  color: #e50914;
  font-family: Arial, sans-serif;
}
.form-title {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
  font-family: Arial, sans-serif;
}
.form-subtitle {
  font-size: 15px;
  color: #aaa;
  margin-bottom: 30px;
  line-height: 1.5;
  font-family: Arial, sans-serif;
}
.form-footer {
  margin-top: 25px;
  text-align: center;
}
</style>