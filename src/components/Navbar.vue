<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/profile.js'

const open = ref(false)
const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const links = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Carrossel', href: '/#carrossel' },
  { label: 'Artigos', href: '/#artigos' },
  { label: 'Shorts', href: '/#shorts' },
  { label: 'Contato', href: '/#contato' },
]
</script>

<template>
  <header :class="['navbar', { 'navbar--scrolled': scrolled }]">
    <div class="container navbar__inner">
      <a href="/" class="navbar__brand">
        <span class="navbar__dot navbar__dot--a"></span>
        <span class="navbar__dot navbar__dot--b"></span>
        <span class="navbar__dot navbar__dot--c"></span>
        <span class="navbar__url">{{ profile.handle }}</span>
      </a>

      <nav class="navbar__links" aria-label="Navegação principal">
        <a v-for="link in links" :key="link.label" :href="link.href">{{ link.label }}</a>
      </nav>

      <button
        class="navbar__toggle"
        :aria-expanded="open"
        aria-label="Abrir menu"
        @click="open = !open"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <transition name="slide">
      <nav v-if="open" class="navbar__mobile" aria-label="Navegação móvel">
        <a v-for="link in links" :key="link.label" :href="link.href" @click="open = false">{{ link.label }}</a>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(253, 246, 241, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.navbar--scrolled {
  border-color: rgba(43, 57, 104, 0.08);
  box-shadow: 0 8px 24px -18px rgba(43, 33, 60, 0.3);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-bottom: 14px;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  background: var(--paper);
  border: 1px solid rgba(43, 57, 104, 0.1);
  border-radius: 999px;
  box-shadow: var(--shadow-card);
}
.navbar__dot { width: 8px; height: 8px; border-radius: 50%; }
.navbar__dot--a { background: #EFA9AE; }
.navbar__dot--b { background: #F3D08A; }
.navbar__dot--c { background: #A6D6B0; }
.navbar__url {
  margin-left: 6px;
  font-family: var(--font-code);
  font-size: 0.8rem;
  color: var(--navy);
}

.navbar__links {
  display: flex;
  gap: 30px;
}
.navbar__links a {
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--ink-soft);
  transition: color 0.2s ease;
}
.navbar__links a:hover { color: var(--navy); }

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
}
.navbar__toggle span {
  width: 22px;
  height: 2px;
  background: var(--navy);
  border-radius: 2px;
}

.navbar__mobile {
  display: none;
}

@media (max-width: 860px) {
  .navbar__links { display: none; }
  .navbar__toggle { display: flex; }
  .navbar__mobile {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 8px 28px 20px;
    background: var(--cream);
  }
  .navbar__mobile a {
    padding: 12px 4px;
    font-weight: 600;
    border-bottom: 1px solid rgba(43, 57, 104, 0.08);
    color: var(--ink);
  }
}

.slide-enter-active, .slide-leave-active { transition: all 0.2s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
