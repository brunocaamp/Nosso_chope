import imgLatas11 from "figma:asset/3f8664472e0e1a05d1fa209ad41a3ec2ab8bbb12.png";
import { TrendingUpIcon } from "../shared/icons";
import { Button, InstagramAnimIcon } from "../shared/Button";
import { gridBase } from "../code/constants";
import { SocialCardsReveal } from "../animations/SocialCardsReveal";
import videoChope1 from "../../../assets/nossochopevid1.mp4";

/* ─── Cards de vídeo ───────────────────────────────────────────────────── */

/**
 * Configuração dos cards. Para adicionar/trocar vídeos no futuro,
 * basta alterar o `videoSrc` de cada entrada.
 */
const SOCIAL_CARDS = [
  { videoSrc: videoChope1, rotation: -6.5 },
  { videoSrc: videoChope1, rotation: 3.2 },
  { videoSrc: videoChope1, rotation: 8.0 },
  { videoSrc: videoChope1, rotation: -4.5 },
  { videoSrc: videoChope1, rotation: 5.5 },
  { videoSrc: videoChope1, rotation: -9.0 },
];

function SocialTitle() {
  return (
    <div className="col-[1_/_-1] row-span-1 relative w-full flex flex-col items-center pt-[1.6875rem]">
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
      className="backdrop-blur-[0.375rem] flex gap-[2.125rem] items-start px-[1.25rem] py-[2.5rem] rounded-[1.25rem] bg-white/60 mt-[5rem] border border-[#f2f2f2]"
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

    <img src={imgLatas11} alt="Latas Nosso Chope" className="col-[1_/_span_9] row-[1_/_-1]" />

  );
}

function FloatingLabels() {
  return (
    <>

      <p
        className="bg-[#171717] rotate-[-7deg] skew-x-[-7deg] font-['Montserrat',sans-serif] font-medium text-white uppercase tracking-[0.075rem] px-[1.875rem] py-[0.625rem] rounded-[0.625rem]  whitespace-nowrap text-[clamp(2.5rem,4.06vw,4.875rem)]/[clamp(2.5rem,4.06vw,4.875rem)] leading-[1.1] shadow-[0.0625rem_0.0625rem_0px_0px_black]"
      >
        é tudo
      </p>

      <p
        className="mt-[-1.3rem] ml-[3rem] bg-[#ffbd24] shadow-[0.25rem_0.25rem_0px_0px_black] px-[1.875rem] py-[0.625rem] rounded-[0.625rem] rotate-[-7deg] skew-x-[-7deg] font-['Montserrat',sans-serif] font-black text-black uppercase tracking-[0.075rem] whitespace-nowrap text-[clamp(2.5rem,4.06vw,4.875rem)]/[clamp(2.5rem,4.06vw,4.875rem)] "
      >
        nosso!
      </p>


    </>
  );
}

function InstagramButton() {
  return (
    <div
      className="col-[1_/_-1] row-span-1 flex items-center justify-center"
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
      className={`${gridBase} relative w-full overflow-hidden bg-gradient-to-b from-white to-[#f2f2f2] pb-[11.25rem] `}
    >

      <SocialTitle />
      <SocialCardsReveal cards={SOCIAL_CARDS} />
      <InstagramButton />
      <div className={`grid-cols-12 grid col-[1_/_-1] row-span-1 pt-[14rem]`}>
        <CansBanner />
        <div className="col-[8_/_12] flex flex-col gap-4 items-start row-[1_/_-1] mt-[4rem]">
          <FloatingLabels />
          <TrajectoryBox />
        </div>
      </div>

    </section>
  );
}
