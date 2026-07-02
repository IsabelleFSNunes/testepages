<script setup>
import FloralOrnament from './FloralOrnament.vue'
import { profile } from '../data/profile.js'
</script>

<template>
  <section id="contato" class="section contact">
    <div class="container">
      <div class="contact__card">
        <FloralOrnament variant="tl" color="#E9A9C6" />
        <FloralOrnament variant="tr" color="#8FAEDD" />
        <p class="eyebrow">Vamos conversar?</p>
        <h2>Bora trocar uma ideia sobre código</h2>
        <p class="contact__sub">Projetos, parcerias de conteúdo ou só um oi — meu inbox está aberto.</p>
        <div class="contact__links">
          <a v-for="s in profile.socials" :key="s.label" :href="s.href" class="btn btn--ghost">{{ s.label }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__card {
  position: relative;
  background: linear-gradient(160deg, var(--pink) 0%, var(--lavender) 100%);
  border-radius: var(--radius-lg);
  padding: 68px 40px;
  text-align: center;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}
.contact h2 {
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  margin: 12px auto 14px;
  max-width: 560px;
}
.contact__sub {
  color: var(--ink-soft);
  max-width: 480px;
  margin: 0 auto 30px;
  font-size: 1.02rem;
}
.contact__links {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}
.contact__links .btn--ghost {
  background: rgba(255,255,255,0.5);
}
</style>
