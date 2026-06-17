import React, { useState, useEffect, useCallback, useRef } from "react";
import imgImagem from "figma:asset/a9681d8b276a141e525ef952d6015a2c672b4e07.png";
import imgImage5 from "figma:asset/b3200e5bdec36f9c3876a5facc8a13c6cbf8df27.png";
import imgAssaiLogo from "figma:asset/0dc0127cfe32b13e632cd33260374726629b23d8.png";
import { LocationIcon, ArrowRightIcon } from "../shared/icons";
import { Button, ArrowAnimIcon, SmallButton } from "../shared/Button";
import { ScrollFadeIn } from "../animations/ScrollFadeIn";

/* ═══════════════════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════════════════ */

interface PartnerCardProps {
  /** Label shown in the bottom bar */
  name: string;
  /** Logo URL for the badge */
  logo: string;
  /** Background photo (defaults to establishment image) */
  backgroundImage?: string;
  /** Custom label node (replaces `name` text) */
  label?: React.ReactNode;
  /** Custom action node (replaces the arrow button) */
  action?: React.ReactNode;
}

/* ═══════════════════════════════════════════════════════════════════════════
   PartnerCard
   — `group` drives ALL hover children at once.
   — `overflow-hidden` is intentionally on the card to clip the image zoom,
     but the CARD ITSELF is NOT clipped by the parent section (see layout note).
   ═══════════════════════════════════════════════════════════════════════════ */

function PartnerCard({
  name,
  logo,
  backgroundImage = imgImage5,
  label,
  action,
}: PartnerCardProps) {
  return (
    <article
      className="
        group relative flex-shrink-0 rounded-[1.25rem] overflow-hidden
        w-[22.5625rem] h-[27rem] cursor-pointer
        border border-white/10
        shadow-[0_0.25rem_1.5rem_0_rgba(26,14,4,0.08)]
        transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
        hover:-translate-y-3 hover:shadow-[0_1.5rem_3rem_rgba(26,14,4,0.22)]
      "
    >
      {/* Base texture fallback */}
      <img
        src={imgImagem}
        alt=""
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Main photo */}
      <img
        src={backgroundImage}
        alt={name}
        draggable={false}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500 ease-out
          group-hover:scale-[1.07]
        "
      />

      {/* Gradient overlay — deepens on hover */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_top,rgba(26,14,4,0.88)_0%,rgba(26,14,4,0.18)_50%,transparent_100%)]
          transition-opacity duration-300 group-hover:opacity-[0.92]
        "
      />

      {/* Shine sweep (pseudo-element, driven by global CSS below) */}
      <div className="partner-shine absolute inset-0 pointer-events-none z-10" />

      {/* Logo badge */}
      <div
        className="
          absolute left-6 top-4 w-[4.125rem] h-[4.125rem]
          bg-white rounded-full flex items-center justify-center z-20
          shadow-[0_0.25rem_0.75rem_rgba(0,0,0,0.15)]
          transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          group-hover:scale-110 group-hover:-translate-y-1
        "
      >
        <img
          src={logo}
          alt={name}
          draggable={false}
          className="w-[3rem] h-[2.25rem] object-contain"
        />
      </div>

      {/* Bottom bar */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-[4.875rem]
          flex items-center justify-between px-5 py-[1.125rem]
          backdrop-blur-[0.625rem] bg-black/40 z-20
          transition-colors duration-300 group-hover:bg-black/60
        "
      >
        <div className="flex items-center gap-2">
          <LocationIcon stroke="#FFBD24" size={25} />
          <span
            className="
              font-['Montserrat',sans-serif] font-extrabold text-[#ffbd24]
              uppercase tracking-[0.6px] whitespace-nowrap
              text-[1.125rem] leading-[1.33]
            "
          >
            {label ?? name}
          </span>
        </div>
        {action ?? (
          <SmallButton>
            <ArrowRightIcon stroke="#FFBD24" size={16} />
          </SmallButton>
        )}
      </div>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const SOURCE_PARTNERS: PartnerCardProps[] = [
  { name: "Assaí atacadista", logo: imgAssaiLogo },
  { name: "Royal", logo: imgAssaiLogo },
  { name: "Assaí atacadista", logo: imgAssaiLogo },
  { name: "Assaí atacadista", logo: imgAssaiLogo },
  { name: "Royal", logo: imgAssaiLogo },
  { name: "Assaí atacadista", logo: imgAssaiLogo },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Carousel constants
   ═══════════════════════════════════════════════════════════════════════════ */

const VISIBLE = 3;           // cards shown at once
const CARD_W = 22.5625;      // rem — card width
const GAP    = 1.5;          // rem — gap between cards
const STEP   = CARD_W + GAP; // rem — distance to scroll per slide

// Number of clone items prepended/appended for the infinite loop
const CLONE_COUNT = VISIBLE;

/* ═══════════════════════════════════════════════════════════════════════════
   Infinite-loop helpers
   ─────────────────────────────────────────────────────────────────────────
   Strategy: prepend CLONE_COUNT items from the END of the list and append
   CLONE_COUNT items from the START.  The real items start at index
   CLONE_COUNT.  When the user slides past the last real item we silently
   jump to the matching real item (no animation) and carry on.
   ═══════════════════════════════════════════════════════════════════════════ */

const total = SOURCE_PARTNERS.length;

// Build the extended list:  [clones-from-end] [real items] [clones-from-start]
const extendedPartners: PartnerCardProps[] = [
  ...SOURCE_PARTNERS.slice(-CLONE_COUNT),
  ...SOURCE_PARTNERS,
  ...SOURCE_PARTNERS.slice(0, CLONE_COUNT),
];

// Real items start at this index inside extendedPartners
const REAL_START = CLONE_COUNT;
// The "current" index refers to the first VISIBLE card.
// Index 0 inside SOURCE_PARTNERS → REAL_START inside extendedPartners.
const toExtended = (realIdx: number) => realIdx + REAL_START;

const AUTO_MS  = 4500; // auto-advance interval
const TICK_MS  = 50;   // progress-bar tick interval
const REM_PX   = 16;   // px per rem (assumed)

/* ═══════════════════════════════════════════════════════════════════════════
   PartnersSection
   ═══════════════════════════════════════════════════════════════════════════ */

export function PartnersSection() {
  // realIndex: which real item (0…total-1) is first in the viewport
  const [realIndex, setRealIndex] = useState(0);
  // extIndex: actual track position (includes clone offset)
  const [extIndex, setExtIndex]   = useState(toExtended(0));

  const [isHovered,  setIsHovered]  = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta,  setDragDelta]  = useState(0);
  const [animated,   setAnimated]   = useState(true); // controls CSS transition
  const [progress,   setProgress]   = useState(0);

  const timerRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Slide to a REAL index, handling clone-jump if needed ──────── */
  const slideTo = useCallback((nextReal: number, animate = true) => {
    const bounded = ((nextReal % total) + total) % total; // wrap around
    setRealIndex(bounded);
    setExtIndex(toExtended(bounded));
    setAnimated(animate);
    setProgress(0);
  }, []);

  /* ── After a transition end, check if we landed on a clone ──────── */
  const onTransitionEnd = useCallback(() => {
    // If extIndex is in the "before" clones area, teleport to real items end
    if (extIndex < REAL_START) {
      const mirror = extIndex + total;
      setExtIndex(mirror);
      setAnimated(false);
    }
    // If extIndex is in the "after" clones area, teleport to real items start
    else if (extIndex >= REAL_START + total) {
      const mirror = extIndex - total;
      setExtIndex(mirror);
      setAnimated(false);
    }
  }, [extIndex]);

  /* ── Navigation ─────────────────────────────────────────────────── */
  const goNext = useCallback(() => slideTo(realIndex + 1), [realIndex, slideTo]);
  const goPrev = useCallback(() => slideTo(realIndex - 1), [realIndex, slideTo]);
  const goTo   = useCallback((i: number) => slideTo(i), [slideTo]);

  /* ── Auto-rotation ──────────────────────────────────────────────── */
  const stopTimer = useCallback(() => {
    if (timerRef.current)    { clearInterval(timerRef.current);    timerRef.current    = null; }
    if (progressRef.current) { clearInterval(progressRef.current); progressRef.current = null; }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    setProgress(0);
    timerRef.current = setInterval(() => {
      goNext();
    }, AUTO_MS);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + TICK_MS / AUTO_MS, 1));
    }, TICK_MS);
  }, [goNext, stopTimer]);

  useEffect(() => {
    if (!isHovered && !isDragging) startTimer();
    else stopTimer();
    return stopTimer;
  }, [isHovered, isDragging, startTimer, stopTimer]);

  /* ── Pointer drag ───────────────────────────────────────────────── */
  const cardPx   = STEP * REM_PX;
  const threshold = cardPx / 4;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDelta(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragDelta(e.clientX - dragStartX);
  };

  const onPointerUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    if      (dragDelta < -threshold) goNext();
    else if (dragDelta >  threshold) goPrev();
    setDragDelta(0);
  }, [isDragging, dragDelta, threshold, goNext, goPrev]);

  /* ── Computed translation ───────────────────────────────────────── */
  // The viewport shows exactly VISIBLE cards centered.
  // translateX moves the track so that `extIndex` is the first visible card.
  const dragRem     = isDragging ? dragDelta / REM_PX : 0;
  const translateRem = -(extIndex * STEP) + dragRem;

  // Viewport width: exactly 3 cards + 2 gaps (no extra padding needed).
  // We center this viewport inside the section with mx-auto.
  const viewportW   = VISIBLE * CARD_W + (VISIBLE - 1) * GAP; // rem

  /* Progress bar fill */
  const fillPct = ((realIndex + (isHovered || isDragging ? 0 : progress)) / (total - 1)) * 100;

  /* ── Render ─────────────────────────────────────────────────────── */
  return (
    /*
     * Layout note on overflow:
     * ─ `overflow-x: hidden` hides cards outside the 3-card viewport
     *   horizontally without clipping vertical hover lift.
     * ─ We add `py-[3rem]` padding so the `hover:-translate-y-3` card
     *   animation has room to breathe vertically before hitting the section
     *   boundary.
     */
    <section
      className="
        w-full bg-white flex flex-col items-center gap-[3.75rem]
        pt-[9.375rem] pb-[6.375rem]
        [overflow-x:hidden] [overflow-y:visible]
      "
    >
      {/* ── Title ─────────────────────────────────────────────────── */}
      <ScrollFadeIn direction="up" delay={0.1} distance={100} className="flex flex-col items-center text-center gap-[0.875rem] max-w-[52rem] px-8">
        <p
          className="
            font-['Montserrat',sans-serif] font-extrabold text-[#1a0e04]
            uppercase tracking-[0.074375rem] whitespace-nowrap
            text-[clamp(2rem,3.33vw,4rem)] leading-none
          "
        >
          Onde encontrar
        </p>
        <p
          className="
            font-['Montserrat',sans-serif] font-normal text-[#4a3728]
            text-[1.125rem] leading-[1.42]
          "
        >
          Encontre o nosso chope nos melhores mercados e estabelecimento!
        </p>
      </ScrollFadeIn>

      {/* ── Carousel wrapper ──────────────────────────────────────── */}
      {/*
        The wrapper acts as the 3-card viewport.  We use a fixed pixel width
        derived from the CSS custom property viewport so the track overflows
        exactly into hidden territory on both sides.
      */}
      <ScrollFadeIn direction="up" delay={0.2} distance={120} className="w-full">
        <div
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); if (isDragging) onPointerUp(); }}
        >
          {/* 3-card viewport — hard clip horizontally */}
          <div
            className="overflow-hidden mx-auto py-4"
            style={{ width: `${viewportW}rem` }}
          >
            {/* Sliding track — starts before the viewport (accounts for clones) */}
            <div
              className="flex select-none will-change-transform"
              style={{
                gap: `${GAP}rem`,
                // Shift track left by REAL_START cards to start at the first real item
                transform: `translateX(${translateRem}rem)`,
                transition: !animated || isDragging
                  ? "none"
                  : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: isDragging ? "grabbing" : "grab",
                touchAction: "pan-y",
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onTransitionEnd={onTransitionEnd}
            >
              {extendedPartners.map((partner, i) => (
                <PartnerCard key={i} {...partner} />
              ))}
            </div>
          </div>

          {/* Navigation arrows — positioned relative to the full-width wrapper */}
          <button
            onClick={() => { goPrev(); startTimer(); }}
            aria-label="Anterior"
            className="
              absolute left-[calc(50%-${viewportW/2}rem-4rem)]
              top-1/2 -translate-y-1/2 z-30
              flex items-center justify-center w-12 h-12
              rounded-full bg-white/90 backdrop-blur-sm
              border border-[#f2f2f2]
              shadow-[0_0.25rem_1rem_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:bg-[#f9cc0a] hover:border-[#f9cc0a] hover:scale-110
              active:scale-95
            "
            style={{ left: `calc(50% - ${viewportW / 2}rem - 3.5rem)` }}
          >
            <span className="rotate-180 flex">
              <ArrowRightIcon stroke="#1a0e04" size={16} />
            </span>
          </button>

          <button
            onClick={() => { goNext(); startTimer(); }}
            aria-label="Próximo"
            className="
              absolute top-1/2 -translate-y-1/2 z-30
              flex items-center justify-center w-12 h-12
              rounded-full bg-white/90 backdrop-blur-sm
              border border-[#f2f2f2]
              shadow-[0_0.25rem_1rem_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:bg-[#f9cc0a] hover:border-[#f9cc0a] hover:scale-110
              active:scale-95
            "
            style={{ left: `calc(50% + ${viewportW / 2}rem + 0.5rem)` }}
          >
            <ArrowRightIcon stroke="#1a0e04" size={16} />
          </button>
        </div>
      </ScrollFadeIn>

      {/* ── Slider ────────────────────────────────────────────────── */}
      <ScrollFadeIn direction="up" delay={0.3} distance={50} className="flex flex-col items-center gap-4 w-full max-w-[32rem] px-8">
        {/* Progress bar */}
        <div className="relative w-full h-[3px] bg-[#e8e0d8] rounded-full overflow-hidden">
          <div
            className="
              absolute inset-y-0 left-0 bg-[#f9cc0a] rounded-full
              transition-[width] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            "
            style={{ width: `${Math.max(0, Math.min(100, fillPct))}%` }}
          />
        </div>

        {/* Dot indicators — one dot per REAL item */}
        <div className="flex items-center gap-[0.625rem]">
          {SOURCE_PARTNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); startTimer(); }}
              aria-label={`Ir para slide ${i + 1}`}
              className={[
                "rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                i === realIndex
                  ? "w-7 h-2 bg-[#f9cc0a]"
                  : "w-2 h-2 bg-[#d5c9be] hover:bg-[#c4b8aa] hover:scale-125",
              ].join(" ")}
            />
          ))}
        </div>
      </ScrollFadeIn>

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      <ScrollFadeIn direction="up" delay={0.4} distance={50} className="flex items-center justify-center gap-[2.75rem] px-8 max-w-[72rem]">
        <div className="flex flex-col gap-[0.3125rem] text-center">
          <p
            className="
              font-['Montserrat',sans-serif] font-extrabold text-[#1a0e04]
              uppercase tracking-[0.074375rem] whitespace-nowrap
              text-[1.5rem] leading-[1.17]
            "
          >
            Seja um parceiro Nosso Chope
          </p>
          <p
            className="
              font-['Montserrat',sans-serif] font-normal text-[#4a3728]
              text-[1.125rem] leading-[1.33]
            "
          >
            Tenha o queridinho do Brasil em seu estabelecimento
          </p>
        </div>
        <div className="flex items-center gap-[0.875rem]">
          <Button variant="arrow-yellow">
            <ArrowAnimIcon stroke="#171717" />
            Seja um parceiro
          </Button>
          <Button variant="arrow-dark">
            <ArrowAnimIcon stroke="#FAFAFA" />
            Saiba Mais
          </Button>
        </div>
      </ScrollFadeIn>

      {/* ── Shine-sweep pseudo-element ─────────────────────────────── */}
      <style>{`
        .partner-shine::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            115deg,
            transparent 30%,
            rgba(255, 255, 255, 0.15) 50%,
            transparent 70%
          );
          transform: translateX(-120%) skewX(-15deg);
          pointer-events: none;
        }
        .group:hover .partner-shine::before {
          transform: translateX(160%) skewX(-15deg);
          transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </section>
  );
}
