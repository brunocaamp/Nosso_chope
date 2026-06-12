import imgImagem from "figma:asset/a9681d8b276a141e525ef952d6015a2c672b4e07.png";
import imgImage5 from "figma:asset/b3200e5bdec36f9c3876a5facc8a13c6cbf8df27.png";
import imgAssaiLogo from "figma:asset/0dc0127cfe32b13e632cd33260374726629b23d8.png";
import { LocationIcon, ArrowRightIcon } from "../shared/icons";
import { Button, ArrowAnimIcon, SmallButton } from "../shared/Button";

interface PartnerCardProps {
  name: string;
  logo: string;
}

function PartnerCard({ name, logo }: PartnerCardProps) {
  return (
    <div
      className="relative flex-shrink-0 rounded-[16px] overflow-hidden bg-transparent"
      style={{
        width: "361px",
        height: "432px",
        border: "1px solid #f2f2f2",
        boxShadow: "0px 4px 24px 0px rgba(26,14,4,0.1)",
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={imgImagem} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(26,14,4,0.75) 0%, rgba(0,0,0,0) 55%)" }}
        />
        <img
          src={imgImage5}
          alt={name}
          className="absolute object-cover"
          style={{ left: "-81px", top: 0, width: "768px", height: "432px" }}
        />
      </div>

      {/* Logo badge */}
      <div
        className="absolute bg-white flex items-center justify-center rounded-[50px] px-[10px]"
        style={{ left: "25px", top: "17px", width: "66px", height: "66px" }}
      >
        <img src={logo} alt={name} style={{ width: "49px", height: "36px", objectFit: "cover" }} />
      </div>

      {/* Bottom bar */}
      <div
        className="absolute left-0 right-0 flex items-center justify-between px-5 py-[18px] backdrop-blur-[10px]"
        style={{
          bottom: 0,
          height: "78px",
          backgroundColor: "rgba(38,38,38,0.4)",
        }}
      >
        <div className="flex items-center gap-2">
          <LocationIcon stroke="#FFBD24" size={25} />
          <span
            className="font-['Montserrat',sans-serif] font-extrabold text-[#ffbd24] uppercase tracking-[0.6px] whitespace-nowrap"
            style={{ fontSize: "1.125rem", lineHeight: "1.33" }}
          >
            {name}
          </span>
        </div>
        <SmallButton>
          <ArrowRightIcon stroke="#FFBD24" size={16} />
        </SmallButton>
      </div>
    </div>
  );
}

const partners = [
  { name: "Assaí atacadista", logo: imgAssaiLogo },
  { name: "Royal", logo: imgAssaiLogo },
  { name: "Assaí atacadista", logo: imgAssaiLogo },
  { name: "Assaí atacadista", logo: imgAssaiLogo },
];

export function PartnersSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center gap-[60px] py-[150px]">
      {/* Title */}
      <div className="flex flex-col items-center text-center gap-[14px] px-[319px]">
        <p
          className="font-['Montserrat',sans-serif] font-extrabold text-[#1a0e04] uppercase tracking-[1.19px] whitespace-nowrap"
          style={{ fontSize: "clamp(2rem,3.33vw,4rem)", lineHeight: "1" }}
        >
          Onde encontrar
        </p>
        <p
          className="font-['Montserrat',sans-serif] font-normal text-[#4a3728]"
          style={{ fontSize: "1.125rem", lineHeight: "1.42" }}
        >
          Encontre o nosso chope nos melhores mercados e estabelecimento!
        </p>
      </div>

      {/* Cards row */}
      <div className="flex items-center justify-center gap-6">
        {partners.map((partner, i) => (
          <PartnerCard key={i} name={partner.name} logo={partner.logo} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex items-center justify-center gap-[44px] px-[319px]">
        <div className="flex flex-col gap-[5px] text-center">
          <p
            className="font-['Montserrat',sans-serif] font-extrabold text-[#1a0e04] uppercase tracking-[1.19px] whitespace-nowrap"
            style={{ fontSize: "1.5rem", lineHeight: "1.17" }}
          >
            Seja um parceiro Nosso Chope
          </p>
          <p
            className="font-['Montserrat',sans-serif] font-normal text-[#4a3728]"
            style={{ fontSize: "1.125rem", lineHeight: "1.33" }}
          >
            Tenha o queridinho do Brasil em seu estabelecimento
          </p>
        </div>
        <div className="flex items-center gap-[14px]">
          <Button variant="arrow-yellow">
            <ArrowAnimIcon stroke="#171717" />
            Seja um parceiro
          </Button>
          <Button variant="arrow-dark">
            <ArrowAnimIcon stroke="#FAFAFA" />
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
}
