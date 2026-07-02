<script setup>
import { profile } from '../data/profile.js'
</script>

<template>
  <section id="sobre" class="section about">
    <div class="container about__grid">
      <div>
        <p class="eyebrow">Sobre mim</p>
        <h2>Oi, eu sou {{ profile.name }} 👋</h2>
        <p v-for="(p, i) in profile.bio" :key="i" class="about__p">{{ p }}</p>
      </div>

      <div class="window about__code">
        <div class="window__bar">
          <span class="window__dot window__dot--a"></span>
          <span class="window__dot window__dot--b"></span>
          <span class="window__dot window__dot--c"></span>
          <span class="window__title">skills.cs</span>
        </div>
        <pre class="about__pre"><code><span class="tok-kw">public class</span> <span class="tok-cls">IsaNunes</span> : <span class="tok-cls">Developer</span>
{
<span v-for="s in profile.skills" :key="s.name">    <span class="tok-kw">public</span> <span class="tok-type">Skill</span> <span class="tok-prop">{{ s.name }}</span> <span class="tok-mut">{ get; }</span> = <span class="tok-str">"{{ s.level }}"</span>;
</span>}</code></pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.about h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin: 10px 0 22px;
}

.about__p {
  color: var(--ink-soft);
  line-height: 1.75;
  margin-bottom: 16px;
  font-size: 1.02rem;
}

.about__code { align-self: stretch; }
.about__pre {
  margin: 0;
  padding: 22px 22px 26px;
  font-family: var(--font-code);
  font-size: 0.82rem;
  line-height: 1.85;
  color: var(--ink);
  overflow-x: auto;
  background: var(--paper);
}
.tok-kw { color: var(--navy); font-weight: 600; }
.tok-cls { color: #A0698C; font-weight: 600; }
.tok-type { color: #6C8FBE; }
.tok-prop { color: var(--ink); }
.tok-mut { color: #9C8FAE; }
.tok-str { color: #B4894F; }

@media (max-width: 860px) {
  .about__grid { grid-template-columns: 1fr; }
}
</style>
