<script setup>
import FloralOrnament from './FloralOrnament.vue'
import { profile } from '../data/profile.js'
</script>

<template>
  <section class="hero">
    <FloralOrnament variant="tl" color="#B79FD6" />
    <FloralOrnament variant="tr" color="#E9B26B" />

    <div class="container hero__grid">
      <div class="hero__copy">
        <p class="eyebrow">Web Development &amp; Conteúdo</p>
        <h1 class="hero__title">
          Código com <em>propósito</em>,<br />
          conteúdo com <em>carinho</em>.
        </h1>
        <p class="hero__tagline">{{ profile.tagline }}</p>
        <div class="hero__actions">
          <a href="#artigos" class="btn btn--primary">Ler artigos técnicos</a>
          <a href="#sobre" class="btn btn--ghost">Sobre mim</a>
        </div>
      </div>

      <div class="hero__card window">
        <div class="window__bar">
          <span class="window__dot window__dot--a"></span>
          <span class="window__dot window__dot--b"></span>
          <span class="window__dot window__dot--c"></span>
          <span class="window__title">localhost:8090</span>
        </div>
        <div class="hero__card-body">
          <div class="hero__avatar" aria-hidden="true">IN</div>
          <p class="signature">{{ profile.handle }}</p>
          <p class="hero__role">{{ profile.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 88px 0 40px;
  overflow: hidden;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: center;
}

.hero__title {
  font-size: clamp(2.4rem, 4.4vw, 3.6rem);
  margin-top: 14px;
  letter-spacing: -0.01em;
}
.hero__title em {
  font-style: italic;
  color: var(--navy);
}

.hero__tagline {
  margin-top: 22px;
  font-size: 1.08rem;
  color: var(--ink-soft);
  max-width: 480px;
  line-height: 1.6;
}

.hero__actions {
  margin-top: 34px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero__card {
  transform: rotate(1.5deg);
}
.hero__card-body {
  padding: 46px 30px 40px;
  text-align: center;
  background:
    radial-gradient(circle at 20% 15%, rgba(233, 169, 198, 0.35), transparent 55%),
    radial-gradient(circle at 85% 80%, rgba(203, 220, 243, 0.5), transparent 55%),
    var(--paper);
}
.hero__avatar {
  width: 88px;
  height: 88px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--cream);
  background: linear-gradient(135deg, var(--navy), var(--lavender-deep));
  box-shadow: var(--shadow-card);
  border: 3px solid var(--paper);
}
.hero__role {
  margin-top: 6px;
  color: var(--ink-soft);
  font-size: 0.92rem;
}

@media (max-width: 900px) {
  .hero__grid { grid-template-columns: 1fr; }
  .hero__card { justify-self: center; max-width: 360px; transform: none; }
}
</style>
