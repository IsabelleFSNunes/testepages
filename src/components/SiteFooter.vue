<script setup>
import { profile } from '../data/profile.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="signature">{{ profile.handle }}</p>
      <p class="footer__role">{{ profile.role }} · © {{ year }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 40px 0 50px;
  text-align: center;
  border-top: 1px solid rgba(43, 57, 104, 0.08);
  margin-top: 20px;
}
.footer__role {
  margin-top: 4px;
  font-size: 0.85rem;
  color: var(--ink-soft);
}
</style>
