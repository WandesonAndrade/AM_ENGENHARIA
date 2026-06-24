/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImgHTMLAttributes } from "react";

/**
 * High-fidelity logo mark of AM Engenharia.
 * Uses the requested high-quality custom brand icon image.
 */
export function LogoIcon({
  className = "w-10 h-10",
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="./public/icone.png"
      alt="AM Engenharia Logo"
      className={`${className} object-contain`}
      referrerPolicy="no-referrer"
      {...props}
    />
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
          className={`font-sans tracking-tight font-black uppercase text-lg ${light ? "text-white" : "text-brand-dark"}`}
        >
          AM <span className="text-brand-cyan">ENGENHARIA</span>
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
