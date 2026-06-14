import imgImagem from "figma:asset/a9681d8b276a141e525ef952d6015a2c672b4e07.png";
import imgImage5 from "figma:asset/b3200e5bdec36f9c3876a5facc8a13c6cbf8df27.png";
import imgAssaiLogo from "figma:asset/0dc0127cfe32b13e632cd33260374726629b23d8.png";
import { LocationIcon, ArrowRightIcon } from "../shared/icons";
import { Button, ArrowAnimIcon, SmallButton } from "../shared/Button";
import { gridBase } from "../code/constants";

interface PartnerCardProps {
  name: string;
  logo: string;
}

function PartnerCard({ name, logo }: PartnerCardProps) {
  return (
    <div
      className="relative flex-shrink-0 rounded-[1rem] overflow-hidden bg-transparent w-[22.5625rem] h-[27rem] border border-[#f2f2f2] shadow-[0_0.25rem_1.5rem_0_rgba(26,14,4,0.1)]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={imgImagem} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(26,14,4,0.75)_0%,rgba(0,0,0,0)_55%)]"
        />
        <img
          src={imgImage5}
          alt={name}
          className="absolute object-cover left-[-5.0625rem] top-0 w-[48rem] h-[27rem]"
        />
      </div>

      {/* Logo badge */}
      <div
        className="absolute bg-white flex items-center justify-center rounded-full px-[0.625rem] left-[1.5625rem] top-[1.0625rem] w-[4.125rem] h-[4.125rem]"
      >
        <img src={logo} alt={name} className="w-[3.0625rem] h-[2.25rem] object-cover" />
      </div>

      {/* Bottom bar */}
      <div
        className="absolute left-0 right-0 flex items-center justify-between px-[1.25rem] py-[1.125rem] backdrop-blur-[0.625rem] bottom-0 h-[4.875rem] bg-[rgba(38,38,38,0.4)]"
      >
        <div className="flex items-center gap-2">
          <LocationIcon stroke="#FFBD24" size={25} />
          <span
            className="font-['Montserrat',sans-serif] font-extrabold text-[#ffbd24] uppercase tracking-[0.6px] whitespace-nowrap text-[1.125rem] leading-[1.33]"
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
    <section className="w-full bg-white flex flex-col items-center justify-center gap-[3.75rem] py-[9.375rem]">
      {/* Title */}
      <div className="flex flex-col items-center text-center gap-[0.875rem] px-[19.9375rem]">
        <p
          className="font-['Montserrat',sans-serif] font-extrabold text-[#1a0e04] uppercase tracking-[0.074375rem] whitespace-nowrap text-[clamp(2rem,3.33vw,4rem)] leading-none"
        >
          Onde encontrar
        </p>
        <p
          className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[1.125rem] leading-[1.42]"
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
      <div className="flex items-center justify-center gap-[2.75rem] px-[19.9375rem]">
        <div className="flex flex-col gap-[0.3125rem] text-center">
          <p
            className="font-['Montserrat',sans-serif] font-extrabold text-[#1a0e04] uppercase tracking-[0.074375rem] whitespace-nowrap text-[1.5rem] leading-[1.17]"
          >
            Seja um parceiro Nosso Chope
          </p>
          <p
            className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[1.125rem] leading-[1.33]"
          >
            Tenha o queridinho do Brasil em seu estabelecimento
          </p>
        </div>
        <div className="flex items-center gap-[0.875rem]">
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
