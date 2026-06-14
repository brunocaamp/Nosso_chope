import imgVideo from "figma:asset/a2ea37e5190bf047324318b7618b78228d98c5a7.png";
import imgImage2 from "figma:asset/7eff3d5fe048c99ba5aa36c6259871d61b7abbe6.png";
import imgImage3 from "figma:asset/7ab1600c81408a09c57377587726c53aabf21673.png";
import imgImage4 from "figma:asset/cd1933ca1c816e35379879cae839da2703b15795.png";
import imgVideo1 from "figma:asset/74fd7388a9f46d566d9e3e769947ff27aee0f07a.png";
import imgLatas11 from "figma:asset/3f8664472e0e1a05d1fa209ad41a3ec2ab8bbb12.png";
import { TrendingUpIcon } from "../shared/icons";
import { Button, InstagramAnimIcon } from "../shared/Button";
import { gridBase } from "../code/constants";

interface SocialCardProps {
  bgImg: string;
  overlayImg?: string;
  rotation: number;
}

function SocialCard({ bgImg, overlayImg, rotation }: SocialCardProps) {
  return (
    <div
      className="relative flex-shrink-0 w-[14.0625rem] h-[25rem]"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="relative overflow-hidden rounded-[0.9375rem] w-full h-full bg-[#b7b7b7]">
        {/* Base video thumbnail */}
        <img
          src={bgImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-[1.125rem] w-[21.5rem] h-[38.1875rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        {/* Overlay image */}
        {overlayImg && (
          <div
            className="absolute inset-0 flex items-center justify-center left-[-0.5rem] top-[-0.5rem] w-[19.3125rem] h-[33.5rem]"
          >
            <img src={overlayImg} alt="" className="w-full h-full object-cover rotate-[0.79deg]" />
          </div>
        )}
      </div>
      {/* Card border + shadow */}
      <div
        className="absolute pointer-events-none rounded-[1.4375rem] inset-[-0.5rem] border-[0.5rem] border-[#f2f2f2] shadow-[0.625rem_1.25rem_2.6625rem_-0.25rem_rgba(0,0,0,0.3),_0_0.5rem_0.5rem_-0.25rem_rgba(217,223,32,0.12)]"
        aria-hidden
      />
    </div>
  );
}

function SocialCardsRow() {
  const cards = [
    { bgImg: imgVideo, overlayImg: imgImage4, rotation: -4.08 },
    { bgImg: imgVideo, overlayImg: undefined, rotation: 5.81 },
    { bgImg: imgVideo, overlayImg: imgImage2, rotation: 7.65 },
    { bgImg: imgVideo, overlayImg: undefined, rotation: -3.21 },
    { bgImg: imgVideo, overlayImg: imgImage3, rotation: -3.33 },
    { bgImg: imgVideo1, overlayImg: undefined, rotation: 9.2 },
  ];

  return (
    <div
      className="absolute flex items-center left-1/2 -translate-x-1/2 top-[21.5625rem] gap-[2.5rem]"
    >
      {cards.map((card, i) => (
        <SocialCard key={i} {...card} />
      ))}
    </div>
  );
}

function SocialTitle() {
  return (
    <div className="relative w-full flex flex-col items-center pt-[1.6875rem]">
      <p
        className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.075rem] text-center text-[clamp(2rem,2.5vw,3rem)] leading-[1.33] w-[49.6875rem]"
      >
        é beber uma vez pra
      </p>
      <div
        className="relative bg-[#ffbd24] rounded-[0.625rem] px-[1.25rem] py-[1.25rem] mt-[0.5rem] rotate-[-1.48deg] skew-x-[0.29deg]"
      >
        <p
          className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.0625rem] whitespace-nowrap text-[clamp(2.5rem,3.75vw,4.5rem)] leading-none"
        >
          se apaixonar
        </p>
        <div
          className="absolute pointer-events-none rounded-[1.125rem] inset-[-0.5rem] border-[0.5rem] border-white"
          aria-hidden
        />
      </div>
      <div className="flex flex-col items-center mt-4 text-center w-[49.6875rem]">
        <p className="font-['Montserrat',sans-serif] font-normal text-[#171717] text-[1.125rem] leading-[1.56]">
          Quem prova uma vez nunca mais larga,{" "}
        </p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[#171717] text-[1.125rem] leading-[1.56]">
          confira quem chega junto{" "}
          <strong className="font-bold">com o Nosso Chope.</strong>
        </p>
      </div>
    </div>
  );
}

function TrajectoryBox() {
  return (
    <div
      className="absolute backdrop-blur-[0.375rem] flex gap-[2.125rem] items-start px-[1.25rem] py-[2.5rem] rounded-[1.25rem] bg-white/60 left-[73.75rem] top-[101.375rem] w-[27.125rem] border border-[#f2f2f2]"
    >
      {/* Icon */}
      <div className="flex-shrink-0 flex items-center justify-center bg-[#ffbd24] rounded-[3.75rem] w-[4.875rem] h-[4.875rem]">
        <TrendingUpIcon stroke="#171717" size={55} />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-[0.625rem] text-black tracking-[0.040625rem]">
        <p className="font-['Montserrat',sans-serif] font-extrabold text-[1.3125rem] whitespace-nowrap leading-[1.2]">
          Trajetória
        </p>
        <div className="font-['Montserrat',sans-serif] font-normal text-[1rem] w-[18.25rem]">
          <p className="leading-[1.2] mb-0">O Nosso Chope não para!</p>
          <p className="leading-[1.2] mb-0">A família cresceu, mais rótulos, mais formatos, mais Brasil.</p>
          <p className="font-bold leading-[1.2] mb-0">Seja você um parceiro</p>
          <p className="font-bold leading-[1.2]">nosso chope!</p>
        </div>
      </div>
    </div>
  );
}

function CansBanner() {
  return (
    <div
      className="absolute pointer-events-none left-1/2 -translate-x-[9.34375rem] top-[81.25rem] w-[67.9375rem] h-[48.75rem]"
    >
      <img src={imgLatas11} alt="Latas Nosso Chope" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}

function FloatingLabels() {
  return (
    <>
      <div
        className="absolute left-[71.875rem] top-[83.25rem] rotate-[-7deg] skew-x-[-7deg] scale-y-[0.99]"
      >
        <div className="bg-[#171717] flex items-center justify-center overflow-hidden px-[1.875rem] py-[0.625rem] rounded-[0.625rem] shadow-[0.0625rem_0.0625rem_0px_0px_black]">
          <p
            className="font-['Montserrat',sans-serif] font-medium text-white uppercase tracking-[0.075rem] whitespace-nowrap text-[clamp(2.5rem,4.06vw,4.875rem)] leading-[1.1]"
          >
            é tudo
          </p>
        </div>
      </div>
      <div
        className="absolute left-[74.9375rem] top-[89.5rem] rotate-[-7deg] skew-x-[-7deg] scale-y-[0.99]"
      >
        <div
          className="flex items-center justify-center overflow-hidden px-[1.875rem] py-[0.625rem] rounded-[0.625rem] bg-[#ffbd24] shadow-[0.25rem_0.25rem_0px_0px_black]"
        >
          <p
            className="font-['Montserrat',sans-serif] font-black text-black uppercase tracking-[0.075rem] whitespace-nowrap text-[clamp(2.5rem,4.06vw,4.875rem)] leading-[1.1]"
          >
            nosso!
          </p>
        </div>
      </div>
    </>
  );
}

function InstagramButton() {
  return (
    <div
      className="absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-[52.75rem]"
    >
      <Button variant="instagram-cta" className="gap-[0.9375rem] py-[0.9375rem]">
        <InstagramAnimIcon stroke="#F9CC0A" />
        Veja mais no nosso Instagram!
      </Button>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section
      className="relative w-full overflow-hidden min-h-[143.25rem] bg-gradient-to-b from-white to-[#f2f2f2] py-[11.25rem]"
    >
      <div className="relative w-full h-[117.75rem]">
        <SocialTitle />
        <InstagramButton />
        <SocialCardsRow />
        <CansBanner />
        <FloatingLabels />
        <TrajectoryBox />
      </div>
    </section>
  );
}
