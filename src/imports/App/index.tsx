import svgPaths from "./svg-1k804o003o";
import imgGarrafaPilsen1 from "./f084f04b43690f8b1c6d50c95bdaf5b8476aaa2e.png";
import imgLogoBlack1 from "./28767bfbb1c1d464e2df47c261ecdf49cd41fbdd.png";
import imgRowImg21 from "./09badca205a6c6d82552e03d3900a77bbbe54536.png";
import imgLongNeckGarrafaBranca1 from "./063066d208c61f9dc3be1e5900cf7c07ccd6d1dd.png";
import img473Ml012 from "./ff3127b4ddec9e40fab3d04ddd2b2a69c331f558.png";
import imgGarrafaPilsen901 from "./88c9bec97d353474e5a19f715f380cdaba1075e6.png";
import imgContainer from "./3b54e2872aa0cdb594369cd8f3e131a40be8217c.png";
import imgContainer1 from "./983c9101cae548ee54c8a053c311de81143670a6.png";
import imgContainer2 from "./0b6726bcf1dc28f7d765f2e58d84347f5949fcc6.png";
import imgContainer3 from "./a9681d8b276a141e525ef952d6015a2c672b4e07.png";

function HeroTitle() {
  return (
    <div className="absolute h-[353px] left-[357px] top-[105px] w-[769px]" data-name="hero title">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 769 353">
        <g clipPath="url(#clip0_2_528)" id="hero title">
          <path clipRule="evenodd" d={svgPaths.p14805900} fill="var(--fill-0, #262626)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p39783a80} fill="var(--fill-0, #262626)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p701d700} fill="var(--fill-0, #262626)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p21080200} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p130f280} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p179e2000} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_2_528">
            <rect fill="white" height="353" width="769" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return <div className="absolute h-[19.5px] left-[179.54px] top-[515.89px] w-[177.5px]" data-name="Link" />;
}

function BtnWhatsapp() {
  return (
    <div className="bg-[#25d366] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[25px] py-[15px] relative rounded-[30px] shrink-0" data-name="btn whatsapp">
      <div className="relative shrink-0 size-[21px]" data-name="whatsapp">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <path d={svgPaths.p64f7800} fill="var(--fill-0, white)" id="whatsapp" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">Compre Agora!</p>
    </div>
  );
}

function BtnConhecaONossoChope() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center justify-center overflow-clip px-[25px] py-[15px] relative rounded-[30px] shrink-0" data-name="btn conheça o Nosso Chope">
      <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#262626] text-[18px] text-center whitespace-nowrap">Conheça o Nosso Chope!</p>
    </div>
  );
}

function Botoes() {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative" data-name="Botões">
      <BtnWhatsapp />
      <BtnConhecaONossoChope />
    </div>
  );
}

function ContentBox() {
  return (
    <div className="h-[662px] relative shrink-0 w-[1526px]" data-name="content_box">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <HeroTitle />
        <Link />
        <div className="absolute h-[1056px] left-[980px] top-[-70px] w-[643px]" data-name="garrafa-pilsen 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGarrafaPilsen1} />
        </div>
        <div className="absolute flex h-[103.039px] items-center justify-center left-[491px] top-[446px] w-[520.603px]">
          <div className="flex-none rotate-[-5.68deg]">
            <Botoes />
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="[word-break:break-word] bg-[#f2f2f2] content-stretch drop-shadow-[0px_12px_8px_rgba(0,0,0,0.08),0px_4px_3px_rgba(0,0,0,0.03)] flex font-['Inter:Medium',sans-serif] font-medium gap-[32px] items-center justify-center leading-[19.5px] not-italic px-[40px] py-[20px] relative rounded-[40px] shrink-0 text-[#262626] text-[16px] whitespace-nowrap" data-name="menu">
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
    <div className="bg-[#f9cc0a] content-stretch flex h-[880px] items-center justify-center pt-[64px] relative shrink-0 w-[1920px]" data-name="Hero">
      <ContentBox />
      <Navbar />
    </div>
  );
}

function ImgBox() {
  return (
    <div className="h-[542px] overflow-clip relative rounded-[25px] w-[771px]" data-name="imgBox">
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

function Heading1() {
  return (
    <div className="[word-break:break-word] absolute font-['Montserrat:Black',sans-serif] font-black h-[59.725px] leading-[59.72px] left-0 text-[59.72px] top-[27.5px] w-[512px] whitespace-nowrap" data-name="Heading 2">
      <p className="absolute left-[-3px] text-[#171717] top-[3.36px]">NOSSO JEITO!</p>
      <p className="absolute left-[-5px] text-[#ffbd24] top-[-0.64px]">NOSSO JEITO!</p>
    </div>
  );
}

function TextParagraph() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal gap-[14px] items-start left-0 text-[#4a3728] text-[16px] top-[110.23px] w-[512px]" data-name="textParagraph">
      <p className="leading-[0] relative shrink-0 w-full">
        <span className="font-['Montserrat:Bold',sans-serif] font-bold leading-[27px]">Nosso Chope é puro malte, prático e fácil de encontrar.</span>
        <span className="leading-[27px]">{` Sem complicação, sem mistério. Só o prazer de abrir, servir e brindar. Nossa produção é feita com foco na qualidade e localmente em Angra dos Reis e Guapimirim. Você sabe exatamente a procedência do que está bebendo.`}</span>
      </p>
      <p className="leading-[27px] relative shrink-0 w-full">O Nosso Chope é feito para reunir amigos, família e aqueles momentos inesquecíveis. Leve, refrescante e com aquele sabor de chope gelado de boteco que todo mundo ama.</p>
    </div>
  );
}

function Whatsapp() {
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

function Link4() {
  return (
    <div className="absolute bg-[#f9cc0a] content-stretch flex gap-[10px] items-center justify-center left-0 px-[25px] py-[11px] rounded-[30px] top-[362.86px]" data-name="Link">
      <Whatsapp />
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[#1a0e04] text-[16px] tracking-[0.65px] whitespace-nowrap">Peça Agora!</p>
    </div>
  );
}

function TextBox() {
  return (
    <div className="h-[392px] relative shrink-0 w-[569px]" data-name="textBox">
      <p className="[word-break:break-word] absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[19.5px] left-[-5px] text-[#1a0e04] text-[38px] top-[-7.4px] tracking-[1.56px] whitespace-nowrap">Chope de verdade do</p>
      <Heading1 />
      <TextParagraph />
      <Link4 />
    </div>
  );
}

function SecSobre() {
  return (
    <div className="content-stretch flex gap-[80px] items-center justify-center pb-[150px] pt-[200px] relative shrink-0 w-[1920px]" data-name="sec_sobre">
      <div className="flex h-[568.302px] items-center justify-center relative shrink-0 w-[789.257px]">
        <div className="flex-none rotate-[-1.98deg]">
          <ImgBox />
        </div>
      </div>
      <div className="absolute flex h-[68.534px] items-center justify-center left-[329px] top-[723px] w-[209.713px]">
        <div className="flex-none rotate-[2.93deg] skew-x-[0.29deg]">
          <Frame />
        </div>
      </div>
      <TextBox />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#171717] relative rounded-[10px]" data-name="text1">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[50px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#fafafa] text-[78px] tracking-[0.8px] uppercase whitespace-nowrap">SABOR</p>
      </div>
      <div aria-hidden className="absolute border-8 border-solid border-white inset-[-8px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#ffbd24] relative rounded-[10px]" data-name="text2">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[50px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Montserrat:Black',sans-serif] font-black leading-[24px] relative shrink-0 text-[#171717] text-[96px] tracking-[0.8px] uppercase whitespace-nowrap">MARCANTE</p>
      </div>
      <div aria-hidden className="absolute border-8 border-solid border-white inset-[-8px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#171717] relative rounded-[10px]" data-name="text3">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[50px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#f2f2f2] text-[78px] tracking-[0.8px] uppercase whitespace-nowrap">equilíbrio</p>
      </div>
      <div aria-hidden className="absolute border-8 border-solid border-white inset-[-8px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#ffbd24] relative rounded-[10px]" data-name="text4">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[50px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Montserrat:Black',sans-serif] font-black leading-[24px] relative shrink-0 text-[116px] text-black tracking-[0.8px] uppercase whitespace-nowrap">perfeito</p>
      </div>
      <div aria-hidden className="absolute border-8 border-solid border-white inset-[-8px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function TextBox1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="text_box">
      <div className="flex h-[134.739px] items-center justify-center mb-[-17px] relative shrink-0 w-[396.877px]">
        <div className="flex-none rotate-[-1.58deg] skew-x-[0.29deg]">
          <Text1 />
        </div>
      </div>
      <div className="flex h-[141.413px] items-center justify-center mb-[-17px] relative shrink-0 w-[700.263px]">
        <div className="flex-none rotate-[1.43deg] skew-x-[0.29deg]">
          <Text2 />
        </div>
      </div>
      <div className="flex h-[149.655px] items-center justify-center mb-[-17px] relative shrink-0 w-[599.442px]">
        <div className="flex-none rotate-[-2.49deg] skew-x-[0.29deg]">
          <Text3 />
        </div>
      </div>
      <div className="flex h-[160.048px] items-center justify-center relative shrink-0 w-[726.69px]">
        <div className="flex-none rotate-[2.87deg] skew-x-[0.29deg]">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function SecCta() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-[150px] pt-[50px] relative shrink-0 w-[1912px]" data-name="sec_CTA">
      <TextBox1 />
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#fafafa] relative rounded-[10px]" data-name="text3">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Montserrat:Black',sans-serif] font-black leading-[72px] relative shrink-0 text-[#171717] text-[72px] tracking-[1px] uppercase whitespace-nowrap">mais encontros</p>
      </div>
      <div aria-hidden className="absolute border-8 border-[#ffbd24] border-solid inset-[-8px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function TitleBox() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-352.71px)] top-[252px]" data-name="title-box">
      <p className="[word-break:break-word] absolute font-['Montserrat:Black',sans-serif] font-black leading-[96px] left-[calc(50%-695px)] text-[72px] text-white top-[252px] tracking-[1.2px] uppercase w-[710px]">Mais opções, mais sabor</p>
      <div className="-translate-x-1/2 absolute flex h-[142.608px] items-center justify-center left-[calc(50%-352.71px)] top-[415px] w-[764.463px]">
        <div className="flex-none rotate-[-2.32deg] skew-x-[0.29deg]">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Titulo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center relative shrink-0 text-black text-center uppercase w-[259px]" data-name="titulo">
      <p className="font-['Montserrat:Black',sans-serif] font-black leading-[42px] relative shrink-0 text-[32px] tracking-[0.8px] w-[307px]">Lager Premium</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[21px] tracking-[1.2px] w-[367px]">Long Neck 473ml</p>
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

function Texto() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-full" data-name="texto">
      <Titulo />
      <div className="bg-[#f9cc0a] content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[11px] relative rounded-[30px] shrink-0" data-name="brn_whats">
        <Whatsapp1 />
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[#1a0e04] text-[16px] tracking-[0.65px] whitespace-nowrap">Peça Agora!</p>
      </div>
    </div>
  );
}

function Conteudo() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="conteudo">
      <Texto />
    </div>
  );
}

function Interno() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-center ml-[75px] mt-0 relative row-1 w-[311px]" data-name="interno">
      <div className="h-[357.724px] relative shrink-0 w-[127px]" data-name="Long Neck - Garrafa Branca 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLongNeckGarrafaBranca1} />
      </div>
      <Conteudo />
    </div>
  );
}

function Box() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="box_1">
      <div className="bg-[#f2f2f2] border-2 border-solid border-white col-1 h-[473px] ml-0 mt-[96.9px] opacity-30 relative rounded-[44px] row-1 shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)] w-[432px]" />
      <div className="bg-[#f2f2f2] border-2 border-solid border-white col-1 h-[450px] ml-[16px] mt-[108.9px] relative rounded-[44px] row-1 shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)] w-[400px]" />
      <Interno />
    </div>
  );
}

function Titulo1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center relative shrink-0 text-black text-center uppercase w-[259px]" data-name="titulo">
      <p className="font-['Montserrat:Black',sans-serif] font-black leading-[42px] relative shrink-0 text-[32px] tracking-[0.8px] w-[307px]">puro malte</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[21px] tracking-[1.2px] w-[367px]">lata 350ml</p>
    </div>
  );
}

function Whatsapp2() {
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

function Texto1() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-full" data-name="texto">
      <Titulo1 />
      <div className="bg-[#f9cc0a] content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[11px] relative rounded-[30px] shrink-0" data-name="brn_whats">
        <Whatsapp2 />
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[#1a0e04] text-[16px] tracking-[0.65px] whitespace-nowrap">Peça Agora!</p>
      </div>
    </div>
  );
}

function Conteudo1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="conteudo">
      <Texto1 />
    </div>
  );
}

function Interno1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-center ml-[75px] mt-0 relative row-1 w-[311px]" data-name="interno">
      <div className="h-[359px] relative shrink-0 w-[173px]" data-name="473ml 01 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img473Ml012} />
      </div>
      <Conteudo1 />
    </div>
  );
}

function Box1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="box_2">
      <div className="bg-[#f2f2f2] border-2 border-solid border-white col-1 h-[473px] ml-0 mt-[96.9px] opacity-30 relative rounded-[44px] row-1 shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)] w-[432px]" />
      <div className="bg-[#f2f2f2] border-2 border-solid border-white col-1 h-[450px] ml-[16px] mt-[108.9px] relative rounded-[44px] row-1 shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)] w-[400px]" />
      <Interno1 />
    </div>
  );
}

function Titulo2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center relative shrink-0 text-black text-center uppercase w-[259px]" data-name="titulo">
      <p className="font-['Montserrat:Black',sans-serif] font-black leading-[42px] relative shrink-0 text-[32px] tracking-[0.8px] w-[307px]">puro malte</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[21px] tracking-[1.2px] w-[367px]">pet 1,5l</p>
    </div>
  );
}

function Whatsapp3() {
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

function Texto2() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-full" data-name="texto">
      <Titulo2 />
      <div className="bg-[#f9cc0a] content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[11px] relative rounded-[30px] shrink-0" data-name="brn_whats">
        <Whatsapp3 />
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[#1a0e04] text-[16px] tracking-[0.65px] whitespace-nowrap">Peça Agora!</p>
      </div>
    </div>
  );
}

function Conteudo2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="conteudo">
      <Texto2 />
    </div>
  );
}

function Interno2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-center ml-[75px] mt-0 relative row-1 w-[311px]" data-name="interno">
      <div className="h-[357px] relative shrink-0 w-[162px]" data-name="garrafa--pilsen-90 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGarrafaPilsen901} />
      </div>
      <Conteudo2 />
    </div>
  );
}

function Box2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="box_3">
      <div className="bg-[#f2f2f2] border-2 border-solid border-white col-1 h-[473px] ml-0 mt-[96.9px] opacity-30 relative rounded-[44px] row-1 shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)] w-[432px]" />
      <div className="bg-[#f2f2f2] border-2 border-solid border-white col-1 h-[450px] ml-[16px] mt-[108.9px] relative rounded-[44px] row-1 shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)] w-[400px]" />
      <Interno2 />
    </div>
  );
}

function Cards() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[50px] h-[655px] items-center leading-[0] left-1/2 top-[497px]" data-name="cards">
      <Box />
      <Box1 />
      <Box2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[54px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="Icon">
          <path d={svgPaths.p29433d00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonAssistirVideo() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#171717] content-stretch flex items-center justify-center left-[calc(50%+0.5px)] pl-[24px] pr-[20px] py-[4px] rounded-[100px] size-[124px] top-[calc(50%-33.5px)]" data-name="Button - Assistir vídeo">
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <Icon2 />
    </div>
  );
}

function VideoArea() {
  return (
    <div className="absolute h-[829px] left-px overflow-clip top-[1215px] w-[1911px]" data-name="video_area">
      <ButtonAssistirVideo />
    </div>
  );
}

function PartTwo() {
  return (
    <div className="absolute bg-[#ffbd24] h-[2044px] left-[4px] overflow-clip top-[623.84px] w-[1912px]" data-name="part_two">
      <TitleBox />
      <Cards />
      <VideoArea />
    </div>
  );
}

function Pointer() {
  return (
    <div className="absolute h-[22.468px] left-[1036.81px] top-[115.76px] w-[157.277px]" data-name="pointer">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157.277 22.4682">
        <g id="pointer">
          <line id="Line 1" stroke="var(--stroke-0, #737373)" strokeDasharray="2 2" x2="146.043" y1="10.7341" y2="10.7341" />
          <ellipse cx="146.043" cy="11.2341" fill="var(--fill-0, #FFBD24)" id="Ellipse 2" rx="11.2341" ry="11.2341" />
        </g>
      </svg>
    </div>
  );
}

function Whatsapp4() {
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

function Link5() {
  return (
    <div className="bg-[#f9cc0a] content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[11px] relative rounded-[30px] shrink-0" data-name="Link">
      <Whatsapp4 />
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[#1a0e04] text-[16px] tracking-[0.65px] whitespace-nowrap">Peça Agora!</p>
    </div>
  );
}

function TextBoxRight() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[554px] items-start left-[1216px] top-[106.84px] w-[422px]" data-name="text_box_right">
      <p className="[word-break:break-word] font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[28px] min-w-full relative shrink-0 text-[#4a3728] text-[19px] w-[min-content]">Seja para o seu churrasco com a galera, o almoço de domingo em família ou para acompanhar o jogão na TV, somos a aposta certa.</p>
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#4a3728] text-[16px] w-[min-content]">
        <span className="leading-[27px]">{`Do coração do Brasil, `}</span>
        <span className="font-['Montserrat:Bold',sans-serif] font-bold leading-[27px]">o Pilsen do Nosso Chope</span>
        <span className="leading-[27px]">{` é um chope dourado e cristalino, leve e refrescante, com sabor equilibrado e amargor suave. Produzido com água pura de fontes minerais da Serra dos Orgãos e maltes importados selecionados.`}</span>
      </p>
      <Link5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#ffbd24] relative rounded-[10px]" data-name="text2">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[30px] py-[20px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Montserrat:Black',sans-serif] font-black leading-[86px] relative shrink-0 text-[#171717] text-[96px] tracking-[0.8px] uppercase whitespace-nowrap">PILSEN</p>
      </div>
      <div aria-hidden className="absolute border-8 border-solid border-white inset-[-8px] pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="[word-break:break-word] font-['Montserrat:Black',sans-serif] font-black grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[96px]">
      <p className="col-1 h-[59px] leading-[96px] ml-0 mt-[5px] relative row-1 text-[#171717] w-[591px]">A GALERA!</p>
      <p className="col-1 h-[59px] leading-[96px] ml-0 mt-0 relative row-1 text-[#f2f2f2] w-[591px]">A GALERA!</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] h-[401.234px] items-start justify-center relative w-[737.706px]" data-name="Heading">
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#1a0e04] text-[56px] tracking-[1.56px] whitespace-nowrap">Nosso Chope</p>
      <div className="flex items-center justify-center relative shrink-0 w-[433.627px]">
        <div className="flex-none skew-x-[0.29deg]">
          <Text6 />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#1a0e04] text-[56px] tracking-[1.56px] whitespace-nowrap">O sabor que une</p>
      <Group />
    </div>
  );
}

function PartOne() {
  return (
    <div className="absolute contents left-[304px] top-[-27.16px]" data-name="part_one">
      <Pointer />
      <TextBoxRight />
      <div className="-translate-x-1/2 absolute h-[782px] left-[calc(50%+0.5px)] top-[-27.16px] w-[375px]" data-name="473ml 01 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img473Ml012} />
      </div>
      <div className="absolute flex h-[439.843px] items-center justify-center left-[304px] top-[24.51px] w-[736.695px]">
        <div className="-rotate-3 -skew-x-3 flex-none">
          <Heading />
        </div>
      </div>
    </div>
  );
}

function ContentBox1() {
  return (
    <div className="h-[2668px] overflow-clip relative shrink-0 w-[1920px]" data-name="content_box">
      <PartTwo />
      <PartOne />
    </div>
  );
}

function SecPilsen() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pt-[50px] relative shrink-0 w-[1920px]" data-name="sec_pilsen">
      <ContentBox1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[19.5px] left-0 opacity-50 top-0 w-[448px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#1a0e04] text-[13px] top-[0.6px] tracking-[1.3px] uppercase whitespace-nowrap">Quando o rolê é bom</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[21px] left-0 top-[27.5px] w-[448px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#4a3728] text-[14px] top-[-0.4px] tracking-[0.84px] whitespace-nowrap">não pode faltar</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[147.5px] left-0 top-[52.5px] w-[448px]" data-name="Heading 2">
      <div className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[0] left-0 not-italic text-[#1a0e04] text-[77.636px] top-[-3.6px] tracking-[1.5527px] whitespace-nowrap">
        <p className="leading-[73.754px] mb-0">NOSSO</p>
        <p className="leading-[73.754px]">CHOPE</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[108px] left-0 top-[228px] w-[380px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#4a3728] text-[15px] top-[-1px] w-[380px]">Seja em casa, na praia, no churrasco ou naquele rolê especial com os amigos, o Nosso Chope está pronto para fazer parte dos melhores momentos da sua vida. Prático, saboroso e sempre gelado.</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute bg-[#f9cc0a] h-[43.5px] left-0 rounded-[4px] top-[368px] w-[194.038px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-[28px] not-italic text-[#1a0e04] text-[13px] top-[12.6px] tracking-[0.65px] whitespace-nowrap">PEÇA O SEU AGORA</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[448_0_0] h-[411.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph />
        <Paragraph1 />
        <Heading2 />
        <Paragraph2 />
        <Link6 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.39%_40%_88.89%_40%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6 4.66667">
          <path d="M0 0H5.6V4.66667H0V0Z" fill="var(--fill-0, #F9CC0A)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[11.11%] left-1/4 right-1/4 top-[11.11%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 37.3333">
          <path d={svgPaths.p3dca8f00} fill="var(--fill-0, #F9CC0A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[48px] opacity-50 relative shrink-0 w-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.95px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[20.5px] not-italic text-[8px] text-[rgba(249,204,10,0.7)] text-center top-[-0.2px] tracking-[0.4px] w-[41px]">
          <p className="leading-[12px] mb-0">GARRAFA</p>
          <p className="leading-[12px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(249,204,10,0.08)] content-stretch flex flex-col gap-[4px] h-[175px] items-center justify-center px-[1.6px] py-[49.5px] relative rounded-[10px] shrink-0 w-[70px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(249,204,10,0.6)] border-dashed inset-0 pointer-events-none rounded-[10px]" />
      <Container6 />
      <Text />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.39%_40%_88.89%_40%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6 4.66667">
          <path d="M0 0H5.6V4.66667H0V0Z" fill="var(--fill-0, #F9CC0A)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[11.11%] left-1/4 right-1/4 top-[11.11%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 37.3333">
          <path d={svgPaths.p3dca8f00} fill="var(--fill-0, #F9CC0A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[48px] opacity-50 relative shrink-0 w-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.95px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[20.5px] not-italic text-[8px] text-[rgba(249,204,10,0.7)] text-center top-[-0.2px] tracking-[0.4px] w-[41px]">
          <p className="leading-[12px] mb-0">GARRAFA</p>
          <p className="leading-[12px]">2</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(249,204,10,0.08)] content-stretch flex flex-col gap-[4px] h-[175px] items-center justify-center px-[1.6px] py-[49.5px] relative rounded-[10px] shrink-0 w-[70px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(249,204,10,0.6)] border-dashed inset-0 pointer-events-none rounded-[10px]" />
      <Container8 />
      <Text7 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.39%_40%_88.89%_40%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6 4.66667">
          <path d="M0 0H5.6V4.66667H0V0Z" fill="var(--fill-0, #F9CC0A)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[11.11%] left-1/4 right-1/4 top-[11.11%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 37.3333">
          <path d={svgPaths.p3dca8f00} fill="var(--fill-0, #F9CC0A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[48px] opacity-50 relative shrink-0 w-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.95px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[20.5px] not-italic text-[8px] text-[rgba(249,204,10,0.7)] text-center top-[-0.2px] tracking-[0.4px] w-[41px]">
          <p className="leading-[12px] mb-0">GARRAFA</p>
          <p className="leading-[12px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(249,204,10,0.08)] content-stretch flex flex-col gap-[4px] h-[175px] items-center justify-center px-[1.6px] py-[49.5px] relative rounded-[10px] shrink-0 w-[70px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(249,204,10,0.6)] border-dashed inset-0 pointer-events-none rounded-[10px]" />
      <Container10 />
      <Text8 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[288px] items-center justify-end left-0 overflow-clip p-[24px] rounded-[16px] top-0 w-[512px]" data-name="Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgContainer} />
        <div className="absolute bg-gradient-to-r from-[rgba(26,14,4,0.5)] inset-0 rounded-[16px] to-[60%] to-[rgba(0,0,0,0)]" />
      </div>
      <Container5 />
      <Container7 />
      <Container9 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[52px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_40.25%_90%_40.25%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.24 5.2">
          <path d="M0 0H6.24V5.2H0V0Z" fill="var(--fill-0, #1A0E04)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10%_25.62%_10%_25.63%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6 41.6">
          <path d={svgPaths.p1633e600} fill="var(--fill-0, #1A0E04)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[52px] opacity-25 relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[27px] opacity-35 relative shrink-0 w-[55.188px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[28px] not-italic text-[#1a0e04] text-[0px] text-center top-[-0.2px] tracking-[0.45px] w-[56px]">
          <p className="leading-[13.5px] mb-0 text-[9px]">GARRAFA 4</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] text-[8px]">/src/assets/</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(26,14,4,0.03)] flex-[130_0_0] h-[195px] min-w-px relative rounded-[12px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(26,14,4,0.2)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center px-[13.6px] py-[54px] relative size-full">
          <Container13 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[52px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_40.25%_90%_40.25%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.24 5.2">
          <path d="M0 0H6.24V5.2H0V0Z" fill="var(--fill-0, #1A0E04)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10%_25.62%_10%_25.63%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6 41.6">
          <path d={svgPaths.p1633e600} fill="var(--fill-0, #1A0E04)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[52px] opacity-25 relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[27px] opacity-35 relative shrink-0 w-[54.7px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[27.5px] not-italic text-[#1a0e04] text-[0px] text-center top-[-0.2px] tracking-[0.45px] w-[55px]">
          <p className="leading-[13.5px] mb-0 text-[9px]">GARRAFA 5</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] text-[8px]">/src/assets/</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(26,14,4,0.03)] flex-[130_0_0] h-[195px] min-w-px relative rounded-[12px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(26,14,4,0.2)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center px-[13.6px] py-[54px] relative size-full">
          <Container15 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[195px] items-start justify-center left-0 px-[120px] top-[304px] w-[512px]" data-name="Container">
      <Container12 />
      <Container14 />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[512_0_0] h-[499px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
        <Container11 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[499px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[48px] items-center pl-[24px] pr-[147.2px] relative size-full">
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function SecProvaSocial() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1171px] items-start pt-[96px] relative shrink-0 w-[1920px]" data-name="sec_prova_social">
      <Container1 />
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-[rgba(255,255,255,0.04)] left-[-150px] rounded-[300px] size-[600px] top-[-200px]" data-name="Container" />;
}

function Container17() {
  return <div className="absolute bg-[rgba(255,255,255,0.04)] left-[661.29px] rounded-[200px] size-[400px] top-[272px]" data-name="Container" />;
}

function Icon8() {
  return (
    <div className="h-[88px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0.76%_40%_89.39%_40%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4 8.66667">
          <path d="M0 0H10.4V8.66667H0V0Z" fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[10.61%] left-1/4 right-1/4 top-[10.61%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 69.3333">
          <path d={svgPaths.p1c409080} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.23%_36.67%_59.85%_36.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8667 4.33333">
          <path d="M0 0H13.8667V4.33333H0V0Z" fill="var(--fill-0, #F9CC0A)" id="Vector" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[88px] opacity-45 relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[79.2px] relative shrink-0 w-[175.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[88px] not-italic text-[0px] text-[rgba(255,255,255,0.5)] text-center top-[0.2px] tracking-[0.88px] uppercase w-[176px]">
          <p className="leading-[19.8px] mb-0 text-[11px]">Garrafa</p>
          <p className="leading-[19.8px] mb-0 text-[11px]">Red Draft</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.2px] text-[9px]">/src/assets/garrafa-red-draft.png</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] h-[330px] relative rounded-[16px] shrink-0 w-[220px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.4px] border-[rgba(255,255,255,0.35)] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center justify-center px-[22.4px] py-[75.4px] relative size-full">
        <Container20 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[635.2px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.7)] top-[0.6px] tracking-[1.56px] uppercase whitespace-nowrap">NOSSO CHOPE</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[85.988px] left-0 top-[27.5px] w-[635.2px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[85.997px] left-0 not-italic text-[#f9cc0a] text-[95.552px] top-[-5.2px] tracking-[1.911px] whitespace-nowrap">RED DRAFT</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[30px] left-0 top-[129.49px] w-[635.2px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[20px] text-[rgba(255,255,255,0.85)] top-[-0.6px] tracking-[0.6px] whitespace-nowrap">Para quem ousa viver com</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[71.662px] left-0 top-[171.49px] w-[635.2px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[71.664px] left-0 not-italic text-[71.664px] text-white top-[-4.2px] tracking-[1.4333px] whitespace-nowrap">INTENSIDADE</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute bg-[#f9cc0a] h-[43.5px] left-0 rounded-[4px] top-[275.15px] w-[207.175px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-[28px] not-italic text-[#1a0e04] text-[13px] top-[12.6px] tracking-[0.65px] whitespace-nowrap">QUERO O RED DRAFT!</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[635.2_0_0] h-[318.65px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph6 />
        <Heading3 />
        <Paragraph7 />
        <Heading4 />
        <Link7 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[100px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[3%_30%_73%_30%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1c665200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-[24%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 51">
          <path d={svgPaths.p15ec4440} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32%_83.33%_30%_0]" data-name="Vector">
        <div className="absolute inset-[-7.9%_-30.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0015 44.0015">
            <path d={svgPaths.p9198700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32%_0_30%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-7.9%_-30.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0015 44.0015">
            <path d={svgPaths.p1b671d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/4 right-[66.67%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-14%_-70.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0014 32.0014">
            <path d={svgPaths.p8dda740} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="7" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-[66.67%] right-1/4 top-3/4" data-name="Vector">
        <div className="absolute inset-[-14%_-70.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0014 32.0014">
            <path d={svgPaths.p2c3684c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[100px] opacity-35 relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[54px] relative shrink-0 w-[164.988px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[82.5px] not-italic text-[0px] text-[rgba(255,255,255,0.4)] text-center top-[-0.6px] tracking-[0.7px] uppercase w-[165px]">
          <p className="leading-[18px] mb-0 text-[10px]">Ilustração</p>
          <p className="leading-[18px] mb-0 text-[10px]">personagem</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.2px] text-[9px]">/src/assets/personagem.png</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[280px] relative rounded-[16px] shrink-0 w-[180px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.4px] border-[rgba(255,255,255,0.25)] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center justify-center px-[22.4px] py-[57px] relative size-full">
        <Container23 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[48px] h-[330px] items-center left-0 px-[24px] top-[96px] w-[1179.2px]" data-name="Container">
      <Container19 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function SectionRedDraft() {
  return (
    <div className="h-[1184px] overflow-clip relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(148.339deg, rgb(107, 31, 168) 0%, rgb(139, 47, 201) 40%, rgb(169, 53, 216) 100%)" }} data-name="SectionRedDraft">
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f9cc0a] h-[30px] relative rounded-[4px] shrink-0 w-[40.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[18px] left-[20px] not-italic text-[#1a0e04] text-[12px] text-center top-[7.4px] tracking-[0.48px] whitespace-nowrap">NOSSO</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[25.825px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[18px] left-[13px] not-italic text-[#1a0e04] text-[12px] text-center top-[-1.2px] tracking-[0.48px] whitespace-nowrap">CHOPE</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[30px] items-center left-[530.65px] top-0 w-[69.888px]" data-name="Container">
      <Container27 />
      <Text9 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[59.725px] left-[319.08px] top-[46px] w-[493.05px]" data-name="Heading 2">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[59.72px] left-[247.5px] not-italic text-[#1a0e04] text-[59.72px] text-center top-[-3.6px] tracking-[1.1944px] whitespace-nowrap">VISITE NOSSOS PARCEIROS</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[51px] left-[325.6px] top-[117.73px] w-[480px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.5px] left-[240px] not-italic text-[#4a3728] text-[15px] text-center top-[-0.8px] w-[480px]">Encontre um ponto de venda perto de você e venha experimentar o Nosso Chope geladinho do jeito certo.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[168.725px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Heading5 />
      <Paragraph9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d={svgPaths.p1d79ab00} id="Vector" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p37a0d000} id="Vector_2" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[20px] left-0 not-italic text-[20px] text-white top-[-1.2px] tracking-[0.6px] whitespace-nowrap">Rio de Janeiro</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon10 />
      <Heading6 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.55)] top-[-0.2px] whitespace-nowrap">RJ / 20+ parceiros</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[42px] relative shrink-0 w-[120.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container32 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #1A0E04)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #1A0E04)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#f9cc0a] relative rounded-[18px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#1a0e04] content-stretch flex h-[78px] items-center justify-between left-0 px-[20px] py-[18px] top-[270.79px] w-[361.063px]" data-name="Container">
      <Container31 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#f9cc0a] h-[32px] left-[14px] rounded-[4px] top-[14px] w-[159.4px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[10px] not-italic text-[#1a0e04] text-[10px] top-[11px] tracking-[0.6px] uppercase whitespace-nowrap">Região Metropolitana</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[270.788px] left-0 overflow-clip top-0 w-[361.063px]" data-name="Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer1} />
        <div className="absolute bg-gradient-to-t from-[rgba(26,14,4,0.75)] inset-0 to-[55%] to-[rgba(0,0,0,0)]" />
      </div>
      <Container35 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[348.8px] left-0 overflow-clip rounded-[16px] shadow-[0px_4px_24px_0px_rgba(26,14,4,0.1)] top-0 w-[361.063px]" data-name="Container">
      <Container30 />
      <Container34 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d={svgPaths.p1d79ab00} id="Vector" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p37a0d000} id="Vector_2" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[20px] left-0 not-italic text-[20px] text-white top-[-1.2px] tracking-[0.6px] whitespace-nowrap">Sul Fluminense</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Heading7 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.55)] top-[-0.2px] whitespace-nowrap">RJ / 15+ parceiros</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[42px] relative shrink-0 w-[130.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container39 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #1A0E04)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #1A0E04)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#f9cc0a] relative rounded-[18px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[#1a0e04] content-stretch flex h-[78px] items-center justify-between left-0 px-[20px] py-[18px] top-[270.79px] w-[361.063px]" data-name="Container">
      <Container38 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#f9cc0a] h-[32px] left-[14px] rounded-[4px] top-[14px] w-[138.025px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[10px] not-italic text-[#1a0e04] text-[10px] top-[11px] tracking-[0.6px] uppercase whitespace-nowrap">Interior do Estado</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[270.788px] left-0 overflow-clip top-0 w-[361.063px]" data-name="Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer2} />
        <div className="absolute bg-gradient-to-t from-[rgba(26,14,4,0.75)] inset-0 to-[55%] to-[rgba(0,0,0,0)]" />
      </div>
      <Container42 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[348.8px] left-[385.06px] overflow-clip rounded-[16px] shadow-[0px_4px_24px_0px_rgba(26,14,4,0.1)] top-0 w-[361.063px]" data-name="Container">
      <Container37 />
      <Container41 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#f9cc0a] h-[32px] left-[14px] rounded-[4px] top-[14px] w-[181.588px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[10px] not-italic text-[#1a0e04] text-[10px] top-[11px] tracking-[0.6px] uppercase whitespace-nowrap">Consulte para sua região</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[270.8px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer3} />
        <div className="absolute bg-gradient-to-t from-[rgba(26,14,4,0.75)] inset-0 to-[55%] to-[rgba(0,0,0,0)]" />
      </div>
      <Container45 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d={svgPaths.p1d79ab00} id="Vector" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p37a0d000} id="Vector_2" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[20px] left-0 not-italic text-[20px] text-white top-[-1.2px] tracking-[0.6px] whitespace-nowrap">Parceiros Locais</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon14 />
      <Heading8 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.55)] top-[-0.2px] whitespace-nowrap">Todo o Brasil</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[42px] relative shrink-0 w-[140.925px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container48 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #1A0E04)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #1A0E04)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#f9cc0a] relative rounded-[18px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#1a0e04] h-[78px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[18px] relative size-full">
          <Container47 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[348.8px] items-start left-[770.13px] overflow-clip rounded-[16px] shadow-[0px_4px_24px_0px_rgba(26,14,4,0.1)] top-0 w-[361.075px]" data-name="Container">
      <Container44 />
      <Container46 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[348.8px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container36 />
      <Container43 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[565.525px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[24px] relative size-full">
        <Container25 />
        <Container28 />
      </div>
    </div>
  );
}

function SectionParceiros() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[757.525px] items-start pt-[96px] relative shrink-0 w-[1179.2px]" data-name="SectionParceiros">
      <Container24 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[18px] left-[24px] top-0 w-[720px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[360.29px] not-italic text-[#f9cc0a] text-[12px] text-center top-[-0.2px] tracking-[2.16px] uppercase whitespace-nowrap">Garanta o seu</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[71.662px] left-[24px] top-[30px] w-[720px]" data-name="Heading 2">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[71.664px] left-[360.44px] not-italic text-[71.664px] text-center text-white top-[-4.2px] tracking-[1.4333px] whitespace-nowrap">FAÇA SUA PRÉ-RESERVA</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[81px] left-[124px] top-[117.66px] w-[520px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[260px] not-italic text-[15px] text-[rgba(255,255,255,0.6)] text-center top-[-1px] w-[520px]">Cadastre-se agora e seja o primeiro a saber quando o Nosso Chope chegar perto de você. Garanta sua pré-reserva e receba condições especiais de lançamento.</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] h-[50.6px] relative rounded-[6px] shrink-0 w-[448px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[18px] py-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">Seu nome completo</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] h-[50.6px] relative rounded-[6px] shrink-0 w-[448px]" data-name="Email Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[18px] py-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">Seu melhor e-mail</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[132.3px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_536)" id="Icon">
          <path d={svgPaths.p22f0380} id="Vector" stroke="var(--stroke-0, #1A0E04)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.5693 1.43133L7.276 8.724" id="Vector_2" stroke="var(--stroke-0, #1A0E04)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2_536">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f9cc0a] h-[49px] relative rounded-[6px] shrink-0 w-[448px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon16 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-[236.8px] not-italic text-[#1a0e04] text-[14px] text-center top-[13.6px] tracking-[0.84px] whitespace-nowrap">FAZER PRÉ-RESERVA</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[174.2px] items-start left-[160px] top-[238.66px] w-[448px]" data-name="Form">
      <TextInput />
      <EmailInput />
      <Button />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[18px] left-[24px] top-[432.86px] w-[720px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[360.2px] not-italic text-[12px] text-[rgba(255,255,255,0.3)] text-center top-[-0.2px] whitespace-nowrap">Não enviamos spam. Seus dados estão seguros conosco.</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[450.863px] relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <Heading9 />
      <Paragraph14 />
      <Form />
      <Paragraph15 />
    </div>
  );
}

function SectionPreReserva() {
  return (
    <div className="content-stretch flex flex-col h-[642.862px] items-start pt-[96px] px-[205.6px] relative shrink-0 w-[1179.2px]" style={{ backgroundImage: "linear-gradient(151.402deg, rgb(26, 14, 4) 0%, rgb(46, 26, 8) 100%)" }} data-name="SectionPreReserva">
      <Container50 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Main Content">
      <Hero />
      <SecSobre />
      <SecCta />
      <SecPilsen />
      <SecProvaSocial />
      <SectionRedDraft />
      <SectionParceiros />
      <SectionPreReserva />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f9cc0a] h-[32px] relative rounded-[4px] shrink-0 w-[50.737px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#1a0e04] text-[16px] top-[7.4px] tracking-[0.64px] whitespace-nowrap">NOSSO</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[34.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-1.4px] tracking-[0.64px] whitespace-nowrap">CHOPE</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 top-0 w-[252.8px]" data-name="Container">
      <Container55 />
      <Text10 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[70.2px] left-0 top-[48px] w-[220px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.4px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.45)] top-[0.2px] w-[220px]">O puro malte que está conquistando o Brasil, garrafão a garrafão.</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_477)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.65" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.65" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.65" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2_477">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[18px] shrink-0 size-[36px]" data-name="Link">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-[0.8px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.65" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[18px] shrink-0 size-[36px]" data-name="Link">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-[0.8px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2d614500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.65" strokeWidth="1.33333" />
          <path d={svgPaths.p3657f7c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.65" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[18px] shrink-0 size-[36px]" data-name="Link">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-[0.8px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[36px] items-start left-0 top-[138.2px] w-[252.8px]" data-name="Container">
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[200.5px] left-0 top-0 w-[252.8px]" data-name="Container">
      <Container54 />
      <Paragraph16 />
      <Container56 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#f9cc0a] text-[11px] top-[0.6px] tracking-[1.54px] uppercase whitespace-nowrap">NAVEGAÇÃO</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-[252.8px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[3.8px] whitespace-nowrap">Início</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[252.8px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[3.8px] whitespace-nowrap">Produtos</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[252.8px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[3.8px] whitespace-nowrap">Nosso Jeito</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[252.8px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[3.8px] whitespace-nowrap">Red Draft</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[252.8px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[3.8px] whitespace-nowrap">Parceiros</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[200.5px] items-start left-[292.8px] top-0 w-[252.8px]" data-name="Container">
      <Heading10 />
      <List />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#f9cc0a] text-[11px] top-[0.6px] tracking-[1.54px] uppercase whitespace-nowrap">{`CONTATO & REGIÕES`}</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 11.9165">
            <path d={svgPaths.p3a1a3cf2} id="Vector" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
            <path d={svgPaths.p3e3a4d80} id="Vector" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[13px] top-[3.25px]" data-name="Text">
      <Icon20 />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[252.8px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text11 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-[21px] not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[0.6px] whitespace-nowrap">Rio de Janeiro, RJ</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 11.9165">
            <path d={svgPaths.p3a1a3cf2} id="Vector" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
            <path d={svgPaths.p3e3a4d80} id="Vector" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[13px] top-[3.25px]" data-name="Text">
      <Icon21 />
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[252.8px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text12 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-[21px] not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[0.6px] whitespace-nowrap">Sul Fluminense, RJ</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.63%_8.8%]" data-name="Vector">
        <div className="absolute inset-[-5.02%_-5.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8564 11.8778">
            <path d={svgPaths.p25a65c00} id="Vector" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[13px] top-[3.25px]" data-name="Text">
      <Icon22 />
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[252.8px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text13 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-[21px] not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[0.6px] whitespace-nowrap">(21) 9 9999-9999</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9167 9.75">
            <path d={svgPaths.p12497900} id="Vector" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9168 4.33124">
            <path d={svgPaths.p5404f00} id="Vector" stroke="var(--stroke-0, #F9CC0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[13px] top-[3.25px]" data-name="Text">
      <Icon23 />
    </div>
  );
}

function ListItem8() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[252.8px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text14 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-[21px] not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[0.6px] whitespace-nowrap">contato@nossochope.com.br</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[114px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[200.5px] items-start left-[585.6px] top-0 w-[252.8px]" data-name="Container">
      <Heading11 />
      <List1 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[16.5px] left-[878.4px] top-0 w-[252.8px]" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#f9cc0a] text-[11px] top-[0.6px] tracking-[1.54px] uppercase whitespace-nowrap">GARANTA O SEU</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[46.8px] left-[878.4px] top-[32.5px] w-[252.8px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.4px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.45)] top-[0.2px] w-[253px]">Faça sua pré-reserva e seja o primeiro a receber o Nosso Chope na sua região.</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute bg-[#f9cc0a] h-[38px] left-[878.4px] rounded-[4px] top-[95.3px] w-[130.1px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[20px] not-italic text-[#1a0e04] text-[12px] top-[9.8px] tracking-[0.6px] whitespace-nowrap">PRÉ-RESERVA</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[249.3px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container53 />
      <Container57 />
      <Container58 />
      <Heading12 />
      <Paragraph17 />
      <Link11 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[18px] relative shrink-0 w-[298.663px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.25)] top-[-0.2px] whitespace-nowrap">© 2024 Nosso Chope. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[18px] relative shrink-0 w-[426.888px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.25)] top-[-0.2px] whitespace-nowrap">Bebida alcoólica. Proibida para menores de 18 anos. Beba com moderação.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[24px] relative size-full">
          <Paragraph18 />
          <Paragraph19 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[291.3px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
        <Container52 />
        <Container59 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0e0702] content-stretch flex flex-col h-[371.3px] items-start pt-[56px] relative shrink-0 w-full" data-name="Footer">
      <Container51 />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="App">
      <MainContent />
      <Footer />
    </div>
  );
}