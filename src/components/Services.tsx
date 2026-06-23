/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ComponentType } from "react";
import { SERVICES } from "../data";
import { Service } from "../types";
import {
  Zap,
  Droplet,
  Flame,
  Network,
  CloudLightning,
  Wind,
  ArrowRight,
  X,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const IconMap: { [key: string]: ComponentType<{ className?: string }> } = {
  Zap: Zap,
  Droplet: Droplet,
  Flame: Flame,
  Network: Network,
  CloudLightning: CloudLightning,
  Wind: Wind,
};

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const handleConsultService = (serviceId: string) => {
    setActiveService(null);
    // Scroll to estimator and preset values if needed
    const element = document.getElementById("orcamento");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Find input or trigger state change in estimator
      setTimeout(() => {
        const selectElem = document.getElementById(
          "type-selector",
        ) as HTMLSelectElement;
        if (selectElem) {
          if (serviceId === "ppci" || serviceId === "gas") {
            selectElem.value = "reformas";
          } else if (
            serviceId === "eletrica" ||
            serviceId === "spda" ||
            serviceId === "cftv_cabeamento"
          ) {
            selectElem.value = "comercial";
          } else if (serviceId === "hidrossanitario") {
            selectElem.value = "residencial";
          }
          // Dispatch change event to update state
          selectElem.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 400);
    }
  };

  return (
    <section
      id="servicos"
      className="py-24 bg-[#121414] relative overflow-hidden"
    >
      {/* Decorative Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="flex flex-col space-y-4 max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-brand-cyan" />
              <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase">
                SERVIÇOS TÉCNICOS ESPECIALIZADOS
              </span>
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
              NOSSOS{" "}
              <span className="text-brand-cyan">PRINCIPAIS SERVIÇOS</span>
            </h2>
            <p className="font-sans text-gray-400 text-sm font-light">
              Engenharia civil de ponta concebida com metodologias ágeis e
              projetos integrados em BIM para afastar riscos orçamentários
              estruturais e burocráticos.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="font-mono text-[9px] text-[#b7d2db] tracking-widest uppercase border border-[#343535] px-4 py-2">
              SOLUÇÕES INTEGRADAS COM ART
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => {
            const IconComp = IconMap[s.icon] || Zap;
            return (
              <div
                key={s.id}
                onClick={() => setActiveService(s)}
                className="group relative bg-[#1b1c1c]/45 hover:bg-[#1b1c1c]/90 border border-[#343535] hover:border-brand-cyan/40 p-8 transition-all duration-300 flex flex-col justify-between h-80 cursor-pointer shadow-xl relative overflow-hidden"
              >
                {/* Structural Bar decoration */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-transparent via-transparent to-transparent group-hover:from-brand-cyan group-hover:via-[#59b2b8] group-hover:to-transparent transition-all duration-500" />

                {/* Background glow behind card on hover */}
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-cyan/0 group-hover:bg-brand-cyan/2 blur-xl rounded-full transition-all duration-500" />

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 bg-[#121414] border border-[#343535] group-hover:border-brand-cyan/55 flex items-center justify-center mb-6 transition-all duration-300">
                    <IconComp className="w-6 h-6 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="font-sans text-lg font-bold text-white group-hover:text-brand-cyan transition-colors uppercase tracking-tight mb-3">
                    {s.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3 font-light">
                    {s.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-brand-cyan text-xs font-mono font-bold tracking-wider mt-4">
                  <span>SABER MAIS</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal / Dialog */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-xs select-none">
          <div
            className="relative w-full max-w-2xl bg-[#1b1c1c] border border-brand-cyan/45 p-8 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner Blueprint brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-cyan" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-cyan" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-cyan" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-cyan" />

            {/* Close Button */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#121414] border border-brand-cyan flex items-center justify-center shrink-0">
                {(() => {
                  const ModalIcon = IconMap[activeService.icon] || Zap;
                  return <ModalIcon className="w-5 h-5 text-brand-cyan" />;
                })()}
              </div>
              <div>
                <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase block">
                  DETALHAMENTO TÉCNICO DE SERVIÇO
                </span>
                <h3 className="font-sans text-xl font-bold uppercase text-white leading-none">
                  {activeService.detailedTitle}
                </h3>
              </div>
            </div>

            <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6 font-light">
              {activeService.detailedDesc}
            </p>

            <div className="h-[1px] w-full bg-[#343535] mb-6" />

            {/* Benefits detail */}
            <div className="mb-6">
              <h4 className="font-mono text-[#b7d2db] text-[10px] uppercase tracking-widest mb-4 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                <span>BENEFÍCIOS E ENTREGAS INCLUSAS</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeService.benefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-2 text-xs text-gray-400"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5 animate-pulse" />
                    <span className="leading-relaxed font-light">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer CTC button */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4 border-t border-[#343535]">
              <button
                onClick={() => handleConsultService(activeService.id)}
                className="flex-1 bg-brand-cyan hover:bg-[#59b2b8] text-black font-mono text-xs font-bold uppercase tracking-wider py-4 transition-all text-center flex items-center justify-center space-x-2 cursor-pointer rounded-none"
              >
                <span>SIMULAR ORÇAMENTO DESTE SETOR</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => setActiveService(null)}
                className="border border-[#343535] hover:bg-white/5 text-gray-400 hover:text-white font-mono text-xs uppercase py-4 px-6 transition-all cursor-pointer rounded-none"
              >
                <span>FECHAR</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
