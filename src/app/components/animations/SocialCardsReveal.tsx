import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SocialVideoCard, type SocialVideoCardProps } from "../shared/SocialVideoCard";

gsap.registerPlugin(ScrollTrigger);

/* ─── Types ─────────────────────────────────────────────────────────────── */

type CardConfig = Pick<SocialVideoCardProps, "videoSrc" | "rotation">;

interface SocialCardsRevealProps {
  /** Lista de cards. Cada um define seu próprio vídeo e rotação final. */
  cards: CardConfig[];
  /** Classe Tailwind extra para o container externo */
  className?: string;
}

/* ─── Helpers ───────────────────────────────────────────────────────────── */

/**
 * Calcula a posição X final de cada card para que fiquem distribuídos
 * uniformemente de ponta a ponta do container, centrados.
 */
function calcFinalPositions(count: number, spread: number): number[] {
  const half = (count - 1) / 2;
  return Array.from({ length: count }, (_, i) => (i - half) * spread);
}

/* ─── Component ─────────────────────────────────────────────────────────── */

/**
 * Anima um deck de SocialVideoCards com efeito "deck spread":
 * - Estado inicial: todos empilhados no centro (x=0, autoAlpha=0).
 * - Ao entrar na viewport: cada card "voa" para sua posição X final
 *   com stagger e easing elástico.
 */
export function SocialCardsReveal({ cards, className = "" }: SocialCardsRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Mantém um array estável de refs sem resetar a cada render
  const cardRefsArray = useRef<HTMLDivElement[]>([]);
  // Refs dos wrappers para controlar z-index no hover sem re-render
  const wrapperElsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const els = cardRefsArray.current.filter(Boolean);
    if (!wrapper || els.length === 0) return;

    const SPREAD_PX = Math.min(220, window.innerWidth * 0.115);
    const finalPositions = calcFinalPositions(els.length, SPREAD_PX);

    const ctx = gsap.context(() => {
      // ── Estado inicial: empilhados, invisíveis ──────────────────────────
      gsap.set(els, {
        x: 0,
        autoAlpha: 0,
        scale: 0.85,
      });

      // ── Animação de espalhamento ao entrar na viewport ──────────────────
      ScrollTrigger.create({
        trigger: wrapper,
        start: "30% bottom",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.to(els, {
            x: (i) => finalPositions[i],
            autoAlpha: 1,
            scale: 1,
            duration: 1.54,
            ease: "back.out(1.4)",
            stagger: {
              each: 0.07,
              from: "center",
            },
          });
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, [cards.length]);

  return (
    <div
      ref={wrapperRef}
      className={`col-[1_/_-1] row-span-1 relative flex items-center justify-center
        overflow-visible h-[38.5rem] max-2xl:h-[28rem] ${className}`}
    >
      {cards.map((card, i) => (
        <div
          key={i}
          ref={(el) => {
            cardRefsArray.current[i] = el!;
            wrapperElsRef.current[i] = el!;
          }}
          className="absolute"
          style={{ zIndex: i }}
          onMouseEnter={() => { wrapperElsRef.current[i].style.zIndex = "50"; }}
          onMouseLeave={() => { wrapperElsRef.current[i].style.zIndex = String(i); }}
        >
          <SocialVideoCard
            videoSrc={card.videoSrc}
            rotation={card.rotation}
            index={i}
          />
        </div>
      ))}
    </div>
  );
}
