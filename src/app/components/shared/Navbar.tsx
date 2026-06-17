import { Link } from "react-router";
import svgPaths from "../../../imports/HeroSobre/svg-4z82zqaibu";
import imgLogoBlack1 from "figma:asset/28767bfbb1c1d464e2df47c261ecdf49cd41fbdd.png";
import { gridBase } from "../code/constants";

/* ─── Navbar icons ──────────────────────────────────────────────────────── */

function InstagramIcon() {
  return (
    <div className="h-[1.125rem] overflow-clip relative shrink-0 w-[1.125rem]">
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
            <path d={svgPaths.pef8c000} stroke="#f9cc0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.15%_33.15%_33.51%_33.51%]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.50001 7.50001">
            <path d={svgPaths.p38977f00} stroke="#f9cc0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.08%_27.04%_72.92%_72.92%]">
        <div className="absolute inset-[-0.046875rem]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5075 1.5">
            <path d="M0.75 0.75H0.7575" stroke="#f9cc0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FacebookIcon() {
  return (
    <div className="h-[1.125rem] overflow-clip relative shrink-0 w-[1.125rem]">
      <div className="absolute inset-[8.33%_25%_8.33%_29.17%]">
        <div className="absolute inset-[-5%_-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75001 16.5">
            <path d={svgPaths.p2c7fea00} stroke="#f9cc0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Nav items ─────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/#pilsen" },
  { label: "Seja um Parceiro", href: "/parceiros" },
  { label: "Delivery", href: "/#delivery" },
  { label: "Contato", href: "/contato" },
];

function NavMenu() {
  return (
    <div className="bg-[#f2f2f2] shadow-[0_0.75rem_0.5rem_rgba(0,0,0,0.08),0_0.25rem_0.1875rem_rgba(0,0,0,0.03)] flex items-center gap-[2rem] px-[2.5rem] py-[1.25rem] rounded-[2.5rem] font-['Inter',sans-serif] font-medium text-[#262626] text-[1rem] whitespace-nowrap">
      {NAV_LINKS.map(({ label, href }) => (
        <Link
          key={label}
          to={href}
          className="group relative transition-all duration-300 hover:text-black hover:-translate-y-[0.125rem]"
        >
          {label}
          <span className="absolute -bottom-[0.25rem] left-1/2 w-0 h-[0.125rem] bg-[#f9cc0a] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full group-hover:left-0 rounded-full"></span>
        </Link>
      ))}
    </div>
  );
}

const socialBtnClass =
  "group relative flex items-center justify-center w-[3.24rem] h-[3.24rem] rounded-full " +
  "bg-black border-2 border-[#f9cc0a]/50 cursor-pointer select-none " +
  "transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] " +
  "hover:-translate-y-[0.175rem] hover:scale-110 hover:border-[#f9cc0a] " +
  "hover:shadow-[0_0_1rem_rgba(249,204,10,0.6),0_0.3rem_0.9rem_rgba(0,0,0,0.4)] " +
  "active:scale-95 active:translate-y-0 " +
  "focus-visible:ring-2 focus-visible:ring-[#f9cc0a] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

function NavActions() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={socialBtnClass}
        aria-label="Instagram"
      >
        <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(249,204,10,1)]">
          <InstagramIcon />
        </span>
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={socialBtnClass}
        aria-label="Facebook"
      >
        <span className="transition-all duration-300 group-hover:brightness-[2] group-hover:drop-shadow-[0_0_4px_rgba(249,204,10,0.8)]">
          <FacebookIcon />
        </span>
      </a>
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
    ? "absolute left-0 top-[0.125rem] w-full z-[99]"
    : "relative w-full z-[99]";

  return (
    <nav className={`${posClass} h-[7.5rem]`}>
      <div className="flex items-center justify-between h-full px-[3.75rem]">
        <Link to="/" className="relative flex-shrink-0 w-[6.25rem] h-[3.5625rem]">
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
