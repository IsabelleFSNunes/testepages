# Isa Nunes — Portfólio Interativo

Portfólio pessoal em **Vue 3 + Vite**, com identidade visual própria (paleta
pastel + motivo de "janela de código/navegador"), seção sobre, carrossel de
conteúdos técnicos, artigos estilo Medium e vídeos estilo Shorts.

## Rodando localmente

Pré-requisitos: [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` com os arquivos estáticos finais, prontos para deploy.
Para conferir o build localmente antes de publicar:

```bash
npm run preview
```

## Estrutura do projeto

```
src/
  components/   → peças reutilizáveis (Navbar, Hero, Carousel, ArticleBlock...)
  views/        → páginas (Home, ArticlePage)
  data/         → todo o conteúdo do site em arquivos .js editáveis
  router/       → rotas (home + /artigos/:slug)
  style/        → tokens de design (cores, fontes, espaçamentos)
```

## Como editar o conteúdo

Você **não precisa mexer nos componentes** para atualizar texto — tudo fica
centralizado em `src/data/`:

- `profile.js` — nome, bio, skills, redes sociais
- `carousel.js` — os "decks" de slides do carrossel
- `articles.js` — os artigos técnicos completos (cada um é uma lista de
  blocos: `heading`, `paragraph`, `code`, `callout`, `table`, `quote`, `list`)
- `shorts.js` — lista de vídeos curtos (título, duração, cor)

Para adicionar um novo artigo, copie o objeto de `validations-dotnet` em
`articles.js`, troque o `slug`, `title` e os `blocks`. Ele aparece
automaticamente na seção de Artigos.

### Adicionando imagens reais

O projeto hoje usa apenas CSS/SVG para as ilustrações (mockups de janela,
avatar, capas de artigo) — nenhuma imagem externa é carregada. Quando você
tiver fotos/imagens reais:

1. Coloque os arquivos em `src/assets/`
2. Importe no componente: `import minhaFoto from '../assets/foto.jpg'`
3. Use normalmente: `<img :src="minhaFoto" alt="descrição" />`

Para imagens dentro de artigos, adicione um novo tipo de bloco `image` em
`ArticleBlock.vue` (renderizando `<img>`) e use-o em `articles.js`.

### Vídeos reais nos Shorts

O componente `ShortsSection.vue` hoje mostra um mockup de player. Para vídeo
de verdade, troque o `<button class="phone__play">` por uma tag `<video>`
(arquivos `.mp4`) ou embuta um player (YouTube Shorts/Instagram) via iframe.

## Deploy

O jeito mais simples é **Vercel** ou **Netlify** (ambos têm plano grátis):

1. Suba este projeto para um repositório no GitHub
2. Conecte o repositório na Vercel/Netlify
3. Build command: `npm run build` — Output directory: `dist`
4. Pronto — a cada push, o site é atualizado automaticamente, já com HTTPS

### Domínio próprio

Depois do deploy, tanto Vercel quanto Netlify permitem apontar um domínio
próprio (ex: `isanunes.dev`) nas configurações do projeto.

## Boas práticas já aplicadas

- **Acessibilidade**: foco visível em todos os elementos interativos,
  `aria-label` em botões/ícones, respeita `prefers-reduced-motion`
- **Performance**: sem dependências pesadas, CSS/SVG no lugar de imagens
  pesadas, build otimizado via Vite (code splitting automático por rota)
- **SEO básico**: meta description no `index.html` — para SEO mais avançado
  por página, considere adicionar `vue-meta` ou definir `<title>` dinâmico
  por rota no `router/index.js`
- **Responsivo**: testado de mobile a desktop, com breakpoints em
  `720px` e `900px`
