import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function ScrollFadeIn({
  children,
  direction = "none",
  delay = 0.2,
  duration = 1,
  distance = 320,
  className = "",
}: ScrollFadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "left":
        x = -distance; // Starts from left
        break;
      case "right":
        x = distance; // Starts from right
        break;
      case "up":
        y = distance; // Starts from below
        break;
      case "down":
        y = -distance; // Starts from above
        break;
      default:
        break;
    }

    // Define o estado inicial da animação
    gsap.set(el, { autoAlpha: 0, x, y });

    // Animação vinculada ao scroll
    const tl = gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%", // Dispara quando o topo do elemento atinge 85% da altura da viewport
        toggleActions: "play none none none",
      },
      autoAlpha: 1,
      x: 0,
      y: 0,
      duration: duration,
      delay: delay,
      ease: "power2.out",
    });

    return () => {
      // Limpeza ao desmontar
      tl.kill();
    };
  }, [direction, delay, duration, distance]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
