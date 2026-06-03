<!-- 
  Página: cadastro.vue
  Criado por: Enzo Yuri
  Descrição: Página de cadastro do sistema CineMax.
  Integrado com Supabase para criar usuários reais.
-->

<template>
  <div>
    <header class="navbar">
      <NuxtLink to="/" class="logo">🎥 CineMax</NuxtLink>
      <nav>
        <NuxtLink to="/">Início</NuxtLink>
        <a href="#">Filmes</a>
        <a href="#">Trailers</a>
        <a href="#">Contato</a>
      </nav>
    </header>

    <FormularioLogin
      titulo="Crie sua conta"
      subtitulo="Cadastre-se gratuitamente e aproveite a melhor experiência do cinema."
      bgImage="url('https://images.unsplash.com/photo-1478720568477-152d9b164e26')"
    >
      <form @submit.prevent="handleCadastro">

        <div class="campo">
          <label>Nome completo</label>
          <input v-model="nome" type="text" placeholder="Seu nome" required />
        </div>

        <div class="campo">
          <label>E-mail</label>
          <input v-model="email" type="email" placeholder="seu@email.com" required />
        </div>

        <div class="campo">
          <label>Senha</label>
          <div class="input-senha">
            <input v-model="senha" :type="mostrarSenha ? 'text' : 'password'" placeholder="Mínimo 6 caracteres" required />
            <button type="button" class="btn-olho" @click="mostrarSenha = !mostrarSenha">
              {{ mostrarSenha ? '🙈' : '👁️' }}
            </button>
          </div>
          <div v-if="senha.length > 0" class="forca-senha">
            <div class="barra-forca">
              <div class="barra-preenchida" :style="{ width: forcaSenhaPercent + '%' }" :class="forcaSenhaClasse"></div>
            </div>
            <span class="forca-label" :class="forcaSenhaClasse">{{ forcaSenhaTexto }}</span>
          </div>
        </div>

        <div class="campo">
          <label>Confirmar senha</label>
          <div class="input-senha">
            <input v-model="confirmarSenha" :type="mostrarConfirmar ? 'text' : 'password'" placeholder="Repita a senha" required />
            <button type="button" class="btn-olho" @click="mostrarConfirmar = !mostrarConfirmar">
              {{ mostrarConfirmar ? '🙈' : '👁️' }}
            </button>
          </div>
          <span v-if="confirmarSenha && senha !== confirmarSenha" class="aviso-senha">
            As senhas não coincidem
          </span>
        </div>

        <div class="termos">
          <input type="checkbox" v-model="aceitouTermos" required />
          <span>Eu aceito os <span class="link-destaque">Termos de Uso</span> e a <span class="link-destaque">Política de Privacidade</span></span>
        </div>

        <button type="submit" class="btn-principal" :disabled="carregando || senha !== confirmarSenha">
          <span v-if="carregando">Cadastrando...</span>
          <span v-else>Criar conta</span>
        </button>

        <div v-if="erro" class="mensagem-erro">{{ erro }}</div>
        <div v-if="sucesso" class="mensagem-sucesso">{{ sucesso }}</div>

      </form>

      <template #footer>
        <p class="texto-footer">
          Já tem uma conta?
          <NuxtLink to="/login" class="link-destaque">Entrar agora</NuxtLink>
        </p>
      </template>
    </FormularioLogin>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Supabase e router
const supabase = useSupabaseClient()
const router = useRouter()

const nome = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')
const aceitouTermos = ref(false)
const mostrarSenha = ref(false)
const mostrarConfirmar = ref(false)
const carregando = ref(false)
const erro = ref('')
const sucesso = ref('')

const forcaSenhaPercent = computed(() => {
  const s = senha.value
  if (s.length === 0) return 0
  let pontos = 0
  if (s.length >= 6) pontos += 25
  if (s.length >= 10) pontos += 25
  if (/[A-Z]/.test(s)) pontos += 25
  if (/[0-9!@#$%^&*]/.test(s)) pontos += 25
  return pontos
})

const forcaSenhaClasse = computed(() => {
  const p = forcaSenhaPercent.value
  if (p <= 25) return 'fraca'
  if (p <= 50) return 'media'
  if (p <= 75) return 'boa'
  return 'forte'
})

const forcaSenhaTexto = computed(() => {
  const map = { fraca: 'Fraca', media: 'Média', boa: 'Boa', forte: 'Forte' }
  return map[forcaSenhaClasse.value]
})

// Cadastro integrado com Supabase
async function handleCadastro() {
  erro.value = ''
  sucesso.value = ''

  if (senha.value !== confirmarSenha.value) {
    erro.value = 'As senhas não coincidem.'
    return
  }
  if (senha.value.length < 6) {
    erro.value = 'A senha deve ter pelo menos 6 caracteres.'
    return
  }

  carregando.value = true

  try {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: senha.value,
      options: {
        data: {
          nome: nome.value
        }
      }
    })

    if (error) throw error

    sucesso.value = 'Conta criada com sucesso! ✅ Redirecionando para o login...'
    setTimeout(() => router.push('/login'), 2000)

  } catch (e) {
    erro.value = e.message || 'Erro ao criar conta. Tente novamente.'
  } finally {
    carregando.value = false
  }
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
.forca-senha {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}
.barra-forca {
  flex: 1;
  height: 4px;
  background-color: #333;
  border-radius: 4px;
  overflow: hidden;
}
.barra-preenchida {
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s, background-color 0.3s;
}
.forca-label {
  font-size: 12px;
  font-family: Arial, sans-serif;
  min-width: 40px;
}
.fraca { background-color: #e50914; color: #e50914; }
.media { background-color: #ff9900; color: #ff9900; }
.boa   { background-color: #f0e000; color: #f0e000; }
.forte { background-color: #00cc66; color: #00cc66; }
.aviso-senha {
  font-size: 13px;
  color: #e50914;
  margin-top: 6px;
  display: block;
  font-family: Arial, sans-serif;
}
.termos {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ccc;
  font-size: 14px;
  margin-bottom: 25px;
  line-height: 1.5;
  font-family: Arial, sans-serif;
}
.termos input {
  accent-color: #e50914;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}
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
.mensagem-sucesso {
  margin-top: 15px;
  padding: 12px;
  background-color: rgba(0,204,102,0.15);
  border: 1px solid #00cc66;
  border-radius: 6px;
  color: #00cc66;
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