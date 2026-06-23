/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DIRECTOR_AVATAR } from '../data';
import { Shield, Clock, Award, Hammer } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="relative py-24 bg-[#0d0e0e] border-y border-[#1f2020] overflow-hidden">
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
              <img
                src={DIRECTOR_AVATAR}
                alt="Eng. Adrian M. Silveira, Fundador & Diretor Técnico"
                id="director-profile-photo"
                className="w-full h-full object-cover object-center transition-all duration-700 scale-100 group-hover:scale-105 filter brightness-90 group-hover:brightness-105 contrast-105 group-hover:contrast-100"
              />
              {/* Brand cyan geometric overlay that fades on hover */}
              <div className="absolute inset-0 bg-brand-cyan/10 mix-blend-color opacity-80 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12">
                <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase block mb-1">
                  FUNDADOR & DIRETOR TÉCNICO
                </span>
                <h3 className="font-sans text-xl font-bold text-white leading-tight">
                  Eng. Adrian M. Silveira
                </h3>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  CREA-SP: 507.892.422-0
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
              <span className="text-linear-to-r from-white to-gray-400">MATERIALIZANDO VISÕES.</span>
            </h2>

            <p className="font-sans text-base text-gray-300 leading-relaxed font-light">
              Com mais de 10 anos de experiência acumulada no mercado paulista, a AM Engenharia foi fundada com a missão clara de devolver o ativo mais escasso na construção civil: a <span className="text-white font-semibold">paz de espírito</span>.
            </p>
            <p className="font-sans text-base text-gray-300 leading-relaxed font-light">
              Diferente de construtoras externas estruturais que operam com orçamentos instáveis, nós baseamos nossa governança e reputação no tripé da <span className="text-brand-cyan font-semibold">precisão numérica</span>, mitigando despesas redundantes através de metodologia BIM em todas as frentes de cálculo e execução.
            </p>

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
                  Iniciamos projetos com planilha orçamentária detalhada que discrimina cada quilo de cimento e metro de fiação. Sem reajustes arbitrários.
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
                  Análise diária do caminho crítico do cronograma. Entregar o projeto no dia avençado é um dogma de nossa assinatura profissional.
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
                  Controle tecnológico de compressão do concreto, rastreabilidade técnica integral e mão de obra calibrada de altíssimo padrão.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
