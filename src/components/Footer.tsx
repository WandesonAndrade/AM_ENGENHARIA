/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin } from "lucide-react";
import { LogoIcon } from "./Logo";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f2020] pt-16 pb-8 text-gray-400 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cyan/2 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        {/* Column 1: Brand briefs & Dynamic Online/On-site service - Columns 1 to 7 */}
        <div className="md:col-span-7 flex flex-col space-y-4">
          <div className="flex items-center space-x-3 text-left">
            <LogoIcon className="w-9 h-9 shrink-0" />
            <div>
              <span className="font-sans text-lg font-black uppercase tracking-tight text-white block">
                AM <span className="text-brand-cyan">ENGENHARIA</span>
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-[#b7d2db] block -mt-1 leading-none">
                EXCELÊNCIA ESTRUTURAL
              </span>
            </div>
          </div>

          <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-md font-light">
            Fundada pelo Eng. André Mclelry, a AM Engenharia nasceu com o
            propósito de transformar projetos em soluções inteligentes, unindo
            tecnologia, inovação e excelência técnica.
          </p>

          <div className="space-y-2.5 pt-2 text-xs font-sans">
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
              <span className="font-light">(99) 98440-0511</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
              <span className="font-light">andremclelry@hotmail.com</span>
            </div>
            <div className="flex items-start space-x-2 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
              <span className="font-light leading-relaxed">
                Atendimento online, no local da obra ou visitas personalizadas
                ao cliente.
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Matrix - Columns 8 to 12 */}
        <div className="md:col-span-5 flex flex-col space-y-4 md:pl-12">
          <h4 className="font-mono text-[10px] text-white uppercase tracking-widest border-b border-[#343535] pb-2">
            NAVEGAÇÃO TÉCNICA
          </h4>
          <ul className="flex flex-col space-y-2 font-sans text-xs">
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="hover:text-white hover:underline transition-all cursor-pointer"
              >
                Quem Somos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("servicos")}
                className="hover:text-white hover:underline transition-all cursor-pointer"
              >
                O Que Fazemos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("processo")}
                className="hover:text-white hover:underline transition-all cursor-pointer"
              >
                Nosso Metodologia em 4 Passos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="hover:text-white hover:underline transition-all cursor-pointer"
              >
                Portfólio de Obras
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="hover:text-white hover:underline transition-all cursor-pointer"
              >
                Depoimentos de Parceiros
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#1f2020] text-center md:text-left flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 text-[10px] font-sans text-gray-600">
        <div>
          <span>
            © {new Date().getFullYear()} AM Engenharia de Precisão e Gestão
            Turnkey. Todos os direitos reservados.
          </span>
        </div>
        <div className="flex space-x-6 font-mono text-[9px] uppercase">
          <a href="#sobre" className="hover:text-gray-400">
            Política de Privacidade
          </a>
          <a href="#sobre" className="hover:text-gray-400">
            Termos de Serviço
          </a>
          <a href="#sobre" className="hover:text-gray-400">
            Registros CREA (PI • MG • SP • PR • MA)
          </a>
        </div>
      </div>
    </footer>
  );
}
