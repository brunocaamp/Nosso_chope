# Plano: Desenvolver o Site do Nosso Chope

## Contexto

O objetivo é transformar o código Figma importado em `/src/imports/App-1/index.tsx` (2501 linhas com posicionamento absoluto fixo) em um site modular, limpo e bem estruturado para o Nosso Chope. O design-alvo é 1920px × 1080px, com 9 seções distintas, fontes Montserrat, paleta âmbar/amarelo/preto.

O arquivo importado serve como referência pixel-perfect para cores, proporções, conteúdo e imagens — mas o código de saída deve usar flex/grid em vez de posicionamento absoluto em px.

---

## Arquitetura de Arquivos

```
src/
  styles/
    fonts.css          ← adicionar @import Google Fonts (Montserrat)
    theme.css          ← adicionar tokens CSS customizados da marca
  app/
    App.tsx            ← compõe todas as seções
    components/
      shared/
        Button.tsx         ← WhatsAppButton, OutlineButton, PrimaryButton
        WhatsAppIcon.tsx   ← ícone SVG reutilizável
        ArrowIcon.tsx      ← ícone SVG reutilizável
        SectionWrapper.tsx ← container com 12 colunas, margens 250px
      sections/
        HeroSection.tsx
        AboutSection.tsx
        CtaTagsSection.tsx
        PilsenSection.tsx
        SocialProofSection.tsx
        RedDraftSection.tsx
        PartnersSection.tsx
        DeliverySection.tsx
        FooterSection.tsx
```

---

## Sistema de Design (Tokens)

Adicionar ao `src/styles/theme.css`:
```css
--color-brand-yellow: #FFBD24;
--color-brand-dark-yellow: #F9CC0A;
--color-brand-dark: #171717;
--color-brand-cream: #F2F2F2;
--color-brand-brown: #4A3728;
--color-brand-dark-brown: #1A0E04;
--color-brand-pink: #C4217E;
--color-brand-purple: #822D81;

--grid-columns: 12;
--grid-gap: 20px;
--grid-margin: 250px;  /* margens laterais de 250px */
```

---

## Grid Base

`SectionWrapper.tsx` encapsula o container principal:
- `max-width: 1920px`, `width: 100%`
- `padding-left: 250px; padding-right: 250px` (margens de 250px)
- Grade interna: `display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px`

Para seções que ocupam full-width (hero, fundos coloridos), o wrapper externo é full-width e o container interno usa as margens.

---

## Fontes

`src/styles/fonts.css` — adicionar no topo:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@400;500;700&display=swap');
```

---

## Importações de Assets

Todos os assets vêm de `/src/imports/App-1/`:
- Imagens: `import img from "figma:asset/HASH.png"` (esquema virtual, sem prefixo de caminho)
- SVG paths: `import svgPaths from "../imports/App-1/svg-6pmkjbv2xx"`

---

## Implementação por Seção

### 1. HeroSection
- Fundo: `background: linear-gradient(to bottom, #FFD324, #E9A402)`, height ~880px
- Navbar: flex justify-between, px-[60px], logo + menu (pill) + botões de contato
- Conteúdo hero: título em 3 linhas com caixas `#171717`(utilizar variavel para a cor --color-brand-dark) rotacionadas levemente (`skewX`)
- Garrafas: posicionadas com `absolute` apenas para os elementos decorativos de garrafa (os únicos que precisam de posição sobreposta)
- Botões: `WhatsAppButton` (amarelo) e `OutlineButton` (branco)
- Fonte: Montserrat ExtraBold 64px / Medium 48px / Black 96px

### 2. AboutSection (SecSobre)
- Layout: flex row, gap-[80px], centralizado, padding vertical grande
- Esquerda: imagem 771×542 arredondada + badge de 5 estrelas
- Direita: título "Chope de verdade do NOSSO JEITO!" + parágrafo + botão WhatsApp
- Efeito "dupla sombra" no heading: dois `<p>` sobrepostos (cor preta + amarela)

### 3. CtaTagsSection (SecCta)
- Seção full-width com fundo branco
- 4 caixas de texto empilhadas com rotações alternadas: SABOR (dark), MARCANTE (yellow), EQUILÍBRIO (dark), PERFEITO (yellow)
- Tamanhos de fonte escalonados: 78px → 96px → 78px → 116px
- Borda branca 8px ao redor de cada box (via `outline` ou pseudo-elemento)

### 4. PilsenSection (SecPilsen)
- **PartTwo** (fundo amarelo `#FFBD24`):
  - Título + 3 product cards (Long Neck, Lata 350ml, PET 1.5L)
  - Cards: caixas brancas arredondadas com imagem do produto + título + botão
  - Área de vídeo: imagem de preview com botão play centralizado
- **PartOne** (sobre o amarelo, produtos principais):
  - Esquerda: heading "Nosso Chope / PILSEN / O sabor que une / A GALERA!" com rotação
  - Direita: texto descritivo + botão WhatsApp
  - Imagem da garrafa centralizada
  

### 5. SocialProofSection (SecProvaSocial)
- Fundo degradê branco → #F2F2F2
- Título "é beber uma vez pra SE APAIXONAR"
- 6 cards de Instagram em layout aleatório com rotações
- Imagem de latas no fundo
- Caixas "É TUDO / NOSSO!" rotacionadas
- Box de "Trajetória" com glassmorphism
- Botão Instagram ao fundo

### 6. RedDraftSection (SectionRedDraft)
- **Reddraft1**: imagem de fundo escura + logo "NOSSO CHOPE" em branco + "Red Draft" em rosa + texto "para quem ousa / viver com / intensidade!"
- **Reddraft2**: fundo degradê roxo `#822D81 → #471046` + garrafa Red Draft + ícones decorativos (cevada, uva) + texto + caixa de tamanhos disponíveis

### 7. PartnersSection (SectionParceiros)
- Fundo branco, padding vertical grande
- Título "Onde encontrar"
- 4 cards de parceiros (Assaí, Royal, etc.) com imagem + logo + nome do estabelecimento
- CTA para se tornar parceiro + botões

### 8. DeliverySection (SectionDelivery)
- Fundo com imagem full-width
- Texto: "Tenha o nosso chope / NO SEU EVENTO"
- Subtexto + botão WhatsApp + botão secundário
- Imagem da chopeira no lado direito
- Botão de play de vídeo

### 9. FooterSection
- Fundo degradê amarelo igual ao Hero
- Seção superior: "#étudonosso" em grande + links de redes sociais (3 ícones)
- Seção inferior: logo + navegação + contato + "Reserve já"
- Copyright + aviso de bebida alcoólica
- Imagem de garrafas em movimento como elemento decorativo

---

## Componentes Reutilizáveis

### `Button.tsx`
```tsx
type ButtonVariant = 'whatsapp' | 'whatsapp-dark' | 'outline-dark' | 'outline-light' | 'primary-yellow' | 'cta-dark';
interface ButtonProps { variant: ButtonVariant; children: React.ReactNode; onClick?: () => void; }
```

### `SectionWrapper.tsx`
```tsx
// Wrapper com margens de 250px e grid de 12 colunas
export function SectionWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`w-full max-w-[1920px] px-[250px] ${className}`}>{children}</div>;
}
```

### SVG Icons (inline, com as paths do arquivo `svg-6pmkjbv2xx.ts`)
- `WhatsAppIcon`, `ArrowRightCircleIcon`, `StarIcon`, `InstagramIcon`, `PlayIcon`, `TrendingUpIcon`

---

## Tipografia com Unidades Variáveis

Usar `clamp()` para escalar proporcionalmente do viewport base (1920px):
```css
/* Exemplo: 96px base → escala de 48px (mobile) a 96px (desktop) */
font-size: clamp(3rem, 5vw, 6rem);
```

Para textos de exibição grandes (como os do CTA), usar `vw` units:
- 96px em 1920px = 5vw
- 116px em 1920px = ~6vw

---

## Estratégia de Posicionamento

| Elemento | Abordagem |
|---|---|
| Layouts de seção | `flex` ou `grid` |
| Garrafas sobrepostas (decorativas) | `absolute` com `%` ou `vw/vh` |
| Botões/Cards | `flex`, sem absolute |
| Títulos duplos (efeito sombra) | `relative` pai + dois `<p>` com `absolute` |
| Cards rotativos (Social Proof) | `flex` com `transform: rotate()` inline |

---

## Implementação

### Fase 1: Setup
1. Adicionar Google Fonts ao `fonts.css`
2. Adicionar tokens de cor ao `theme.css`
3. Criar `SectionWrapper.tsx` e componentes de botão compartilhados

### Fase 2: Seções (em ordem)
4. `HeroSection.tsx`
5. `AboutSection.tsx`
6. `CtaTagsSection.tsx`
7. `PilsenSection.tsx`
8. `SocialProofSection.tsx`
9. `RedDraftSection.tsx`
10. `PartnersSection.tsx`
11. `DeliverySection.tsx`
12. `FooterSection.tsx`

### Fase 3: Composição
13. Atualizar `App.tsx` para importar e compor todas as seções

---

## Verificação

- O site deve renderizar em 1920px sem scroll horizontal
- Cada seção deve corresponder visualmente ao screenshot do Figma
- Nenhum componente deve ter posicionamento absolute desnecessário
- Botões e ícones são reutilizados via componentes compartilhados
- Fontes carregam via Google Fonts (Montserrat + Inter)
- Todas as imagens usam o esquema `figma:asset` correto
