import svgPaths from "./svg-4z82zqaibu";
import imgPrancheta32 from "./6f63adec7cfe453cd371819abd4baadd4162da7a.png";
import imgLogoBlack1 from "./28767bfbb1c1d464e2df47c261ecdf49cd41fbdd.png";
import imgGarrafaPilsen1 from "./f084f04b43690f8b1c6d50c95bdaf5b8476aaa2e.png";
import imgRowImg21 from "./09badca205a6c6d82552e03d3900a77bbbe54536.png";

function Link() {
  return <div className="absolute h-[19.5px] left-[179.54px] top-[515.89px] w-[177.5px]" data-name="Link" />;
}

function Text() {
  return (
    <div className="bg-[#171717] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[10px]" data-name="text1">
      <p className="[word-break:break-word] font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[64px] relative shrink-0 text-[#fafafa] text-[64px] tracking-[0.8px] uppercase whitespace-nowrap">o puro malte</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#171717] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[10px]" data-name="text2">
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[50px] relative shrink-0 text-[#fafafa] text-[48px] tracking-[0.8px] uppercase whitespace-nowrap">que está conquistando</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#171717] content-stretch flex items-center justify-center overflow-clip px-[30px] py-[20px] relative rounded-[10px]" data-name="text3">
      <p className="[word-break:break-word] font-['Montserrat:Black',sans-serif] font-black leading-[96px] relative shrink-0 text-[#f2f2f2] text-[96px] tracking-[0.8px] uppercase whitespace-nowrap">o brasil!</p>
    </div>
  );
}

function TitleBox() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-center justify-center relative shrink-0 w-full" data-name="title_box">
      <div className="flex items-center justify-center relative shrink-0 w-[568.517px]">
        <div className="flex-none skew-x-[0.29deg]">
          <Text />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-[731.448px]">
        <div className="flex-none skew-x-[0.29deg]">
          <Text1 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-[586.677px]">
        <div className="flex-none skew-x-[0.29deg]">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Whatsapp() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="whatsapp">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="whatsapp">
          <path d={svgPaths.p1c760700} fill="var(--fill-0, #FFBD24)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0" data-name="btns">
      <div className="bg-[#171717] content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[11px] relative rounded-[30px] shrink-0 w-[192px]" data-name="brn_whats">
        <Whatsapp />
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[#ffbd24] text-[16px] tracking-[0.65px] whitespace-nowrap">Peça Agora!</p>
      </div>
      <div className="bg-[#fafafa] content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[11px] relative rounded-[30px] shrink-0" data-name="brn_whats">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-right-circle">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                <path d={svgPaths.p2c1b4e80} id="Icon" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[#171717] text-[16px] tracking-[0.65px] whitespace-nowrap">Conheça o Nosso Chope!</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(50%-0.26px)] top-[195.5px] w-[843.478px]">
      <TitleBox />
      <Btns />
    </div>
  );
}

function ContentBox() {
  return (
    <div className="h-[813px] relative shrink-0 w-[1920px]" data-name="content_box">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex h-[615.248px] items-center justify-center left-[248.58px] top-[129.62px] w-[388.005px]">
          <div className="flex-none rotate-[-15.67deg]">
            <div className="h-[570.875px] relative w-[242.846px]" data-name="Prancheta 3 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPrancheta32} />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[910.652px] items-center justify-center left-[-288px] top-[237.5px] w-[766.394px]">
          <div className="flex-none rotate-[-32.95deg]">
            <div className="blur-[7.5px] h-[850.676px] relative shadow-[10px_4px_24px_0px_rgba(0,0,0,0.25)] w-[361.871px]" data-name="Prancheta 3 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPrancheta32} />
            </div>
          </div>
        </div>
        <Link />
        <Frame1 />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="[word-break:break-word] bg-[#f2f2f2] content-stretch shadow-[0px_12px_8px_rgba(0,0,0,0.08),0px_4px_3px_rgba(0,0,0,0.03)] flex font-['Inter:Medium',sans-serif] font-medium gap-[32px] items-center justify-center leading-[19.5px] not-italic px-[40px] py-[20px] relative rounded-[40px] shrink-0 text-[#262626] text-[16px] whitespace-nowrap" data-name="menu">
      <p className="relative shrink-0">Início</p>
      <p className="relative shrink-0">Produtos</p>
      <p className="relative shrink-0">Delivery</p>
      <p className="relative shrink-0">Contato</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
            <path d={svgPaths.pef8c000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.15%_33.15%_33.51%_33.51%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.50001 7.50001">
            <path d={svgPaths.p38977f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.08%_27.04%_72.92%_72.92%]" data-name="Vector">
        <div className="absolute inset-[-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5075 1.5">
            <path d="M0.75 0.75H0.7575" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-[29.17%] right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75001 16.5">
            <path d={svgPaths.p2c7fea00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#f9cc0a] h-[34px] relative rounded-[4px] shrink-0 w-[110.713px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[18px] not-italic text-[#1a0e04] text-[12px] top-[7.8px] tracking-[0.36px] whitespace-nowrap">SAIBA MAIS</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] h-[34px] items-center relative shrink-0 w-[178.713px]" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute h-[120px] left-0 top-[2px] w-[1920px]" data-name="Navbar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[60px] relative size-full">
        <div className="h-[57px] relative shrink-0 w-[100px]" data-name="logo-black 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoBlack1} />
        </div>
        <Menu />
        <Container />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#ffd324] h-[880px] items-center justify-center pt-[64px] relative shrink-0 to-[#e9a402] w-[1920px]" data-name="Hero">
      <ContentBox />
      <Navbar />
      <div className="absolute flex h-[1074.946px] items-center justify-center left-[1150px] top-[113px] w-[674.614px]">
        <div className="flex-none rotate-[1.73deg]">
          <div className="h-[1056px] relative w-[643px]" data-name="garrafa-pilsen 1">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGarrafaPilsen1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImgBox() {
  return (
    <div className="h-[542px] overflow-clip relative rounded-[25px] shrink-0 w-[771px]" data-name="imgBox">
      <div className="absolute h-[591px] left-[-55px] top-[-16px] w-[833px]" data-name="row__img2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRowImg21} />
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="relative size-[25px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="star">
          <path d={svgPaths.p17169400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1() {
  return (
    <div className="relative size-[25px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="star">
          <path d={svgPaths.p17169400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star2() {
  return (
    <div className="relative size-[25px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="star">
          <path d={svgPaths.p17169400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star3() {
  return (
    <div className="relative size-[25px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="star">
          <path d={svgPaths.p17169400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star4() {
  return (
    <div className="relative size-[25px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="star">
          <path d={svgPaths.p17169400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#ffbd24] content-stretch flex gap-[10px] h-[58.004px] items-center justify-center overflow-clip px-[26px] py-[12px] relative rounded-[10px] w-[207.309px]">
      <div className="flex h-[25.079px] items-center justify-center relative shrink-0 w-[25.046px]">
        <div className="flex-none rotate-[-0.18deg] skew-x-[-0.29deg]">
          <Star />
        </div>
      </div>
      <div className="flex h-[25.079px] items-center justify-center relative shrink-0 w-[25.046px]">
        <div className="flex-none rotate-[-0.18deg] skew-x-[-0.29deg]">
          <Star1 />
        </div>
      </div>
      <div className="flex h-[25.079px] items-center justify-center relative shrink-0 w-[25.046px]">
        <div className="flex-none rotate-[-0.18deg] skew-x-[-0.29deg]">
          <Star2 />
        </div>
      </div>
      <div className="flex h-[25.079px] items-center justify-center relative shrink-0 w-[25.046px]">
        <div className="flex-none rotate-[-0.18deg] skew-x-[-0.29deg]">
          <Star3 />
        </div>
      </div>
      <div className="flex h-[25.079px] items-center justify-center relative shrink-0 w-[25.046px]">
        <div className="flex-none rotate-[-0.18deg] skew-x-[-0.29deg]">
          <Star4 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="[word-break:break-word] absolute font-['Montserrat:Black',sans-serif] font-black h-[59.725px] leading-[59.72px] left-0 text-[59.72px] top-[27.5px] w-[512px] whitespace-nowrap" data-name="Heading 2">
      <p className="absolute left-[-3px] text-[#171717] top-[3.36px]">NOSSO JEITO!</p>
      <p className="absolute left-[-5px] text-[#ffbd24] top-[-0.64px]">NOSSO JEITO!</p>
    </div>
  );
}

function Whatsapp1() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="whatsapp">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="whatsapp">
          <path d={svgPaths.p1c760700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextParagraph() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-0 top-[110.23px] w-[512px]" data-name="textParagraph">
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#4a3728] text-[16px] w-[min-content]">
        <span className="font-['Montserrat:Bold',sans-serif] font-bold leading-[27px]">Nosso Chope é puro malte, prático e fácil de encontrar.</span>
        <span className="leading-[27px]">{` Sem complicação, sem mistério. Só o prazer de abrir, servir e brindar. Nossa produção é feita com foco na qualidade e localmente em Angra dos Reis e Guapimirim. Você sabe exatamente a procedência do que está bebendo.`}</span>
      </p>
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[27px] min-w-full relative shrink-0 text-[#4a3728] text-[16px] w-[min-content]">O Nosso Chope é feito para reunir amigos, família e aqueles momentos inesquecíveis. Leve, refrescante e com aquele sabor de chope gelado de boteco que todo mundo ama.</p>
      <div className="bg-[#f9cc0a] content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[11px] relative rounded-[30px] shrink-0" data-name="brn_whats">
        <Whatsapp1 />
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[#1a0e04] text-[16px] tracking-[0.65px] whitespace-nowrap">Peça Agora!</p>
      </div>
    </div>
  );
}

function TextBox() {
  return (
    <div className="h-[392px] relative shrink-0 w-[569px]" data-name="textBox">
      <p className="[word-break:break-word] absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[19.5px] left-[-5px] text-[#1a0e04] text-[38px] top-[-7.4px] tracking-[1.56px] whitespace-nowrap">Chope de verdade do</p>
      <Heading />
      <TextParagraph />
    </div>
  );
}

function SecSobre() {
  return (
    <div className="content-stretch flex gap-[80px] items-center justify-center pb-[150px] pt-[200px] relative shrink-0 w-[1920px]" data-name="sec_sobre">
      <ImgBox />
      <div className="absolute flex h-[68.534px] items-center justify-center left-[329px] top-[723px] w-[209.713px]">
        <div className="flex-none rotate-[2.93deg] skew-x-[0.29deg]">
          <Frame />
        </div>
      </div>
      <TextBox />
    </div>
  );
}

export default function HeroSobre() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="hero + sobre">
      <Hero />
      <SecSobre />
    </div>
  );
}