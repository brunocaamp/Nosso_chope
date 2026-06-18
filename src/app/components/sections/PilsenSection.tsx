import imgLongNeckGarrafaBranca1 from "figma:asset/063066d208c61f9dc3be1e5900cf7c07ccd6d1dd.png";
import img473Ml012 from "figma:asset/ff3127b4ddec9e40fab3d04ddd2b2a69c331f558.png";
import imgGarrafaPilsen901 from "figma:asset/88c9bec97d353474e5a19f715f380cdaba1075e6.png";
import { Button, ButtonLink, WhatsAppAnimIcon } from "../shared/Button";
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
  /** Optional width override for max-2xl breakpoint (in px). Falls back to imageWidth * 0.8 */
  imageWidth2xl?: number;
  /** Optional height override for max-2xl breakpoint (in px). Falls back to imageHeight * 0.8 */
  imageHeight2xl?: number;
}

function ProductCard({ image, imageWidth, imageHeight, imageAlt, title, subtitle, imageWidth2xl, imageHeight2xl }: ProductCardProps) {
  const w = `${imageWidth / 16}rem`;
  const h = `${imageHeight / 16}rem`;
  const w2xl = imageWidth2xl != null ? `${imageWidth2xl / 16}rem` : `calc(${w} * 0.8)`;
  const h2xl = imageHeight2xl != null ? `${imageHeight2xl / 16}rem` : `calc(${h} * 0.8)`;

  return (
    <div
      className="group relative inline-grid flex-shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.02] cursor-pointer"
    >
      <div
        className="bg-[#f2f2f2] border-2 border-white rounded-[2.75rem] shadow-[0_0.75rem_1rem_-0.25rem_rgba(0,0,0,0.08),0_0.25rem_0.375rem_-0.125rem_rgba(0,0,0,0.03)] opacity-30 col-start-1 row-start-1 w-[27rem] h-[29.5625rem] mt-[6.05625rem] ml-0 transition-transform duration-500 group-hover:rotate-[-2deg] max-2xl:w-[21.6rem] max-2xl:h-[23.65rem] max-2xl:mt-[4.85rem]"
      />
      <div
        className="bg-[#f2f2f2] border-2 border-white rounded-[2.75rem] shadow-[0_0.75rem_1rem_-0.25rem_rgba(0,0,0,0.08),0_0.25rem_0.375rem_-0.125rem_rgba(0,0,0,0.03)] col-start-1 row-start-1 w-[25rem] h-[28.125rem] mt-[6.80625rem] ml-[1rem] transition-all duration-500 group-hover:rotate-[2deg] group-hover:shadow-[0_1rem_2rem_-0.5rem_rgba(0,0,0,0.15)] max-2xl:w-[20rem] max-2xl:h-[22.5rem] max-2xl:mt-[5.4rem] max-2xl:ml-[0.8rem]"
      />
      <div
        className="relative z-10 flex flex-col items-center gap-3 col-start-1 row-start-1 w-[19.4375rem] ml-[4.6875rem] mt-0 max-2xl:w-[15.5rem] max-2xl:ml-[3.75rem] max-2xl:gap-2"
      >
        <div
          className="shrink-0 relative transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 z-10 max-2xl:[--current-img-w:var(--img-w-2xl)] max-2xl:[--current-img-h:var(--img-h-2xl)]"
          style={{ 
            "--img-w": w, 
            "--img-h": h, 
            "--img-w-2xl": w2xl, 
            "--img-h-2xl": h2xl,
            width: "var(--current-img-w, var(--img-w))",
            height: "var(--current-img-h, var(--img-h))"
          } as React.CSSProperties}
        >
          <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover drop-shadow-xl" />
        </div>
        <div className="flex flex-col items-center w-full gap-[19px] max-2xl:gap-[0.9rem]">
          <div className="flex flex-col items-center gap-[2px] text-center uppercase">
            <p
              className="font-['Montserrat',sans-serif] font-black text-black tracking-[0.05rem] text-[clamp(1.2rem,1.67vw,2rem)] leading-[1.3] w-[19.1875rem] max-2xl:w-full max-2xl:text-[1.3rem]"
            >
              {title}
            </p>
            <p
              className="font-['Montserrat',sans-serif] font-normal text-black tracking-[0.075rem] text-[clamp(0.9rem,1.09vw,1.3125rem)] leading-[1.5] w-[22.9375rem] max-2xl:w-full max-2xl:text-[0.9rem]"
            >
              {subtitle}
            </p>
          </div>
          <ButtonLink
            variant="whatsapp-yellow"
            href="https://api.whatsapp.com/send?phone=+5521996533939&text=Gostaria+de+saber+mais+informa%C3%A7%C3%B5es!"
            target="_blank"
            rel="noopener noreferrer"
            className="max-2xl:text-[0.85rem] max-2xl:px-[1.33rem] max-2xl:py-[0.58rem]"
          >
            <WhatsAppAnimIcon fill="black" />
            Peça Agora!
          </ButtonLink>
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
    <div className="flex flex-col gap-[0.875rem] items-start- w-[26.375rem] max-2xl:w-full">
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

function PilsenProductDetail() {
  return (
    <div className={`${gridBase} relative w-full overflow-hidden min-h-[50rem] max-2xl:min-h-[40rem] pt-[3.125rem] z-2`}>

      {/* Heading left */}
      <ScrollParallax speed={-8} className="col-[1_/_7] row-[1_/_-1] z-10">
        <ScrollFadeIn direction="up" className="mt-[7rem] ">
          <PilsenHeading />
        </ScrollFadeIn>
      </ScrollParallax>


      {/* Bottle center */}
      <ScrollFadeIn
        direction="up"
        delay={0.4}
        className="col-[5_/_9] row-[1_/_-1] h-[48.875rem] max-2xl:h-[38rem] justify-items-center z-5"
      >
        <img src={img473Ml012} alt="Nosso Chope Pilsen Lata" className="h-full object-cover" />
      </ScrollFadeIn>

      {/* Dashed pointer line */}
      <ScrollParallax speed={-8} className="col-[7_/_span_3] row-[1_/_-1] z-0">
        <ScrollFadeIn direction="up" delay={0.6} className="mt-[7rem] ml-[4rem]">
          <svg width="157" height="23" viewBox="0 0 157.277 22.4682" fill="none">
            <line stroke="#737373" strokeDasharray="2 2" x2="146.043" y1="10.734" y2="10.734" />
            <ellipse cx="146.043" cy="11.234" fill="#FFBD24" rx="11.234" ry="11.234" />
          </svg>
        </ScrollFadeIn>
      </ScrollParallax>

      {/* Text right */}
      <ScrollParallax speed={-8} className="col-[9_/-1] row-[1_/_-1]">
        <ScrollFadeIn direction="up" delay={0.6} className=" mt-[7rem]">
          <PilsenTextRight />
        </ScrollFadeIn>
      </ScrollParallax>

      <div className="w-full min-h-[19vh] absolute bottom-[-1rem] z-0 bg-[#ffbd24]"></div>



    </div>
  );
}

function ProductsSubsection() {
  return (
    <div className={`${gridBase} grid-rows-[auto_auto] relative w-full overflow-hidden pt-[10rem] bg-[#ffbd24] z-1 gap-6 max-2xl:pt-[6rem]`}>
      {/* Title area */}
      <div className="col-[1_/_8] row-[1_/_1]">
        <div className="flex flex-col space-y-[-1.0625rem] items-start max-2xl:space-y-[-0.5rem]">
          <p
            className="font-['Montserrat',sans-serif] font-black text-white uppercase tracking-[0.075rem] text-[clamp(2.5rem,3.75vw,4.5rem)] leading-[1.33] w-[44.375rem] max-2xl:w-auto"
          >
            Mais opções,<br /> mais sabor
          </p>
          <div className="rotate-[-2.32deg] skew-x-[0.29deg]">
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
      <ScrollParallax speed={15}
        className="col-[1_/_-1] row-[2_/_2] flex items-center justify-between gap-[3.125rem] mt-[-4rem] max-2xl:gap-[1.5rem]"
      >
        {/* <ScrollFadeIn direction="up" delay={0.2}> */}
        <ProductCard
          image={imgLongNeckGarrafaBranca1}
          imageWidth={127}
          imageHeight={358}
          imageWidth2xl={89}
          imageHeight2xl={174}
          imageAlt="Long Neck Garrafa Branca"
          title="Lager Premium"
          subtitle="Long Neck 473ml"
        />
        {/* </ScrollFadeIn> */}
        {/* <ScrollFadeIn direction="up" delay={0.4}> */}
        <ProductCard
          image={img473Ml012}
          imageWidth={173}
          imageHeight={359}
          imageWidth2xl={121}
          imageHeight2xl={251}
          imageAlt="Lata 350ml"
          title="puro malte"
          subtitle="lata 350ml"
        />
        {/* </ScrollFadeIn> */}
        {/* <ScrollFadeIn direction="up" delay={0.6}> */}
        <ProductCard
          image={imgGarrafaPilsen901}
          imageWidth={162}
          imageHeight={357}
          imageWidth2xl={113}
          imageHeight2xl={250}
          imageAlt="PET 1.5L"
          title="puro malte"
          subtitle="pet 1,5l"

        />
        {/* </ScrollFadeIn> */}
      </ScrollParallax>
    </div >
  );
}

export function PilsenSection() {
  return (
    <section id="pilsen" className="w-full overflow-hidden">
      <PilsenProductDetail />
      <ProductsSubsection />
    </section>
  );
}
