import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import svgPaths from "../../../imports/HeroSobre/svg-4z82zqaibu";
import imgPrancheta32 from "figma:asset/6f63adec7cfe453cd371819abd4baadd4162da7a.png";
import imgGarrafaPilsen1 from "figma:asset/f084f04b43690f8b1c6d50c95bdaf5b8476aaa2e.png";
import imgGarrafRedDraft from "figma:asset/garrafa_hero.png";
import { Navbar } from "../shared/Navbar";
import { Button, ButtonLink, WhatsAppAnimIcon, ArrowAnimIcon } from "../shared/Button";
import { gridBase } from "../code/constants";
import { ScrollParallax } from "../animations/ScrollParallax";

/* ─── Hero title ────────────────────────────────────────────────────────── */

function TitleBox() {
  return (
    <div className="flex flex-col gap-[0.6875rem] max-2xl:gap-[0.584rem] items-center justify-center w-full">
      <div className="flex items-center justify-center w-[35.5323rem] max-2xl:w-[22.1rem]">
        <div className="skew-x-[0.29deg]">
          <div className="bg-[#171717] flex items-center justify-center overflow-hidden p-5 max-2xl:p-[1.06rem] rounded-[0.625rem]">
            <p className="font-['Montserrat',sans-serif] font-extrabold leading-[4rem] text-[#fafafa] text-[4rem] tracking-[0.05rem] uppercase whitespace-nowrap max-2xl:text-[2.55rem] max-2xl:leading-[2.55rem]">
              o puro malte
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[45.7155rem] max-2xl:w-[28.9rem]">
        <div className="skew-x-[0.29deg]">
          <div className="bg-[#171717] flex items-center justify-center overflow-hidden p-5 max-2xl:p-[1.06rem] rounded-[0.625rem]">
            <p className="font-['Montserrat',sans-serif] font-medium leading-[3.125rem] text-[#fafafa] text-[3rem] tracking-[0.05rem] uppercase whitespace-nowrap max-2xl:text-[1.91rem] max-2xl:leading-[2.125rem]">
              que está conquistando
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[36.6673rem] max-2xl:w-[22.95rem]">
        <div className="skew-x-[0.29deg]">
          <div className="bg-[#171717] flex items-center justify-center overflow-hidden px-[1.875rem] py-5 max-2xl:px-[1.59rem] max-2xl:py-[1.06rem] rounded-[0.625rem]">
            <p className="font-['Montserrat',sans-serif] font-black leading-[6rem] text-[#f2f2f2] text-[6rem] tracking-[0.05rem] uppercase whitespace-nowrap max-2xl:text-[3.825rem] max-2xl:leading-[3.825rem]">
              o brasil!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroButtons() {
  return (
    <div className="flex items-center gap-5 max-2xl:gap-[1.06rem]">
      <ButtonLink
        variant="whatsapp-dark"
        href="https://api.whatsapp.com/send?phone=+5521996533939&text=Gostaria+de+saber+mais+informa%C3%A7%C3%B5es!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[12rem] max-2xl:w-[10.2rem] max-2xl:text-[0.85rem] max-2xl:px-[1.33rem] max-2xl:py-[0.58rem]"
      >
        <WhatsAppAnimIcon fill="#FFBD24" />
        Peça Agora!
      </ButtonLink>
      <ButtonLink
        variant="arrow-white"
        href="#sobre"
        className="max-2xl:text-[0.85rem] max-2xl:px-[1.33rem] max-2xl:py-[0.58rem]"
      >
        <ArrowAnimIcon stroke="#171717" />
        Conheça o Nosso Chope!
      </ButtonLink>
    </div>
  );
}



/* ─── Hero Section ─────────────────────────────────────────────────────── */

function useMagneticHover(maxMove = 30, baseTransform = "") {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const moveX = (x / rect.width) * maxMove;
    const moveY = (y / rect.height) * maxMove;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const transform = `translate3d(${position.x}px, ${position.y}px, 0) ${baseTransform}`.trim();

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform,
      transition: position.x === 0 && position.y === 0
        ? "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
        : "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
    }
  };
}

export function HeroSection() {
  const redBottleHover = useMagneticHover(35, "rotate(-15deg)");
  const pilsenBottleHover = useMagneticHover(45);

  const contentAnimRef = useRef<HTMLDivElement>(null);
  const redBottleAnimRef = useRef<HTMLDivElement>(null);
  const pilsenBottleAnimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentAnimRef.current || !redBottleAnimRef.current || !pilsenBottleAnimRef.current) return;

    // Hide elements immediately on mount to prevent them from being visible before animations start
    gsap.set([contentAnimRef.current, redBottleAnimRef.current, pilsenBottleAnimRef.current], { autoAlpha: 0 });

    const startAnimations = () => {
      // Content fade in from bottom with scale
      gsap.fromTo(contentAnimRef.current,
        { autoAlpha: 0, y: 100, scale: 0.6 },
        {
          autoAlpha: 1, y: 0, scale: 1, duration: 2, ease: "power3.out",
          scrollTrigger: {
            trigger: contentAnimRef.current,
            start: "top 85%",
          }
        }
      );

      // Red Bottle: from top, almost out of screen, 10% overshoot
      gsap.fromTo(redBottleAnimRef.current,
        { autoAlpha: 0, y: "-120vh" },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: redBottleAnimRef.current,
            start: "top 85%",
          }
        }
      );

      // Pilsen Bottle: from bottom, almost out of screen, 10% overshoot
      gsap.fromTo(pilsenBottleAnimRef.current,
        { autoAlpha: 0, y: "60vh" },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: pilsenBottleAnimRef.current,
            start: "top 85%",
          }
        }
      );
    };

    if (document.body.classList.contains("preloader-done")) {
      startAnimations();
    } else {
      window.addEventListener("preloaderAlmostComplete", startAnimations, { once: true });
    }
  }, []);

  return (
    <div className="relative w-full">
      <Navbar variant="overlay" />
      <section
        className={`${gridBase} relative z-0 overflow-hidden w-full max-h-[55rem] max-2xl:max-h-[42rem] grid-rows-[auto] bg-gradient-to-b from-[#ffd324] to-[#e9a402] max-2xl:min-h-[87vh]`}
      >


        <ScrollParallax speed={-5}
          className="col-[4_/_10] flex flex-col items-center z-[5]"
        >
          <div ref={contentAnimRef} className="skew-y-[-3deg] flex flex-col gap-6 justify-center items-center mt-[15rem] max-2xl:mt-[25vh] max-2xl:gap-[0.85rem]">
            <TitleBox />
            <HeroButtons />
          </div>
        </ScrollParallax>

        <ScrollParallax speed={-70}
          className="relative left-[-70rem] top-[-25rem] z-[0] max-2xl:left-[-53rem] max-2xl:top-[-18rem]"
        >
          <div ref={redBottleAnimRef}>
            <div
              ref={redBottleHover.ref}
              onMouseMove={redBottleHover.onMouseMove}
              onMouseLeave={redBottleHover.onMouseLeave}
              style={redBottleHover.style}
            >
              <img alt="" src={imgGarrafRedDraft} className="max-w-[19rem] w-[18rem] max-2xl:w-[11.5rem]" />
            </div>
          </div>
        </ScrollParallax>
      </section >

      {/* Garrafa Pilsen */}
      <ScrollParallax speed={35}
        className="absolute left-[76rem] top-[3rem] w-[42.1634rem] h-[67.1841rem] z-10 max-2xl:left-[55rem] max-2xl:top-[2rem] max-2xl:w-[29rem] max-2xl:h-[51rem]"
      >
        <div
          ref={pilsenBottleAnimRef}
          className="w-full h-full"
        >
          <div
            ref={pilsenBottleHover.ref}
            onMouseMove={pilsenBottleHover.onMouseMove}
            onMouseLeave={pilsenBottleHover.onMouseLeave}
            style={pilsenBottleHover.style}
            className="w-full h-full"
          >
            <img alt="Nosso Chope Pilsen" src={imgGarrafaPilsen1} />
          </div>
        </div>
      </ScrollParallax>
    </div >
  );
}
