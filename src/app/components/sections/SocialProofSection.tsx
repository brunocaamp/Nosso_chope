import imgVideo from "figma:asset/a2ea37e5190bf047324318b7618b78228d98c5a7.png";
import imgImage2 from "figma:asset/7eff3d5fe048c99ba5aa36c6259871d61b7abbe6.png";
import imgImage3 from "figma:asset/7ab1600c81408a09c57377587726c53aabf21673.png";
import imgImage4 from "figma:asset/cd1933ca1c816e35379879cae839da2703b15795.png";
import imgVideo1 from "figma:asset/74fd7388a9f46d566d9e3e769947ff27aee0f07a.png";
import imgLatas11 from "figma:asset/3f8664472e0e1a05d1fa209ad41a3ec2ab8bbb12.png";
import { TrendingUpIcon } from "../shared/icons";
import { Button, InstagramAnimIcon } from "../shared/Button";

interface SocialCardProps {
  bgImg: string;
  overlayImg?: string;
  rotation: number;
}

function SocialCard({ bgImg, overlayImg, rotation }: SocialCardProps) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: "225px",
        height: "400px",
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="relative overflow-hidden rounded-[15px] w-full h-full bg-[#b7b7b7]">
        {/* Base video thumbnail */}
        <img
          src={bgImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-[18px]"
          style={{ width: "344px", height: "611px", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        />
        {/* Overlay image */}
        {overlayImg && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ left: "-8px", top: "-8px", width: "309px", height: "536px" }}
          >
            <img src={overlayImg} alt="" className="w-full h-full object-cover" style={{ transform: "rotate(0.79deg)" }} />
          </div>
        )}
      </div>
      {/* Card border + shadow */}
      <div
        className="absolute pointer-events-none rounded-[23px]"
        style={{
          inset: "-8px",
          border: "8px solid #f2f2f2",
          boxShadow: "10px 20px 42.6px -4px rgba(0,0,0,0.3), 0px 8px 8px -4px rgba(217,223,32,0.12)",
        }}
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
      className="absolute flex items-center"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        top: "345px",
        gap: "40px",
      }}
    >
      {cards.map((card, i) => (
        <SocialCard key={i} {...card} />
      ))}
    </div>
  );
}

function SocialTitle() {
  return (
    <div className="relative w-full flex flex-col items-center" style={{ paddingTop: "27px" }}>
      <p
        className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[1.2px] text-center"
        style={{ fontSize: "clamp(2rem,2.5vw,3rem)", lineHeight: "1.33", width: "795px" }}
      >
        é beber uma vez pra
      </p>
      <div
        className="relative bg-[#ffbd24] rounded-[10px] px-5 py-5 mt-2"
        style={{ transform: "rotate(-1.48deg) skewX(0.29deg)" }}
      >
        <p
          className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[1px] whitespace-nowrap"
          style={{ fontSize: "clamp(2.5rem,3.75vw,4.5rem)", lineHeight: "1" }}
        >
          se apaixonar
        </p>
        <div
          className="absolute pointer-events-none rounded-[18px]"
          style={{ inset: "-8px", border: "8px solid white" }}
          aria-hidden
        />
      </div>
      <div className="flex flex-col items-center mt-4 text-center" style={{ width: "795px" }}>
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
      className="absolute backdrop-blur-[6px] flex gap-[34px] items-start px-5 py-10 rounded-[20px]"
      style={{
        backgroundColor: "rgba(255,255,255,0.6)",
        left: "1180px",
        top: "1622px",
        width: "434px",
        border: "1px solid #f2f2f2",
      }}
    >
      {/* Icon */}
      <div className="flex-shrink-0 flex items-center justify-center bg-[#ffbd24] rounded-[60px]" style={{ width: "78px", height: "78px" }}>
        <TrendingUpIcon stroke="#171717" size={55} />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-[10px] text-black tracking-[0.65px]">
        <p className="font-['Montserrat',sans-serif] font-extrabold text-[1.3125rem] whitespace-nowrap leading-[1.2]">
          Trajetória
        </p>
        <div className="font-['Montserrat',sans-serif] font-normal text-[1rem]" style={{ width: "292px" }}>
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
      className="absolute pointer-events-none"
      style={{
        left: "50%",
        transform: "translateX(-149.5px)",
        top: "1300px",
        width: "1087px",
        height: "780px",
      }}
    >
      <img src={imgLatas11} alt="Latas Nosso Chope" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}

function FloatingLabels() {
  return (
    <>
      <div
        className="absolute"
        style={{ left: "1150px", top: "1332px", transform: "rotate(-7deg) skewX(-7deg) scaleY(0.99)" }}
      >
        <div className="bg-[#171717] flex items-center justify-center overflow-hidden px-[30px] py-[10px] rounded-[10px] shadow-[1px_1px_0px_0px_black]">
          <p
            className="font-['Montserrat',sans-serif] font-medium text-white uppercase tracking-[1.2px] whitespace-nowrap"
            style={{ fontSize: "clamp(2.5rem,4.06vw,4.875rem)", lineHeight: "1.1" }}
          >
            é tudo
          </p>
        </div>
      </div>
      <div
        className="absolute"
        style={{ left: "1199px", top: "1432px", transform: "rotate(-7deg) skewX(-7deg) scaleY(0.99)" }}
      >
        <div
          className="flex items-center justify-center overflow-hidden px-[30px] py-[10px] rounded-[10px]"
          style={{ backgroundColor: "#ffbd24", boxShadow: "4px 4px 0px 0px black" }}
        >
          <p
            className="font-['Montserrat',sans-serif] font-black text-black uppercase tracking-[1.2px] whitespace-nowrap"
            style={{ fontSize: "clamp(2.5rem,4.06vw,4.875rem)", lineHeight: "1.1" }}
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
      className="absolute flex items-center justify-center"
      style={{ left: "50%", transform: "translateX(-50%)", top: "844px" }}
    >
      <Button variant="instagram-cta" className="gap-[15px] py-[15px]">
        <InstagramAnimIcon stroke="#F9CC0A" />
        Veja mais no nosso Instagram!
      </Button>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "2292px",
        background: "linear-gradient(to bottom, #ffffff, #f2f2f2)",
        padding: "180px 0",
      }}
    >
      <div className="relative w-full" style={{ height: "1884px" }}>
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
