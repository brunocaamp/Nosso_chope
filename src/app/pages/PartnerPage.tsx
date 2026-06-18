/**
 * PartnerPage — "Seja um Parceiro"
 *
 * Uses shared gridBase from constants for consistent 12-col grid layout.
 * Units: rem, vw, % only — no px
 * Positioning: CSS Grid / Flexbox only — no position:absolute for layout
 */

import imgHero from "../../assets/sejaparceiro.jpg";
import imgLata from "figma:asset/ff3127b4ddec9e40fab3d04ddd2b2a69c331f558.png";
import imgLongNeck from "figma:asset/063066d208c61f9dc3be1e5900cf7c07ccd6d1dd.png";
import imgPet from "figma:asset/88c9bec97d353474e5a19f715f380cdaba1075e6.png";
import imgRedDraft from "figma:asset/a7c516c817fabe544b06e970454c9a0fbd300d6f.png";
import imgPilsen from "figma:asset/6f63adec7cfe453cd371819abd4baadd4162da7a.png";

import { Link } from "react-router";
import { Navbar } from "../components/shared/Navbar";
import { Button, ButtonLink, ArrowAnimIcon, WhatsAppAnimIcon } from "../components/shared/Button";
import { gridBase } from "../components/code/constants";
import { ScrollFadeIn } from "../components/animations/ScrollFadeIn";
import { FooterSection } from "../components/sections/FooterSection";

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface SpecRow {
  label: string;
  bold?: string;
  sub?: string;
}

type CtaStyle = "yellow" | "dark";
type ImgLayout = "triple-stagger" | "triple-side" | "two-bottle";
type ImgSide = "left" | "right";

interface ProductConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: SpecRow[];
  images: string[];
  imgLayout: ImgLayout;
  imgSide: ImgSide;
  cta: CtaStyle;
  sectionBg: string;
  isDark?: boolean;
}

/* ─── Static data ───────────────────────────────────────────────────────── */

const COMMON_SPECS: SpecRow[] = [
  { label: "12 unidades por pack" },
  { label: "Pallet: 220 packs" },
  { label: "Total do pallet:", bold: "2.640 unidades", sub: "altura do pallet: 171cm" },
];

const PRODUCTS: ProductConfig[] = [
  {
    id: "lata-473ml",
    title: "Puro malte",
    subtitle: "Lata 473ml",
    description: "O nosso chope não para! A lata de 473ML chega para escalar de vez, mais pontos, mais canais, mais encontro!",
    specs: COMMON_SPECS,
    images: [imgLata, imgLata, imgLata],
    imgLayout: "triple-stagger",
    imgSide: "left",
    cta: "yellow",
    sectionBg: "bg-white",
  },
  {
    id: "long-neck",
    title: "Lager Premium",
    subtitle: "Long Neck 350ml",
    description: "O nosso chope não para! A Long Neck chega para escalar de vez, mais pontos, mais canais, mais encontro!",
    specs: COMMON_SPECS,
    images: [imgLongNeck, imgLongNeck, imgLongNeck],
    imgLayout: "triple-side",
    imgSide: "right",
    cta: "dark",
    sectionBg: "bg-gradient-to-b from-[#ffd324] to-[#e9a402]",
  },
  {
    id: "garrafa-1-5l",
    title: "Puro malte",
    subtitle: "garrafa 1,5l",
    description: "O nosso chope não para! A garrafa 1,5L chega para escalar de vez, mais pontos, mais canais, mais encontro!",
    specs: COMMON_SPECS,
    images: [imgPet, imgPet, imgPet],
    imgLayout: "triple-stagger",
    imgSide: "left",
    cta: "yellow",
    sectionBg: "bg-white",
  },
  {
    id: "reddraft",
    title: "RedDraft",
    subtitle: "Lata 310ml e garrafa 600ml",
    description: "O nosso chope não para! O RedDraft chega para escalar de vez, mais pontos, mais canais, mais encontro!",
    specs: COMMON_SPECS,
    images: [imgPilsen, imgRedDraft],
    imgLayout: "two-bottle",
    imgSide: "right",
    cta: "dark",
    sectionBg: "bg-gradient-to-b from-[#822d81] to-[#471046]",
    isDark: true,
  },
];

/* ─── Specs card ────────────────────────────────────────────────────────── */
/* Modern card with accent bar, refined hierarchy, and hover micro-interactions */

function SpecsCard({ specs, isDark }: { specs: SpecRow[]; isDark?: boolean }) {
  const cardBg = isDark
    ? "bg-white/10 backdrop-blur-md border-white/15"
    : "bg-white border-[#e6e6e6]";
  const rowBorder = isDark ? "border-white/10" : "border-[#f0f0f0]";
  const labelColor = isDark ? "text-white/70" : "text-[#6b6b6b]";
  const boldColor = isDark ? "text-white" : "text-[#171717]";
  const subColor = isDark ? "text-white/50" : "text-[#999]";
  const accentBg = isDark ? "bg-[#ffbd24]/60" : "bg-[#ffbd24]";
  const dotBg = isDark ? "bg-[#ffbd24]/30" : "bg-[#ffbd24]/20";
  const dotText = isDark ? "text-[#ffbd24]" : "text-[#b8860b]";

  return (
    <div
      className={`rounded-[1rem] border w-full overflow-hidden ${cardBg}`}
      style={{
        maxWidth: "25.3125rem",
        boxShadow: isDark
          ? "0 0.5rem 1.5rem -0.25rem rgba(0,0,0,0.3)"
          : "0 0.5rem 1.5rem -0.25rem rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)",
      }}
    >
      {specs.map((row, i) => (
        <div
          key={i}
          className={`group flex items-start gap-[0.875rem] px-[1.125rem] py-[1rem] border-b last:border-b-0 ${rowBorder}
            transition-all duration-300 ease-out hover:bg-[#ffbd24]/[0.06]`}
        >
          {/* Yellow accent bar */}
          <div className="flex-shrink-0 pt-[0.25rem]">
            <div
              className={`w-[1.625rem] h-[1.625rem] rounded-full flex items-center justify-center ${dotBg}
                transition-all duration-300 group-hover:scale-110`}
            >
              <span className={`font-['Montserrat',sans-serif] font-bold text-[0.6875rem] ${dotText}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[0.125rem] min-w-0">
            <p className={`font-['Montserrat',sans-serif] font-medium text-[0.9375rem] leading-[1.5] ${labelColor}
              transition-colors duration-300 group-hover:${isDark ? 'text-white' : 'text-[#171717]'}`}
            >
              {row.label}{" "}
              {row.bold && (
                <strong className={`font-bold ${boldColor}`}>{row.bold}</strong>
              )}
            </p>
            {row.sub && (
              <p className={`font-['Montserrat',sans-serif] font-normal text-[0.8125rem] leading-[1.4] ${subColor}`}>
                {row.sub}
              </p>
            )}
          </div>

          {/* Accent left bar indicator on hover */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-[0.1875rem] ${accentBg}
              scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r-full`}
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Product image groups ──────────────────────────────────────────────── */
/*
 * Generic overlapping-image layout driven by config arrays.
 * Each item specifies which image index, height, z-index, margin-left, and
 * optional translateY — eliminating the three near-identical components.
 */

interface ImageSlot {
  imgIndex: number;
  height: string;
  heightSm?: string;
  zIndex: number;
  marginLeft?: string;
  translateY?: string;
}

const IMAGE_LAYOUTS: Record<ImgLayout, ImageSlot[]> = {
  "triple-stagger": [
    { imgIndex: 1, height: "47rem", heightSm: "35rem", zIndex: 0, translateY: "0.4475rem" },
    { imgIndex: 0, height: "48.875rem", heightSm: "36.5rem", zIndex: 1, marginLeft: "-11.0625rem" },
    { imgIndex: 2, height: "47.8125rem", heightSm: "35.5rem", zIndex: 0, marginLeft: "-13.75rem", translateY: "0.4475rem" },
  ],
  "triple-side": [
    { imgIndex: 0, height: "52.3125rem", heightSm: "39rem", zIndex: 0 },
    { imgIndex: 1, height: "52.3125rem", heightSm: "39rem", zIndex: 1, marginLeft: "-11.0625rem", translateY: "0.8125rem" },
    { imgIndex: 2, height: "52.3125rem", heightSm: "39rem", zIndex: 0, marginLeft: "-11.6875rem" },
  ],
  "two-bottle": [
    { imgIndex: 0, height: "40.375rem", heightSm: "30rem", zIndex: 1 },
    { imgIndex: 1, height: "59.5rem", heightSm: "44rem", zIndex: 0, marginLeft: "-4.2778rem" },
  ],
};

function ProductImages({ images, layout }: { images: string[]; layout: ImgLayout }) {
  const slots = IMAGE_LAYOUTS[layout];

  return (
    <div className="flex items-end w-full">
      {slots.map((slot, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            zIndex: slot.zIndex,
            marginLeft: slot.marginLeft,
          }}
        >
          <img
            src={images[slot.imgIndex]}
            alt=""
            className="w-auto object-contain pointer-events-none"
            style={{
              height: slot.heightSm
                ? `clamp(${slot.heightSm}, ${parseFloat(slot.height) * 3.33}vw, ${slot.height})`
                : slot.height,
              transform: slot.translateY ? `translateY(${slot.translateY})` : undefined,
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Product text block ────────────────────────────────────────────────── */
/* Accepts a ProductConfig directly to avoid repetitive prop drilling */

const CTA_MAP: Record<CtaStyle, { variant: "arrow-yellow" | "arrow-dark"; stroke: string }> = {
  yellow: { variant: "arrow-yellow", stroke: "#171717" },
  dark: { variant: "arrow-dark", stroke: "#F2F2F2" },
};

function ProductTextBlock({ product, withPadding }: { product: ProductConfig; withPadding: boolean }) {
  const { title, subtitle, description, specs, cta, isDark } = product;
  const headingColor = isDark ? "text-[#f2f2f2]" : "text-black";
  const bodyColor = isDark ? "text-[#f2f2f2]" : "text-[#171717]";
  const { variant, stroke } = CTA_MAP[cta];
  // Text enters from the same side it sits on for a natural reveal
  const textDir = withPadding ? "left" : "right";

  return (
    <div
      className={`flex flex-col gap-[1.5625rem] items-start ${withPadding ? "pl-[3.75rem]" : ""}`}
    >
      {/* Product title + subtitle */}
      <ScrollFadeIn direction={textDir} distance={60} duration={0.8}>
        <div>
          <p
            className={`font-['Montserrat',sans-serif] font-extrabold leading-[1.3] ${headingColor}`}
            style={{ fontSize: "clamp(2rem,3.33vw,4rem)" }}
          >
            {title}
          </p>
          <p
            className={`font-['Montserrat',sans-serif] font-semibold leading-[1.08] ${headingColor}`}
            style={{ fontSize: "clamp(1.5rem,2.5vw,3rem)" }}
          >
            {subtitle}
          </p>
        </div>
      </ScrollFadeIn>

      {/* Description */}
      <ScrollFadeIn direction={textDir} delay={0.3} distance={50} duration={0.8}>
        <p
          className={`font-['Montserrat',sans-serif] font-semibold leading-[1.47] ${bodyColor}`}
          style={{ fontSize: "1.1875rem", maxWidth: "24.375rem" }}
        >
          {description}
        </p>
      </ScrollFadeIn>

      {/* Specs card */}
      <ScrollFadeIn direction="up" delay={0.4} distance={40} duration={0.8}>
        <SpecsCard specs={specs} isDark={isDark} />
      </ScrollFadeIn>

      {/* CTA */}
      <ScrollFadeIn direction="up" delay={0.55} distance={30} duration={0.7}>
        <ButtonLink
          variant={variant}
          href="https://api.whatsapp.com/send?phone=+5521996533939&text=Quero+ser+parceiro+Nosso+Chope!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowAnimIcon stroke={stroke} />
          Seja um parceiro
        </ButtonLink>
      </ScrollFadeIn>
    </div>
  );
}

/* ─── Product section ───────────────────────────────────────────────────── */
/* Reusable: accepts any ProductConfig and lays it out with the 12-col grid */

function ProductSection({ product }: { product: ProductConfig }) {
  const { imgSide, imgLayout, images, sectionBg } = product;
  const imageOnLeft = imgSide === "left";

  // White sections: pt-9.375rem pb-6.25rem | Gradient sections: py-9.375rem
  const py = sectionBg === "bg-white"
    ? "pt-[9.375rem] pb-[6.25rem] max-2xl:pt-[6rem] max-2xl:pb-[4rem]"
    : "py-[9.375rem] max-2xl:py-[6rem]";

  const imagesBlock = (
    <ScrollFadeIn direction="up" distance={80} duration={1} className="col-span-7 flex items-end">
      <ProductImages images={images} layout={imgLayout} />
    </ScrollFadeIn>
  );

  const textBlock = (
    <div className="col-span-5">
      <ProductTextBlock product={product} withPadding={!imageOnLeft} />
    </div>
  );

  return (
    <section className={`w-full overflow-hidden ${sectionBg} ${py}`}>
      <div className={`${gridBase} items-center`}>
        {imageOnLeft ? (<>{imagesBlock}{textBlock}</>) : (<>{textBlock}{imagesBlock}</>)}
      </div>
    </section>
  );
}

/* ─── Hero section ──────────────────────────────────────────────────────── */

function HeroTitleBlock() {
  return (
    <div className="flex flex-col items-start">
      {/* "Seja Um parceiro" — dark box, ExtraBold 4rem */}
      <div style={{ transform: "skewX(0.29deg)", marginBottom: "-1.1875rem" }}>
        <div className="bg-[#171717] inline-flex items-center justify-center overflow-hidden px-[1.25rem] py-[1.25rem] rounded-[0.625rem]">
          <p
            className="font-['Montserrat',sans-serif] font-extrabold text-[#fafafa] tracking-[0.8px] uppercase whitespace-nowrap leading-[1]"
            style={{ fontSize: "clamp(2rem,3.33vw,4rem)" }}
          >
            Seja Um parceiro
          </p>
        </div>
      </div>

      {/* "NOSSO CHOPE!" — yellow box, Black 5.375rem, rotated */}
      <div style={{ transform: "rotate(-2.17deg) skewX(0.29deg)" }}>
        <div className="bg-[#ffbd24] inline-flex items-center justify-center overflow-hidden px-[1.875rem] py-[1.25rem] rounded-[0.625rem]">
          <p
            className="font-['Montserrat',sans-serif] font-black text-[#171717] tracking-[0.8px] uppercase whitespace-nowrap leading-[1]"
            style={{ fontSize: "clamp(2.5rem,4.48vw,5.375rem)" }}
          >
            NOSSO CHOPE!
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroButtons() {
  return (
    <div className="flex items-center gap-[1.25rem]">
      <ButtonLink
        variant="whatsapp-dark"
        href="https://api.whatsapp.com/send?phone=+5521996533939&text=Gostaria+de+saber+mais+informa%C3%A7%C3%B5es!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppAnimIcon fill="#FFBD24" />
        Peça Agora!
      </ButtonLink>

      <Button variant="arrow-white">
        <ArrowAnimIcon stroke="#171717" />
        Conheça o Nosso Chope!
      </Button>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col overflow-hidden"
      style={{ minHeight: "clamp(42rem, 55vw, 55rem)", isolation: "isolate" }}
    >
      {/* Background image — decorative, behind all content */}
      <img
        src={imgHero} alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: -1 }}
      />

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: -1, background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.55))" }}
      />

      {/* Navbar in normal document flow */}
      <Navbar variant="page" />

      {/* Hero content — pushed down to match Figma's top:175.5px in ContentBox */}
      <div className={`${gridBase} items-start`} style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
        {/* Text occupies left 7 columns (matches Figma's ~843px text block width) */}
        <div className="col-span-7 flex flex-col gap-[1.5rem]">
          {/* Breadcrumb */}
          <ScrollFadeIn direction="left" distance={40} duration={0.7} delay={0.1}>
            <nav aria-label="breadcrumb">
              <ol className="flex items-center gap-[0.5rem] font-['Montserrat',sans-serif] text-[0.875rem] text-white/75">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">Início</Link>
                </li>
                <li className="opacity-50">›</li>
                <li className="font-semibold text-white">Seja um Parceiro</li>
              </ol>
            </nav>
          </ScrollFadeIn>

          {/* Title blocks */}
          <ScrollFadeIn direction="left" distance={70} duration={0.9} delay={0.2}>
            <HeroTitleBlock />
          </ScrollFadeIn>

          {/* Description — SemiBold 1.5rem, white */}
          <ScrollFadeIn direction="left" distance={50} duration={0.8} delay={0.4}>
            <p
              className="font-['Montserrat',sans-serif] font-semibold text-white tracking-[0.8px] leading-[1.33]"
              style={{ fontSize: "clamp(1rem,1vw,1.5rem)" }}
            >
              Seja para seu bar, mercado ou estabelecimento, vamos juntos levar
              a refrescância e sabor único do{" "}
              <strong className="font-extrabold">Nosso Chope</strong>{" "}
              para cada vez mais pessoas!
            </p>
          </ScrollFadeIn>

          {/* CTAs */}
          <ScrollFadeIn direction="up" distance={40} duration={0.7} delay={0.55}>
            <HeroButtons />
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Advantages section ────────────────────────────────────────────────── */
/* 3 benefit cards: Escala, Conformidade, Trajetória */

const ADVANTAGES = [
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Factory / production icon */}
        <rect x="8" y="24" width="20" height="28" rx="2" />
        <rect x="36" y="16" width="20" height="36" rx="2" />
        <line x1="18" y1="24" x2="18" y2="16" />
        <circle cx="18" cy="13" r="3" />
        <path d="M14 10 C14 6 22 6 22 10" />
        <line x1="14" y1="34" x2="22" y2="34" />
        <line x1="14" y1="40" x2="22" y2="40" />
        <line x1="42" y1="28" x2="50" y2="28" />
        <line x1="42" y1="34" x2="50" y2="34" />
        <line x1="42" y1="40" x2="50" y2="40" />
      </svg>
    ),
    title: "Escala",
    text: (
      <>
        Três unidades produtivas: capacidade pra abastecer qualquer canal,
        qualquer volume, sem perder o ritmo.
      </>
    ),
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Certificate icon */}
        <rect x="14" y="6" width="36" height="44" rx="3" />
        <line x1="22" y1="18" x2="42" y2="18" />
        <line x1="22" y1="24" x2="38" y2="24" />
        <line x1="22" y1="30" x2="34" y2="30" />
        <circle cx="32" cy="48" r="10" />
        <path d="M26 55 L26 62 L32 58 L38 62 L38 55" />
        <path d="M29 48 L31 50 L36 45" />
      </svg>
    ),
    title: "Conformidade",
    text: (
      <>
        Todas certificadas pelo <strong className="font-bold">MAPA</strong>.
        Não é só exigência, isso garante que cada lote chegue do mesmo jeito:
        seguro, consistente e no ponto. Pra quem distribui, isso tem nome:{" "}
        <strong className="font-bold">Confiança</strong>.
      </>
    ),
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Growth chart icon */}
        <line x1="8" y1="56" x2="8" y2="8" />
        <line x1="8" y1="56" x2="56" y2="56" />
        <rect x="14" y="40" width="8" height="16" rx="1" fill="#ffbd24" stroke="#171717" />
        <rect x="26" y="30" width="8" height="26" rx="1" fill="#ffbd24" stroke="#171717" />
        <rect x="38" y="18" width="8" height="38" rx="1" fill="#ffbd24" stroke="#171717" />
        <path d="M16 28 L30 18 L46 8" />
        <path d="M40 8 L48 6 L46 14" />
      </svg>
    ),
    title: "Trajetória",
    text: (
      <>
        O Nosso Chope não para. A família cresceu, mais rótulos, mais formatos,
        mais Brasil.{" "}
        <strong className="font-bold text-[#b8860b]">
          De 2020 até aqui foi só aquecimento.
        </strong>
      </>
    ),
  },
];

function AdvantagesSection() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-[#ffbd24] to-[#f5a623] py-[6.25rem] max-2xl:py-[4rem]">
      <div className={`${gridBase} items-center`}>
        {/* Centered heading — pattern from SocialProofSection */}
        <div className="col-span-12 flex flex-col items-center text-center mb-[3.75rem]">

          {/* Line 1: plain text from left */}
          <ScrollFadeIn direction="left" distance={60} duration={0.8}>
            <p
              className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.075rem] text-center leading-[1.33]"
              style={{ fontSize: "clamp(3rem,4vw,5rem)" }}
            >
              por que ser
            </p>
          </ScrollFadeIn>

          {/* Line 2: yellow rotated badge from right */}
          <ScrollFadeIn
            direction="right"
            distance={60}
            duration={0.8}
            delay={0.15}
            className="relative bg-[#171717] rounded-[0.625rem] px-[1.25rem] py-[1.25rem] mt-[0.375rem] rotate-[-1.48deg] skew-x-[0.29deg]"
          >
            <p
              className="font-['Montserrat',sans-serif] font-black text-[#ffbd24] uppercase tracking-[0.0625rem] whitespace-nowrap leading-none"
              style={{ fontSize: "clamp(2.5rem,3.75vw,4.5rem)" }}
            >
              Nosso Parceiro?
            </p>
            <div
              className="absolute pointer-events-none rounded-[1.125rem] inset-[-0.5rem] border-[0.5rem] border-[#ffbd24]/30"
              aria-hidden
            />
          </ScrollFadeIn>

          {/* Subtitle */}
          <ScrollFadeIn direction="up" distance={35} duration={0.7} delay={0.3}>
            <p
              className="font-['Montserrat',sans-serif] font-semibold text-[#3d2a0a] leading-[1.5] mt-[1.5rem]"
              style={{ fontSize: "clamp(0.95rem,1vw,1.25rem)", maxWidth: "44rem" }}
            >
              Qualidade, estrutura e uma marca que não para de crescer.
              Descubra o que faz do Nosso Chope a escolha certa para o seu negócio.
            </p>
          </ScrollFadeIn>
        </div>

        {/* 3 Cards */}
        {ADVANTAGES.map((card, i) => (
          <ScrollFadeIn
            key={card.title}
            direction="up"
            distance={60}
            duration={0.8}
            delay={0.2 + i * 0.15}
            className="col-span-4"
          >
            <div
              className="group relative bg-white rounded-[1.5rem] flex flex-col items-center text-center
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-default
                hover:-translate-y-[0.5rem] hover:shadow-[0_1.5rem_3rem_-0.5rem_rgba(0,0,0,0.15)]"
              style={{
                padding: "2.5rem 2rem 2.25rem",
                boxShadow: "0 0.5rem 1.5rem -0.25rem rgba(0,0,0,0.08)",
              }}
            >
              {/* Decorative top accent */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[4rem] h-[0.25rem] rounded-b-full bg-[#171717]
                  transition-all duration-500 group-hover:w-[6rem] group-hover:bg-[#ffbd24]"
              />

              {/* Icon container */}
              <div
                className="flex items-center justify-center w-[5.5rem] h-[5.5rem] rounded-[1.25rem] mb-[1.5rem]
                  bg-[#fafafa] border border-[#f0f0f0]
                  transition-all duration-500 group-hover:bg-[#ffbd24]/10 group-hover:border-[#ffbd24]/30 group-hover:scale-110"
              >
                <span className="transition-transform duration-500 group-hover:scale-110">
                  {card.icon}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.05rem] leading-[1.2] mb-[0.875rem]"
                style={{ fontSize: "clamp(1.25rem,1.5vw,1.75rem)" }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="font-['Montserrat',sans-serif] font-normal text-[#4a4a4a] leading-[1.6]"
                style={{ fontSize: "clamp(0.85rem,0.95vw,1.0625rem)" }}
              >
                {card.text}
              </p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export function PartnerPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <HeroSection />
      <AdvantagesSection />
      {PRODUCTS.map((product) => (
        <ProductSection key={product.id} product={product} />
      ))}
      <FooterSection />
    </div>
  );
}
