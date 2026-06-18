import React from "react";
import imgRedDraft1 from "figma:asset/182cddbe971fadb9147bcf0a0b11dd2cdc7220d5.png";
import imgReddraft600Ml1 from "figma:asset/a7c516c817fabe544b06e970454c9a0fbd300d6f.png";
import imgPrancheta32 from "figma:asset/6f63adec7cfe453cd371819abd4baadd4162da7a.png";
import { LogoLightSvg, IconReddraftCevada, IconReddraftGrape } from "../shared/icons";
import { gridBase } from "../code/constants";
import { ScrollFadeIn } from "../animations/ScrollFadeIn";
import { ScrollParallax } from "../animations/ScrollParallax";

function TagBox({ text, bg, textColor, fontSize, fontWeight, rotation }: {
  text: string;
  bg: string;
  textColor: string;
  fontSize: string;
  fontWeight: string;
  rotation: number;
}) {
  return (
    <div
      className="inline-block skew-x-[0.29deg]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className="flex items-center justify-center px-[1.6rem] py-[1.6rem] max-2xl:px-[1rem] max-2xl:py-[1rem] rounded-[0.625rem] max-2xl:rounded-[0.4rem]"
        style={{ backgroundColor: bg }}
      >
        <p
          className="whitespace-nowrap uppercase tracking-[0.05rem] font-['Montserrat',sans-serif] leading-none"
          style={{
            fontWeight,
            fontSize,
            color: textColor,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function RedDraftBranding() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[3.1875rem] w-full"
    >
      {/* Logo */}
      <ScrollFadeIn direction="left" className="flex flex-col items-center gap-[0.125rem]">
        <div className="w-[18.75rem] h-[12.875rem] max-2xl:w-[15rem] max-2xl:h-[10.3rem] [&>svg]:w-full [&>svg]:h-full flex items-center justify-center">
          <LogoLightSvg width={300} height={206} />
        </div>


        <p
          className="bg-[#f2f2f2] px-[1.875rem] py-[0.9375rem] text-center font-['Montserrat',sans-serif] font-bold text-[#c4217e] uppercase whitespace-nowrap text-[clamp(2rem,2.2vw,3.375rem)] leading-none"
        >
          Red draft
        </p>

      </ScrollFadeIn>

      {/* Tag boxes */}
      <div className="flex flex-col items-center space-y-[-0.5rem]">
        <ScrollFadeIn direction="right">
          <TagBox
            text="para quem ousa"
            bg="#c4217e"
            textColor="#fafafa"
            fontSize="clamp(1.5rem,2.6vw,3.125rem)"
            fontWeight="600"
            rotation={-1.58}
          />
        </ScrollFadeIn>

        <ScrollFadeIn direction="right" delay={0.4} duration={1.2}>
          <TagBox
            text="viver com"
            bg="#f2f2f2"
            textColor="#c4217e"
            fontSize="clamp(1.8rem,3.125vw,3.75rem)"
            fontWeight="900"
            rotation={1.43}
          />
        </ScrollFadeIn>

        <ScrollFadeIn direction="right" delay={0.8} duration={1.2}>
          <TagBox
            text="intensidade!"
            bg="#c4217e"
            textColor="#f2f2f2"
            fontSize="clamp(1.8rem,3.125vw,3.75rem)"
            fontWeight="700"
            rotation={-1.29}
          />
        </ScrollFadeIn>

      </div>
    </div>
  );
}

function RedDraftHero() {
  return (
    <div
      className={`${gridBase} relative w-full overflow-hidden h-[61.25rem] max-2xl:h-[46rem]`}>

      <ScrollParallax speed={-25} className="absolute inset-0 z-1 w-full h-full">
        <img src={imgRedDraft1} alt="Jovem mulher segurando uma lata de Nosso Chope RedDraft."
          className="object-cover scale-[1.15]" />
      </ScrollParallax>

      <ScrollParallax speed={10} className="col-[2_/_6] row-[1_/_-1] flex items-center z-2">
        <RedDraftBranding />
      </ScrollParallax>
    </div>
  );
}

function SizeCard({ label, volume, unit, icon }: { label: string; volume: string; unit: string; icon: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-[0.625rem] px-[1.25rem] py-[1.125rem] rounded-[0.75rem] bg-white/10 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-[1.03] cursor-default group">
      {/* Icon */}
      <div className="text-[#f2f2f2]/70 group-hover:text-[#f2f2f2] transition-colors duration-300">
        {icon}
      </div>
      {/* Volume */}
      <p className="font-['Montserrat',sans-serif] font-extrabold text-white tracking-tight leading-none">
        <span className="text-[clamp(2rem,3.02vw,3.25rem)]">{volume}</span>
        <span className="text-[clamp(1rem,1.5vw,1.5rem)] opacity-80 ml-[0.2rem]">{unit}</span>
      </p>
      {/* Label pill */}
      <span className="inline-flex items-center justify-center px-[0.875rem] py-[0.3rem] rounded-full bg-[#c4217e]/80 border border-[#c4217e] font-['Montserrat',sans-serif] font-semibold uppercase tracking-[0.08rem] text-white text-[0.7rem] leading-none whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

function SizesBox() {
  return (
    <div className="flex items-stretch gap-[0.875rem] w-full">
      <SizeCard
        label="Lata"
        volume="310"
        unit="ml"
        icon={
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="4" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <rect x="10" y="2" width="8" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <line x1="8" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        }
      />
      {/* Divider */}
      <div className="flex items-center self-stretch">
        <div className="w-px h-full bg-white/20 rounded-full" />
      </div>
      <SizeCard
        label="Garrafa"
        volume="600"
        unit="ml"
        icon={
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 3h6v3l3 5v12a2 2 0 01-2 2H10a2 2 0 01-2-2V11l3-5V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <line x1="8" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        }
      />
    </div>
  );
}

function RedDraftDetail() {
  return (
    <div
      className={`${gridBase} py-[8rem] max-2xl:py-[5rem] items-center  justify-center w-full overflow-hidden relative bg-gradient-to-b from-[#822d81] to-[#471046] h-[76.9375rem] max-2xl:h-[60rem]`}
    >
      <div className="col-[1_/_8] row-[1_/_-1] relative grid grid-cols-12">
        {/* Decorative icons */}
        <div
          className="col-[1_/_span_8] row-[1_/_-1] ml-[-3rem] max-h-[30rem] mt-[4rem] rotate-[-30.55deg]"
        >
          <IconReddraftCevada />
        </div>
        <div
          className="col-[4_/_-1] row-[1_/_-1] ml-[0rem] mt-[17rem] max-h-[36rem] rotate-[62.77deg]"
        >
          <IconReddraftGrape />
        </div>

        {/* Main Red Draft bottle */}
        <ScrollParallax speed={10} className="col-[5_/_-1] row-[1_/_-1] ml-[2rem] mt-[-4rem]">
          <ScrollFadeIn direction="left">
            <img src={imgReddraft600Ml1} alt="Red Draft 600ml" className=" rotate-[12deg] max-h-[51rem] max-2xl:max-h-[38rem] [filter:drop-shadow(0.25rem_0.25rem_1.5rem_rgba(0,0,0,0.35))_drop-shadow(1.25rem_1.5rem_2.75rem_rgba(0,0,0,0.25))]" />
          </ScrollFadeIn>
        </ScrollParallax>


        {/* Pilsen bottle behind */}
        <ScrollParallax speed={-5} className="col-[2_/_7] row-[1_/_-1] ml-[1rem] mt-[21rem]">
          <ScrollFadeIn direction="right">
            <img src={imgPrancheta32} alt="" className=" rotate-[-16.8deg] max-h-[33rem] max-2xl:max-h-[25rem] [filter:drop-shadow(0.25rem_0.25rem_1.5rem_rgba(0,0,0,0.35))_drop-shadow(1.25rem_1.5rem_2.75rem_rgba(0,0,0,0.25))]" />
          </ScrollFadeIn>
        </ScrollParallax>
      </div>


      {/* Text content right */}
      <div
        className="col-[7_/_12] flex flex-col gap-[2.1875rem] items-start row-[1_/_-1]"
      >
        {/* Title */}
        <div className="flex flex-col items-start">
          <ScrollFadeIn direction="up">
            <p
              className="font-['Montserrat',sans-serif] font-normal text-white tracking-[0.075rem] text-[clamp(1.5rem,2.5vw,3rem)] leading-[1.08]"
            >
              Mais leve, Mais gelado.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" className="rotate-[-1.82deg]">
            <div className="bg-[#c4217e] flex items-center justify-center overflow-hidden px-[1.5625rem] py-[0.9375rem] rounded-[0.625rem]">
              <p
                className="font-['Montserrat',sans-serif] font-extrabold text-white uppercase tracking-[0.075rem] whitespace-nowrap text-center text-[clamp(2rem,2.86vw,3.4375rem)] leading-none"
              >
                Mais Red Draft
              </p>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Description */}
        <ScrollFadeIn direction="up" className="flex flex-col gap-[1.1875rem] text-white tracking-[0.075rem] w-full">
          <p
            className="font-['Montserrat',sans-serif] font-normal leading-[1.33] text-[1.125rem]"
          >
            A geração que vive no movimento não tem tempo para esperar.{" "}
            <strong className="font-bold">O Red Draft é Ready to Drink</strong>, fresco, descolado e sempre no momento certo!
          </p>
          <p
            className="font-['Montserrat',sans-serif] font-bold leading-[1.33] text-[1.125rem] w-[31rem] max-2xl:w-full"
          >
            Cada copo é uma experiência única de sabor e alegria, com início suave e espuma cremosa.
          </p>
        </ScrollFadeIn>

        {/* Sizes box */}
        <ScrollFadeIn direction="up" className="backdrop-blur-[0.25rem] rounded-[0.9375rem] overflow-hidden bg-[rgba(130,45,129,0.7)] border border-[#c4217e] shadow-[0.375rem_0.375rem_1.5rem_0_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-[1.4375rem] items-start justify-center px-[1.75rem] py-[1.875rem]">
            <p
              className="font-['Montserrat',sans-serif] font-extrabold text-white uppercase tracking-[0.075rem] text-[1.5rem] leading-none w-[26.6875rem] max-2xl:w-full max-2xl:text-[1.25rem]"
            >
              Disponível nos tamanhos:
            </p>
            <SizesBox />
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}

export function RedDraftSection() {
  return (
    <section className="w-full overflow-hidden">
      <RedDraftHero />
      <RedDraftDetail />
    </section>
  );
}
