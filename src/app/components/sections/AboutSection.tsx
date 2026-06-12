import svgPaths from "../../../imports/HeroSobre/svg-4z82zqaibu";
import imgRowImg21 from "figma:asset/09badca205a6c6d82552e03d3900a77bbbe54536.png";
import { Button, WhatsAppAnimIcon } from "../shared/Button";

/* ─── Stars badge ──────────────────────────────────────────────────────── */

function StarSvg() {
  return (
    <div className="relative size-[25px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 25 25">
        <path d={svgPaths.p17169400} fill="black" />
      </svg>
    </div>
  );
}

function StarsBadge() {
  return (
    <div
      className="flex items-center gap-[10px] px-[26px] py-[12px] rounded-[10px] overflow-hidden"
      style={{ backgroundColor: "#ffbd24", width: "207.309px", height: "58.004px" }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} style={{ transform: "rotate(-0.18deg) skewX(-0.29deg)" }}>
          <StarSvg />
        </div>
      ))}
    </div>
  );
}

/* ─── Left image ───────────────────────────────────────────────────────── */

function ImgBox() {
  return (
    <div className="overflow-hidden relative rounded-[25px] shrink-0" style={{ width: "771px", height: "542px" }}>
      <div className="absolute" style={{ left: "-55px", top: "-16px", width: "833px", height: "591px" }}>
        <img alt="Nosso Chope" src={imgRowImg21} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      </div>
    </div>
  );
}

/* ─── Right text block ─────────────────────────────────────────────────── */

function Heading() {
  return (
    <div className="absolute whitespace-nowrap" style={{ height: "59.725px", width: "512px", top: "27.5px", left: 0 }}>
      <p className="absolute font-['Montserrat',sans-serif] font-black" style={{ fontSize: "59.72px", lineHeight: "59.72px", color: "#171717", left: "-3px", top: "3.36px" }}>
        NOSSO JEITO!
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-black" style={{ fontSize: "59.72px", lineHeight: "59.72px", color: "#ffbd24", left: "-5px", top: "-0.64px" }}>
        NOSSO JEITO!
      </p>
    </div>
  );
}

function TextParagraph() {
  return (
    <div className="absolute flex flex-col gap-[14px] items-start" style={{ top: "110.23px", left: 0, width: "512px" }}>
      <p className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[16px] w-full">
        <span style={{ fontWeight: 700, lineHeight: "27px" }}>Nosso Chope é puro malte, prático e fácil de encontrar.</span>
        <span style={{ lineHeight: "27px" }}>{" "}Sem complicação, sem mistério. Só o prazer de abrir, servir e brindar. Nossa produção é feita com foco na qualidade e localmente em Angra dos Reis e Guapimirim. Você sabe exatamente a procedência do que está bebendo.</span>
      </p>
      <p className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[16px] w-full" style={{ lineHeight: "27px" }}>
        O Nosso Chope é feito para reunir amigos, família e aqueles momentos inesquecíveis. Leve, refrescante e com aquele sabor de chope gelado de boteco que todo mundo ama.
      </p>
      <Button variant="whatsapp-yellow">
        <WhatsAppAnimIcon fill="black" />
        Peça Agora!
      </Button>
    </div>
  );
}

function TextBox() {
  return (
    <div className="relative shrink-0" style={{ height: "392px", width: "569px" }}>
      <p className="absolute font-['Montserrat',sans-serif] font-medium whitespace-nowrap text-[#1a0e04]" style={{ fontSize: "38px", lineHeight: "19.5px", top: "-7.4px", left: "-5px", letterSpacing: "1.56px" }}>
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
    <section className="relative flex items-center justify-center w-full shrink-0" style={{ paddingTop: "200px", paddingBottom: "150px", gap: "80px" }}>
      <ImgBox />
      <div className="absolute" style={{ left: "329px", top: "723px" }}>
        <div style={{ transform: "rotate(2.93deg) skewX(0.29deg)" }}>
          <StarsBadge />
        </div>
      </div>
      <TextBox />
    </section>
  );
}
