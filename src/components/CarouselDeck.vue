<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  deck: { type: Object, required: true },
})

const accentMap = {
  blue: { bg: 'var(--blue)', bg2: '#E7F0FB', ink: 'var(--navy)' },
  lavender: { bg: 'var(--lavender)', bg2: '#F1EBFA', ink: '#4B3A6B' },
  peach: { bg: 'var(--peach)', bg2: '#FDF0DA', ink: '#7A4E1E' },
  pink: { bg: 'var(--pink)', bg2: '#FBEAF1', ink: '#8A3F5C' },
}

const accent = computed(() => accentMap[props.deck.accent] || accentMap.blue)
const index = ref(0)
const total = computed(() => props.deck.slides.length)

function next() { index.value = (index.value + 1) % total.value }
function prev() { index.value = (index.value - 1 + total.value) % total.value }
function goTo(i) { index.value = i }
</script>

<template>
  <div class="deck">
    <div
      class="deck__stage"
      :style="{ background: `linear-gradient(160deg, ${accent.bg}, ${accent.bg2})` }"
      role="group"
      :aria-label="`Carrossel: ${deck.slides[0]?.title}`"
    >
      <button class="deck__nav deck__nav--prev" @click="prev" aria-label="Slide anterior">‹</button>

      <transition name="deck-fade" mode="out-in">
        <div :key="index" class="deck__slide" :style="{ color: accent.ink }">
          <p class="deck__kicker">{{ deck.slides[index].kicker }}</p>
          <h3 class="deck__title">
            {{ deck.slides[index].title }}
            <span v-if="deck.slides[index].highlight" class="highlight">{{ deck.slides[index].highlight }}</span>
          </h3>
          <p class="deck__sub">{{ deck.slides[index].sub }}</p>
        </div>
      </transition>

      <button class="deck__nav deck__nav--next" @click="next" aria-label="Próximo slide">›</button>

      <div class="deck__dots" role="tablist" aria-label="Ir para slide">
        <button
          v-for="(s, i) in deck.slides"
          :key="i"
          class="deck__dot"
          :class="{ 'is-active': i === index }"
          :style="i === index ? { background: accent.ink } : {}"
          role="tab"
          :aria-selected="i === index"
          :aria-label="`Slide ${i + 1} de ${total}`"
          @click="goTo(i)"
        />
      </div>
    </div>

    <router-link v-if="deck.articleSlug" :to="`/artigos/${deck.articleSlug}`" class="deck__link">
      Ler o artigo completo →
    </router-link>
  </div>
</template>

<style scoped>
.deck {
  flex: 0 0 320px;
  scroll-snap-align: start;
}

.deck__stage {
  position: relative;
  height: 420px;
  border-radius: var(--radius-lg);
  padding: 32px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

.deck__kicker {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.75;
  margin-bottom: 14px;
}

.deck__title {
  font-size: 1.7rem;
  line-height: 1.2;
  margin-bottom: 14px;
}

.deck__sub {
  font-size: 0.98rem;
  opacity: 0.85;
  line-height: 1.5;
}

.deck__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.55);
  font-size: 1.3rem;
  line-height: 1;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}
.deck__nav:hover { background: rgba(255, 255, 255, 0.85); }
.deck__nav--prev { left: 14px; }
.deck__nav--next { right: 14px; }

.deck__dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}
.deck__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.18);
  transition: width 0.2s ease, background 0.2s ease;
}
.deck__dot.is-active { width: 18px; border-radius: 4px; }

.deck__link {
  display: inline-block;
  margin-top: 14px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--navy);
}
.deck__link:hover { text-decoration: underline; }

.deck-fade-enter-active, .deck-fade-leave-active { transition: opacity 0.2s ease; }
.deck-fade-enter-from, .deck-fade-leave-to { opacity: 0; }
</style>
