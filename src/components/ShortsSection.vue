<script setup>
import { shorts } from '../data/shorts.js'

const accentMap = {
  pink: 'linear-gradient(160deg, #F7DBE6, #E9A9C6)',
  blue: 'linear-gradient(160deg, #CBDCF3, #8FAEDD)',
  peach: 'linear-gradient(160deg, #FBE2B9, #E9B26B)',
  lavender: 'linear-gradient(160deg, #DCD0EC, #B79FD6)',
}
</script>

<template>
  <section id="shorts" class="section shorts-section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Vídeos</p>
        <h2>Conteúdo em shorts</h2>
        <p class="section-head__sub">Dicas rápidas em formato vertical — clique para simular a reprodução.</p>
      </div>

      <div class="scroll-row">
        <div v-for="short in shorts" :key="short.id" class="phone">
          <div class="phone__screen" :style="{ background: accentMap[short.accent] }">
            <div class="phone__notch"></div>
            <button class="phone__play" :aria-label="`Reproduzir: ${short.title}`">▶</button>
            <div class="phone__info">
              <p class="phone__title">{{ short.title }}</p>
              <p class="phone__duration">{{ short.duration }}</p>
            </div>
          </div>
        </div>
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

.phone {
  flex: 0 0 200px;
  scroll-snap-align: start;
}
.phone__screen {
  position: relative;
  height: 356px;
  border-radius: 26px;
  box-shadow: var(--shadow-card);
  border: 6px solid var(--paper);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.phone__notch {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 46px;
  height: 6px;
  border-radius: 4px;
  background: rgba(255,255,255,0.55);
}
.phone__play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255,255,255,0.85);
  font-size: 1.1rem;
  color: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}
.phone__play:hover { transform: translate(-50%, -50%) scale(1.08); }
.phone__info {
  width: 100%;
  padding: 16px 14px;
  background: linear-gradient(0deg, rgba(0,0,0,0.35), transparent);
}
.phone__title {
  color: #fff;
  font-weight: 600;
  font-size: 0.88rem;
  line-height: 1.3;
}
.phone__duration {
  color: rgba(255,255,255,0.85);
  font-size: 0.75rem;
  margin-top: 4px;
  font-family: var(--font-code);
}
</style>
