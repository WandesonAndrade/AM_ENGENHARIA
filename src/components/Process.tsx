/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { METHOD_STEPS } from '../data';

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-[#0d0e0e] relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/2 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="flex items-center space-x-2 justify-center">
            <span className="w-6 h-[1.5px] bg-brand-cyan" />
            <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase">
              METODOLOGIA EXECUTIVA INFALÍVEL
            </span>
            <span className="w-6 h-[1.5px] bg-brand-cyan" />
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
            NOSSO MÉTODO EM <span className="text-brand-cyan">4 PASSOS</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 font-light">
            A garantia de previsibilidade fiscal e integridade mecânica de uma obra não é sorte, é fluxo processual. Conheça nossa esteira completa de engenharia organizada.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Only visible on large screens) */}
          <div className="hidden lg:block absolute top-[28%] left-[10%] right-[10%] h-[1.5px] bg-linear-to-r from-brand-cyan/25 via-brand-teal/30 to-brand-cyan/25 -z-10" />

          {METHOD_STEPS.map((s, idx) => (
            <div
              key={s.step}
              className="relative bg-[#1b1c1c]/40 border border-[#343535] p-8 hover:border-brand-cyan/35 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1.5"
            >
              {/* Massive background watermark number */}
              <div className="absolute -top-6 -right-4 font-mono text-[92px] font-black text-brand-cyan/6 select-none leading-none group-hover:scale-105 group-hover:text-brand-cyan/10 transition-all duration-500">
                {s.step}
              </div>

              {/* Progress Bullet */}
              <div className="w-8 h-8 rounded-none border border-brand-cyan bg-[#121414] text-brand-cyan font-mono text-xs font-bold flex items-center justify-center mb-6 relative">
                {s.step}
                {/* Visual pulse for current highlight */}
                {idx === 1 && (
                  <span className="absolute inset-0 border border-brand-cyan/50 animate-ping" />
                )}
              </div>

              {/* Step info */}
              <h3 className="font-sans text-lg font-bold text-white uppercase tracking-tight mb-3">
                {s.title}
              </h3>
              <p className="font-sans text-[11px] md:text-xs text-gray-400 leading-relaxed font-light">
                {s.description}
              </p>

              {/* Technical Indicator dots at bottom corner */}
              <div className="absolute bottom-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-1.5 h-1.5 bg-brand-cyan" />
                <span className="w-1.5 h-1.5 bg-[#343535]" />
                <span className="w-1.5 h-1.5 bg-[#343535]" />
              </div>

            </div>
          ))}

        </div>

        {/* Process callout warning */}
        <div className="mt-12 bg-linear-to-r from-[#1b1c1c]/60 to-[#1b1c1c]/10 border-l-2 border-brand-cyan p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          <p className="font-sans text-xs text-gray-300 md:max-w-2xl font-light">
            <strong className="text-white">Atenção ao Cronograma:</strong> Todos os nossos contratos possuem cláusula de multa com compensação direta em faturas por atrasos de responsabilidade técnica estrutural. Trabalhamos sob a filosofia de atraso zero.
          </p>
          <div className="font-mono text-[10px] text-brand-cyan uppercase border border-brand-cyan/20 px-3 py-1.5 bg-brand-cyan/5 tracking-wider font-semibold shrink-0">
            ACOMPANHAMENTO DIÁRIO BIM
          </div>
        </div>

      </div>
    </section>
  );
}
