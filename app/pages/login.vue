<!-- 
  Página: login.vue
  Criado por: Enzo Yuri
  Descrição: Página de login do sistema CineMax.
  Permite que o usuário entre com e-mail e senha.
  Utiliza o componente reutilizável FormularioLogin.
-->

<template>
  <div>
    <!-- Navbar fixa no topo -->
    <header class="navbar">
      <NuxtLink to="/" class="logo">🎥 CineMax</NuxtLink>
      <nav>
        <NuxtLink to="/">Início</NuxtLink>
        <a href="#">Filmes</a>
        <a href="#">Trailers</a>
        <a href="#">Contato</a>
      </nav>
    </header>

    <!-- Componente de formulário reutilizável com imagem e textos próprios do login -->
    <FormularioLogin
      titulo="Bem-vindo de volta"
      subtitulo="Entre na sua conta para comprar ingressos e acompanhar suas sessões."
      bgImage="url('https://images.unsplash.com/photo-1440404653325-ab127d49abc1')"
    >
      <form @submit.prevent="handleLogin">

        <!-- Campo de e-mail -->
        <div class="campo">
          <label>E-mail</label>
          <input v-model="email" type="email" placeholder="seu@email.com" required />
        </div>

        <!-- Campo de senha com botão de mostrar/ocultar -->
        <div class="campo">
          <label>Senha</label>
          <div class="input-senha">
            <input v-model="senha" :type="mostrarSenha ? 'text' : 'password'" placeholder="••••••••" required />
            <button type="button" class="btn-olho" @click="mostrarSenha = !mostrarSenha">
              {{ mostrarSenha ? '🙈' : '👁️' }}
            </button>
          </div>
        </div>

        <!-- Opções de lembrar e esqueci a senha -->
        <div class="opcoes">
          <label class="lembrar">
            <input type="checkbox" v-model="lembrar" />
            Lembrar de mim
          </label>
          <a href="#" class="link-esqueci">Esqueci minha senha</a>
        </div>

        <!-- Botão de envio -->
        <button type="submit" class="btn-principal" :disabled="carregando">
          <span v-if="carregando">Entrando...</span>
          <span v-else>Entrar</span>
        </button>

        <!-- Mensagem de erro -->
        <div v-if="erro" class="mensagem-erro">{{ erro }}</div>

      </form>

      <!-- Rodapé com link para cadastro -->
      <template #footer>
        <p class="texto-footer">
          Não tem uma conta?
          <NuxtLink to="/cadastro" class="link-destaque">Cadastre-se grátis</NuxtLink>
        </p>
      </template>
    </FormularioLogin>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Variáveis reativas do formulário
const email = ref('')
const senha = ref('')
const lembrar = ref(false)
const mostrarSenha = ref(false)
const carregando = ref(false)
const erro = ref('')

// Função de login - futuramente conectar com API do backend
async function handleLogin() {
  erro.value = ''
  carregando.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  if (email.value === 'teste@email.com' && senha.value === '123456') {
    alert('Login realizado com sucesso! ✅')
  } else {
    erro.value = 'E-mail ou senha incorretos. Tente novamente.'
  }
  carregando.value = false
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: #000;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
.logo {
  color: #e50914;
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
  font-family: Arial, sans-serif;
}
nav a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-family: Arial, sans-serif;
  transition: 0.3s;
}
nav a:hover { color: #e50914; }
.campo { margin-bottom: 20px; }
.campo label {
  display: block;
  color: #ccc;
  font-size: 14px;
  margin-bottom: 8px;
  font-family: Arial, sans-serif;
}
.campo input {
  width: 100%;
  padding: 13px 16px;
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 6px;
  color: white;
  font-size: 15px;
  font-family: Arial, sans-serif;
  outline: none;
  transition: border-color 0.3s;
}
.campo input:focus { border-color: #e50914; }
.campo input::placeholder { color: #555; }
.input-senha { position: relative; }
.input-senha input { padding-right: 48px; }
.btn-olho {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #aaa;
}
.opcoes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}
.lembrar {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ccc;
  font-size: 14px;
  cursor: pointer;
  font-family: Arial, sans-serif;
}
.lembrar input { accent-color: #e50914; width: 15px; height: 15px; }
.link-esqueci {
  color: #e50914;
  font-size: 14px;
  text-decoration: none;
  font-family: Arial, sans-serif;
}
.link-esqueci:hover { color: #ff2929; }
.btn-principal {
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
.btn-principal:hover:not(:disabled) { background-color: #b20710; }
.btn-principal:disabled { opacity: 0.6; cursor: not-allowed; }
.mensagem-erro {
  margin-top: 15px;
  padding: 12px;
  background-color: rgba(229,9,20,0.15);
  border: 1px solid #e50914;
  border-radius: 6px;
  color: #ff6b6b;
  font-size: 14px;
  text-align: center;
  font-family: Arial, sans-serif;
}
.texto-footer {
  color: #aaa;
  font-size: 14px;
  font-family: Arial, sans-serif;
}
.link-destaque {
  color: #e50914;
  font-weight: bold;
  text-decoration: none;
}
.link-destaque:hover { color: #ff2929; }
</style>