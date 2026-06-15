import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gridBase } from "../code/constants";
import { ScrollFadeIn } from "../animations/ScrollFadeIn";

gsap.registerPlugin(ScrollTrigger);

interface TagBoxProps {
  text: string;
  bg: string;
  textColor: string;
  fontSize: string;
  fontWeight: string;
  rotation: number;
  borderColor?: string;
}

function TagBox({ text, bg, textColor, fontSize, fontWeight, rotation, borderColor = "white" }: TagBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const currentRotation = isHovered ? rotation - 2 : rotation;
  const currentScale = isHovered ? 1.05 : 1;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-flex items-center justify-center px-[3.125rem] py-[1.8rem] rounded-[1rem] cursor-pointer"
      style={{
        transform: `rotate(${currentRotation}deg) skewX(0.29deg) scale(${currentScale})`,
        transition: "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
        backgroundColor: bg,
        border: `6px solid ${borderColor}`,
      }}
    >
      <span
        className="whitespace-nowrap uppercase tracking-[0.05rem] font-['Montserrat',sans-serif] leading-none"
        style={{
          fontWeight,
          fontSize,
          color: textColor,
        }}
      >
        {text}
      </span>
    </div>
  );
}

export function CtaTagsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      scale: 0.8,
      filter: "blur(10px)",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "10% top", // When top of viewport is 10% below top of the div
        end: "bottom top", // Until scroll reaches the end of the div
        scrub: true,
      }
    });
  }, []);

  return (
    <section className={`${gridBase} w-full py-[3.125rem] pb-[9.375rem] overflow-hidden`}>
      <div ref={containerRef} className="col-[1_/_-1] flex flex-col items-center space-y-[-1.0625rem] origin-center">
        
        <ScrollFadeIn direction="left">
          <TagBox
            text="SABOR"
            bg="#171717"
            textColor="#fafafa"
            fontSize="clamp(2.5rem,4.06vw,4.875rem)"
            fontWeight="600"
            rotation={-1.58}
          />
        </ScrollFadeIn>

        <ScrollFadeIn direction="right">
          <TagBox
            text="MARCANTE"
            bg="#ffbd24"
            textColor="#171717"
            fontSize="clamp(3rem,5vw,6rem)"
            fontWeight="900"
            rotation={1.43}
          />
        </ScrollFadeIn>

        <ScrollFadeIn direction="left">
          <TagBox
            text="equilíbrio"
            bg="#171717"
            textColor="#f2f2f2"
            fontSize="clamp(2.5rem,4.06vw,4.875rem)"
            fontWeight="700"
            rotation={-2.49}
          />
        </ScrollFadeIn>

        <ScrollFadeIn direction="right">
          <TagBox
            text="perfeito"
            bg="#ffbd24"
            textColor="black"
            fontSize="clamp(3.5rem,6.04vw,7.25rem)"
            fontWeight="900"
            rotation={2.87}
          />
        </ScrollFadeIn>

      </div>
    </section>
  );
}
