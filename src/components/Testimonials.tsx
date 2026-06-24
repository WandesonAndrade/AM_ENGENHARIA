/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from "../data";
import { Quote, Star, Award, ShieldCheck } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-24 bg-[#121414] relative overflow-hidden border-b border-[#1f2020]"
    >
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-brand-cyan/[0.01] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-[1px] bg-brand-cyan" />
            <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase">
              CREDIBILIDADE COMPROVADA
            </span>
            <span className="w-8 h-[1px] bg-brand-cyan" />
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none text-center">
            O QUE DIZEM <span className="text-brand-cyan">NOSSOS CLIENTES</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 font-light">
            A opinião de quem confiou suas fundações, lajes e orçamentos à nossa
            governança técnica de engenharia. Transparência construída dia após
            dia.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#1b1c1c]/45 border border-[#343535] p-8 relative flex flex-col justify-between hover:border-brand-cyan/35 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Giant quote background symbol */}
              <div className="absolute top-4 right-4 text-gray-800 opacity-20 pointer-events-none group-hover:scale-105 transition-transform">
                <Quote className="w-12 h-12 text-brand-cyan fill-current" />
              </div>

              {/* Top Section: Quote and Rating */}
              <div className="space-y-4">
                {/* 5-Star Row */}
                <div className="flex space-x-1.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-brand-cyan fill-current"
                    />
                  ))}
                </div>

                <p className="font-sans text-xs md:text-sm text-gray-300 italic leading-relaxed relative font-light">
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom Section: Author and references */}
              <div className="flex items-center space-x-4 pt-6 border-t border-[#1f2020] mt-8">
                {/* Professional Headshot */}
                <div className="w-12 h-12 shrink-0">
                  <OptimizedImage
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full rounded-none border border-[#343535] group-hover:border-brand-cyan/70 transition-colors object-cover select-none animate-fade-in"
                  />
                </div>

                <div className="space-y-0.5">
                  <h4 className="font-sans font-bold text-sm text-white">
                    {t.name}
                  </h4>
                  <p className="font-sans text-[10px] text-gray-400 font-light">
                    {t.role}
                  </p>
                  <div className="flex items-center space-x-1 font-mono text-[9px] text-brand-cyan uppercase mt-1">
                    <ShieldCheck className="w-3 h-3 shrink-0" />
                    <span className="truncate max-w-[150px]">
                      {t.projectAssoc}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust badges row */}
        <div className="mt-16 pt-12 border-t border-[#1f2020] grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
          <div>
            <div className="font-sans font-extrabold text-brand-cyan text-sm uppercase">
              CREA CERTIFICADO
            </div>
            <p className="font-sans text-[10px] text-gray-500 mt-1 font-light">
              Anotações de Responsabilidade Técnica (ART) registradas em todos
              os layouts.
            </p>
          </div>
          <div>
            <div className="font-sans font-extrabold text-brand-cyan text-sm uppercase">
              ENTREGA SEGURA
            </div>
            <p className="font-sans text-[10px] text-gray-500 mt-1 font-light">
              Seguro completo contra avarias estruturais civis e
              responsabilidade a terceiros.
            </p>
          </div>
          <div>
            <div className="font-sans font-extrabold text-brand-cyan text-sm uppercase">
              AVALIAÇÃO 5.0
            </div>
            <p className="font-sans text-[10px] text-gray-500 mt-1 font-light text-center">
              Classificação máxima unânime em Google Negócios e auditorias
              independentes.
            </p>
          </div>
          <div>
            <div className="font-sans font-extrabold text-brand-cyan text-sm uppercase">
              SISTEMA BIM
            </div>
            <p className="font-sans text-[10px] text-gray-500 mt-1 font-light text-center">
              Compatibilização 3D de fiação estrutural e tubos com tolerância
              zero de erro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
