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
        className="flex items-center justify-center overflow-hidden px-[2.4375rem] py-[2.5rem] rounded-[0.625rem]"
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
      className="absolute flex flex-col items-center justify-center gap-[3.1875rem] left-[17.4375rem] top-1/2 -translate-y-1/2 w-[44.625rem]"
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-[1.125rem]">
        <LogoLightSvg width={364} height={206} />
        <div className="bg-[#f2f2f2] flex items-center justify-center px-[1.875rem] py-[0.9375rem] w-full">
          <p
            className="font-['Montserrat',sans-serif] font-bold text-[#c4217e] uppercase tracking-[0.075rem] whitespace-nowrap text-[clamp(2rem,2.81vw,3.375rem)] leading-none"
          >
            Red draft
          </p>
        </div>
      </div>

      {/* Tag boxes */}
      <div className="flex flex-col items-center gap-[-1.3125rem]">
        <div className="flex items-center justify-center mb-[-1.3125rem]">
          <TagBox
            text="para quem ousa"
            bg="#c4217e"
            textColor="#fafafa"
            fontSize="clamp(1.5rem,2.6vw,3.125rem)"
            fontWeight="600"
            rotation={-1.58}
          />
        </div>
        <div className="flex items-center justify-center mb-[-1.3125rem]">
          <TagBox
            text="viver com"
            bg="#f2f2f2"
            textColor="#c4217e"
            fontSize="clamp(1.8rem,3.125vw,3.75rem)"
            fontWeight="900"
            rotation={1.43}
          />
        </div>
        <div className="flex items-center justify-center">
          <TagBox
            text="intensidade!"
            bg="#c4217e"
            textColor="#f2f2f2"
            fontSize="clamp(1.8rem,3.125vw,3.75rem)"
            fontWeight="700"
            rotation={-2.49}
          />
        </div>
      </div>
    </div>
  );
}

function RedDraftHero() {
  return (
    <div className="relative w-full overflow-hidden h-[61.25rem]">
      {/* Background image */}
      <img
        src={imgRedDraft1}
        alt="Red Draft"
        className="absolute inset-0 w-full h-full object-cover"
      />
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
      className="w-full overflow-hidden relative bg-gradient-to-b from-[#822d81] to-[#471046] h-[76.9375rem]"
    >
      {/* Decorative icons */}
      <div
        className="absolute pointer-events-none left-[12.5625rem] top-[2.875rem] right-0 bottom-[32%]"
      >
        <div
          className="absolute left-[12.5625rem] top-[2.875rem] w-[18.75rem] h-[31.25rem] rotate-[-30.55deg]"
        >
          <IconReddraftCevada />
        </div>
        <div
          className="absolute left-[35.875rem] top-[29.6875rem] w-[29.5rem] h-[33.0625rem] rotate-[62.77deg]"
        >
          <IconReddraftGrape />
        </div>
      </div>

      {/* Main Red Draft bottle */}
      <div
        className="absolute pointer-events-none left-1/2 -translate-x-[12.5rem] rotate-[12deg] top-[2.875rem] w-[17.4375rem] h-[57.8125rem] shadow-[0.25rem_0.25rem_1.5rem_0_rgba(0,0,0,0.35),_1.25rem_1.5rem_2.75rem_0_rgba(0,0,0,0.25)]"
      >
        <img src={imgReddraft600Ml1} alt="Red Draft 600ml" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Pilsen bottle behind */}
      <div
        className="absolute pointer-events-none left-[18.25rem] top-[29.375rem] w-[16.6875rem] h-[39.25rem] rotate-[-16.8deg] shadow-[0.375rem_0.375rem_0.5625rem_0_rgba(0,0,0,0.45),_1.25rem_0.875rem_2.125rem_0_rgba(0,0,0,0.35)]"
      >
        <img src={imgPrancheta32} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Text content right */}
      <div
        className="absolute flex flex-col gap-[2.1875rem] items-start left-[64.5rem] top-[17.75rem] w-[36.375rem]"
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
