import React, { useRef } from "react";
import svgPaths from "../../../imports/HeroSobre/svg-4z82zqaibu";
import svgPathsApp from "../../../imports/App-1/svg-6pmkjbv2xx";
import { gridBase } from "../code/constants";

/* ─── Spring easing ─────────────────────────────────────────────────────── */
// cubic-bezier(0.34, 1.56, 0.64, 1) — slight overshoot for a spring feel
const SPRING = "cubic-bezier(0.34,1.56,0.64,1)";
const SMOOTH = "cubic-bezier(0.25,0.46,0.45,0.94)";

/* ─── Animated icons ────────────────────────────────────────────────────── */

export function WhatsAppAnimIcon({ fill = "black" }: { fill?: string }) {
  return (
    <span className="wa-icon inline-flex size-[1.5625rem]">
      <svg className="size-full" viewBox="0 0 25 25" fill="none">
        <path d={svgPaths.p1c760700} fill={fill} />
      </svg>
    </span>
  );
}

export function ArrowAnimIcon({ stroke = "#171717" }: { stroke?: string }) {
  return (
    <span className="arrow-icon inline-flex size-[1.5rem]">
      <svg className="size-full" viewBox="0 0 22 22" fill="none">
        <path
          d={svgPaths.p2c1b4e80}
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}

export function InstagramAnimIcon({ stroke = "#F9CC0A" }: { stroke?: string }) {
  return (
    <span className="social-icon inline-flex size-[1.375rem]">
      <svg className="size-full" viewBox="0 0 22 22" fill="none">
        <path d={svgPathsApp.pa2a580} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPathsApp.p1a407680} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M16.0417 5.95833H16.0508" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </span>
  );
}

/* ─── Ripple handler ────────────────────────────────────────────────────── */

function useRipple() {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  function createRipple(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
    el.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }

  return { ref, createRipple };
}

/* ─── Variant config ────────────────────────────────────────────────────── */

type ButtonVariant =
  | "whatsapp-yellow"    // #f9cc0a bg, dark text — main CTA
  | "whatsapp-dark"      // #171717 bg, yellow text + icon
  | "arrow-white"        // #fafafa bg, dark text + arrow
  | "arrow-yellow"       // #ffbd24 bg, dark text + arrow
  | "arrow-dark"         // #171717 bg, white text + arrow
  | "instagram-cta"      // #1a0e04 bg, white text + Instagram icon
  | "reserve-dark";      // #171717 bg, white text + WhatsApp icon

interface VariantDef {
  base: string;
  hover: string;
  active: string;
  focus: string;
  shadow: string;
  shimmer: boolean;
}

const VARIANTS: Record<ButtonVariant, VariantDef> = {
  "whatsapp-yellow": {
    base: "bg-[#f9cc0a] text-[#1a0e04]",
    hover: "hover:-translate-y-[3px] hover:brightness-[1.04]",
    active: "active:translate-y-[1px] active:brightness-[0.96] active:scale-[0.98]",
    focus: "focus-visible:ring-2 focus-visible:ring-[#f9cc0a] focus-visible:ring-offset-2",
    shadow: "hover:shadow-[0_10px_32px_rgba(249,204,10,0.55)]",
    shimmer: true,
  },
  "whatsapp-dark": {
    base: "bg-[#171717] text-[#ffbd24]",
    hover: "hover:-translate-y-[3px] hover:bg-[#262626]",
    active: "active:translate-y-[1px] active:bg-[#0a0a0a] active:scale-[0.98]",
    focus: "focus-visible:ring-2 focus-visible:ring-[#ffbd24] focus-visible:ring-offset-2",
    shadow: "hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)]",
    shimmer: false,
  },
  "arrow-white": {
    base: "bg-[#fafafa] text-[#171717]",
    hover: "hover:-translate-y-[3px] hover:bg-white",
    active: "active:translate-y-[1px] active:bg-[#f0f0f0] active:scale-[0.98]",
    focus: "focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2",
    shadow: "hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]",
    shimmer: false,
  },
  "arrow-yellow": {
    base: "bg-[#ffbd24] text-[#171717]",
    hover: "hover:-translate-y-[3px] hover:brightness-[1.06]",
    active: "active:translate-y-[1px] active:brightness-[0.95] active:scale-[0.98]",
    focus: "focus-visible:ring-2 focus-visible:ring-[#ffbd24] focus-visible:ring-offset-2",
    shadow: "hover:shadow-[0_10px_32px_rgba(255,189,36,0.5)]",
    shimmer: true,
  },
  "arrow-dark": {
    base: "bg-[#171717] text-[#fafafa]",
    hover: "hover:-translate-y-[3px] hover:bg-[#262626]",
    active: "active:translate-y-[1px] active:bg-[#0a0a0a] active:scale-[0.98]",
    focus: "focus-visible:ring-2 focus-visible:ring-[#fafafa] focus-visible:ring-offset-2",
    shadow: "hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)]",
    shimmer: false,
  },
  "instagram-cta": {
    base: "bg-[#1a0e04] text-white",
    hover: "hover:-translate-y-[3px] hover:bg-[#2a1a08]",
    active: "active:translate-y-[1px] active:bg-[#0e0702] active:scale-[0.98]",
    focus: "focus-visible:ring-2 focus-visible:ring-[#f9cc0a] focus-visible:ring-offset-2",
    shadow: "hover:shadow-[0_10px_28px_rgba(26,14,4,0.5)]",
    shimmer: false,
  },
  "reserve-dark": {
    base: "bg-[#171717] text-[#f2f2f2]",
    hover: "hover:-translate-y-[3px] hover:bg-[#262626]",
    active: "active:translate-y-[1px] active:bg-[#0a0a0a] active:scale-[0.98]",
    focus: "focus-visible:ring-2 focus-visible:ring-[#f2f2f2] focus-visible:ring-offset-2",
    shadow: "hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)]",
    shimmer: false,
  },
};

/* ─── Base classes ──────────────────────────────────────────────────────── */

const BASE_PILL =
  "inline-flex items-center gap-[0.625rem] px-[1.5625rem] py-[0.6875rem] rounded-[1.875rem] cursor-pointer font-['Montserrat',sans-serif] font-bold text-[1rem] tracking-[0.040625rem] whitespace-nowrap select-none outline-none";

const BASE_TRANSITION = `transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]`;

/* ─── Button component ──────────────────────────────────────────────────── */

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export function Button({
  variant,
  children,
  onClick,
  type = "button",
  className = "",
  style,
  disabled = false,
}: ButtonProps) {
  const v = VARIANTS[variant];
  const { ref, createRipple } = useRipple();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    createRipple(e);
    onClick?.(e);
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={[
        BASE_PILL,
        BASE_TRANSITION,
        v.base,
        v.hover,
        v.active,
        v.focus,
        v.shadow,
        v.shimmer ? "btn-shimmer" : "",
        "btn-group btn-ripple-container",
        disabled ? "opacity-50 pointer-events-none" : "",
        className,
      ].join(" ")}
      style={style}
    >
      {children}
    </button>
  );
}

/* ─── ButtonLink — for <a> tags ─────────────────────────────────────────── */

interface ButtonLinkProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ButtonLink({
  variant,
  children,
  href,
  target,
  rel,
  className = "",
  style,
}: ButtonLinkProps) {
  const v = VARIANTS[variant];
  const { ref, createRipple } = useRipple();

  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      target={target}
      rel={rel}
      onClick={(e) => createRipple(e as unknown as React.MouseEvent)}
      className={[
        BASE_PILL,
        BASE_TRANSITION,
        v.base,
        v.hover,
        v.active,
        v.focus,
        v.shadow,
        v.shimmer ? "btn-shimmer" : "",
        "btn-group btn-ripple-container",
        className,
      ].join(" ")}
      style={style}
    >
      {children}
    </a>
  );
}

/* ─── IconButton — circular icon-only buttons ───────────────────────────── */

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: number;
  borderRadius?: string;
  bg?: string;
  hoverBg?: string;
  shadow?: string;
  className?: string;
}

export function IconButton({
  children,
  onClick,
  size = 54,
  borderRadius = "40px",
  bg = "rgba(255,255,255,0.15)",
  hoverBg,
  shadow,
  className = "",
}: IconButtonProps) {
  const { ref, createRipple } = useRipple();
  const widthHeight = typeof size === "number" ? `${size / 16}rem` : size;
  const radius = typeof borderRadius === "number" ? `${borderRadius / 16}rem` : (borderRadius.endsWith("px") ? `${parseFloat(borderRadius) / 16}rem` : borderRadius);

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={(e) => { createRipple(e); onClick?.(); }}
      className={[
        "inline-flex items-center justify-center cursor-pointer outline-none select-none",
        "transition-all duration-200 btn-group btn-ripple-container ease-[cubic-bezier(0.34,1.56,0.64,1)] border-[0.05rem] border-white/20",
        "hover:-translate-y-[0.125rem] hover:scale-[1.08]",
        "active:translate-y-[0.0625rem] active:scale-[0.95]",
        "focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1",
        shadow ? shadow : "hover:shadow-[0_0.375rem_1.125rem_rgba(0,0,0,0.25)]",
        className,
      ].join(" ")}
      style={{
        width: widthHeight,
        height: widthHeight,
        borderRadius: radius,
        backgroundColor: bg,
      }}
    >
      <span className="social-icon inline-flex">{children}</span>
    </button>
  );
}

/* ─── PlayButton — circular play button ────────────────────────────────── */

interface PlayButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: number;
  borderColor?: string;
  className?: string;
}

export function PlayButton({
  children,
  onClick,
  size = 124,
  borderColor = "white",
  className = "",
}: PlayButtonProps) {
  const { ref, createRipple } = useRipple();

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={(e) => { createRipple(e); onClick?.(); }}
      className={[
        "relative inline-flex items-center justify-center bg-[#171717]/80 backdrop-blur-sm rounded-full cursor-pointer ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        "transition-all duration-300 btn-play btn-ripple-container group",
        "hover:scale-[1.1] hover:bg-[#171717] hover:shadow-[0_0_2rem_0_rgba(255,189,36,0.4)]",
        "active:scale-[0.95]",
        "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
        className,
      ].join(" ")}
      style={{
        width: `${size / 16}rem`,
        height: `${size / 16}rem`,
        border: `0.15rem solid ${borderColor}`,
      }}
    >
      {/* Interactive pulse effect behind button */}
      <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20 duration-1000" />
      
      {/* Icon */}
      <span className="relative z-10 pl-[0.5rem] transition-transform duration-300 group-hover:scale-110">
        {children}
      </span>
      
      {/* Outer ring */}
      <span
        className="absolute inset-[-0.5rem] rounded-full pointer-events-none border border-white/20 group-hover:border-white/40 transition-colors duration-300"
        aria-hidden
      />
    </button>
  );
}

/* ─── SmallButton — card arrow, etc. ───────────────────────────────────── */

interface SmallButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: number;
  className?: string;
}

export function SmallButton({ children, onClick, size = 36, className = "" }: SmallButtonProps) {
  const { ref, createRipple } = useRipple();

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={(e) => { createRipple(e); onClick?.(); }}
      className={[
        "inline-flex items-center justify-center bg-[#171717] cursor-pointer outline-none ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        "transition-all duration-200 btn-group btn-ripple-container",
        "hover:bg-[#262626] hover:scale-[1.12] hover:-translate-y-[0.125rem]",
        "active:scale-[0.92] active:bg-[#0a0a0a]",
        "focus-visible:ring-2 focus-visible:ring-[#ffbd24] focus-visible:ring-offset-1",
        "hover:shadow-[0_0.375rem_1rem_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
      style={{
        width: `${size / 16}rem`,
        height: `${size / 16}rem`,
        borderRadius: "1.125rem",
      }}
    >
      <span className="arrow-icon inline-flex">{children}</span>
    </button>
  );
}
