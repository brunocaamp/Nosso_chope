import React from 'react';
import { Parallax } from 'react-scroll-parallax';

export interface ScrollParallaxProps {
  children: React.ReactNode;
  /** Speed of parallax. Negative for opposite direction */
  speed?: number;
  /** Array of 2 values, [start, end]. e.g. ['-20px', '20px'] */
  translateY?: [string | number, string | number];
  /** Array of 2 values, [start, end]. */
  translateX?: [string | number, string | number];
  /** Array of 2 values, [start, end]. e.g. [0.8, 1.2] */
  scale?: [number, number];
  /** Array of 2 values, [start, end]. e.g. [0, 1] */
  opacity?: [number, number];
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollParallax({
  children,
  speed,
  translateY,
  translateX,
  scale,
  opacity,
  className = "",
  style,
}: ScrollParallaxProps) {
  return (
    <Parallax
      speed={speed}
      translateY={translateY}
      translateX={translateX}
      scale={scale}
      opacity={opacity}
      className={className}
      style={style}
    >
      {children}
    </Parallax>
  );
}
