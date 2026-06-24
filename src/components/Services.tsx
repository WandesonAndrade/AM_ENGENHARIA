/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ComponentType } from "react";
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
  Activity,
  ChevronRight,
  ShieldCheck,
  Cpu,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const IconMap: { [key: string]: ComponentType<{ className?: string }> } = {
  Zap: Zap,
  Droplet: Droplet,
  Flame: Flame,
  Network: Network,
  CloudLightning: CloudLightning,
  Wind: Wind,
};

// High-impact sub-disciplines and standard references for commercial appeal
const SERVICE_SUB_SPECIALTIES: Record<string, string[]> = {
  eletrica: ["Subestações Unitárias", "NBR 5410", "Estudos de Carga & Demanda"],
  hidrossanitario: ["Dimensionamento de Pressão", "Redes Prediais", "NBR 5626"],
  ppci: [
    "Aprovações de Projetos",
    "Sistemas de Hidrantes",
    "Instrução Técnica CB",
  ],
  cftv_cabeamento: ["Câmeras de Segurança", "Racks de Telecom", "Fibra Óptica"],
  spda: ["Laudo Técnico NBR 5419", "Captores Franklin", "Gaiolas Faraday"],
  gas: ["Centrais de Gás Prediais", "Tubulação Cobre/Pealpe", "NBR 13523"],
};

interface ServicesProps {
  showMobile?: boolean;
  setShowMobile?: (show: boolean) => void;
}

export default function Services({ showMobile, setShowMobile }: ServicesProps) {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [internalShowMobile, setInternalShowMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isExpanded = showMobile !== undefined ? showMobile : internalShowMobile;
  const toggleExpanded = () => {
    if (setShowMobile) {
      setShowMobile(!isExpanded);
    } else {
      setInternalShowMobile(!isExpanded);
    }
  };

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
      className="py-24 bg-[#121414] relative overflow-hidden border-b border-[#242525]"
    >
      {/* Decorative Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-cyan/2 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 space-y-6 lg:space-y-0">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-brand-cyan" />
              <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase">
                DIRETRIZES TÉCNICAS E PROJETOS BIM
              </span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
              NOSSAS SOLUÇÕES EM{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-[#59b2b8] to-brand-teal">
                ENGENHARIA INTEGRADA
              </span>
            </h2>
            <p className="font-sans text-gray-400 text-xs md:text-sm font-light max-w-xl leading-relaxed">
              Desenvolvemos projetos complementares de alto nível, blindados de
              incompatibilidades físicas por meio da metodologia BIM, garantindo
              a certificação técnica e aprovação legal das obras.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-col lg:items-end gap-3 shrink-0">
            <span className="font-mono text-[9px] text-[#b7d2db] tracking-widest uppercase border border-[#343535] px-4 py-2 bg-black/30 font-semibold">
              ✓ CAD, BIM & REVIT WORKFLOW
            </span>
            <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase border border-[#24a5af]/40 px-4 py-2 bg-brand-cyan/5 font-semibold">
              ✓ REGISTRO CREA: PI, MG, SP, PR & MA com ART
            </span>
          </div>
        </div>

        {/* Services Grid: Optimized to 3-column layout to fit 6 services beautifully as 2 balanced rows */}
        {isMobile && !isExpanded ? (
          <div className="flex flex-col items-center justify-center py-12 px-6 bg-[#1b1c1c]/20 border border-dashed border-[#343535] text-center space-y-6">
            <div className="w-16 h-16 bg-[#121414] border border-brand-cyan/30 flex items-center justify-center shadow-md">
              <Cpu className="w-6 h-6 text-brand-cyan animate-pulse" />
            </div>
            <div className="space-y-2 max-w-sm">
              <h3 className="font-sans text-lg font-bold text-white uppercase tracking-tight">
                PROJETOS BIM & ENGENHARIA ESPECIALIZADA
              </h3>
              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                Clique abaixo para visualizar o catálogo completo de soluções
                integradas da AM Engenharia.
              </p>
            </div>
            <button
              onClick={toggleExpanded}
              className="font-mono text-xs uppercase tracking-widest px-8 py-4 bg-brand-cyan text-black hover:bg-brand-cyan/90 transition-all duration-300 font-bold cursor-pointer flex items-center space-x-2 shadow-[0_0_20px_rgba(64,165,170,0.15)]"
            >
              <span>CONHECER NOSSAS SOLUÇÕES</span>
              <ChevronDown className="w-4 h-4 text-black animate-bounce" />
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {SERVICES.map((s, idx) => {
                const IconComp = IconMap[s.icon] || Zap;
                const subSpecialties = SERVICE_SUB_SPECIALTIES[s.id] || [];

                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveService(s)}
                    className="group relative bg-[#1b1c1c]/35 hover:bg-[#1b1c1c]/80 border border-[#343535] hover:border-brand-cyan/50 p-6 md:p-8 transition-all duration-300 flex flex-col justify-between h-[360px] cursor-pointer shadow-xl overflow-hidden"
                  >
                    {/* Structural corner styling overlays (inspired by bim design software templates) */}
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/10 group-hover:border-brand-cyan/40" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/10 group-hover:border-brand-cyan/40" />
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/10 group-hover:border-brand-cyan/40" />
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/10 group-hover:border-brand-cyan/40" />

                    {/* Top structural accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-teal transition-all duration-500" />

                    {/* Visual Background technical ID indicator */}
                    <div className="absolute right-4 top-4 font-mono text-[28px] font-black text-white/5 group-hover:text-brand-cyan/8 transition-colors select-none">
                      [{String(idx + 1).padStart(2, "0")}]
                    </div>

                    <div>
                      {/* Icon Box */}
                      <div className="w-12 h-12 bg-[#121414] border border-[#343535] group-hover:border-brand-cyan/50 flex items-center justify-center mb-6 transition-all duration-300 shadow-md">
                        <IconComp className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Title and Short Description */}
                      <div className="space-y-2">
                        <h3 className="font-sans text-lg md:text-xl font-bold text-white group-hover:text-brand-cyan transition-colors uppercase tracking-tight">
                          {s.title}
                        </h3>
                        <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3 font-light pb-4 border-b border-[#242525]">
                          {s.description}
                        </p>
                      </div>

                      {/* Quick features list (Badges of Technical scope) */}
                      <div className="mt-4 flex flex-wrap gap-1">
                        {subSpecialties.map((spec) => (
                          <span
                            key={spec}
                            className="font-mono text-[9px] bg-black/45 border border-white/5 hover:border-brand-cyan/30 text-gray-300 hover:text-white px-2 py-0.5 uppercase tracking-tight transition-colors"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer interactive trigger link */}
                    <div className="flex items-center justify-between text-brand-cyan group-hover:text-white pt-4 mt-2">
                      <div className="flex items-center space-x-2 text-[10px] font-mono font-bold tracking-widest uppercase">
                        <span>SABER MAIS SOBRE {s.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-2 transition-transform duration-300 text-brand-cyan" />
                      </div>
                      <span className="font-mono text-[8px] text-gray-600 group-hover:text-brand-cyan/50 uppercase">
                        AM.BIM // ART_ID
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {isMobile && isExpanded && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={toggleExpanded}
                  className="font-mono text-xs uppercase tracking-widest px-8 py-4 bg-[#1b1c1c]/60 hover:bg-brand-cyan hover:text-black text-brand-cyan border border-brand-cyan/30 hover:border-transparent transition-all duration-300 cursor-pointer flex items-center space-x-2.5 shadow-[0_0_15px_rgba(64,165,170,0.05)] hover:shadow-[0_0_20px_rgba(64,165,170,0.2)]"
                >
                  <span>OCULTAR SOLUÇÕES</span>
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Interactive Detail Modal / Dialog */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md select-none animate-fade-in"
          onClick={() => setActiveService(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#1b1c1c] border border-brand-cyan/45 p-6 md:p-8 shadow-2xl overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner Blueprint brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-cyan" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-cyan" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-cyan" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-cyan" />

            {/* Background scanner line overlay decoration */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-cyan/20 animate-scan pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-cyan hover:bg-white/5 transition-colors focus:outline-none cursor-pointer border border-[#343535] hover:border-brand-cyan"
              aria-label="Fechar modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-[#121414] border border-brand-cyan/70 flex items-center justify-center shrink-0 shadow-lg">
                {(() => {
                  const ModalIcon = IconMap[activeService.icon] || Zap;
                  return <ModalIcon className="w-6 h-6 text-brand-cyan" />;
                })()}
              </div>
              <div>
                <span className="font-mono text-[9px] text-brand-cyan/70 tracking-widest uppercase block font-bold">
                  DIRETRIÇÕES TÉCNICAS E ENGENHARIA DE DETALHAMENTO
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase text-white leading-tight">
                  {activeService.detailedTitle}
                </h3>
              </div>
            </div>

            {/* Modal Description */}
            <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed mb-6 font-light">
              {activeService.detailedDesc}
            </p>

            <div className="h-[1px] w-full bg-[#343535] mb-6 relative">
              <span className="absolute top-1/2 left-6 -translate-y-1/2 bg-[#1b1c1c] px-3 font-mono text-[8px] text-gray-500 uppercase tracking-widest">
                ESCOPO EXECUTIVO
              </span>
            </div>

            {/* Benefits detail checklist - Commercial values */}
            <div className="mb-8">
              <h4 className="font-mono text-brand-cyan text-[10px] uppercase tracking-widest mb-4 flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
                <span>BENEFÍCIOS E ENTREGAS INCLUSAS NO CONTRATO</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {activeService.benefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-2.5 text-xs text-gray-400 p-2.5 bg-black/25 border border-[#242525]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="leading-snug font-light text-gray-300">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer CTC call to action button */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-5 border-t border-[#343535]">
              <button
                onClick={() => handleConsultService(activeService.id)}
                className="flex-1 bg-brand-cyan hover:bg-[#59b2b8] text-black font-mono text-xs font-bold uppercase tracking-wider py-4 transition-all text-center flex items-center justify-center space-x-2 cursor-pointer rounded-none border border-brand-cyan shadow-md focus:outline-none"
              >
                <span>SIMULAR ORÇAMENTO DESTE SETOR</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => setActiveService(null)}
                className="border border-[#343535] hover:border-brand-cyan hover:bg-white/5 text-gray-400 hover:text-white font-mono text-xs uppercase py-4 px-6 transition-all cursor-pointer rounded-none"
              >
                <span>FECHAR DETALHES</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
