import imgLongNeckGarrafaBranca1 from "figma:asset/063066d208c61f9dc3be1e5900cf7c07ccd6d1dd.png";
import img473Ml012 from "figma:asset/ff3127b4ddec9e40fab3d04ddd2b2a69c331f558.png";
import imgGarrafaPilsen901 from "figma:asset/88c9bec97d353474e5a19f715f380cdaba1075e6.png";
import { Button, WhatsAppAnimIcon } from "../shared/Button";
import { gridBase } from "../code/constants";
import { ScrollFadeIn } from "../animations/ScrollFadeIn";
import { ScrollParallax } from "../animations/ScrollParallax";

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
      className="group relative inline-grid flex-shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.02] cursor-pointer"
    >
      <div
        className="bg-[#f2f2f2] border-2 border-white rounded-[2.75rem] shadow-[0_0.75rem_1rem_-0.25rem_rgba(0,0,0,0.08),0_0.25rem_0.375rem_-0.125rem_rgba(0,0,0,0.03)] opacity-30 col-start-1 row-start-1 w-[27rem] h-[29.5625rem] mt-[6.05625rem] ml-0 transition-transform duration-500 group-hover:rotate-[-2deg]"
      />
      <div
        className="bg-[#f2f2f2] border-2 border-white rounded-[2.75rem] shadow-[0_0.75rem_1rem_-0.25rem_rgba(0,0,0,0.08),0_0.25rem_0.375rem_-0.125rem_rgba(0,0,0,0.03)] col-start-1 row-start-1 w-[25rem] h-[28.125rem] mt-[6.80625rem] ml-[1rem] transition-all duration-500 group-hover:rotate-[2deg] group-hover:shadow-[0_1rem_2rem_-0.5rem_rgba(0,0,0,0.15)]"
      />
      <div
        className="relative z-10 flex flex-col items-center gap-3 col-start-1 row-start-1 w-[19.4375rem] ml-[4.6875rem] mt-0"
      >
        <div className="shrink-0 relative transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 z-10" style={{ width: `${imageWidth / 16}rem`, height: `${imageHeight / 16}rem` }}>
          <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover drop-shadow-xl" />
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
      className="flex flex-col items-start rotate-[-3deg] skew-x-[-3deg]"
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
        className="font-['Montserrat',sans-serif] font-medium text-[#1a0e04] tracking-[0.0975rem] whitespace-nowrap text-[clamp(2.8rem,3.2vw,4.2rem)] leading-[1.2]"
      >
        O sabor que une
      </p>
      <div className="relative h-[clamp(3rem,5vw,6rem)]">
        <p
          className="textBox__title2 font-['Montserrat',sans-serif] text-[clamp(4.5rem,6vw,6.5rem)]/[clamp(4.5rem,6.3vw,6.5rem)]"
          id="a-galera"
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
    <div className={`${gridBase} relative w-full overflow-hidden min-h-[50rem] pt-[3.125rem] z-2`}>

      {/* Heading left */}
      <ScrollParallax speed={-5} className="col-[1_/_7] row-[1_/_-1] z-10">
        <ScrollFadeIn direction="up" className="mt-[4rem] ">
          <PilsenHeading />
        </ScrollFadeIn>
      </ScrollParallax>


      {/* Bottle center */}
      <ScrollFadeIn
        direction="up"
        delay={0.4}
        className="col-[5_/_9] row-[1_/_-1] h-[48.875rem] justify-items-center z-5"
      >
        <img src={img473Ml012} alt="Nosso Chope Pilsen Lata" className="h-full object-cover" />
      </ScrollFadeIn>

      {/* Dashed pointer line */}
      <ScrollParallax speed={-5} className="col-[7_/_span_3] row-[1_/_-1] z-0">
        <ScrollFadeIn direction="up" delay={0.6} className="mt-[4rem] ml-[4rem]">
          <svg width="157" height="23" viewBox="0 0 157.277 22.4682" fill="none">
            <line stroke="#737373" strokeDasharray="2 2" x2="146.043" y1="10.734" y2="10.734" />
            <ellipse cx="146.043" cy="11.234" fill="#FFBD24" rx="11.234" ry="11.234" />
          </svg>
        </ScrollFadeIn>
      </ScrollParallax>

      {/* Text right */}
      <ScrollFadeIn speed={-5} className="col-[9_/-1] row-[1_/_-1]">
        <ScrollFadeIn direction="up" delay={0.6} className=" mt-[4rem]">
          <PilsenTextRight />
        </ScrollFadeIn>
      </ScrollFadeIn>

      <div className="w-full min-h-[19vh] absolute bottom-[-1rem] z-0 bg-[#ffbd24]"></div>



    </div>
  );
}

function ProductsSubsection() {
  return (
    <div className={`${gridBase} grid-rows-[auto_auto] relative w-full overflow-hidden pt-[10rem] pb-[15rem] bg-[#ffbd24] z-1 gap-6`}>
      {/* Title area */}
      <div className="col-[1_/_8] row-[1_/_1]">
        <div className="flex flex-col space-y-[-1.0625rem]">
          <p
            className="font-['Montserrat',sans-serif] font-black text-white uppercase tracking-[0.075rem] text-[clamp(2.5rem,3.75vw,4.5rem)] leading-[1.33] w-[44.375rem]"
          >
            Mais opções, mais sabor
          </p>
          <div className="rotate-[-2.32deg] skew-x-[0.29deg] inline-block">
            <div className="relative bg-[#fafafa] rounded-[0.625rem] px-[1.25rem] py-[1.5rem] ">
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
        className="col-[1_/_12] row-[2_/_2] flex items-center gap-[3.125rem] "
      >
        <ScrollFadeIn direction="up" delay={0.2}>
          <ProductCard
            image={imgLongNeckGarrafaBranca1}
            imageWidth={127}
            imageHeight={358}
            imageAlt="Long Neck Garrafa Branca"
            title="Lager Premium"
            subtitle="Long Neck 473ml"
          />
        </ScrollFadeIn>
        <ScrollFadeIn direction="up" delay={0.4}>
          <ProductCard
            image={img473Ml012}
            imageWidth={173}
            imageHeight={359}
            imageAlt="Lata 350ml"
            title="puro malte"
            subtitle="lata 350ml"
          />
        </ScrollFadeIn>
        <ScrollFadeIn direction="up" delay={0.6}>
          <ProductCard
            image={imgGarrafaPilsen901}
            imageWidth={162}
            imageHeight={357}
            imageAlt="PET 1.5L"
            title="puro malte"
            subtitle="pet 1,5l"
          />
        </ScrollFadeIn>
      </div>
    </div>
  );
}

export function PilsenSection() {
  return (
    <section className="w-full overflow-hidden">
      <PilsenProductDetail />
      <ProductsSubsection />
    </section>
  );
}
