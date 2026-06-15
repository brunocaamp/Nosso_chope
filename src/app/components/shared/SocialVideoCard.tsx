import { useRef, useEffect } from "react";

/* ─── Types ─────────────────────────────────────────────────────────────── */

export interface SocialVideoCardProps {
  /** Path / URL do vídeo deste card */
  videoSrc: string;
  /** Rotação fixa do card em graus */
  rotation: number;
  /** Índice do card na lista (usado para z-index estático) */
  index: number;
}

/* ─── Component ─────────────────────────────────────────────────────────── */

/**
 * Card de vídeo estilo polaroid para a seção SocialProof.
 * O vídeo começa a tocar ao hover e pausa quando o mouse sai.
 * A posição X final e a animação de entrada são controladas externamente
 * via ref passada pelo componente pai (SocialCardsReveal).
 */
export function SocialVideoCard({ videoSrc, rotation, index }: SocialVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Exibe o primeiro frame do vídeo como thumbnail antes do hover
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const showFirstFrame = () => {
      video.currentTime = 0.001;
    };
    video.addEventListener("loadedmetadata", showFirstFrame);
    return () => video.removeEventListener("loadedmetadata", showFirstFrame);
  }, []);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {
      // Autoplay pode ser bloqueado em alguns browsers — silencia o erro.
    });
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
  };

  return (
    <div
      className="group relative flex-shrink-0 w-[15.6rem] h-[27.6rem] cursor-pointer
        transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        hover:scale-[1.1]"
      style={{
        rotate: `${rotation}deg`,
        zIndex: index,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Moldura interna com overflow oculto */}
      <div className="relative overflow-hidden rounded-[1rem] w-full h-full bg-[#1a1a1a]
        shadow-[0.5rem_1rem_2.5rem_-0.25rem_rgba(0,0,0,0.25)]
        transition-shadow duration-500
        group-hover:shadow-[0_1.5rem_4rem_-0.25rem_rgba(0,0,0,0.5)]">

        {/* Vídeo — ocupa o card inteiro */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          loop
          preload="metadata"
        />

        {/* Overlay escuro que some no hover, revelando o vídeo */}
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />

        {/* Ícone de play — visível até o hover */}
        <div className="absolute inset-0 flex items-center justify-center
          opacity-60 transition-opacity duration-300 group-hover:opacity-0">
          <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm
            flex items-center justify-center border border-white/50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Borda estilo polaroid (pointer-events none para não interferir no hover) */}
      <div
        className="absolute pointer-events-none rounded-[1.375rem] inset-[-0.35rem]
          border-[0.35rem] border-[#f2f2f2]
          shadow-[0.625rem_1.25rem_2.6625rem_-0.25rem_rgba(0,0,0,0.3)]
          transition-shadow duration-500
          group-hover:shadow-[0_2rem_5rem_-0.25rem_rgba(0,0,0,0.4)]"
        aria-hidden
      />
    </div>
  );
}
