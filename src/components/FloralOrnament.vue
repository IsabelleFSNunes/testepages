<script setup>
defineProps({
  variant: { type: String, default: 'tl' }, // tl | tr
  color: { type: String, default: '#B79FD6' },
})
</script>

<template>
  <svg
    :class="['corner-ornament', `corner-ornament--${variant}`]"
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M8 8 Q20 4 26 14 Q30 22 22 26 Q12 30 8 20 Q6 14 8 8Z" :fill="color" opacity="0.55" />
    <path d="M6 34 Q16 34 16 44" :stroke="color" stroke-width="2" fill="none" opacity="0.6" />
    <circle cx="18" cy="48" r="3" :fill="color" opacity="0.5" />
    <path d="M4 54 Q14 56 12 66" :stroke="color" stroke-width="2" fill="none" opacity="0.45" />
    <circle cx="34" cy="10" r="2.4" fill="#E9A9C6" opacity="0.7" />
    <circle cx="44" cy="6" r="1.8" fill="#E9B26B" opacity="0.7" />
    <path d="M40 18 Q46 14 50 20" :stroke="color" stroke-width="1.6" fill="none" opacity="0.5" />
  </svg>
</template>
