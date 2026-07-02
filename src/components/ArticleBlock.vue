<script setup>
defineProps({
  block: { type: Object, required: true },
})
</script>

<template>
  <h2 v-if="block.type === 'heading'" class="ab-heading">{{ block.text }}</h2>

  <p v-else-if="block.type === 'paragraph'" :class="['ab-paragraph', { 'ab-paragraph--lead': block.lead }]">
    {{ block.text }}
  </p>

  <blockquote v-else-if="block.type === 'quote'" class="ab-quote">
    “{{ block.text }}”
  </blockquote>

  <div v-else-if="block.type === 'callout'" :class="['ab-callout', `ab-callout--${block.tone || 'info'}`]">
    <span class="ab-callout__icon" aria-hidden="true">{{ block.tone === 'warning' ? '⚠️' : '💡' }}</span>
    <p>{{ block.text }}</p>
  </div>

  <ul v-else-if="block.type === 'list'" class="ab-list">
    <li v-for="(item, i) in block.items" :key="i">
      <strong>{{ item.title }}</strong>
      <span v-if="item.text"> — {{ item.text }}</span>
    </li>
  </ul>

  <div v-else-if="block.type === 'table'" class="ab-table-wrap">
    <table class="ab-table">
      <thead>
        <tr><th v-for="(h, i) in block.headers" :key="i">{{ h }}</th></tr>
      </thead>
      <tbody>
        <tr v-for="(row, ri) in block.rows" :key="ri">
          <td v-for="(cell, ci) in row" :key="ci">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-else-if="block.type === 'code'" class="window ab-code">
    <div class="window__bar">
      <span class="window__dot window__dot--a"></span>
      <span class="window__dot window__dot--b"></span>
      <span class="window__dot window__dot--c"></span>
      <span class="window__title">{{ block.title }}</span>
    </div>
    <pre class="ab-code__pre"><code>{{ block.code }}</code></pre>
  </div>
</template>

<style scoped>
.ab-heading {
  font-size: 1.55rem;
  margin: 44px 0 18px;
}

.ab-paragraph {
  font-family: var(--font-article);
  font-size: 1.12rem;
  line-height: 1.85;
  color: var(--ink);
  margin-bottom: 22px;
}
.ab-paragraph--lead {
  font-size: 1.3rem;
  font-style: italic;
  color: var(--ink-soft);
}

.ab-quote {
  margin: 34px 0;
  padding: 4px 0 4px 22px;
  border-left: 3px solid var(--navy);
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-style: italic;
  color: var(--navy);
}

.ab-callout {
  display: flex;
  gap: 12px;
  padding: 18px 20px;
  border-radius: var(--radius-sm);
  margin: 26px 0;
  align-items: flex-start;
}
.ab-callout p { font-size: 0.98rem; line-height: 1.6; }
.ab-callout--info { background: var(--blue); color: var(--navy-deep); }
.ab-callout--warning { background: var(--peach); color: #6B4419; }

.ab-list {
  margin: 0 0 26px;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.ab-list li {
  font-family: var(--font-article);
  font-size: 1.05rem;
  line-height: 1.65;
  padding-left: 22px;
  position: relative;
  color: var(--ink);
}
.ab-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--pink-deep);
}

.ab-table-wrap {
  overflow-x: auto;
  margin: 30px 0;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(43, 57, 104, 0.1);
}
.ab-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
}
.ab-table th, .ab-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid rgba(43, 57, 104, 0.08);
}
.ab-table th {
  background: var(--gray);
  font-weight: 700;
  color: var(--navy);
}
.ab-table tr:last-child td { border-bottom: none; }

.ab-code { margin: 30px 0; }
.ab-code__pre {
  margin: 0;
  padding: 22px 24px;
  overflow-x: auto;
  font-family: var(--font-code);
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--ink);
  background: var(--paper);
}
</style>
