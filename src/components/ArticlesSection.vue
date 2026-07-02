<script setup>
import { articles } from '../data/articles.js'

const accentMap = {
  blue: '#CBDCF3',
  lavender: '#DCD0EC',
  peach: '#FBE2B9',
  pink: '#F7DBE6',
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}
</script>

<template>
  <section id="artigos" class="section articles-section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Aprofundamento</p>
        <h2>Artigos técnicos</h2>
        <p class="section-head__sub">Textos completos, com código e exemplos — para quem quer ir além do resumo.</p>
      </div>

      <div class="articles-grid">
        <router-link
          v-for="article in articles"
          :key="article.slug"
          :to="`/artigos/${article.slug}`"
          class="article-card"
        >
          <div
            class="article-card__cover"
            :style="{ background: `linear-gradient(135deg, ${accentMap[article.accent]}, #FFFDFB)` }"
          >
            <div class="article-card__cover-window">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div class="article-card__body">
            <span class="chip article-card__tag" :style="{ background: accentMap[article.accent] }">{{ article.tag }}</span>
            <h3>{{ article.title }}</h3>
            <p>{{ article.subtitle }}</p>
            <div class="article-card__meta">
              <span>{{ formatDate(article.date) }}</span>
              <span aria-hidden="true">·</span>
              <span>{{ article.readTime }}</span>
            </div>
          </div>
        </router-link>
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

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
}

.article-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--paper);
  box-shadow: var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: block;
}
.article-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-soft);
}

.article-card__cover {
  height: 150px;
  display: flex;
  align-items: flex-start;
  padding: 16px;
}
.article-card__cover-window {
  display: flex;
  gap: 6px;
}
.article-card__cover-window span {
  width: 9px; height: 9px; border-radius: 50%;
  background: rgba(255,255,255,0.7);
}

.article-card__body { padding: 22px 22px 26px; }
.article-card__tag {
  color: var(--navy);
  margin-bottom: 12px;
}
.article-card__body h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}
.article-card__body p {
  color: var(--ink-soft);
  font-size: 0.92rem;
  line-height: 1.55;
}
.article-card__meta {
  margin-top: 16px;
  display: flex;
  gap: 8px;
  font-size: 0.78rem;
  color: var(--ink-soft);
  font-family: var(--font-code);
}
</style>
