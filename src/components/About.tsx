/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { DIRECTOR_AVATAR } from "../data";
import {
  Shield,
  Clock,
  Award,
  Hammer,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";
import OptimizedImage from "./OptimizedImage";

interface AboutProps {
  onConhecerSolucoes?: () => void;
}

export default function About({ onConhecerSolucoes }: AboutProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="sobre"
      className="relative py-24 bg-[#0d0e0e] border-y border-[#1f2020] overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/2 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Container with Industrial Framings - Columns 1 to 5 */}
          <div className="lg:col-span-5 relative group flex justify-center">
            {/* Geometric outer borders mimicking blueprints */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-cyan group-hover:scale-95 transition-transform duration-300" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-cyan group-hover:scale-95 transition-transform duration-300" />
            <div className="absolute -top-4 -right-4 w-4 h-4 border-t-2 border-r-2 border-[#343535]" />
            <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b-2 border-l-2 border-[#343535]" />

            <div className="relative w-full max-w-sm aspect-5/6 bg-[#1b1c1c] overflow-hidden border border-[#343535] group-hover:border-brand-cyan/40 transition-colors duration-500">
              <OptimizedImage
                src={DIRECTOR_AVATAR}
                alt="Eng. André Mclelry, Fundador & Diretor Técnico"
                id="director-profile-photo"
                className="w-full h-full object-cover object-top transition-all duration-700 scale-100 group-hover:scale-105 filter brightness-90 group-hover:brightness-105 contrast-105 group-hover:contrast-100"
              />
              {/* Brand cyan geometric overlay that fades on hover */}
              <div className="absolute inset-0 bg-brand-cyan/10 mix-blend-color opacity-80 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12">
                <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase block mb-1">
                  FUNDADOR & DIRETOR TÉCNICO
                </span>
                <h3 className="font-sans text-xl font-bold text-white leading-tight">
                  Eng. André Mclelry
                </h3>
                <p className="font-sans text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                  CREA nº 111916768-0 <br />
                  <span className="text-brand-cyan">
                    PI • MG • SP • PR • MA
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Text Summary & Core Pillars - Columns 6 to 12 */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-brand-cyan" />
              <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase">
                QUEM SOMOS & PROPÓSITO
              </span>
            </div>

            <h2 className="font-sans text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
              AM ENGENHARIA: <br />
              <span className="text-linear-to-r from-white to-gray-400">
                CONCRETIZANDO SONHOS.
              </span>
            </h2>

            <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
              A <span className="text-white font-semibold">AM Engenharia</span>{" "}
              nasceu com o propósito de transformar projetos em soluções
              inteligentes, unindo tecnologia, inovação e excelência técnica
              para entregar resultados que geram valor em todas as etapas da
              construção.
            </p>
            <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
              Desde 2020, atuamos no desenvolvimento de projetos para
              empreendimentos residenciais, comerciais e industriais, utilizando
              a{" "}
              <span className="text-brand-cyan font-semibold">
                metodologia BIM
              </span>{" "}
              (Building Information Modeling) através da plataforma Revit, uma
              das mais modernas e eficientes ferramentas do mercado da
              construção civil.
            </p>
            <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
              O engenheiro possui registro ativo no{" "}
              <span className="text-brand-cyan font-semibold">CREA</span> nos
              estados do{" "}
              <span className="text-white font-semibold">
                Piauí, Minas Gerais, São Paulo, Paraná e Maranhão
              </span>
              , proporcionando cobertura técnica regulamentada e emissão de ART
              imediata em todas as obras executadas nessas regiões.
            </p>

            {(!isMobile || isExpanded) && (
              <>
                <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                  Nosso diferencial está na{" "}
                  <span className="text-white font-semibold">
                    integração de todas as disciplinas
                  </span>{" "}
                  do projeto, oferecendo desde o projeto arquitetônico até as
                  instalações complementares, com alto nível de detalhamento,
                  compatibilização e precisão. Isso proporciona maior
                  previsibilidade, redução de retrabalhos, otimização de custos
                  e mais segurança durante a execução da obra.
                </p>
                <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                  Cada projeto é desenvolvido de forma personalizada, sempre em
                  conformidade com as normas técnicas brasileiras vigentes,
                  garantindo qualidade, eficiência e confiabilidade para nossos
                  clientes.
                </p>
                <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                  Na AM Engenharia, não entregamos apenas projetos. Entregamos
                  soluções que transformam ideias em empreendimentos bem
                  planejados, modernos e preparados para o futuro.
                </p>
                <p className="font-sans text-sm text-brand-cyan font-semibold leading-relaxed">
                  AM Engenharia – Projetando com tecnologia, construindo com
                  confiança.
                </p>
              </>
            )}

            {isMobile && (
              <div className="flex flex-wrap gap-3 mt-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="font-mono text-[10px] uppercase tracking-wider text-brand-cyan hover:text-white transition-all duration-300 flex items-center space-x-1.5 border border-brand-cyan/25 hover:border-brand-cyan px-4 py-2 bg-brand-cyan/5 hover:bg-brand-cyan/15 cursor-pointer rounded-sm"
                >
                  <span>{isExpanded ? "Ler Menos" : "Ler Mais"}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>

                <button
                  onClick={() => {
                    if (onConhecerSolucoes) {
                      onConhecerSolucoes();
                    }
                    const element = document.getElementById("servicos");
                    if (element) {
                      const offset = 80;
                      const bodyRect =
                        document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="font-mono text-[10px] uppercase tracking-wider text-white hover:text-brand-cyan transition-all duration-300 flex items-center space-x-1.5 border border-white/10 hover:border-brand-cyan/40 px-4 py-2 bg-white/5 hover:bg-brand-cyan/5 cursor-pointer rounded-sm"
                >
                  <span>Conhecer Soluções</span>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                </button>
              </div>
            )}

            {/* Industrial Separation Line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-[#343535] to-transparent my-2" />

            {/* 3 Core Pillars Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-brand-cyan" />
                  <h4 className="font-sans font-bold text-sm uppercase text-white tracking-tight">
                    TRANSPARÊNCIA
                  </h4>
                </div>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  Iniciamos projetos com planilha orçamentária detalhada que
                  discrimina cada quilo de cimento e metro de fiação. Sem
                  reajustes arbitrários.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-brand-cyan" />
                  <h4 className="font-sans font-bold text-sm uppercase text-white tracking-tight">
                    PONTUALIDADE
                  </h4>
                </div>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  Análise diária do caminho crítico do cronograma. Entregar o
                  projeto no dia avençado é um dogma de nossa assinatura
                  profissional.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-brand-cyan" />
                  <h4 className="font-sans font-bold text-sm uppercase text-white tracking-tight">
                    QUALIDADE
                  </h4>
                </div>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  Controle tecnológico de compressão do concreto,
                  rastreabilidade técnica integral e mão de obra calibrada de
                  altíssimo padrão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
