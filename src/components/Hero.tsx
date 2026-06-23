/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HERO_BG_IMAGE } from '../data';
import { ArrowRight, HardHat, ShieldCheck, FileCheck, Award } from 'lucide-react';

export default function Hero() {
  const handleScrollToEstimate = () => {
    const element = document.getElementById('orcamento');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#121414] overflow-hidden flex items-center pt-24 lg:pt-32 pb-16">
      {/* Background with Dark Multi-grade Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_IMAGE}
          alt="Canteiro de obras de engenharia civil"
          className="w-full h-full object-cover object-center opacity-45 scale-105 select-none"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-[#121414]/85 to-[#121414]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121414] via-[#121414]/90 to-transparent" />
        {/* Grid Line Accents */}
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-brand-cyan/25 to-transparent" />
        <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-[#0a5c66]/25 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Hero Copy - Left 7 columns */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-[2px] bg-brand-cyan" />
            <span className="font-mono text-[10px] md:text-xs font-bold text-brand-cyan tracking-widest uppercase">
              ENGENHARIA E GESTÃO DE ALTO PADRÃO
            </span>
          </div>

          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tighter text-white drop-shadow-xl mt-2 select-none">
            Concretizando <br />
            Seus Sonhos <br />
            <span className="text-brand-cyan relative inline-block">
              EM ESTRUTURAS
              <span className="absolute bottom-1.5 left-0 w-full h-2 bg-brand-cyan/15 -z-10" />
            </span> <br />
            DE EXCELÊNCIA.
          </h1>

          <p className="font-sans text-base md:text-lg text-[#e3e2e2] max-w-xl leading-relaxed font-light">
            Previsibilidade técnica, segurança milimétrica e governança integrada para o seu projeto de alto padrão. Alinhamento perfeito com a marca e compromisso inflexível com a integridade física de sua obra.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={handleScrollToEstimate}
              className="bg-brand-cyan hover:bg-[#00d0d5] text-black font-mono text-xs font-bold uppercase tracking-wider px-8 py-5 transition-all duration-300 transform active:scale-95 flex items-center justify-center space-x-3 shadow-lg shadow-brand-cyan/15 cursor-pointer"
            >
              <span>SOLICITAR ORÇAMENTO BLINDADO</span>
              <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
            </button>

            <button
              onClick={handleScrollToPortfolio}
              className="border border-[#0a5c66]/60 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider px-8 py-5 transition-all duration-200 backdrop-blur-xs flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>VER PORTFÓLIO DE OBRAS</span>
            </button>
          </div>

          {/* Horizontal Divider Line */}
          <div className="h-[1px] w-full bg-linear-to-r from-[#343535] to-transparent my-4" />

          {/* Quick Pillars list */}
          <div className="grid grid-cols-3 gap-4 text-[#e3e2e2]">
            <div className="flex items-start space-x-2.5">
              <ShieldCheck className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-xs">Garantia Técnica</h4>
                <p className="font-sans text-[10px] text-gray-400">ART assinada em 100% dos serviços</p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <FileCheck className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-xs">Custo Controlado</h4>
                <p className="font-sans text-[10px] text-gray-400">Previsibilidade contratual estrita</p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <Award className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-xs">Modelagem BIM</h4>
                <p className="font-sans text-[10px] text-gray-400 font-light">Zero desperdício com projetos 3D</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Technical Board - Right 5 columns */}
        <div className="lg:col-span-5 h-full flex items-center justify-center">
          <div className="w-full relative max-w-sm rounded-none border border-[#343535] bg-[#121414]/85 backdrop-blur-md p-8 shadow-2xl relative overflow-hidden group">
            {/* Corner Bracket decorations simulating technical blue print */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-cyan" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-cyan" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-cyan" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-cyan" />

            {/* Glowing Accent */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-cyan/10 blur-xl rounded-full" />

            <div className="relative z-10 flex flex-col space-y-6">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-ping shrink-0" />
                <span className="font-mono text-[10px] tracking-widest text-[#dbc2b0] uppercase">
                  MÉTRICAS ATUALIZADAS • 2026
                </span>
              </div>

              {/* Counter 1 */}
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="font-sans text-5xl font-black text-white tracking-tight">
                    +40
                  </span>
                  <span className="font-sans text-xl font-bold text-brand-cyan">OBRAS</span>
                </div>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  Residenciais, corporativas e industriais concluídas sob nossa rígida tutela técnica.
                </p>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[#343535]" />

              {/* Counter 2 */}
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="font-sans text-5xl font-black text-white tracking-tight">
                    15k
                  </span>
                  <span className="font-sans text-lg font-bold text-brand-cyan">M² CONSTRUÍDOS</span>
                </div>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  De cálculo, acompanhamento de fundações e superestruturas executadas com primor físico.
                </p>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[#343535]" />

              {/* Counter 3 */}
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="font-sans text-5xl font-black text-white tracking-tight">
                    100%
                  </span>
                  <span className="font-sans text-sm font-semibold text-green-400 uppercase tracking-widest">
                    FIDELIDADE AO PRAZO
                  </span>
                </div>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  Compromisso sagrado: cronograma de materiais e operários fiscalizado em tempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
