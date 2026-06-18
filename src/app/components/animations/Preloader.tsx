import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import gsap from "gsap";
import imgLogoBlack from "figma:asset/28767bfbb1c1d464e2df47c261ecdf49cd41fbdd.png";

/* ─── Floating particle ─────────────────────────────────────────────────── */

interface ParticleConfig {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

function FloatingParticle({ config }: { config: ParticleConfig }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const tl = gsap.timeline({ repeat: -1, delay: config.delay });

    tl.fromTo(
      ref.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 0.4,
        duration: config.duration * 0.3,
        ease: "power2.out",
      }
    )
      .to(ref.current, {
        y: -60 - Math.random() * 40,
        x: (Math.random() - 0.5) * 80,
        duration: config.duration * 0.5,
        ease: "sine.inOut",
      })
      .to(
        ref.current,
        {
          scale: 0,
          opacity: 0,
          duration: config.duration * 0.2,
          ease: "power2.in",
        },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, [config]);

  return (
    <div
      ref={ref}
      className="absolute rounded-full pointer-events-none"
      style={{
        width: config.size,
        height: config.size,
        left: `${config.x}%`,
        top: `${config.y}%`,
        background: "rgba(23,23,23,0.12)",
      }}
    />
  );
}

/* ─── Shimmer line ──────────────────────────────────────────────────────── */

function ShimmerLine() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { x: "-100%" },
      {
        x: "200%",
        duration: 1.8,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 1.2,
      }
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-full">
      <div
        ref={ref}
        className="absolute inset-y-0 w-1/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(23,23,23,0.08), transparent)",
        }}
      />
    </div>
  );
}

/* ─── Main Preloader ────────────────────────────────────────────────────── */

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const decorLineLeftRef = useRef<HTMLDivElement>(null);
  const decorLineRightRef = useRef<HTMLDivElement>(null);

  // Particles
  const particles = useMemo<ParticleConfig[]>(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: 3 + Math.random() * 6,
      x: 10 + Math.random() * 80,
      y: 20 + Math.random() * 60,
      delay: Math.random() * 4,
      duration: 2.5 + Math.random() * 2,
    }));
  }, []);

  /* ── Entrance animation ─────────────────────────────────────────────── */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Logo entrance with scale + subtle rotation
    tl.fromTo(
      logoRef.current,
      { scale: 0.3, opacity: 0, y: 40, rotation: -8 },
      { scale: 1, opacity: 1, y: 0, rotation: 0, duration: 1, ease: "back.out(1.4)" }
    )
      // Decorative lines expand from center
      .fromTo(
        [decorLineLeftRef.current, decorLineRightRef.current],
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.6, stagger: 0.08 },
        "-=0.4"
      )
      // Subtitle fades in
      .fromTo(
        subtitleRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      )
      // Progress bar reveals
      .fromTo(
        progressTrackRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "center" },
        "-=0.2"
      )
      // Counter fades
      .fromTo(
        counterRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.3 },
        "-=0.15"
      );

    // Floating logo bob
    gsap.to(logoRef.current, {
      y: -6,
      duration: 2.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  /* ── Progress simulation ────────────────────────────────────────────── */
  useEffect(() => {
    let frame: number;
    let current = 0;

    const tick = () => {
      if (current < 100) {
        const increment =
          current < 30
            ? 0.6 + Math.random() * 1.0
            : current < 65
              ? 0.4 + Math.random() * 0.7
              : current < 88
                ? 0.2 + Math.random() * 0.4
                : 1.2 + Math.random() * 2.5;

        current = Math.min(current + increment, 100);
        setProgress(current);

        if (counterRef.current) {
          counterRef.current.textContent = `${Math.floor(current)}%`;
        }

        frame = requestAnimationFrame(tick);
      }
    };

    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, 800);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, []);

  /* ── Exit: curtain rising ───────────────────────────────────────────── */
  const handleExit = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);

    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    // Fade out inner content first
    tl.to(
      [
        subtitleRef.current,
        progressTrackRef.current,
        counterRef.current,
        decorLineLeftRef.current,
        decorLineRightRef.current,
      ],
      {
        opacity: 0,
        y: -25,
        duration: 0.35,
        stagger: 0.03,
        ease: "power2.in",
      }
    )
      // Logo scales up and fades
      .to(
        logoRef.current,
        {
          scale: 1.15,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
        },
        "-=0.15"
      )
      // Curtain rises — the whole container slides up
      .to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.75,
          ease: "power3.inOut",
        },
        "-=0.05"
      )
      // Dispara o evento de "quase completado" antes do final da animação.
      // Você pode alterar esse tempo mudando o "-=0.2" (que significa 0.2 segundos antes do final).
      // Se quiser que inicie 0.5s antes, coloque "-=0.5".
      .add(() => window.dispatchEvent(new Event("preloaderAlmostComplete")), "-=0.4");
  }, [isExiting, onComplete]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(handleExit, 350);
      return () => clearTimeout(timeout);
    }
  }, [progress, handleExit]);

  return (
    <div
      ref={containerRef}
      id="preloader"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FFD324 0%, #FFBD24 35%, #E9A402 100%)",
      }}
    >
      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #171717 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, #171717 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 45px 45px",
        }}
      />

      {/* Soft radial highlight behind logo */}
      <div
        className="absolute w-[35rem] h-[35rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <FloatingParticle key={p.id} config={p} />
      ))}

      {/* ── Center content ───────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center gap-5 select-none">
        {/* Decorative line left */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div
            ref={decorLineLeftRef}
            className="h-[2px] w-12 sm:w-20 rounded-full origin-right"
            style={{ background: "rgba(23,23,23,0.18)" }}
          />

          {/* Brand logo */}
          <img
            ref={logoRef}
            src={imgLogoBlack}
            alt="Nosso Chope"
            className="w-32 h-auto sm:w-44 md:w-52 object-contain"
            style={{
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))",
            }}
          />

          {/* Decorative line right */}
          <div
            ref={decorLineRightRef}
            className="h-[2px] w-12 sm:w-20 rounded-full origin-left"
            style={{ background: "rgba(23,23,23,0.18)" }}
          />
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-['Inter',sans-serif] text-[#171717]/50 text-[0.7rem] sm:text-xs tracking-[0.35em] uppercase mt-1"
        >
          Preparando sua experiência
        </p>

        {/* Progress bar */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <div
            ref={progressTrackRef}
            className="relative w-44 sm:w-56 h-[3px] rounded-full overflow-hidden"
            style={{ background: "rgba(23,23,23,0.08)" }}
          >
            <div
              ref={progressFillRef}
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${progress}%`,
                background: "#171717",
                transition: "width 0.08s linear",
                boxShadow: "0 0 8px rgba(23,23,23,0.15)",
              }}
            />
            <ShimmerLine />
          </div>

          {/* Counter */}
          <span
            ref={counterRef}
            className="font-['Montserrat',sans-serif] font-bold text-sm sm:text-base tabular-nums text-[#171717]/70"
          >
            0%
          </span>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-[#171717]/10 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-[#171717]/10 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-[#171717]/10 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-[#171717]/10 rounded-br-sm" />
    </div>
  );
}
