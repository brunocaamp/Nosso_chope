import svgPaths from "../../../imports/HeroSobre/svg-4z82zqaibu";
import imgRowImg21 from "figma:asset/09badca205a6c6d82552e03d3900a77bbbe54536.png";
import { Button, ButtonLink, WhatsAppAnimIcon } from "../shared/Button";
import { gridBase } from "../code/constants";
import { ScrollFadeIn } from "../animations/ScrollFadeIn";

/* ─── Stars badge ──────────────────────────────────────────────────────── */

function StarSvg() {
  return (
    <div className="relative size-[1.5625rem]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 25 25">
        <path d={svgPaths.p17169400} fill="black" />
      </svg>
    </div>
  );
}

function StarsBadge() {
  return (
    <div
      className="flex items-center gap-[0.625rem] px-[1.625rem] py-[0.75rem] rounded-[0.625rem] overflow-hidden bg-[#ffbd24] w-[12.9568rem] h-[3.62525rem]"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="rotate-[-0.18deg] skew-x-[-0.29deg]">
          <StarSvg />
        </div>
      ))}
    </div>
  );
}

/* ─── Left image ───────────────────────────────────────────────────────── */

function ImgBox() {
  return (
    <div className="w-full h-full overflow-hidden relative rounded-[1.5625rem]">
      <img alt="bridando com como do nosso chope" src={imgRowImg21} />
    </div>
  );
}

/* ─── Right text block ─────────────────────────────────────────────────── */

function Heading() {
  return (
    <p className="textBox__title2 font-['Montserrat',sans-serif]  text-[3.7325rem]/[7rem] max-2xl:text-[2.8rem] max-2xl:leading-[5rem]" id="nosso-jeito">
      NOSSO JEITO!
    </p>
  );
}

function TextParagraph() {
  return (
    <div className="flex flex-col gap-[0.875rem] items-start">
      <p className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[1rem] w-full">
        <span className="font-bold leading-[1.6875rem]">Nosso Chope é puro malte, prático e fácil de encontrar.</span>
        <span className="leading-[1.6875rem]">{" "}Sem complicação, sem mistério. Só o prazer de abrir, servir e brindar. Nossa produção é feita com foco na qualidade e localmente em Angra dos Reis e Guapimirim. Você sabe exatamente a procedência do que está bebendo.</span>
      </p>
      <p className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[1rem] w-full leading-[1.6875rem]">
        O Nosso Chope é feito para reunir amigos, familia e aqueles momentos inesquecíveis. Leve, refrescante e com aquele sabor de chope gelado de boteco que todo mundo ama.
      </p>
      <ButtonLink
        variant="whatsapp-yellow"
        href="https://api.whatsapp.com/send?phone=+5521996533939&text=Gostaria+de+saber+mais+informa%C3%A7%C3%B5es!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppAnimIcon fill="black" />
        Peça Agora!
      </ButtonLink>
    </div>
  );
}

function TextBox() {
  return (
    <div className="relative w-full h-full">
      <p className="font-['Montserrat',sans-serif] font-medium whitespace-nowrap text-[#1a0e04] text-[2.375rem] leading-[1.21875rem] tracking-[0.0975rem] max-2xl:text-[1.875rem]">
        Chope de verdade do
      </p>
      <Heading />
      <TextParagraph />
    </div>
  );
}

/* ─── About Section ────────────────────────────────────────────────────── */

export function AboutSection() {
  return (
    <section className={`${gridBase} items-center justify-center w-full shrink-0 pt-[12.5rem] pb-[9.375rem] max-2xl:pt-[8rem] max-2xl:pb-[6rem]`} id="sobre">
      <ScrollFadeIn direction="left" className="col-[1_/_7] row-[1_/_-1]">
        <ImgBox />
      </ScrollFadeIn>
      <div className="col-[2_/_4] row-[1_/_-1] self-end relative bottom-[-1rem] rotate-[2.93deg] skew-x-[0.29deg]">
        <StarsBadge />
      </div>
      <ScrollFadeIn direction="right" className="col-[8_/_-1] row-[1_/_-1] shrink-0 h-[24.5rem] w-[35.5625rem] max-2xl:w-full max-2xl:h-auto">
        <TextBox />
      </ScrollFadeIn>
    </section>
  );
}
