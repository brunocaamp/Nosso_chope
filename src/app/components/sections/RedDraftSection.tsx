import React from "react";
import imgRedDraft1 from "figma:asset/182cddbe971fadb9147bcf0a0b11dd2cdc7220d5.png";
import imgReddraft600Ml1 from "figma:asset/a7c516c817fabe544b06e970454c9a0fbd300d6f.png";
import imgPrancheta32 from "figma:asset/6f63adec7cfe453cd371819abd4baadd4162da7a.png";
import { LogoLightSvg, IconReddraftCevada, IconReddraftGrape } from "../shared/icons";
import { gridBase } from "../code/constants";

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
        className="flex items-center justify-center px-[1.6rem] py-[1.6rem] rounded-[0.625rem]"
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
      className="col-[2_/_6] flex flex-col items-center justify-center gap-[3.1875rem]"
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-[0.125rem]">
        <LogoLightSvg width={300} height={206} />

        <p
          className="bg-[#f2f2f2] px-[1.875rem] py-[0.9375rem] text-center font-['Montserrat',sans-serif] font-bold text-[#c4217e] uppercase whitespace-nowrap text-[clamp(2rem,2.2vw,3.375rem)] leading-none"
        >
          Red draft
        </p>

      </div>

      {/* Tag boxes */}
      <div className="flex flex-col items-center space-y-[-0.5rem]">

        <TagBox
          text="para quem ousa"
          bg="#c4217e"
          textColor="#fafafa"
          fontSize="clamp(1.5rem,2.6vw,3.125rem)"
          fontWeight="600"
          rotation={-1.58}
        />


        <TagBox
          text="viver com"
          bg="#f2f2f2"
          textColor="#c4217e"
          fontSize="clamp(1.8rem,3.125vw,3.75rem)"
          fontWeight="900"
          rotation={1.43}
        />


        <TagBox
          text="intensidade!"
          bg="#c4217e"
          textColor="#f2f2f2"
          fontSize="clamp(1.8rem,3.125vw,3.75rem)"
          fontWeight="700"
          rotation={-1.29}
        />

      </div>
    </div>
  );
}

function RedDraftHero() {
  return (
    <div
      className={`${gridBase} relative w-full overflow-hidden h-[61.25rem] bg-[image:var(--bg-image-desktop-lg)] bg-cover bg-center`}
      style={{
        '--bg-image-desktop-lg': `url(${imgRedDraft1})`,
      } as React.CSSProperties}>

      <RedDraftBranding />
    </div>
  );
}

function SizesBox() {
  return (
    <div className="bg-[#f2f2f2] flex items-center gap-[2rem] p-[1.875rem] rounded-[0.9375rem]">
      <div className="text-[#822d81] tracking-[0.075rem] whitespace-nowrap">
        <p className="font-['Montserrat',sans-serif] font-medium uppercase text-[1.5rem] leading-none">Lata</p>
        <p className="font-['Montserrat',sans-serif] font-extrabold leading-none">
          <span className="text-[clamp(2rem,3.02vw,3.625rem)]">310</span>
          <span className="text-[clamp(1.5rem,1.98vw,2.375rem)]">ml</span>
        </p>
      </div>
      {/* Divider */}
      <div className="flex items-center justify-center w-0 h-[3.125rem]">
        <svg width="1" height="50" viewBox="0 0 1 50" fill="none">
          <line x1="0.5" y1="0" x2="0.5" y2="50" stroke="#822D81" />
        </svg>
      </div>
      <div className="text-[#822d81] tracking-[0.075rem] whitespace-nowrap">
        <p className="font-['Montserrat',sans-serif] font-medium uppercase text-[1.5rem] leading-none">garrafa</p>
        <p className="font-['Montserrat',sans-serif] font-extrabold leading-none">
          <span className="text-[clamp(2rem,3.02vw,3.625rem)]">600</span>
          <span className="text-[clamp(1.5rem,1.98vw,2.375rem)]">ml</span>
        </p>
      </div>
    </div>
  );
}

function RedDraftDetail() {
  return (
    <div
      className={`${gridBase} py-[8rem] items-center  justify-center w-full overflow-hidden relative bg-gradient-to-b from-[#822d81] to-[#471046] h-[76.9375rem]`}
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

        <img src={imgReddraft600Ml1} alt="Red Draft 600ml" className="col-[5_/_-1] row-[1_/_-1] ml-[2rem] mt-[-4rem] max-h-[51rem] rotate-[12deg] [filter:drop-shadow(0.25rem_0.25rem_1.5rem_rgba(0,0,0,0.35))_drop-shadow(1.25rem_1.5rem_2.75rem_rgba(0,0,0,0.25))]" />


        {/* Pilsen bottle behind */}

        <img src={imgPrancheta32} alt="" className="col-[2_/_7] row-[1_/_-1] ml-[1rem] mt-[21rem] rotate-[-16.8deg] max-h-[33rem] [filter:drop-shadow(0.25rem_0.25rem_1.5rem_rgba(0,0,0,0.35))_drop-shadow(1.25rem_1.5rem_2.75rem_rgba(0,0,0,0.25))]" />

      </div>


      {/* Text content right */}
      <div
        className="col-[7_/_12] flex flex-col gap-[2.1875rem] items-start row-[1_/_-1]"
      >
        {/* Title */}
        <div className="flex flex-col items-start">
          <p
            className="font-['Montserrat',sans-serif] font-normal text-white tracking-[0.075rem] text-[clamp(1.5rem,2.5vw,3rem)] leading-[1.08]"
          >
            Mais leve, Mais gelado.
          </p>
          <div className="rotate-[-1.82deg]">
            <div className="bg-[#c4217e] flex items-center justify-center overflow-hidden px-[1.5625rem] py-[0.9375rem] rounded-[0.625rem]">
              <p
                className="font-['Montserrat',sans-serif] font-extrabold text-white uppercase tracking-[0.075rem] whitespace-nowrap text-center text-[clamp(2rem,2.86vw,3.4375rem)] leading-none"
              >
                Mais Red Draft
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-[1.1875rem] text-white tracking-[0.075rem] w-full">
          <p
            className="font-['Montserrat',sans-serif] font-normal leading-[1.33] text-[1.125rem]"
          >
            A geração que vive no movimento não tem tempo para esperar.{" "}
            <strong className="font-bold">O Red Draft é Ready to Drink</strong>, fresco, descolado e sempre no momento certo!
          </p>
          <p
            className="font-['Montserrat',sans-serif] font-bold leading-[1.33] text-[1.125rem] w-[31rem]"
          >
            Cada copo é uma experiência única de sabor e alegria, com início suave e espuma cremosa.
          </p>
        </div>

        {/* Sizes box */}
        <div className="backdrop-blur-[0.25rem] rounded-[0.9375rem] overflow-hidden bg-[rgba(130,45,129,0.7)] border border-[#c4217e] shadow-[0.375rem_0.375rem_1.5rem_0_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-[1.4375rem] items-start justify-center px-[1.75rem] py-[1.875rem]">
            <p
              className="font-['Montserrat',sans-serif] font-extrabold text-white uppercase tracking-[0.075rem] text-[1.5rem] leading-none w-[26.6875rem]"
            >
              Disponível nos tamanhos:
            </p>
            <SizesBox />
          </div>
        </div>
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
