"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlayButton } from "../shared/Button";
import videoSrc from "../../../assets/nosso_chope_video_1.mp4";

gsap.registerPlugin(ScrollTrigger);


export function ScrollVideoReveal() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);

  // We keep a ref to access the play trigger inside the click handler
  const playTriggerRef = useRef<() => void>(() => { });

  useEffect(() => {
    if (!containerRef.current || !videoRef.current || !playButtonRef.current) return;

    const video = videoRef.current;

    if (isUnlocked) {
      if (video) {
        video.play().catch((e) => console.log("Autoplay prevented", e));
      }
      return;
    }


    const ctx = gsap.context(() => {
      let duration = video.duration || 10;
      let pinStatus = true;
      let endStatus = "+=200%";


      const initScrollTrigger = () => {
        duration = video.duration || 10;
        let isPlayingIndependently = false;

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: endStatus,
          pin: pinStatus,
          scrub: true,
          onUpdate: (self) => {
            // Se o vídeo já estiver tocando de forma independente, travamos a animação e ignoramos o scroll reverso
            if (isPlayingIndependently) return;

            const p = self.progress;

            // 1. Scrub do vídeo (avança os primeiros 3 segundos de acordo com o scroll)
            if (video && duration > 0) {
              const scrubDuration = Math.min(duration, 0);
              video.currentTime = p * scrubDuration;
            }

            // 2. Expansão do clip-path (camada amarela sumindo)
            const radius = p * 150;
            gsap.set(".video-mask", { clipPath: `circle(${radius}% at 50% 50%)`, WebkitClipPath: `circle(${radius}% at 50% 50%)` });

            // 3. Fade out do botão de play no final (a partir de 50% do scroll)
            if (playButtonRef.current) {
              if (p > 0.8) {
                const op = 1 - ((p - 0.5) * 5);
                const scale = 1 - ((p - 0.5) * 1);
                gsap.set(playButtonRef.current, { opacity: Math.max(0, op), scale: Math.max(0.8, scale) });
              } else {
                gsap.set(playButtonRef.current, { opacity: 1, scale: 1 });
              }
            }
          },
          onLeave: () => {
            // Ao chegar no fim da animação via scroll, solta o vídeo pra tocar normalmente e trava a animação
            if (!isPlayingIndependently) {
              isPlayingIndependently = true;
              setIsUnlocked(true)
              if (video) video.play().catch((e) => console.log("Autoplay prevented", e));
            }
          }
        });

        // Função para disparar o play manualmente ao clicar no botão
        playTriggerRef.current = () => {
          if (isPlayingIndependently) return;
          isPlayingIndependently = true;
          setIsUnlocked(true);

          // Anima o restante da camada amarela até sumir
          gsap.to(".video-mask", { clipPath: "circle(150% at 50% 50%)", WebkitClipPath: "circle(150% at 50% 50%)", duration: 0.8, ease: "power2.out" });

          // Some com o botão
          if (playButtonRef.current) {
            gsap.to(playButtonRef.current, { opacity: 0, scale: 0.8, duration: 0.5, pointerEvents: "none" });
          }

          // Dá o play no vídeo
          if (video) {
            video.play().catch((e) => console.log("Autoplay prevented", e));
          }
        };
      };

      if (video.readyState >= 1) {
        initScrollTrigger();
      } else {
        video.addEventListener("loadedmetadata", initScrollTrigger);
      }

      return () => {
        video.removeEventListener("loadedmetadata", initScrollTrigger);
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isUnlocked]);

  return (
    <div className="relative w-full top-[-13rem] z-1" ref={containerRef}>
      <div className="relative w-full h-screen overflow-hidden bg-[#ffbd24] flex items-center justify-center">

        <div
          className="absolute inset-0 video-mask w-full h-full flex items-center justify-center"
          style={{
            clipPath: isUnlocked ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
            WebkitClipPath: isUnlocked ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)"
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop
            preload="metadata"
          />
        </div>

        {!isUnlocked && (
          <div
            ref={playButtonRef}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-auto"
          >
            <PlayButton
              size={124}
              borderColor="white"
              onClick={() => {
                // Chama a função que destrava o vídeo e finaliza a animação
                playTriggerRef.current();
              }}
            >
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                <path d="M21 16L38 27L21 38V16Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </PlayButton>
          </div>
        )}

      </div>
    </div>
  );
}
