import imgRedDraft1 from "figma:asset/182cddbe971fadb9147bcf0a0b11dd2cdc7220d5.png";
import imgReddraft600Ml1 from "figma:asset/a7c516c817fabe544b06e970454c9a0fbd300d6f.png";
import imgPrancheta32 from "figma:asset/6f63adec7cfe453cd371819abd4baadd4162da7a.png";
import { LogoLightSvg, IconReddraftCevada, IconReddraftGrape } from "../shared/icons";

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
      className="inline-block"
      style={{ transform: `rotate(${rotation}deg) skewX(0.29deg)` }}
    >
      <div
        className="flex items-center justify-center overflow-hidden px-[39px] py-[40px] rounded-[10px]"
        style={{ backgroundColor: bg }}
      >
        <p
          className="whitespace-nowrap uppercase tracking-[0.8px]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight,
            fontSize,
            lineHeight: "1",
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
      className="absolute flex flex-col items-center justify-center gap-[51px]"
      style={{ left: "279px", top: "50%", transform: "translateY(-50%)", width: "714px" }}
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-[18px]">
        <LogoLightSvg width={364} height={206} />
        <div className="bg-[#f2f2f2] flex items-center justify-center px-[30px] py-[15px] w-full">
          <p
            className="font-['Montserrat',sans-serif] font-bold text-[#c4217e] uppercase tracking-[1.2px] whitespace-nowrap"
            style={{ fontSize: "clamp(2rem,2.81vw,3.375rem)", lineHeight: "1" }}
          >
            Red draft
          </p>
        </div>
      </div>

      {/* Tag boxes */}
      <div className="flex flex-col items-center" style={{ gap: "-21px" }}>
        <div className="flex items-center justify-center mb-[-21px]">
          <TagBox
            text="para quem ousa"
            bg="#c4217e"
            textColor="#fafafa"
            fontSize="clamp(1.5rem,2.6vw,3.125rem)"
            fontWeight="600"
            rotation={-1.58}
          />
        </div>
        <div className="flex items-center justify-center mb-[-21px]">
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
    <div className="relative w-full overflow-hidden" style={{ height: "980px" }}>
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
    <div className="bg-[#f2f2f2] flex items-center gap-8 p-[30px] rounded-[15px]">
      <div className="text-[#822d81] tracking-[1.2px] whitespace-nowrap">
        <p className="font-['Montserrat',sans-serif] font-medium uppercase text-[1.5rem] leading-[1]">Lata</p>
        <p className="font-['Montserrat',sans-serif] font-extrabold" style={{ lineHeight: "1" }}>
          <span style={{ fontSize: "clamp(2rem,3.02vw,3.625rem)" }}>310</span>
          <span style={{ fontSize: "clamp(1.5rem,1.98vw,2.375rem)" }}>ml</span>
        </p>
      </div>
      {/* Divider */}
      <div className="flex items-center justify-center" style={{ width: 0, height: "50px" }}>
        <svg width="1" height="50" viewBox="0 0 1 50" fill="none">
          <line x1="0.5" y1="0" x2="0.5" y2="50" stroke="#822D81" />
        </svg>
      </div>
      <div className="text-[#822d81] tracking-[1.2px] whitespace-nowrap">
        <p className="font-['Montserrat',sans-serif] font-medium uppercase text-[1.5rem] leading-[1]">garrafa</p>
        <p className="font-['Montserrat',sans-serif] font-extrabold" style={{ lineHeight: "1" }}>
          <span style={{ fontSize: "clamp(2rem,3.02vw,3.625rem)" }}>600</span>
          <span style={{ fontSize: "clamp(1.5rem,1.98vw,2.375rem)" }}>ml</span>
        </p>
      </div>
    </div>
  );
}

function RedDraftDetail() {
  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        background: "linear-gradient(to bottom, #822d81, #471046)",
        height: "1231px",
      }}
    >
      {/* Decorative icons */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "201px",
          top: "46px",
          right: 0,
          bottom: "32%",
        }}
      >
        <div
          className="absolute"
          style={{
            left: "201px",
            top: "46px",
            width: "300px",
            height: "500px",
            transform: "rotate(-30.55deg)",
          }}
        >
          <IconReddraftCevada />
        </div>
        <div
          className="absolute"
          style={{
            left: "574px",
            top: "475px",
            width: "472px",
            height: "529px",
            transform: "rotate(62.77deg)",
          }}
        >
          <IconReddraftGrape />
        </div>
      </div>

      {/* Main Red Draft bottle */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          transform: "translateX(-200px) rotate(12deg)",
          top: "46px",
          width: "279px",
          height: "925px",
          boxShadow: "4px 4px 24px 0px rgba(0,0,0,0.35), 20px 24px 44px 0px rgba(0,0,0,0.25)",
        }}
      >
        <img src={imgReddraft600Ml1} alt="Red Draft 600ml" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Pilsen bottle behind */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "292px",
          top: "470px",
          width: "267px",
          height: "628px",
          transform: "rotate(-16.8deg)",
          boxShadow: "6px 6px 9px 0px rgba(0,0,0,0.45), 20px 14px 34px 0px rgba(0,0,0,0.35)",
        }}
      >
        <img src={imgPrancheta32} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Text content right */}
      <div
        className="absolute flex flex-col gap-[35px] items-start"
        style={{ left: "1032px", top: "284px", width: "582px" }}
      >
        {/* Title */}
        <div className="flex flex-col items-start">
          <p
            className="font-['Montserrat',sans-serif] font-normal text-white tracking-[1.2px]"
            style={{ fontSize: "clamp(1.5rem,2.5vw,3rem)", lineHeight: "1.08" }}
          >
            Mais leve, Mais gelado.
          </p>
          <div style={{ transform: "rotate(-1.82deg)" }}>
            <div className="bg-[#c4217e] flex items-center justify-center overflow-hidden px-[25px] py-[15px] rounded-[10px]">
              <p
                className="font-['Montserrat',sans-serif] font-extrabold text-white uppercase tracking-[1.2px] whitespace-nowrap text-center"
                style={{ fontSize: "clamp(2rem,2.86vw,3.4375rem)", lineHeight: "1" }}
              >
                Mais Red Draft
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-[19px] text-white tracking-[1.2px]" style={{ width: "100%" }}>
          <p
            className="font-['Montserrat',sans-serif] font-normal leading-[1.33]"
            style={{ fontSize: "1.125rem" }}
          >
            A geração que vive no movimento não tem tempo para esperar.{" "}
            <strong className="font-bold">O Red Draft é Ready to Drink</strong>, fresco, descolado e sempre no momento certo!
          </p>
          <p
            className="font-['Montserrat',sans-serif] font-bold leading-[1.33]"
            style={{ fontSize: "1.125rem", width: "496px" }}
          >
            Cada copo é uma experiência única de sabor e alegria, com início suave e espuma cremosa.
          </p>
        </div>

        {/* Sizes box */}
        <div className="backdrop-blur-[4px] rounded-[15px] overflow-hidden" style={{ backgroundColor: "rgba(130,45,129,0.7)", border: "1px solid #c4217e", boxShadow: "6px 6px 24px 0px rgba(0,0,0,0.1)" }}>
          <div className="flex flex-col gap-[23px] items-start justify-center px-[28px] py-[30px]">
            <p
              className="font-['Montserrat',sans-serif] font-extrabold text-white uppercase tracking-[1.2px]"
              style={{ fontSize: "1.5rem", lineHeight: "1", width: "427px" }}
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
