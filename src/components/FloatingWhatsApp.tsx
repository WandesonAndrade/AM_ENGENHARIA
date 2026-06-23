/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a premium soft hint tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4500);

    // Auto-minimize tooltip after 8 seconds of visibility
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de fazer um orçamento técnico para o meu projeto com a AM Engenharia.";

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end pointer-events-none">
      
      {/* Interactive Tooltip HUD Bubble */}
      {showTooltip && (
        <div className="pointer-events-auto bg-[#1b1c1c] border border-brand-cyan/30 text-white p-3.5 shadow-[0_4px_25px_rgba(34,197,94,0.15)] mb-3 max-w-[260px] animate-fade-in relative">
          
          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-cyan" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-cyan" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-cyan" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-cyan" />

          {/* Prompt close indicator */}
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-2 text-gray-500 hover:text-white font-mono text-[9px] cursor-pointer"
          >
            ✖
          </button>

          <div className="space-y-1.5 text-left">
            <span className="font-mono text-[8px] text-brand-cyan uppercase tracking-widest font-bold block">
              ● ATENDIMENTO ONLINE
            </span>
            <p className="font-sans text-[11px] text-gray-300 font-light leading-relaxed leading-snug">
              Engenheiro disponível para guiar seu projeto de construção, reforma ou cálculo em BIM.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[9px] text-brand-cyan hover:text-white font-bold tracking-wider flex items-center gap-1 mt-1 transition-colors group/tool"
            >
              <span>INICIAR CONVERSA</span>
              <ArrowRight className="w-3 h-3 group-hover/tool:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="pointer-events-auto w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.45)] hover:shadow-[0_0_45px_rgba(37,211,102,0.7)] group transition-all duration-300 relative rounded-none border border-white/10"
        title="Falar no WhatsApp"
        aria-label="Falar com Engenheiro no WhatsApp"
      >
        {/* Radar pulsing rings around the button */}
        <span className="absolute -inset-1 border border-[#25D366]/40 opacity-70 animate-ping pointer-events-none" />
        
        {/* CAD Crosshairs accent to fit the AM Engenharia structural theme */}
        <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-white/50 group-hover:border-white transition-colors" />
        <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-white/50 group-hover:border-white transition-colors" />

        {/* WhatsApp Premium SVG */}
        <svg 
          className="w-7 h-7 fill-current group-hover:scale-110 transition-transform duration-300"
          viewBox="0 0 24 24" 
          xmlSpace="preserve"
        >
          <path d="M12.012,2.004C6.502,2.004,2.01,6.493,2.01,12.002c0,1.912,0.542,3.751,1.564,5.34L2.03,22l4.823-1.493
            c1.514,0.923,3.317,1.497,5.158,1.497c5.51,0,10.002-4.489,10.002-9.999C22.014,6.493,17.522,2.004,12.012,2.004z M16.852,15.826
            c-0.297,0.838-1.463,1.512-2.023,1.579c-0.54,0.064-1.076,0.306-3.468-0.68c-2.879-1.189-4.717-4.113-4.86-4.305
            c-0.143-0.191-1.162-1.547-1.162-2.951c0-1.405,0.732-2.091,0.994-2.373c0.262-0.281,0.573-0.353,0.763-0.353
            c0.191,0,0.382,0,0.549,0.008c0.174,0.008,0.406-0.065,0.636,0.485c0.238,0.573,0.811,1.986,0.883,2.13
            c0.071,0.144,0.119,0.312,0.024,0.503c-0.096,0.191-0.143,0.312-0.286,0.478c-0.143,0.168-0.301,0.375-0.429,0.503
            c-0.143,0.144-0.294,0.301-0.127,0.587c0.167,0.283,0.737,1.213,1.583,1.968c1.09,0.973,2.007,1.274,2.294,1.417
            c0.286,0.142,0.453,0.119,0.62-0.073c0.167-0.191,0.716-0.835,0.907-1.121c0.191-0.286,0.382-0.239,0.644-0.143
            c0.262,0.096,1.67,0.787,1.956,0.93c0.286,0.144,0.477,0.215,0.549,0.339C17.218,14.475,17.15,14.988,16.852,15.826z" />
        </svg>

        {/* Counter of technicians available */}
        <span className="absolute -top-1 -left-1 w-3.5 h-3.5 rounded-full bg-[#1e293b] border border-brand-cyan font-mono text-[8px] font-bold text-brand-cyan flex items-center justify-center animate-bounce">
          1
        </span>
      </a>

    </div>
  );
}
