/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { METHOD_STEPS } from "../data";
import {
  ClipboardCheck,
  Cpu,
  HardHat,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Inbox,
  Layers,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Rich commercial and technical enrichment data for each step
  const stepExtraData = [
    {
      icon: ClipboardCheck,
      status: "Diagnóstico Avançado",
      duration: "24h a 72h úteis",
      color: "brand-cyan",
      softwares: ["Revit", "AutoCAD", "Google Earth Pro", "Sondagem Digital"],
      metrics: [
        { label: "Previsibilidade Orçamentária", value: 95 },
        { label: "Segurança Jurídica & Ambiental", value: 100 },
        { label: "Mitigação de Riscos de Solo", value: 98 },
      ],
      deliverables: [
        "Estudo preliminar de viabilidade construtiva",
        "Análise topográfica e geotécnica inicial",
        "Estimativa de custos parametrizada realista",
        "Definição de diretrizes normativas locais (Plano Diretor)",
        "Relatório técnico fotográfico do terreno",
      ],
    },
    {
      icon: Cpu,
      status: "Projeto Inteligente",
      duration: "5 a 15 dias úteis",
      color: "brand-cyan",
      softwares: ["Revit 3D", "QiBuilder", "Eberick", "Navisworks BIM"],
      metrics: [
        { label: "Previsão de Incompatibilidade", value: 99 },
        { label: "Detalhamento Mecânico", value: 98 },
        { label: "Economia de Materiais Gerada", value: 92 },
      ],
      deliverables: [
        "Projetos estruturais and complementares estruturados em BIM",
        "Maquete digital tridimensional totalmente navegável",
        "Detecção automática de interferência de tubulações (Clash Detection)",
        "Quadro completo de materiais quantificados em escala de projeto",
        "Isométricos hidráulicos detalhados de fácil leitura",
      ],
    },
    {
      icon: HardHat,
      status: "Fiscalização Técnica",
      duration: "Duração da Obra",
      color: "brand-cyan",
      softwares: [
        "Trello",
        "WhatsApp Business",
        "BIM 360",
        "Diário de Obra Digital",
      ],
      metrics: [
        { label: "Controle de Padrão e Qualidade", value: 100 },
        { label: "Aderência ao Cronograma Estimado", value: 97 },
        { label: "Prevenção de Desperdícios Locais", value: 95 },
      ],
      deliverables: [
        "Acompanhamento técnico presencial periódico e focado",
        "Relatório mensal fotográfico estruturado e diário de obra",
        "Vistoria minuciosa de recebimento de materiais e armações",
        "Orientação executiva direta aos operários e encarregados",
        "Preenchimento e auditoria da ART técnica de execução",
      ],
    },
    {
      icon: ShieldCheck,
      status: "Garantia & Entrega",
      duration: "No Encerramento",
      color: "brand-cyan",
      softwares: ["AutoCAD As-Built", "Adobe Acrobat Pro", "Sistema CREA-MA"],
      metrics: [
        { label: "Aprovação em Órgãos Públicos", value: 100 },
        { label: "Conformidade Final de Escopo", value: 100 },
        { label: "Suporte Pós-Entrega Assistida", value: 98 },
      ],
      deliverables: [
        "Vistoria final minuciosa de acabamento e estanqueidade",
        "Projeto original devidamente atualizado (As-Built)",
        "Entrega de alvará sanitário, PPCI e Habite-se completo",
        "Manual descritivo de uso, manutenção e conservação do imóvel",
        "Garantia estrutural homologada de 5 anos em contrato",
      ],
    },
  ];

  const currentExtraData = stepExtraData[activeStep];
  const StepIcon = currentExtraData.icon;

  const scrollToContact = () => {
    const contactSection =
      document.getElementById("contato") ||
      document.getElementById("orcamento");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="processo"
      className="py-24 bg-[#0d0e0e] relative overflow-hidden border-t border-b border-[#242525]"
    >
      {/* Blueprint grid layout background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-cyan/2 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-teal/2 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center space-x-2 justify-center">
            <span className="w-6 h-[1.5px] bg-brand-cyan" />
            <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> METODOLOGIA
              EXECUTIVA AM ENGENHARIA
            </span>
            <span className="w-6 h-[1.5px] bg-brand-cyan" />
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
            COMO CONSTRUÍMOS COM{" "}
            <span className="text-brand-cyan text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal">
              SEGURANÇA
            </span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 font-light max-w-2xl">
            A previsibilidade financeira de uma obra não depende de sorte, mas
            sim de um fluxo processual blindado em 4 etapas estratégicas.
            Acompanhe nosso fluxo e entenda sua jornada como parceiro.
          </p>
        </div>

        {/* Dynamic Split Layout Console (Highly Commercial and Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* LEFT COLUMN: The Interactive Process Steps (4 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-left mb-4">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-2">
                ETAPAS DO FLUXO
              </span>
              <p className="text-xs text-brand-cyan/80 font-mono">
                Clique em cada etapa para ver os entregáveis reais:
              </p>
            </div>

            <div className="space-y-3" id="process-steps-list">
              {METHOD_STEPS.map((s, idx) => {
                const isSelected = idx === activeStep;
                const IconComponent = stepExtraData[idx].icon;

                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-4 md:p-5 border flex items-center justify-between transition-all duration-300 relative group cursor-pointer ${
                      isSelected
                        ? "bg-[#1b1c1c]/90 border-brand-cyan shadow-[0_0_20px_rgba(64,165,170,0.1)] translate-x-2"
                        : "bg-[#121414]/90 border-[#2b2c2c] hover:border-brand-cyan/40 hover:bg-[#1b1c1c]/40 hover:translate-x-1"
                    }`}
                  >
                    {/* Glowing active bar highlight inside */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${
                        isSelected
                          ? "bg-brand-cyan"
                          : "bg-transparent group-hover:bg-brand-cyan/40"
                      }`}
                    />

                    <div className="flex items-center space-x-4 pl-2">
                      {/* Interactive visual bullet */}
                      <div
                        className={`w-10 h-10 border font-mono text-sm font-bold flex items-center justify-center transition-all shrink-0 ${
                          isSelected
                            ? "bg-brand-cyan text-black border-brand-cyan"
                            : "bg-[#0d0e0e] text-brand-cyan/60 border-[#343535] group-hover:border-brand-cyan/30"
                        }`}
                      >
                        {s.step}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-brand-cyan/50">
                            Fase {s.step}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-brand-cyan animate-ping" : "bg-gray-700"}`}
                          />
                        </div>
                        <h3
                          className={`font-sans text-sm md:text-base font-bold uppercase tracking-tight transition-colors ${
                            isSelected
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-200"
                          }`}
                        >
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 text-right font-mono pr-2">
                      <IconComponent
                        className={`w-5 h-5 transition-transform ${
                          isSelected
                            ? "text-brand-cyan scale-110"
                            : "text-gray-600 group-hover:text-gray-400"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Micro visual banner under list */}
            <div className="bg-[#121414] border border-[#2b2c2c] p-4 font-mono text-[10px] text-gray-500 uppercase tracking-widest flex items-center justify-between">
              <span>Selo de Previsibilidade Técnica</span>
              <span className="text-brand-cyan font-bold">100% GARANTIDO</span>
            </div>
          </div>

          {/* RIGHT COLUMN: The Interactive technical HUD Console (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#1b1c1c]/45 border border-[#343535] shadow-2xl relative overflow-hidden group/console">
              {/* Corner tech styling accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-cyan/60" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-cyan/60" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-cyan/60" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-cyan/60" />

              {/* Console header bar */}
              <div className="border-b border-[#343535] px-6 py-4 bg-black/45 flex items-center justify-between font-mono text-[10px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                  CONSOLE TÉCNICO INTERATIVO // PROJETOS
                </span>
                <span className="text-brand-cyan font-bold tracking-widest">
                  FASE {METHOD_STEPS[activeStep].step} ATIVA
                </span>
              </div>

              {/* Console body content */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Visual Title, Description and Status */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[9px] bg-brand-cyan/10 border border-brand-cyan/35 text-brand-cyan px-2.5 py-0.5 uppercase tracking-widest font-semibold flex items-center gap-1">
                      <StepIcon className="w-3 h-3" />
                      {currentExtraData.status}
                    </span>
                    <span className="font-mono text-[9px] bg-[#121414] border border-[#2b2c2c] text-gray-400 px-2.5 py-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-cyan/75" />
                      Duração: <strong>{currentExtraData.duration}</strong>
                    </span>
                  </div>

                  <h3 className="font-sans text-xl md:text-2xl font-black uppercase text-white leading-tight">
                    {METHOD_STEPS[activeStep].title}
                  </h3>

                  <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                    {METHOD_STEPS[activeStep].description}
                  </p>
                </div>

                {/* Deliverables checklist - Highly Commercial convincing feature */}
                <div className="space-y-3.5">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-brand-cyan block">
                    O QUÊ VOCÊ RECEBE DE FATO (ENTREGÁVEIS):
                  </span>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                    id="deliverables-grid"
                  >
                    {currentExtraData.deliverables.map((deliv, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2.5 p-2 bg-[#121414]/40 border border-[#242525] hover:border-gray-800 transition-colors duration-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span className="font-sans text-[11px] text-gray-300 font-light leading-snug">
                          {deliv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Softwares details */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-[#343535] gap-4">
                  <div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider block mb-2">
                      TECNOLOGIA EMPREGADA
                    </span>
                    <div
                      className="flex flex-wrap gap-1.5"
                      id="software-badges"
                    >
                      {currentExtraData.softwares.map((sw) => (
                        <span
                          key={sw}
                          className="font-mono text-[9px] bg-black/60 border border-white/5 text-gray-300 px-2 py-1 tracking-tight"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Immediate Action Button */}
                  <button
                    onClick={scrollToContact}
                    className="group border border-brand-cyan bg-brand-cyan/10 hover:bg-brand-cyan hover:text-black text-brand-cyan px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 shrink-0 cursor-pointer shadow-[0_0_15px_rgba(64,165,170,0.05)]"
                  >
                    <span>FALAR SOBRE ESTE PASSO</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process callout warning */}
        <div className="bg-linear-to-r from-[#1b1c1c]/60 to-[#1b1c1c]/10 border-l-2 border-brand-cyan p-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          <p className="font-sans text-xs text-gray-300 md:max-w-3xl font-light">
            <strong className="text-white">Compromisso com Prazos:</strong>{" "}
            Valorizamos cada centavo do seu orçamento. Nossos contratos incluem
            cláusulas rígidas de conformidade e suporte pós-entrega com
            cronograma de contingência. Trabalhamos sob a filosofia de
            retrabalho zero.
          </p>
          <div className="font-mono text-[10px] text-brand-cyan uppercase border border-brand-cyan/20 px-3 py-1.5 bg-brand-cyan/5 tracking-wider font-semibold shrink-0">
            METODOLOGIA HOMOLOGADA CREA-MA
          </div>
        </div>
      </div>
    </section>
  );
}
