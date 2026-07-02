<script setup>
import CarouselDeck from './CarouselDeck.vue'
import { carousels } from '../data/carousel.js'
</script>

<template>
  <section id="carrossel" class="section carousel-section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Conteúdo rápido</p>
        <h2>Carrosséis técnicos</h2>
        <p class="section-head__sub">Resumos visuais dos temas que compartilho — arraste ou use as setas para navegar.</p>
      </div>
    </div>
    <div class="container">
      <div class="scroll-row">
        <CarouselDeck v-for="deck in carousels" :key="deck.id" :deck="deck" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-head__sub {
  margin-top: 10px;
  color: var(--ink-soft);
  font-size: 1rem;
}
</style>
