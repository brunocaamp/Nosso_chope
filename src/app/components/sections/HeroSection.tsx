import svgPaths from "../../../imports/HeroSobre/svg-4z82zqaibu";
import imgPrancheta32 from "figma:asset/6f63adec7cfe453cd371819abd4baadd4162da7a.png";
import imgGarrafaPilsen1 from "figma:asset/f084f04b43690f8b1c6d50c95bdaf5b8476aaa2e.png";
import { Navbar } from "../shared/Navbar";
import { Button, WhatsAppAnimIcon, ArrowAnimIcon } from "../shared/Button";

/* ─── Hero title ────────────────────────────────────────────────────────── */

function TitleBox() {
  return (
    <div className="flex flex-col gap-[11px] items-center justify-center w-full">
      <div className="flex items-center justify-center" style={{ width: "568.517px" }}>
        <div style={{ transform: "skewX(0.29deg)" }}>
          <div className="bg-[#171717] flex items-center justify-center overflow-hidden p-5 rounded-[10px]">
            <p className="font-['Montserrat',sans-serif] font-extrabold leading-[64px] text-[#fafafa] text-[64px] tracking-[0.8px] uppercase whitespace-nowrap">
              o puro malte
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center" style={{ width: "731.448px" }}>
        <div style={{ transform: "skewX(0.29deg)" }}>
          <div className="bg-[#171717] flex items-center justify-center overflow-hidden p-5 rounded-[10px]">
            <p className="font-['Montserrat',sans-serif] font-medium leading-[50px] text-[#fafafa] text-[48px] tracking-[0.8px] uppercase whitespace-nowrap">
              que está conquistando
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center" style={{ width: "586.677px" }}>
        <div style={{ transform: "skewX(0.29deg)" }}>
          <div className="bg-[#171717] flex items-center justify-center overflow-hidden px-[30px] py-5 rounded-[10px]">
            <p className="font-['Montserrat',sans-serif] font-black leading-[96px] text-[#f2f2f2] text-[96px] tracking-[0.8px] uppercase whitespace-nowrap">
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
      <Button variant="whatsapp-dark" style={{ width: "192px" }}>
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

/* ─── ContentBox ────────────────────────────────────────────────────────── */

function ContentBox() {
  return (
    <div className="relative shrink-0 overflow-hidden" style={{ height: "813px", width: "100%" }}>
      <div
        className="absolute flex items-center justify-center pointer-events-none"
        style={{ left: "-288px", top: "237.5px", width: "766.394px", height: "910.652px" }}
      >
        <div style={{ transform: "rotate(-32.95deg)", flexShrink: 0 }}>
          <div style={{ width: "361.871px", height: "850.676px", filter: "blur(7.5px)", boxShadow: "10px 4px 24px 0px rgba(0,0,0,0.25)", position: "relative" }}>
            <img alt="" src={imgPrancheta32} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center pointer-events-none"
        style={{ left: "248.58px", top: "129.62px", width: "388.005px", height: "615.248px" }}
      >
        <div style={{ transform: "rotate(-15.67deg)", flexShrink: 0 }}>
          <div className="relative" style={{ width: "242.846px", height: "570.875px" }}>
            <img alt="" src={imgPrancheta32} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          </div>
        </div>
      </div>
      <div
        className="absolute flex flex-col gap-6 items-center"
        style={{ left: "50%", transform: "translateX(-50%)", top: "195.5px", width: "843.478px" }}
      >
        <TitleBox />
        <HeroButtons />
      </div>
    </div>
  );
}

/* ─── Hero Section ─────────────────────────────────────────────────────── */

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center w-full"
      style={{ height: "880px", paddingTop: "64px", background: "linear-gradient(to bottom, #ffd324, #e9a402)" }}
    >
      <ContentBox />
      <Navbar variant="overlay" />
      <div
        className="absolute flex items-center justify-center pointer-events-none"
        style={{ left: "1150px", top: "113px", width: "674.614px", height: "1074.946px" }}
      >
        <div style={{ transform: "rotate(1.73deg)", flexShrink: 0 }}>
          <div className="relative" style={{ width: "643px", height: "1056px" }}>
            <img alt="Nosso Chope Pilsen" src={imgGarrafaPilsen1} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
