import imgSectionDelivery from "figma:asset/0cc732f52dd74a50b412d44de7015893678ade2e.png";
import imgChopeiraNossochope1 from "figma:asset/5eec9c6fb1145ae27471863a01cc006899493f97.png";
import { Button, WhatsAppAnimIcon, PlayButton } from "../shared/Button";
import { gridBase } from "../code/constants";

function EventTitle() {
  return (
    <div className="relative inline-grid place-items-start flex-shrink-0 grid-cols-[max-content] grid-rows-[max-content]">
      <div
        className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.075rem] col-start-1 row-start-1 text-[clamp(2.5rem,3.75vw,4.5rem)] leading-[1.08] w-[44.375rem]"
      >
        <p className="mb-[0.25rem]">Tenha o</p>
        <p>nosso chope</p>
      </div>
      <div
        className="flex items-center justify-center col-start-1 row-start-1 mt-[9.1875rem] rotate-[-2.32deg] skew-x-[0.29deg]"
      >
        <div className="relative bg-[#171717] flex items-center justify-center overflow-hidden px-[1.25rem] py-[1.25rem] rounded-[0.625rem]">
          <p
            className="font-['Montserrat',sans-serif] font-black text-[#ffbd24] uppercase tracking-[0.0625rem] whitespace-nowrap text-[clamp(2.5rem,3.75vw,4.5rem)] leading-none"
          >
            no seu evento
          </p>
        </div>
      </div>
    </div>
  );
}

export function DeliverySection() {
  return (
    <section
      className={`${gridBase} relative w-full overflow-hidden h-[61.6875rem] pt-[4.875rem] pb-[9.375rem] bg-[image:var(--bg-image-desktop-lg)] bg-cover bg-center`}
      style={{
              '--bg-image-desktop-lg': `url(${imgSectionDelivery})`,
            } as React.CSSProperties}>    
      

      {/* Left content */}
      <div
        className="col-[1_/_span_6] row-[1_/_-1] relative flex flex-col gap-[2.75rem] items-start justify-center"
      >
        <EventTitle />

        <div className="flex flex-col items-start justify-center">
          <div
            className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[1.3125rem] leading-none"
          >
            <p className="leading-[1.14] mb-[0.25rem]">
              <strong className="font-bold">Reserve agora sua chopeira</strong>
              {" "}e garanta o sabor inigualável
            </p>
            <p className="leading-[1.14]">do melhor chope do Rio na sua festa.</p>
          </div>
        </div>

        <div className="flex items-center gap-[0.875rem]">
          <Button variant="whatsapp-yellow">
            <WhatsAppAnimIcon fill="black" />
            Peça Agora!
          </Button>
          <Button variant="whatsapp-dark">
            <WhatsAppAnimIcon fill="#FFBD24" />
            Peça Agora!
          </Button>
          {/* Play button */}
          <div className="z-[1] ml-[2rem]">
            <PlayButton size={84} borderColor="#ffbd24">
              <svg width="40" height="40" viewBox="0 0 54 54" fill="none">
                <path d="M19 14L39 27L19 40V14Z" fill="#FFBD24" stroke="#FFBD24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </PlayButton>
          </div>
        </div>
      </div>

      {/* Chopeira image — right side */}
      <div
        className="absolute pointer-events-none left-[47.1875rem] top-[8.625rem] w-[85rem] h-[55.375rem]"
      >
        <img
          src={imgChopeiraNossochope1}
          alt="Chopeira Nosso Chope"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      
    </section>
  );
}
