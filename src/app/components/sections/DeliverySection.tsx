import imgSectionDelivery from "figma:asset/0cc732f52dd74a50b412d44de7015893678ade2e.png";
import imgChopeiraNossochope1 from "figma:asset/5eec9c6fb1145ae27471863a01cc006899493f97.png";
import { Button, ButtonLink, WhatsAppAnimIcon, PlayButton } from "../shared/Button";
import { gridBase } from "../code/constants";
import { ScrollFadeIn } from "../animations/ScrollFadeIn";
import { ScrollParallax } from "../animations/ScrollParallax";

function EventTitle() {
  return (
    <div className="relative inline-grid place-items-start flex-shrink-0 grid-cols-[max-content] grid-rows-[max-content]">
      <ScrollFadeIn direction="left"
        className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.075rem] col-start-1 row-start-1 text-[clamp(2.5rem,3.75vw,4.5rem)] leading-[1.08] w-[44.375rem] max-2xl:w-auto"
      >
        <p className="mb-[0.25rem]">Tenha o</p>
        <p>nosso chope</p>
      </ScrollFadeIn>
      <ScrollFadeIn direction="left"
        className="flex items-center justify-center col-start-1 row-start-1 mt-[9.1875rem] rotate-[-2.32deg] skew-x-[0.29deg]"
      >
        <div className="relative bg-[#171717] flex items-center justify-center overflow-hidden px-[1.25rem] py-[1.25rem] rounded-[0.625rem]">
          <p
            className="font-['Montserrat',sans-serif] font-black text-[#ffbd24] uppercase tracking-[0.0625rem] whitespace-nowrap text-[clamp(2.5rem,3.75vw,4.5rem)] leading-none"
          >
            no seu evento
          </p>
        </div>
      </ScrollFadeIn>
    </div>
  );
}

export function DeliverySection() {
  return (
    <div id="delivery" className="grid grid-cols-[12] grid-rows-[auto] relative gap-[1rem]">

      {/* Chopeira image — right side */}
      <ScrollFadeIn direction="up"
        className="col-[8_/_13] row-[1_/_-1] pointer-events-none z-10 self-end relative bottom-[-1rem] right-[-6rem] max-2xl:right-[-2rem]"
      >
        <ScrollParallax speed={-5}>
          <img
            src={imgChopeiraNossochope1}
            alt="Chopeira Nosso Chope"
            className=""
          />
        </ScrollParallax>
      </ScrollFadeIn>
      <section
        className={`${gridBase} col-[1_/_span_12] row-[1_/_-1] relative w-full overflow-hidden h-[61.6875rem] max-2xl:h-[46rem] pt-[4.875rem] pb-[9.375rem] max-2xl:pb-[6rem]`}
      >

        {/* Image BG */}
        <ScrollParallax speed={20} className="absolute inset-0 w-full h-full pointer-events-none scale-[1.1]">
          <img
            src={imgSectionDelivery}
            alt="bg fundo Rio de janeiro praia"
            className="absolute inset-0 w-full h-full object-cover scale-[1.2]"
          />
        </ScrollParallax>

        {/* Left content */}
        <ScrollParallax speed={-10}
          className="col-[1_/_span_6] row-[1_/_-1] relative flex flex-col gap-[2.75rem] items-start justify-center"
        >
          <EventTitle />

          <ScrollFadeIn direction="left" className="flex flex-col items-start justify-center">
            <div
              className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[1.3125rem] leading-none"
            >
              <p className="leading-[1.14] mb-[0.25rem]">
                <strong className="font-bold">Reserve agora sua chopeira</strong>
                {" "}e garanta o sabor inigualável do melhor chope do Rio na sua festa.
              </p>
              <p className="leading-[1.14]"></p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="flex items-center gap-[0.875rem]">
            <ButtonLink
              variant="whatsapp-yellow"
              href="https://api.whatsapp.com/send?phone=+5521996533939&text=Gostaria+de+saber+mais+informa%C3%A7%C3%B5es!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppAnimIcon fill="black" />
              Peça Agora!
            </ButtonLink>
            <ButtonLink
              variant="whatsapp-dark"
              href="https://api.whatsapp.com/send?phone=+5521996533939&text=Gostaria+de+saber+mais+informa%C3%A7%C3%B5es!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppAnimIcon fill="#FFBD24" />
              Peça Agora!
            </ButtonLink>
            {/* Play button */}
            <div className="z-[1] ml-[2rem] max-2xl:ml-[1rem]">
              <PlayButton size={84} borderColor="#ffbd24">
                <svg width="40" height="40" viewBox="0 0 54 54" fill="none">
                  <path d="M19 14L39 27L19 40V14Z" fill="#FFBD24" stroke="#FFBD24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </PlayButton>
            </div>
          </ScrollFadeIn>
        </ScrollParallax>
      </section >
    </div >
  );
}
