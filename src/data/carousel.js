export const carousels = [
  {
    id: 'validations-dotnet',
    accent: 'blue',
    articleSlug: 'validations-dotnet',
    slides: [
      { kicker: 'Web Development', title: 'Validations', highlight: '.NET', sub: 'minimal API & MVC controller' },
      { kicker: 'Motivation', title: 'Is your API accepting garbage data?', sub: 'You might not even know it.' },
      { kicker: 'Structures available', title: 'Validation Modes', sub: 'Manual · Data Annotation · Filters · External Validators' },
      { kicker: 'Technical deep dive', title: 'Applying Data Annotation', sub: '[Required], [MaxLength], [Range] direto no DTO' },
      { kicker: 'Technical deep dive', title: 'Applying External Validators', sub: 'AbstractValidator<T> via FluentValidation' },
      { kicker: 'Conclusion', title: 'Which one should I use?', sub: 'Prototype → Data Annotations · Complex rules → FluentValidation' },
    ],
  },
  {
    id: 'clean-architecture',
    accent: 'lavender',
    slides: [
      { kicker: 'Architecture', title: 'Clean', highlight: 'Architecture', sub: 'organizando camadas sem dor de cabeça' },
      { kicker: 'Motivation', title: 'Seu domínio depende do banco?', sub: 'Isso é um cheiro de arquitetura.' },
      { kicker: 'Layers', title: 'Domain · Application · Infra', sub: 'a regra de dependência aponta sempre pra dentro' },
      { kicker: 'Conclusion', title: 'Comece pequeno', sub: 'nem todo projeto precisa de 4 camadas' },
    ],
  },
  {
    id: 'ef-core-tips',
    accent: 'peach',
    slides: [
      { kicker: 'Performance', title: 'EF Core', highlight: 'Tips', sub: '5 hábitos que salvam sua query' },
      { kicker: 'Problem', title: 'N+1 queries', sub: 'o vilão silencioso do seu endpoint' },
      { kicker: 'Fix', title: 'Include() e AsNoTracking()', sub: 'reduza round-trips desnecessários' },
      { kicker: 'Conclusion', title: 'Meça antes de otimizar', sub: 'use o profiler, não o achismo' },
    ],
  },
]

export function getCarouselById(id) {
  return carousels.find((c) => c.id === id)
}
