import { Link } from "react-router";
import svgPaths from "../../../imports/HeroSobre/svg-4z82zqaibu";
import imgLogoBlack1 from "figma:asset/28767bfbb1c1d464e2df47c261ecdf49cd41fbdd.png";

/* ─── Navbar icons ──────────────────────────────────────────────────────── */

function InstagramIcon() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[18px]">
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
            <path d={svgPaths.pef8c000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute" style={{ inset: "33.15% 33.15% 33.51% 33.51%" }}>
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.50001 7.50001">
            <path d={svgPaths.p38977f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute" style={{ inset: "27.08% 27.04% 72.92% 72.92%" }}>
        <div className="absolute inset-[-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5075 1.5">
            <path d="M0.75 0.75H0.7575" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FacebookIcon() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[18px]">
      <div className="absolute" style={{ bottom: "8.33%", left: "29.17%", right: "25%", top: "8.33%" }}>
        <div className="absolute" style={{ inset: "-5% -9.09%" }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75001 16.5">
            <path d={svgPaths.p2c7fea00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Nav items ─────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Delivery", href: "/#delivery" },
  { label: "Contato", href: "/contato" },
];

function NavMenu() {
  return (
    <div className="bg-[#f2f2f2] drop-shadow-[0px_12px_8px_rgba(0,0,0,0.08),0px_4px_3px_rgba(0,0,0,0.03)] flex items-center gap-8 px-10 py-5 rounded-[40px] font-['Inter',sans-serif] font-medium text-[#262626] text-[16px] whitespace-nowrap">
      {NAV_LINKS.map(({ label, href }) => (
        <Link
          key={label}
          to={href}
          className="hover:opacity-75 transition-opacity"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

function NavActions() {
  return (
    <div className="flex items-center gap-4">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center cursor-pointer">
        <InstagramIcon />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center cursor-pointer">
        <FacebookIcon />
      </a>
      <Link
        to="/contato"
        className="inline-flex items-center justify-center bg-[#f9cc0a] text-[#1a0e04] font-['Inter',sans-serif] font-bold text-[12px] tracking-[0.36px] uppercase px-[18px] rounded-[4px] cursor-pointer select-none
          transition-all duration-200 hover:-translate-y-[2px] hover:brightness-[1.06] hover:shadow-[0_6px_18px_rgba(249,204,10,0.5)]
          active:translate-y-[1px] active:brightness-[0.96]
          focus-visible:ring-2 focus-visible:ring-[#f9cc0a] focus-visible:ring-offset-1"
        style={{ height: "34px", minWidth: "110px", transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
      >
        SAIBA MAIS
      </Link>
    </div>
  );
}

/* ─── Exported Navbar ───────────────────────────────────────────────────── */

interface NavbarProps {
  /** 'overlay' = absolute positioned over hero; 'page' = regular flow */
  variant?: "overlay" | "page";
}

export function Navbar({ variant = "overlay" }: NavbarProps) {
  const posClass = variant === "overlay"
    ? "absolute left-0 top-[2px] w-full z-20"
    : "relative w-full z-20";

  return (
    <nav className={posClass} style={{ height: "120px" }}>
      <div className="flex items-center justify-between h-full px-[60px]">
        <Link to="/" className="relative flex-shrink-0" style={{ width: "100px", height: "57px" }}>
          <img
            src={imgLogoBlack1}
            alt="Nosso Chope"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          />
        </Link>
        <NavMenu />
        <NavActions />
      </div>
    </nav>
  );
}
