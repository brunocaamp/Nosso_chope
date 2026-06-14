import imgLongNeckGarrafaBranca1 from "figma:asset/063066d208c61f9dc3be1e5900cf7c07ccd6d1dd.png";
import img473Ml012 from "figma:asset/ff3127b4ddec9e40fab3d04ddd2b2a69c331f558.png";
import imgGarrafaPilsen901 from "figma:asset/88c9bec97d353474e5a19f715f380cdaba1075e6.png";
import imgVideo from "figma:asset/a2ea37e5190bf047324318b7618b78228d98c5a7.png";
import { Button, WhatsAppAnimIcon, PlayButton } from "../shared/Button";
import { gridBase } from "../code/constants";

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
      className="relative inline-grid flex-shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start"
    >
      <div
        className="bg-[#f2f2f2] border-2 border-white rounded-[2.75rem] shadow-[0_0.75rem_1rem_-0.25rem_rgba(0,0,0,0.08),0_0.25rem_0.375rem_-0.125rem_rgba(0,0,0,0.03)] opacity-30 col-start-1 row-start-1 w-[27rem] h-[29.5625rem] mt-[6.05625rem] ml-0"
      />
      <div
        className="bg-[#f2f2f2] border-2 border-white rounded-[2.75rem] shadow-[0_0.75rem_1rem_-0.25rem_rgba(0,0,0,0.08),0_0.25rem_0.375rem_-0.125rem_rgba(0,0,0,0.03)] col-start-1 row-start-1 w-[25rem] h-[28.125rem] mt-[6.80625rem] ml-[1rem]"
      />
      <div
        className="flex flex-col items-center gap-3 col-start-1 row-start-1 w-[19.4375rem] ml-[4.6875rem] mt-0"
      >
        <div className="shrink-0 relative" style={{ width: `${imageWidth / 16}rem`, height: `${imageHeight / 16}rem` }}>
          <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-center w-full gap-[19px]">
          <div className="flex flex-col items-center gap-[2px] text-center uppercase">
            <p
              className="font-['Montserrat',sans-serif] font-black text-black tracking-[0.05rem] text-[clamp(1.2rem,1.67vw,2rem)] leading-[1.3] w-[19.1875rem]"
            >
              {title}
            </p>
            <p
              className="font-['Montserrat',sans-serif] font-normal text-black tracking-[0.075rem] text-[clamp(0.9rem,1.09vw,1.3125rem)] leading-[1.5] w-[22.9375rem]"
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
      className="flex flex-col gap-[1.625rem] items-start justify-center rotate-[-3deg] skew-x-[-3deg] w-[46.125rem]"
    >
      <p
        className="font-['Montserrat',sans-serif] font-medium text-[#1a0e04] tracking-[0.0975rem] whitespace-nowrap text-[clamp(2rem,2.92vw,3.5rem)] leading-[1.2]"
      >
        Nosso Chope
      </p>
      <div className="inline-block skew-x-[0.29deg]">
        <div className="relative bg-[#ffbd24] rounded-[0.625rem] px-[1.875rem] py-[1.25rem]">
          <p
            className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.05rem] whitespace-nowrap text-[clamp(3rem,5vw,6rem)] leading-none"
          >
            PILSEN
          </p>
          <div
            className="absolute pointer-events-none rounded-[1.125rem] inset-[-0.5rem] border-[0.5rem] border-white"
            aria-hidden
          />
        </div>
      </div>
      <p
        className="font-['Montserrat',sans-serif] font-medium text-[#1a0e04] tracking-[0.0975rem] whitespace-nowrap text-[clamp(2rem,2.92vw,3.5rem)] leading-[1.2]"
      >
        O sabor que une
      </p>
      <div className="relative h-[clamp(3rem,5vw,6rem)]">
        <p
          className="font-['Montserrat',sans-serif] font-black text-[#171717] absolute text-[clamp(3rem,5vw,6rem)] leading-none top-[0.3125rem]"
        >
          A GALERA!
        </p>
        <p
          className="font-['Montserrat',sans-serif] font-black text-[#f2f2f2] text-[clamp(3rem,5vw,6rem)] leading-none"
        >
          A GALERA!
        </p>
      </div>
    </div>
  );
}

function PilsenTextRight() {
  return (
    <div className="flex flex-col gap-[0.875rem] items-start w-[26.375rem]">
      <p
        className="font-['Montserrat',sans-serif] font-extrabold text-[#4a3728] leading-[1.47] text-[clamp(0.875rem,0.99vw,1.1875rem)]"
      >
        Seja para o seu churrasco com a galera, o almoço de domingo em família ou para acompanhar o jogão na TV, somos a aposta certa.
      </p>
      <p
        className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] leading-[1.69] text-[1rem]"
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
    <div className="relative w-full overflow-hidden min-h-[50rem] pt-[3.125rem]">
      <div className="relative w-full h-[50rem]">
        {/* Heading left */}
        <div className="absolute left-[19rem] top-[1.5rem]">
          <PilsenHeading />
        </div>

        {/* Bottle center */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[-1.6875rem] w-[23.4375rem] h-[48.875rem]"
        >
          <img src={img473Ml012} alt="Nosso Chope Pilsen" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Text right */}
        <div className="absolute left-[76rem] top-[6.6875rem]">
          <PilsenTextRight />
        </div>

        {/* Dashed pointer line */}
        <div className="absolute pointer-events-none left-[64.75rem] top-[7.1875rem]">
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
    <div className="relative w-full overflow-hidden min-h-[127.75rem]">
      {/* Title area */}
      <div className="absolute left-[15.625rem] top-[15.75rem]">
        <div className="flex flex-col gap-2">
          <p
            className="font-['Montserrat',sans-serif] font-black text-white uppercase tracking-[0.075rem] text-[clamp(2.5rem,3.75vw,4.5rem)] leading-[1.33] w-[44.375rem]"
          >
            Mais opções, mais sabor
          </p>
          <div className="rotate-[-2.32deg] skew-x-[0.29deg] inline-block">
            <div className="relative bg-[#fafafa] rounded-[0.625rem] px-[1.25rem] py-[1.25rem]">
              <p
                className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.0625rem] whitespace-nowrap text-[clamp(2.5rem,3.75vw,4.5rem)] leading-none"
              >
                mais encontros
              </p>
              <div
                className="absolute pointer-events-none rounded-[1.125rem] inset-[-0.5rem] border-[0.5rem] border-[#ffbd24]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product cards */}
      <div
        className="absolute flex items-center gap-[3.125rem] left-1/2 -translate-x-1/2 top-[31.0625rem]"
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
        className="absolute left-0 right-0 overflow-hidden top-[75.9375rem] h-[51.8125rem]"
      >
        <img src={imgVideo} alt="Vídeo Nosso Chope" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center pt-[2.0625rem]">
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
