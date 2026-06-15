import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import svgPaths from "../../../imports/HeroSobre/svg-4z82zqaibu";
import imgPrancheta32 from "figma:asset/6f63adec7cfe453cd371819abd4baadd4162da7a.png";
import imgGarrafaPilsen1 from "figma:asset/f084f04b43690f8b1c6d50c95bdaf5b8476aaa2e.png";
import imgGarrafRedDraft from "figma:asset/garrafa_hero.png";
import { Navbar } from "../shared/Navbar";
import { Button, WhatsAppAnimIcon, ArrowAnimIcon } from "../shared/Button";
import { gridBase } from "../code/constants";

/* ─── Hero title ────────────────────────────────────────────────────────── */

function TitleBox() {
  return (
    <div className="flex flex-col gap-[0.6875rem] items-center justify-center w-full">
      <div className="flex items-center justify-center w-[35.5323rem]">
        <div className="skew-x-[0.29deg]">
          <div className="bg-[#171717] flex items-center justify-center overflow-hidden p-5 rounded-[0.625rem]">
            <p className="font-['Montserrat',sans-serif] font-extrabold leading-[4rem] text-[#fafafa] text-[4rem] tracking-[0.05rem] uppercase whitespace-nowrap">
              o puro malte
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[45.7155rem]">
        <div className="skew-x-[0.29deg]">
          <div className="bg-[#171717] flex items-center justify-center overflow-hidden p-5 rounded-[0.625rem]">
            <p className="font-['Montserrat',sans-serif] font-medium leading-[3.125rem] text-[#fafafa] text-[3rem] tracking-[0.05rem] uppercase whitespace-nowrap">
              que está conquistando
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[36.6673rem]">
        <div className="skew-x-[0.29deg]">
          <div className="bg-[#171717] flex items-center justify-center overflow-hidden px-[1.875rem] py-5 rounded-[0.625rem]">
            <p className="font-['Montserrat',sans-serif] font-black leading-[6rem] text-[#f2f2f2] text-[6rem] tracking-[0.05rem] uppercase whitespace-nowrap">
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
    <div className="flex items-center gap-5">
      <Button variant="whatsapp-dark" className="w-[12rem]">
        <WhatsAppAnimIcon fill="#FFBD24" />
        Peça Agora!
      </Button>
      <Button variant="arrow-white">
        <ArrowAnimIcon stroke="#171717" />
        Conheça o Nosso Chope!
      </Button>
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
    gsap.from(redBottleAnimRef.current, {
      y: "-120vh",
      duration: 1.8,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: redBottleAnimRef.current,
        start: "top 85%",
      }
    });

    // Pilsen Bottle: from bottom, almost out of screen, 10% overshoot
    gsap.from(pilsenBottleAnimRef.current, {
      y: "60vh",
      duration: 1.8,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: pilsenBottleAnimRef.current,
        start: "top 85%",
      }
    });
  }, []);

  return (
    <div className="relative w-full">
      <section
        className={`${gridBase} relative overflow-hidden w-full max-h-[55rem] grid-rows-[auto] bg-gradient-to-b from-[#ffd324] to-[#e9a402]`}
      >
        <Navbar variant="overlay" />


        <div
          ref={contentAnimRef}
          className="col-[4_/_10] skew-y-[-3deg] flex flex-col gap-6 items-center z-[5] mt-[15rem]"
        >
          <TitleBox />
          <HeroButtons />
        </div>

        <div
          ref={redBottleAnimRef}
          className="relative left-[-70rem] top-[-7rem] z-[0]"
        >
          <div
            ref={redBottleHover.ref}
            onMouseMove={redBottleHover.onMouseMove}
            onMouseLeave={redBottleHover.onMouseLeave}
            style={redBottleHover.style}
          >

            <img alt="" src={imgGarrafRedDraft} className="max-w-[19rem] w-[18rem]" />
          </div>
        </div>
      </section >

      <div
        ref={pilsenBottleAnimRef}
        className="absolute left-[76rem] top-[3rem] w-[42.1634rem] h-[67.1841rem] z-10"
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
    </div>
  );
}
