<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import ArticleBlock from '../components/ArticleBlock.vue'
import { getArticleBySlug } from '../data/articles.js'

const route = useRoute()
const article = computed(() => getArticleBySlug(route.params.slug))

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}
</script>

<template>
  <article v-if="article" class="article-page">
    <div class="container article-page__inner">
      <RouterLink to="/#artigos" class="article-page__back">← Voltar para artigos</RouterLink>

      <span class="chip article-page__tag">{{ article.tag }}</span>
      <h1 class="article-page__title">{{ article.title }}</h1>
      <p class="article-page__subtitle">{{ article.subtitle }}</p>

      <div class="article-page__meta">
        <span class="signature">@dev.isanunes</span>
        <span>{{ formatDate(article.date) }}</span>
        <span>·</span>
        <span>{{ article.readTime }}</span>
      </div>

      <div class="article-page__body">
        <ArticleBlock v-for="(block, i) in article.blocks" :key="i" :block="block" />
      </div>

      <div class="article-page__footer">
        <p class="signature">Obrigada pela leitura ✦</p>
        <RouterLink to="/#artigos" class="btn btn--ghost">Ver outros artigos</RouterLink>
      </div>
    </div>
  </article>

  <div v-else class="container article-page__empty">
    <h1>Artigo não encontrado</h1>
    <p>O conteúdo que você procura pode ter sido movido ou ainda não existe.</p>
    <RouterLink to="/" class="btn btn--primary">Voltar para a home</RouterLink>
  </div>
</template>

<style scoped>
.article-page { padding: 56px 0 100px; }
.article-page__inner { max-width: 720px; }

.article-page__back {
  display: inline-block;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--ink-soft);
}
.article-page__back:hover { color: var(--navy); }

.article-page__tag {
  background: var(--blue);
  color: var(--navy);
  margin-bottom: 18px;
}

.article-page__title {
  font-size: clamp(2.1rem, 4vw, 2.9rem);
  line-height: 1.15;
}

.article-page__subtitle {
  margin-top: 16px;
  font-family: var(--font-article);
  font-style: italic;
  font-size: 1.2rem;
  color: var(--ink-soft);
}

.article-page__meta {
  margin-top: 26px;
  padding-bottom: 26px;
  border-bottom: 1px solid rgba(43, 57, 104, 0.1);
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  color: var(--ink-soft);
  font-size: 0.9rem;
}

.article-page__body { margin-top: 40px; }

.article-page__footer {
  margin-top: 60px;
  padding-top: 34px;
  border-top: 1px solid rgba(43, 57, 104, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.article-page__empty {
  padding: 120px 0;
  text-align: center;
}
.article-page__empty p {
  margin: 14px 0 26px;
  color: var(--ink-soft);
}
</style>
