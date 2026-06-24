/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { HardHat, Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Simulate real database signup storage
    try {
      localStorage.setItem("am_engineering_newsletter", email.trim());
      setIsSubscribed(true);
      setEmail("");
    } catch (err) {
      console.warn("Unable to subscribe newsletter locally:", err);
    }
  };

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

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        {/* Column 1: Brand briefs - Columns 1 to 4 */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-9 h-9 bg-linear-to-br from-[#40a5aa] to-[#1b5259] flex items-center justify-center relative">
              <HardHat className="w-4 h-4 text-black stroke-[2.5]" />
            </div>
            <div>
              <span className="font-sans text-lg font-black uppercase tracking-tight text-white block">
                AM <span className="text-brand-cyan">ENGENHARIA</span>
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-[#b7d2db] block -mt-1 leading-none">
                EXCELÊNCIA ESTRUTURAL
              </span>
            </div>
          </div>

          <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-sm font-light">
            Fundada pelo Eng. André Mclelry, a AM Engenharia nasceu com o
            propósito de transformar projetos em soluções inteligentes, unindo
            tecnologia, inovação e excelência técnica.
          </p>

          <div className="space-y-2 pt-2 text-xs font-sans">
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
              <span className="font-light">(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
              <span className="font-light">andremclelry@hotmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
              <span className="truncate font-light">
                Av. Paulista, nº 2000 - Jardins, São Paulo - SP
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Matrix - Columns 5 to 7 */}
        <div className="md:col-span-3 flex flex-col space-y-4">
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

        {/* Column 3: Newsletter Sign-up - Columns 8 to 12 */}
        <div className="md:col-span-5 flex flex-col space-y-4">
          <h4 className="font-mono text-[10px] text-white uppercase tracking-widest border-b border-[#343535] pb-2">
            MANTENHA-SE INFORMADO
          </h4>
          <p className="font-sans text-xs text-gray-500 leading-relaxed">
            Assine nosso sumário técnico bimestral com índices regionais
            CUB/SINAPI, patologias prediais comuns e insights de cálculo
            estrutural.
          </p>

          {isSubscribed ? (
            <div className="bg-[#121414] border border-green-500/20 p-4 flex items-center space-x-3 text-green-400 text-xs">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>
                Inscrição confirmada! Você receberá nosso informativo técnico.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <input
                type="email"
                placeholder="Insira seu melhor e-mail"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#121414] border border-[#343535] focus:border-brand-cyan/70 text-white font-sans text-xs px-4 py-3 w-full focus:outline-none rounded-none"
              />
              <button
                type="submit"
                className="bg-brand-cyan hover:bg-[#59b2b8] text-black font-mono text-xs font-bold uppercase tracking-wider px-5 transition-colors cursor-pointer flex items-center justify-center shrink-0 rounded-none"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </form>
          )}
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
            Registo CREA-SP
          </a>
        </div>
      </div>
    </footer>
  );
}
