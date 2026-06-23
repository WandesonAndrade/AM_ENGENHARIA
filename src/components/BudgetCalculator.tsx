/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { ProjectCategory } from '../types';
import { ShieldCheck, Mail, Phone, User, FileText, CheckCircle2, ChevronRight, MessageSquare, HardHat } from 'lucide-react';

export default function BudgetCalculator() {
  // Form parameters
  const [projectType, setProjectType] = useState<ProjectCategory>('residencial');
  const [area, setArea] = useState<string>('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  
  // UI States
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>('');

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');
    
    if (!clientName.trim() || !clientEmail.trim() || !clientPhone.trim() || !clientNotes.trim()) {
      setValidationError('Por favor, preencha todos os campos obrigatórios (Nome, E-mail, Telefone/WhatsApp e Descrição do Projeto).');
      return;
    }

    // Build the formatted WhatsApp Message in Portuguese
    const typesMap: Record<ProjectCategory, string> = {
      todos: 'Todos',
      residencial: 'Residencial Alto Padrão',
      comercial: 'Comercial & Clínicas',
      corporativo: 'Retrofit & Escritórios',
      reformas: 'Reformas & Restauros'
    };

    const projectTypeLabel = typesMap[projectType] || projectType;
    const areaText = area ? `${area} m²` : 'Não informada';

    const message = `Olá AM Engenharia! Gostaria de solicitar uma consultoria de viabilidade e orçamento para o meu projeto.\n\n` +
      `📋 *DADOS DO CONTATO:*\n` +
      `- *Nome:* ${clientName}\n` +
      `- *E-mail:* ${clientEmail}\n` +
      `- *Telefone/WhatsApp:* ${clientPhone}\n\n` +
      `🏗️ *DETALHES DO PROJETO:*\n` +
      `- *Tipo:* ${projectTypeLabel}\n` +
      `- *Área Estimada:* ${areaText}\n\n` +
      `💬 *DESCRIÇÃO DO PROJETO & DESEJOS:*\n` +
      `${clientNotes}\n\n` +
      `Aguardo retorno técnico para prosseguirmos! Obrigado.`;

    try {
      // Redirect to WhatsApp API
      const formattedText = encodeURIComponent(message);
      // Using standard placeholder number 5511999999999 for São Paulo
      const whatsappURL = `https://wa.me/5511999999999?text=${formattedText}`;
      
      // Save submission state
      setIsSubmitted(true);
      
      // Open in new tab safely
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to redirect to WhatsApp:', error);
      setValidationError('Ocorreu um erro ao abrir o WhatsApp. Por favor, tente novamente.');
    }
  };

  const resetForm = () => {
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setArea('');
    setClientNotes('');
    setIsSubmitted(false);
  };

  return (
    <section id="orcamento" className="py-24 bg-[#0d0e0e] border-y border-[#1f2020] relative overflow-hidden">
      {/* Structural visual accents */}
      <div className="absolute top-[30%] -left-32 w-64 h-64 bg-brand-cyan/2 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-[1.5px] bg-brand-cyan" />
            <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase">
              VIABILIDADE TÉCNICA DIRETA
            </span>
            <span className="w-6 h-[1.5px] bg-brand-cyan" />
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
            SOLICITAR <span className="text-brand-cyan">ORÇAMENTO PERSONALIZADO</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 font-light">
            Descreva suas ideias e parâmetros preliminares. Nossa equipe de engenharia civil sênior gerará um estudo de viabilidade completo compatível com o seu terreno ou planta.
          </p>
        </div>

        {isSubmitted ? (
          /* Receipt / Success State */
          <div className="max-w-2xl mx-auto bg-[#1b1c1c]/45 border border-brand-cyan/30 p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-cyan" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-cyan" />
            
            <div className="w-16 h-16 bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-brand-cyan" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[9px] text-[#b7d2db] uppercase tracking-widest block">SOLICITAÇÃO ENVIADA COM SUCESSO</span>
              <h3 className="font-sans text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Estudo Enviado ao WhatsApp</h3>
            </div>
            
            <p className="font-sans text-sm text-gray-300 max-w-md mx-auto leading-relaxed font-light">
              Prezado(a) <strong className="text-white">{clientName}</strong>, sua solicitação foi formatada e aberta no seu WhatsApp. Um engenheiro civil sênior fará uma análise inicial da sua planta ou projeto em até 24 horas úteis.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center pt-6 max-w-sm mx-auto">
              <button
                onClick={resetForm}
                className="w-full bg-brand-cyan hover:bg-[#00d0d5] text-black font-mono text-xs font-bold uppercase tracking-wider py-4 select-none transition-all flex items-center justify-center space-x-2 cursor-pointer rounded-none"
              >
                <span>NOVA SOLICITAÇÃO</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        ) : (
          /* Direct Clean Description Form Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* The Request Form - Column 1 to 7 */}
            <form onSubmit={handleFormSubmit} className="lg:col-span-7 bg-[#1b1c1c]/45 border border-[#343535] p-6 md:p-8 space-y-6 relative">
              
              <div className="flex items-center space-x-3 border-b border-[#343535] pb-4">
                <FileText className="w-5 h-5 text-brand-cyan" />
                <h3 className="font-sans text-lg font-bold uppercase text-white tracking-tight">
                  Dados do seu Projeto
                </h3>
              </div>

              {validationError && (
                <div className="bg-red-950/20 border border-red-500/50 p-4 text-red-400 text-xs font-sans leading-relaxed flex items-start space-x-2">
                  <span className="font-bold font-mono text-red-500 shrink-0 uppercase">[ERRO]:</span>
                  <p>{validationError}</p>
                </div>
              )}

              {/* Step 1: Basic project classification */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] text-[#b7d2db] uppercase tracking-wider block">
                    1. Tipologia Geral do Projeto *
                  </label>
                  <select
                    id="type-selector"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value as ProjectCategory)}
                    className="w-full bg-[#121414] border border-[#343535] focus:border-brand-cyan/70 text-white font-sans text-xs px-4 py-3 focus:outline-none cursor-pointer rounded-none"
                  >
                    <option value="residencial">Projeto Residencial Sob Medida</option>
                    <option value="comercial">Comércio / Lojas / Clínicas</option>
                    <option value="corporativo">Escritórios / Corporativo</option>
                    <option value="reformas">Reformas Estruturais / Retrofit</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] text-[#b7d2db] uppercase tracking-wider block">
                    2. Área Estimada (Opcional - m²)
                  </label>
                  <input
                    id="area-slider"
                    type="number"
                    placeholder="Ex: 150"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-[#121414] border border-[#343535] focus:border-brand-cyan/70 text-white font-sans text-xs px-4 py-3 focus:outline-none rounded-none"
                  />
                </div>
              </div>

              {/* Step 2: Clear Description */}
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] text-[#b7d2db] uppercase tracking-wider block">
                  3. Descrição Detalhada do Projeto ou Necessidades *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Descreva a sua ideia de projeto, o que você pretende construir ou reformar, se possui terreno, se já tem planta e outros detalhes que julgar relevantes..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full bg-[#121414] border border-[#343535] focus:border-brand-cyan/70 text-white font-sans text-xs p-4 focus:outline-none resize-none rounded-none placeholder-gray-600 font-light leading-relaxed"
                />
              </div>

              {/* Divider */}
              <div className="border-t border-[#343535] my-6" />

              {/* Step 3: Client contact parameters */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-brand-cyan uppercase tracking-wider">
                  4. Informações do Solicitante
                </h4>

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] text-[#b7d2db] uppercase tracking-wider block">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Albuquerque"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#121414] border border-[#343535] focus:border-brand-cyan/70 text-white font-sans text-xs pl-10 pr-4 py-3 focus:outline-none rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] text-[#b7d2db] uppercase tracking-wider block">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="email"
                        required
                        placeholder="nome@dominio.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full bg-[#121414] border border-[#343535] focus:border-brand-cyan/70 text-white font-sans text-xs pl-10 pr-4 py-3 focus:outline-none rounded-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] text-[#b7d2db] uppercase tracking-wider block">
                      Telefone (WhatsApp) *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full bg-[#121414] border border-[#343535] focus:border-brand-cyan/70 text-white font-sans text-xs pl-10 pr-4 py-3 focus:outline-none rounded-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit to WhatsApp Button */}
              <button
                type="submit"
                className="w-full bg-brand-cyan hover:bg-[#00d0d5] text-black font-mono text-xs font-bold uppercase tracking-wider py-4 select-none transition-all flex items-center justify-center space-x-2 shadow-lg cursor-pointer rounded-none mt-6"
              >
                <ShieldCheck className="w-4 h-4 mr-1 text-black" />
                <span>SOLICITAR CONSULTA VIA WHATSAPP</span>
              </button>
            </form>

            {/* Visual Technical Panel - Column 8 to 12 */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              
              {/* Engineering Manifesto/Blueprint Panel */}
              <div className="bg-[#121414] border border-brand-cyan/30 p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 blur-lg rounded-full pointer-events-none" />
                
                <h4 className="font-mono text-[10px] text-[#b7d2db] tracking-widest uppercase mb-6 border-b border-[#343535] pb-2 flex items-center space-x-2">
                  <HardHat className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>PREMISSAS DA ENGENHARIA</span>
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-none border border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      01
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-xs text-white uppercase tracking-tight">Estudo de Clima Territorial</h5>
                      <p className="font-sans text-[11px] text-gray-400 mt-1 leading-relaxed font-light">
                        Mapeamos dados geológicos e restrições municipais da localidade do seu projeto para mitigar atrasos de aprovação.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-none border border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      02
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-xs text-white uppercase tracking-tight">Compatibilização BIM</h5>
                      <p className="font-sans text-[11px] text-gray-400 mt-1 leading-relaxed font-light">
                        Modelamos sua necessidade de espaço em maquete paramétrica piloto, identificando gargalos construtivos precocemente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-none border border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      03
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-xs text-white uppercase tracking-tight">Previsibilidade Fiscal</h5>
                      <p className="font-sans text-[11px] text-gray-400 mt-1 leading-relaxed font-light">
                        Esboçamos estimativas de insumos reais com base na tabela Sinapi atualizada, blindando seu planejamento financeiro.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#1f2020] mt-8 pt-6">
                  <div className="flex items-center space-x-2.5 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span className="font-light">Canaís criptografados diretos com nossos diretores técnicos.</span>
                  </div>
                </div>
              </div>

              {/* Prompt Trust Indicator */}
              <div className="bg-[#1b1c1c]/25 border border-[#1f2020] p-6 text-center space-y-2">
                <span className="font-mono text-[9px] text-[#b7d2db] tracking-wider uppercase">SUPORTE ESTRUTURAL REGISTRADO</span>
                <p className="font-sans text-[11px] text-gray-500 leading-relaxed font-light">
                  Possui plantas DWG ou PDF? Envie-as diretamente pelo chat de atendimento do WhatsApp após selecionar seu consultor técnico sênior responsável.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
