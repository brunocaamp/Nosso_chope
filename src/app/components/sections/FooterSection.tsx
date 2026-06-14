import img473Ml02Movimento11 from "figma:asset/09b7aacbe50bbe99751d69ced8f21b700e53cfd9.png";
import {
  FooterInstagramIcon,
  FooterFacebookIcon,
  FooterTwitterIcon,
  LogoDarkSvg,
  EmailIcon,
  PhoneFooterIcon,
} from "../shared/icons";
import { Button, WhatsAppAnimIcon, IconButton } from "../shared/Button";
import { gridBase } from "../code/constants";

function SocialHashtag() {
  return (
    <div className="relative w-full flex flex-col items-center py-[0.1875rem]">
      <p
        className="font-['Montserrat',sans-serif] font-extrabold text-white text-center uppercase tracking-[0.04rem] text-[clamp(4rem,6.04vw,7.25rem)] leading-none"
      >
        #étudonosso
      </p>
      <div className="flex items-center gap-3 mt-10">
        <IconButton
          size={54}
          bg="rgba(255,255,255,0.15)"
          shadow="hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
        >
          <FooterInstagramIcon stroke="#624E00" size={26} />
        </IconButton>
        <IconButton
          size={54}
          bg="rgba(255,255,255,0.15)"
          shadow="hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
        >
          <FooterFacebookIcon stroke="#624E00" size={26} />
        </IconButton>
        <IconButton
          size={54}
          bg="rgba(255,255,255,0.15)"
          shadow="hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
        >
          <FooterTwitterIcon stroke="#624E00" size={26} />
        </IconButton>
      </div>
    </div>
  );
}

function Navigation() {
  const links = ["Início", "Produtos", "Nosso Jeito", "Red Draft", "Parceiros"];
  return (
    <div className="flex flex-col gap-4 text-[#171717] w-[15.75rem]">
      <p className="font-['Montserrat',sans-serif] font-bold text-[1rem] tracking-[1.54px] uppercase leading-[1]">
        NAVEGAÇÃO
      </p>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <p key={link} className="font-['Montserrat',sans-serif] font-normal text-[1rem] leading-[1.22] cursor-pointer hover:text-[#1a0e04] transition-colors">
            {link}
          </p>
        ))}
      </div>
    </div>
  );
}

function LogoBlock() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <LogoDarkSvg width={178} height={100} />
      <p className="font-['Montserrat',sans-serif] font-normal text-[#171717] text-[1rem] leading-[1.46] w-[11.9375rem]">
        O puro malte que está conquistando o Brasil.
      </p>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 items-start w-[14.125rem]">
      <p className="font-['Inter',sans-serif] font-bold text-[#171717] text-[1rem] tracking-[0.09625rem] uppercase leading-[1]">
        CONTATO
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-[1.3125rem]">
          <div className="flex-shrink-0" style={{ width: "13px", height: "13px", marginTop: "3px" }}>
            <PhoneFooterIcon stroke="#171717" size={13} />
          </div>
          <p className="font-['Montserrat',sans-serif] font-normal text-[#171717] text-[1rem] whitespace-nowrap">
            (21) 9 9999-9999
          </p>
        </div>
        <div className="flex items-center gap-[1.3125rem]">
          <div className="flex-shrink-0 w-[0.8125rem] h-[0.8125rem] mt-[0.1875rem]">
            <EmailIcon stroke="#171717" size={13} />
          </div>
          <p className="font-['Montserrat',sans-serif] font-normal text-[#171717] text-[0.8125rem] whitespace-nowrap">
            contato@nossochope.com.br
          </p>
        </div>
      </div>
    </div>
  );
}

function ReserveBlock() {
  return (
    <div className="flex flex-col gap-4 items-start w-[15.75rem]">
      <p className="font-['Montserrat',sans-serif] font-bold text-[#171717] text-[1rem] tracking-[0.09625rem] uppercase leading-[1]">
        GARANTA O SEU
      </p>
      <p className="font-['Montserrat',sans-serif] font-normal text-[#171717] text-[1rem] leading-[1.46] w-[12.1875rem]">
        Faça sua pré-reserva
      </p>
      <Button variant="reserve-dark">
        <WhatsAppAnimIcon fill="white" />
        Reserve já
      </Button>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="relative flex flex-col gap-[5rem] items-center w-full px-[1.5rem] pt-[8.125rem]">
      {/* Social hashtag */}
      <SocialHashtag />

      {/* Main footer info */}
      <div className="flex items-start justify-between w-full max-w-[96.25rem]">
        {/* Left: logo + nav */}
        <div className="flex items-start gap-[6.25rem]">
          <LogoBlock />
          <Navigation />
        </div>
        {/* Right: contact + reserve */}
        <div className="flex items-start gap-[2.5rem]">
          <ContactInfo />
          <ReserveBlock />
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="flex flex-col gap-[1.875rem] items-start w-full max-w-[96.25rem] pt-[1.5rem]">
        <div className="w-full h-[1px] bg-white/50" />
        <div className="flex items-center justify-between w-full">
          <p className="font-['Montserrat',sans-serif] font-normal text-[#171717] text-[0.875rem] whitespace-nowrap">
            © 2024 Nosso Chope. Todos os direitos reservados.
          </p>
          <p className="font-['Inter',sans-serif] font-normal text-[#171717] text-[0.875rem] whitespace-nowrap">
            Bebida alcoólica. Proibida para menores de 18 anos. Beba com moderação.
          </p>
        </div>
      </div>

      {/* Decorative bottle in motion */}
      <div
        className="absolute pointer-events-none left-[15.75rem] top-[4.3125rem] w-[69.1875rem] h-[85rem] rotate-[-9.38deg] opacity-85"
      >
        <img
          src={img473Ml02Movimento11}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#ffd324] to-[#e9a402] min-h-[54.6875rem]"
    >
      <FooterContent />
    </footer>
  );
}
