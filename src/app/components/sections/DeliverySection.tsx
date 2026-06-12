import imgSectionDelivery from "figma:asset/0cc732f52dd74a50b412d44de7015893678ade2e.png";
import imgChopeiraNossochope1 from "figma:asset/5eec9c6fb1145ae27471863a01cc006899493f97.png";
import { Button, WhatsAppAnimIcon, PlayButton } from "../shared/Button";

function EventTitle() {
  return (
    <div className="relative inline-grid place-items-start flex-shrink-0" style={{ gridTemplateColumns: "max-content", gridTemplateRows: "max-content" }}>
      <div
        className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[1.2px]"
        style={{ gridColumn: 1, gridRow: 1, fontSize: "clamp(2.5rem,3.75vw,4.5rem)", lineHeight: "1.08", width: "710px" }}
      >
        <p style={{ marginBottom: "4px" }}>Tenha o</p>
        <p>nosso chope</p>
      </div>
      <div
        className="flex items-center justify-center"
        style={{
          gridColumn: 1,
          gridRow: 1,
          marginTop: "147px",
          transform: "rotate(-2.32deg) skewX(0.29deg)",
        }}
      >
        <div className="relative bg-[#171717] flex items-center justify-center overflow-hidden px-5 py-5 rounded-[10px]">
          <p
            className="font-['Montserrat',sans-serif] font-black text-[#ffbd24] uppercase tracking-[1px] whitespace-nowrap"
            style={{ fontSize: "clamp(2.5rem,3.75vw,4.5rem)", lineHeight: "1" }}
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
      className="relative w-full overflow-hidden flex flex-col justify-center gap-[60px]"
      style={{ height: "987px", paddingTop: "78px", paddingBottom: "150px" }}
    >
      {/* Background image */}
      <img
        src={imgSectionDelivery}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Left content */}
      <div
        className="relative flex flex-col gap-[44px] items-start"
        style={{ paddingLeft: "319px", zIndex: 1 }}
      >
        <EventTitle />

        <div className="flex flex-col items-start justify-center">
          <div
            className="font-['Montserrat',sans-serif] font-normal text-[#4a3728]"
            style={{ fontSize: "1.3125rem", lineHeight: "0" }}
          >
            <p style={{ lineHeight: "1.14", marginBottom: "4px" }}>
              <strong className="font-bold">Reserve agora sua chopeira</strong>
              {" "}e garanta o sabor inigualável
            </p>
            <p style={{ lineHeight: "1.14" }}>do melhor chope do Rio na sua festa.</p>
          </div>
        </div>

        <div className="flex items-center gap-[14px]">
          <Button variant="whatsapp-yellow">
            <WhatsAppAnimIcon fill="black" />
            Peça Agora!
          </Button>
          <Button variant="whatsapp-dark">
            <WhatsAppAnimIcon fill="#FFBD24" />
            Peça Agora!
          </Button>
        </div>
      </div>

      {/* Chopeira image — right side */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "755px", top: "138px", width: "1360px", height: "886px" }}
      >
        <img
          src={imgChopeiraNossochope1}
          alt="Chopeira Nosso Chope"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Play button */}
      <div className="absolute" style={{ left: "755px", top: "637px", zIndex: 1 }}>
        <PlayButton size={84} borderColor="#ffbd24">
          <svg width="40" height="40" viewBox="0 0 54 54" fill="none">
            <path d="M19 14L39 27L19 40V14Z" fill="#FFBD24" stroke="#FFBD24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </PlayButton>
      </div>
    </section>
  );
}
