import svgPaths from "../../../imports/HeroSobre/svg-4z82zqaibu";
import imgPrancheta32 from "figma:asset/6f63adec7cfe453cd371819abd4baadd4162da7a.png";
import imgGarrafaPilsen1 from "figma:asset/f084f04b43690f8b1c6d50c95bdaf5b8476aaa2e.png";
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

export function HeroSection() {
  return (
    <div className="relative w-full">
      <section
        className={`${gridBase} relative overflow-hidden items-center justify-center w-full min-h-[55rem] grid-rows-[auto] bg-gradient-to-b from-[#ffd324] to-[#e9a402]`}
      >
        <Navbar variant="overlay" />

        <div
          className="cols-[1_/_3]"
        >
          <div className="rotate-[-15.67deg] shrink-0">
            <div className="relative w-[15.1779rem] h-[35.6797rem]">
              <img alt="" src={imgPrancheta32} className=" inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
          </div>
        </div>
        <div
          className="col-[4_/_10] skew-y-[-3deg] flex flex-col gap-6 items-center"
        >
          <TitleBox />
          <HeroButtons />
        </div>

        <div
          className="absolute flex items-center justify-center pointer-events-none col-start-1 left-[-18rem] top-[14.8438rem] w-[47.8996rem] h-[56.9158rem]"
        >
          <div className="rotate-[-32.95deg] shrink-0">
            <div className="w-[22.6169rem] h-[53.1673rem] blur-[0.46875rem] relative">
              <img alt="" src={imgPrancheta32} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
          </div>
        </div>
      </section >

      <div
        className="absolute left-[73rem] top-[3rem] w-[42.1634rem] h-[67.1841rem] z-10"
      >
        <img alt="Nosso Chope Pilsen" src={imgGarrafaPilsen1} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      </div>
    </div>
  );
}
