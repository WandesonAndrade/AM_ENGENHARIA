/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SVGProps } from "react";
("");
/**
 * High-fidelity SVG of the AM Engenharia logo mark.
 * Recreates the intertwined geometric 'A' and 'M' in dynamic, layered teal gradients.
 */
export function LogoIcon({
  className = "w-10 h-10",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Luminous Teal/Cyan Gradient for the Highlighted 'A' ribbon */}
        <linearGradient id="logoTealLight" x1="10%" y1="0%" x2="90%" y2="80%">
          <stop offset="0%" stopColor="#00E3E6" />
          <stop offset="100%" stopColor="#008B94" />
        </linearGradient>

        {/* Deep Ocean / Shadow Blue for the 'M' structure */}
        <linearGradient id="logoTealDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A7C8C" />
          <stop offset="50%" stopColor="#0D4C5C" />
          <stop offset="100%" stopColor="#062633" />
        </linearGradient>

        {/* Foundation Base Ground Solid Teal-Grey */}
        <linearGradient id="logoBaseGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#052E3B" />
          <stop offset="100%" stopColor="#091E26" />
        </linearGradient>

        <filter id="subtleShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="4"
            floodColor="#000000"
            floodOpacity="0.35"
          />
        </filter>
      </defs>

      <g filter="url(#subtleShadow)">
        {/* 1. Base Horizontal Beam Foundation (AM base plate) */}
        <path
          d="M10 135 L170 135 L180 148 L15 148 Z"
          fill="url(#logoBaseGrad)"
        />

        {/* 2. Stylized 'M' Segment (Right Pillar and Slant) */}
        {/* Recreating the dark, blocky, metallic right part of the logo */}
        <path
          d="M106 72 L132 108 L132 135 L121 135 L121 118 L104 95 L95 106 L95 135 L70 135 L98 83 Z"
          fill="url(#logoTealDark)"
          opacity="0.95"
        />

        {/* Specific 3D fold on the M right leg to match the metallic shadow */}
        <path
          d="M132 108 L170 108 L170 135 L132 135 Z"
          fill="url(#logoTealDark)"
        />

        {/* 3. Sleek 'A' Segment (Sleek folded blue ribbon) */}
        {/* Left ascending leg of A */}
        <path d="M71 135 L20 135 L58 60 L108 60 Z" fill="url(#logoTealLight)" />

        {/* Curved internal arch connector of A (overlapping the base) */}
        <path
          d="M40 120 C60 110 80 110 98 120 L88 130 C75 122 60 122 47 130 Z"
          fill="url(#logoTealLight)"
        />

        {/* Intersecting loop folding upward representing the premium ribbon */}
        <path
          d="M101 60 L85 92 L105 118 L124 92 Z"
          fill="url(#logoTealLight)"
        />
      </g>
    </svg>
  );
}

/**
 * Full Lockup: SVG Icon + Wordmark + Tagline.
 * Matches the identity of AM Engenharia - Concretizando Sonhos.
 */
export function LogoFull({
  className = "",
  light = true,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`flex items-center space-x-3 text-left ${className}`}>
      <LogoIcon className="w-11 h-11 shrink-0" />
      <div className="flex flex-col justify-center leading-none">
        <h1
          className={`font-sans tracking-tight font-black uppercase text-lg ${light ? "text-white" : "text-[#0a222d]"}`}
        >
          AM <span className="text-[#00b4b8]">ENGENHARIA</span>
        </h1>
        <p
          className={`font-mono uppercase tracking-[0.25em] text-[8px] mt-0.5 leading-none ${light ? "text-[#b7d2db]" : "text-gray-500"}`}
        >
          CONCRETIZANDO SONHOS
        </p>
      </div>
    </div>
  );
}
