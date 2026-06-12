import imgLongNeckGarrafaBranca1 from "figma:asset/063066d208c61f9dc3be1e5900cf7c07ccd6d1dd.png";
import img473Ml012 from "figma:asset/ff3127b4ddec9e40fab3d04ddd2b2a69c331f558.png";
import imgGarrafaPilsen901 from "figma:asset/88c9bec97d353474e5a19f715f380cdaba1075e6.png";
import imgVideo from "figma:asset/a2ea37e5190bf047324318b7618b78228d98c5a7.png";
import { Button, WhatsAppAnimIcon, PlayButton } from "../shared/Button";

interface ProductCardProps {
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  title: string;
  subtitle: string;
}

function ProductCard({ image, imageWidth, imageHeight, imageAlt, title, subtitle }: ProductCardProps) {
  return (
    <div
      className="relative inline-grid flex-shrink-0"
      style={{ gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}
    >
      <div
        className="bg-[#f2f2f2] border-2 border-white rounded-[44px] shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)] opacity-30"
        style={{ gridColumn: 1, gridRow: 1, width: "432px", height: "473px", marginTop: "96.9px", marginLeft: 0 }}
      />
      <div
        className="bg-[#f2f2f2] border-2 border-white rounded-[44px] shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)]"
        style={{ gridColumn: 1, gridRow: 1, width: "400px", height: "450px", marginTop: "108.9px", marginLeft: "16px" }}
      />
      <div
        className="flex flex-col items-center gap-3"
        style={{ gridColumn: 1, gridRow: 1, width: "311px", marginLeft: "75px", marginTop: 0 }}
      >
        <div style={{ width: `${imageWidth}px`, height: `${imageHeight}px`, flexShrink: 0, position: "relative" }}>
          <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-center w-full gap-[19px]">
          <div className="flex flex-col items-center gap-[2px] text-center uppercase">
            <p
              className="font-['Montserrat',sans-serif] font-black text-black tracking-[0.8px]"
              style={{ fontSize: "clamp(1.2rem,1.67vw,2rem)", lineHeight: "1.3", width: "307px" }}
            >
              {title}
            </p>
            <p
              className="font-['Montserrat',sans-serif] font-normal text-black tracking-[1.2px]"
              style={{ fontSize: "clamp(0.9rem,1.09vw,1.3125rem)", lineHeight: "1.5", width: "367px" }}
            >
              {subtitle}
            </p>
          </div>
          <Button variant="whatsapp-yellow">
            <WhatsAppAnimIcon fill="black" />
            Peça Agora!
          </Button>
        </div>
      </div>
    </div>
  );
}

function PilsenHeading() {
  return (
    <div
      className="flex flex-col gap-[26px] items-start justify-center"
      style={{ transform: "rotate(-3deg) skewX(-3deg)", width: "738px" }}
    >
      <p
        className="font-['Montserrat',sans-serif] font-medium text-[#1a0e04] tracking-[1.56px] whitespace-nowrap"
        style={{ fontSize: "clamp(2rem,2.92vw,3.5rem)", lineHeight: "1.2" }}
      >
        Nosso Chope
      </p>
      <div style={{ display: "inline-block", transform: "skewX(0.29deg)" }}>
        <div className="relative bg-[#ffbd24] rounded-[10px] px-[30px] py-5">
          <p
            className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.8px] whitespace-nowrap"
            style={{ fontSize: "clamp(3rem,5vw,6rem)", lineHeight: "1" }}
          >
            PILSEN
          </p>
          <div
            className="absolute pointer-events-none rounded-[18px]"
            style={{ inset: "-8px", border: "8px solid white" }}
            aria-hidden
          />
        </div>
      </div>
      <p
        className="font-['Montserrat',sans-serif] font-medium text-[#1a0e04] tracking-[1.56px] whitespace-nowrap"
        style={{ fontSize: "clamp(2rem,2.92vw,3.5rem)", lineHeight: "1.2" }}
      >
        O sabor que une
      </p>
      <div className="relative" style={{ height: "clamp(3rem,5vw,6rem)" }}>
        <p
          className="font-['Montserrat',sans-serif] font-black text-[#171717] absolute"
          style={{ fontSize: "clamp(3rem,5vw,6rem)", lineHeight: "1", top: "5px" }}
        >
          A GALERA!
        </p>
        <p
          className="font-['Montserrat',sans-serif] font-black text-[#f2f2f2]"
          style={{ fontSize: "clamp(3rem,5vw,6rem)", lineHeight: "1" }}
        >
          A GALERA!
        </p>
      </div>
    </div>
  );
}

function PilsenTextRight() {
  return (
    <div className="flex flex-col gap-[14px] items-start" style={{ width: "422px" }}>
      <p
        className="font-['Montserrat',sans-serif] font-extrabold text-[#4a3728] leading-[1.47]"
        style={{ fontSize: "clamp(0.875rem,0.99vw,1.1875rem)" }}
      >
        Seja para o seu churrasco com a galera, o almoço de domingo em família ou para acompanhar o jogão na TV, somos a aposta certa.
      </p>
      <p
        className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] leading-[1.69]"
        style={{ fontSize: "1rem" }}
      >
        Do coração do Brasil,{" "}
        <strong className="font-bold">o Pilsen do Nosso Chope</strong>
        {" "}é um chope dourado e cristalino, leve e refrescante, com sabor equilibrado e amargor suave. Produzido com água pura de fontes minerais da Serra dos Orgãos e maltes importados selecionados.
      </p>
      <Button variant="whatsapp-yellow">
        <WhatsAppAnimIcon fill="black" />
        Peça Agora!
      </Button>
    </div>
  );
}

function PilsenProductDetail() {
  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: "800px", paddingTop: "50px" }}>
      <div className="relative w-full" style={{ height: "800px" }}>
        {/* Heading left */}
        <div className="absolute" style={{ left: "304px", top: "24px" }}>
          <PilsenHeading />
        </div>

        {/* Bottle center */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "-27px",
            transform: "translateX(-50%)",
            width: "375px",
            height: "782px",
          }}
        >
          <img src={img473Ml012} alt="Nosso Chope Pilsen" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Text right */}
        <div className="absolute" style={{ left: "1216px", top: "107px" }}>
          <PilsenTextRight />
        </div>

        {/* Dashed pointer line */}
        <div className="absolute pointer-events-none" style={{ left: "1036px", top: "115px" }}>
          <svg width="157" height="23" viewBox="0 0 157.277 22.4682" fill="none">
            <line stroke="#737373" strokeDasharray="2 2" x2="146.043" y1="10.734" y2="10.734" />
            <ellipse cx="146.043" cy="11.234" fill="#FFBD24" rx="11.234" ry="11.234" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductsSubsection() {
  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: "2044px" }}>
      {/* Title area */}
      <div className="absolute" style={{ left: "250px", top: "252px" }}>
        <div className="flex flex-col gap-2">
          <p
            className="font-['Montserrat',sans-serif] font-black text-white uppercase tracking-[1.2px]"
            style={{ fontSize: "clamp(2.5rem,3.75vw,4.5rem)", lineHeight: "1.33", width: "710px" }}
          >
            Mais opções, mais sabor
          </p>
          <div style={{ transform: "rotate(-2.32deg) skewX(0.29deg)", display: "inline-block" }}>
            <div className="relative bg-[#fafafa] rounded-[10px] px-5 py-5">
              <p
                className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[1px] whitespace-nowrap"
                style={{ fontSize: "clamp(2.5rem,3.75vw,4.5rem)", lineHeight: "1" }}
              >
                mais encontros
              </p>
              <div
                className="absolute pointer-events-none rounded-[18px]"
                style={{ inset: "-8px", border: "8px solid #ffbd24" }}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product cards */}
      <div
        className="absolute flex items-center gap-[50px]"
        style={{ left: "50%", transform: "translateX(-50%)", top: "497px" }}
      >
        <ProductCard
          image={imgLongNeckGarrafaBranca1}
          imageWidth={127}
          imageHeight={358}
          imageAlt="Long Neck Garrafa Branca"
          title="Lager Premium"
          subtitle="Long Neck 473ml"
        />
        <ProductCard
          image={img473Ml012}
          imageWidth={173}
          imageHeight={359}
          imageAlt="Lata 350ml"
          title="puro malte"
          subtitle="lata 350ml"
        />
        <ProductCard
          image={imgGarrafaPilsen901}
          imageWidth={162}
          imageHeight={357}
          imageAlt="PET 1.5L"
          title="puro malte"
          subtitle="pet 1,5l"
        />
      </div>

      {/* Video area */}
      <div
        className="absolute left-0 right-0 overflow-hidden"
        style={{ top: "1215px", height: "829px" }}
      >
        <img src={imgVideo} alt="Vídeo Nosso Chope" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: "33px" }}>
          <PlayButton size={124} borderColor="white">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
              <path d="M21 16L38 27L21 38V16Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </PlayButton>
        </div>
      </div>
    </div>
  );
}

export function PilsenSection() {
  return (
    <section className="w-full overflow-hidden bg-[#ffbd24]">
      <PilsenProductDetail />
      <ProductsSubsection />
    </section>
  );
}
