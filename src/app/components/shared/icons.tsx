import React from "react";
import svgPaths from "../../../imports/App-1/svg-6pmkjbv2xx";
import { gridBase } from "../code/constants";

export function WhatsAppIcon({ fill = "black", size = 25 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <path d={svgPaths.p1c760700} fill={fill} />
    </svg>
  );
}

export function ArrowRightCircleIcon({ stroke = "#171717", size = 24 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <path d={svgPaths.p2c1b4e80} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function StarIcon({ fill = "black", size = 25 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <path d={svgPaths.p17169400} fill={fill} />
    </svg>
  );
}

export function PlayIcon({ fill = "white", stroke = "white", size = 54 }: { fill?: string; stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none">
      <path d={svgPaths.p29433d00} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </svg>
  );
}

export function PlayIconYellow({ size = 54 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none">
      <path d="M19 14L39 27L19 40V14Z" fill="#FFBD24" stroke="#FFBD24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </svg>
  );
}

export function InstagramIcon({ stroke = "#F9CC0A", size = 22 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <path d={svgPaths.pa2a580} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p1a407680} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M16.0417 5.95833H16.0508" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

export function SearchIcon({ stroke = "white", size = 18 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.pef8c000} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function PhoneIcon({ stroke = "white", size = 18 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.p2c7fea00} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function TrendingUpIcon({ stroke = "#171717", size = 55 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size * 0.536} viewBox="0 0 52.4167 29.5" fill="none">
      <path d={svgPaths.p18c4d500} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function LocationIcon({ stroke = "#FFBD24", size = 25 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size + 1} viewBox="0 0 25 26" fill="none">
      <path d={svgPaths.p34e76400} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
      <path d={svgPaths.p18f52100} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
    </svg>
  );
}

export function ArrowRightIcon({ stroke = "#FFBD24", size = 16 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3.33333 8H12.6667" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p1d405500} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

export function LogoLightSvg({ width = 364, height = 206 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 364 206" fill="none">
      <g clipPath="url(#clip-logo-light)">
        <path clipRule="evenodd" d={svgPaths.p7d03280} fill="white" fillRule="evenodd" />
        <path d={svgPaths.p48c8000} fill="white" />
        <path d={svgPaths.p8904870} fill="white" />
      </g>
      <defs>
        <clipPath id="clip-logo-light">
          <rect fill="white" width="364" height="206" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LogoDarkSvg({ width = 178, height = 100 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 177.57 100.38" fill="none">
      <g clipPath="url(#clip-logo-dark)">
        <path clipRule="evenodd" d={svgPaths.p2fb41a00} fill="#171717" fillRule="evenodd" />
        <path d={svgPaths.p16540300} fill="#171717" />
        <path d={svgPaths.p13423980} fill="#171717" />
      </g>
      <defs>
        <clipPath id="clip-logo-dark">
          <rect fill="white" width="177.57" height="100.38" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconReddraftCevada() {
  return (
    <svg viewBox="0 0 508 570" fill="none" className="w-full h-full">
      <g>
        <path clipRule="evenodd" d={svgPaths.p31762b00} fill="#992785" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p27040080} fill="#E71A84" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p36e7a800} fill="#992785" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pc0e7c00} fill="#E71A84" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p27167500} fill="#E71A84" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p342aefb0} fill="#992785" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3ba9c500} fill="#992785" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pcc29900} fill="#E71A84" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pab32280} fill="#E71A84" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p18edee00} fill="#992785" fillRule="evenodd" />
      </g>
    </svg>
  );
}

export function IconReddraftGrape() {
  return (
    <svg viewBox="0 0 472.224 528.758" fill="none" className="w-full h-full">
      <g>
        <path clipRule="evenodd" d={svgPaths.p4bc1bc0} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3ead0f00} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p389cbc00} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p304af600} fill="#E71A84" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p28113000} fill="#E71A84" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p13e47600} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p93cf800} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p366c0700} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1a792a00} fill="#E71A84" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p26817900} fill="#E71A84" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1163fcc0} fill="#E71A84" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1ffa0b80} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1077f000} fill="#F1A3C8" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p70d8a80} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pcb4d480} fill="#F1A3C8" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p14570700} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p372e2200} fill="#F1A3C8" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p12d4ab00} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pab7aa00} fill="#F1A3C8" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1b8e580} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3280bf80} fill="#F1A3C8" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pc71d280} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p2ef7900} fill="#F1A3C8" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p18b38780} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p542d470} fill="#F1A3C8" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p19fa3cc0} fill="#7A1265" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pf488280} fill="#F1A3C8" fillRule="evenodd" />
      </g>
    </svg>
  );
}

export function FooterInstagramIcon({ stroke = "#624E00", size = 26 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
      <path d={svgPaths.p396d0f00} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p194cfe80} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M18.9583 7.04167H18.9692" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

export function FooterFacebookIcon({ stroke = "#624E00", size = 26 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
      <path d={svgPaths.p69a9400} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

export function FooterTwitterIcon({ stroke = "#624E00", size = 26 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
      <path d={svgPaths.p20847630} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p3fc1b480} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

export function EmailIcon({ stroke = "#171717", size = 13 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 11.9167 9.75" fill="none">
      <path d={svgPaths.p12497900} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
      <path d={svgPaths.p5404f00} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
    </svg>
  );
}

export function PhoneFooterIcon({ stroke = "#171717", size = 13 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 11.8564 11.8778" fill="none">
      <path d={svgPaths.p25a65c00} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
    </svg>
  );
}
