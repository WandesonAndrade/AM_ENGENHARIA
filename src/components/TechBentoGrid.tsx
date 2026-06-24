/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Cpu, 
  TrendingDown, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Eye, 
  Code,
  HardHat
} from 'lucide-react';

type LayerType = 'estrutural' | 'eletrico' | 'hidraulico' | 'completo';

export default function TechBentoGrid() {
  // Card 1: Architectural layers state
  const [activeLayer, setActiveLayer] = useState<LayerType>('completo');
  
  // Card 2: Interactive Scan Engine state
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [incompatibilitiesResult, setIncompatibilitiesResult] = useState<number>(14);
  const [scanProgress, setScanProgress] = useState(0);

  // Card 3: Material comparison state
  const [selectedMethod, setSelectedMethod] = useState<'tradicional' | 'am'>('am');

  // Trigger scanning simulation
  const startScan = () => {
    setScanState('scanning');
    setScanProgress(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (scanState === 'scanning') {
      interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setScanState('complete');
            setIncompatibilitiesResult(0); // All sorted out
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [scanState]);

  return (
    <section id="tecnologia" className="py-24 bg-[#0d0e0e] border-t border-[#1f2020] relative overflow-hidden">
      {/* Aesthetic grid line patterns representing blueprints */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#343535/5_1px,transparent_1px),linear-gradient(to_bottom,#343535/5_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/2 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-teal/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-[1px] bg-brand-cyan" />
            <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              ARQUITETURA DE INOVAÇÃO
            </span>
            <span className="w-8 h-[1px] bg-brand-cyan" />
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
            ENGENHARIA <span className="text-brand-cyan">COMPUTACIONAL BIM</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 font-light">
            Inspirado nas interfaces mais modernas de design imersivo, criamos uma simulação interativa dos ecossistemas de dados que operam em nossas obras antes da primeira escavação.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* CARD 1 (Large - 2 cols on lg): Interactive 3D/2D Layer Co-ordinator */}
          <div className="lg:col-span-2 bg-[#121414]/90 border border-[#343535] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-brand-cyan/25 transition-all duration-300">
            {/* Corner visual layout brackets */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#343535] group-hover:border-brand-cyan/35 transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#343535] group-hover:border-brand-cyan/35 transition-colors" />
            
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-[9px] text-brand-cyan font-semibold uppercase tracking-widest bg-brand-cyan/5 px-2.5 py-1 border border-brand-cyan/15 rounded-sm">
                    REPRESENTAÇÃO ESPACIAL BIM
                  </span>
                  <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight mt-2.5">
                    Coexistência Tridimensional de Redes
                  </h3>
                </div>
                
                {/* Micro Toggle Segmented Control (Inspired by 21st.dev style tabs) */}
                <div className="flex bg-black/60 p-1 rounded-none border border-white/5 text-[9px] font-mono tracking-wider font-bold">
                  {(['estrutural', 'eletrico', 'hidraulico', 'completo'] as LayerType[]).map((layer) => (
                    <button
                      key={layer}
                      onClick={() => setActiveLayer(layer)}
                      className={`px-2.5 py-1.5 uppercase transition-all duration-200 cursor-pointer ${
                        activeLayer === layer
                          ? 'bg-brand-cyan text-black font-extrabold shadow-sm'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {layer}
                    </button>
                  ))}
                </div>
              </div>

              <p className="font-sans text-xs text-gray-400 mb-8 max-w-xl font-light">
                Com o filtro interativo, observe como integramos a sustentação mecânica, distribuição condutora e canais fluídicos em uma camada unificada de informações executivas.
              </p>
            </div>

            {/* Simulated Interactive Blueprint Sandbox Canvas (High Fidelity CSS Graphic) */}
            <div className="relative h-64 sm:h-72 w-full bg-black/80 border border-[#343535] overflow-hidden flex items-center justify-center p-4">
              {/* Target Aim overlay */}
              <div className="absolute inset-4 border border-[#343535]/20 pointer-events-none flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-brand-cyan/40 rounded-full" />
                <div className="absolute top-1/2 left-2 right-2 h-[1px] bg-[#343535]/15" />
                <div className="absolute left-1/2 top-2 bottom-2 w-[1px] bg-[#343535]/15" />
              </div>

              {/* Grid Background in Sandbox */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#343535/10_1px,transparent_1px),linear-gradient(to_bottom,#343535/10_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Graphical Layers Rendered under states */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLayer}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex items-center justify-center font-mono text-[9px] text-[#59b2b8]"
                >
                  
                  {/* Structural grid elements (Slab & Pillars) */}
                  {(activeLayer === 'estrutural' || activeLayer === 'completo') && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {/* Standard columns */}
                      <div className="absolute left-1/4 top-1/4 w-8 h-8 border border-[#59b2b8]/40 bg-brand-teal/10 flex items-center justify-center text-white font-bold">P1</div>
                      <div className="absolute right-1/4 top-1/4 w-8 h-8 border border-[#59b2b8]/40 bg-brand-teal/10 flex items-center justify-center text-white font-bold">P2</div>
                      <div className="absolute left-1/4 bottom-1/4 w-8 h-8 border border-[#59b2b8]/40 bg-brand-teal/10 flex items-center justify-center text-white font-bold">P3</div>
                      <div className="absolute right-1/4 bottom-1/4 w-8 h-8 border border-[#59b2b8]/40 bg-brand-teal/10 flex items-center justify-center text-white font-bold">P4</div>
                      
                      {/* Heavy Slab Outline */}
                      <div className="w-[55%] h-[55%] border-2 border-[#59b2b8] border-dashed flex items-end p-2 opacity-60">
                        <span className="text-[#59b2b8]/70">LAGE DE ALTA COMPRESSÃO / PILAR VÍNCULO</span>
                      </div>
                    </div>
                  )}

                  {/* Electrical System Layer Overlay */}
                  {(activeLayer === 'eletrico' || activeLayer === 'completo') && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {/* Wiring paths mimicking digital circuits */}
                      <svg className="w-full h-full absolute inset-0 text-amber-400 opacity-80" fill="none">
                        <motion.path 
                          d="M 50,50 L 150,50 L 150,200 L 250,200" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          strokeLinecap="round"
                          strokeDasharray="4 4"
                          initial={{ strokeDashoffset: 0 }}
                          animate={{ strokeDashoffset: -20 }}
                          transition={{ repeat: Infinity, ease: 'linear', duration: 2 }}
                        />
                        <motion.path 
                          d="M 350,100 L 250,100 L 250,220" 
                          stroke="currentColor" 
                          strokeWidth="1.5"
                          initial={{ strokeDashoffset: 0 }}
                          animate={{ strokeDashoffset: 20 }}
                          transition={{ repeat: Infinity, ease: 'linear', duration: 2 }}
                        />
                      </svg>
                      {/* Circuit Breaker Box mock element */}
                      <div className="absolute top-[40%] left-[38%] bg-amber-500/10 border border-amber-500 px-2 py-1 text-amber-400 font-bold">
                        QD - ALIMENTAÇÃO CORRENTE
                      </div>
                    </div>
                  )}

                  {/* Hydraulic System Layer Overlay */}
                  {(activeLayer === 'hidraulico' || activeLayer === 'completo') && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {/* Water Pipes */}
                      <svg className="w-full h-full absolute inset-0 text-[#40a5aa]" fill="none">
                        <motion.path 
                          d="M 80,180 L 180,180 L 180,60 M 180,60 L 320,60" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          strokeLinecap="round"
                        />
                        {/* Flow arrows running in pipe */}
                        <motion.circle r="3" fill="#ffffff" cx="0" cy="0">
                          <animateMotion dur="4s" repeatCount="indefinite" path="M 80,180 L 180,180 L 180,60 L 320,60" />
                        </motion.circle>
                      </svg>
                      {/* Water Tank mock label */}
                      <div className="absolute bottom-[35%] right-[25%] bg-[#1b5259]/30 border border-[#40a5aa] px-2 py-1 text-white text-[8px] flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-[#40a5aa] rounded-full animate-pulse" />
                        CAIXA D&apos;ÁGUA 2.000L
                      </div>
                    </div>
                  )}

                  {/* Dynamic HUD Details on Corner */}
                  <div className="absolute bottom-3 left-3 bg-black/70 px-2 py-1 border border-white/5 flex gap-3 text-[8px]">
                    <span className="text-gray-500">MÉTODO: <span className="text-white">CO-ORDENADO BIM</span></span>
                    <span className="text-gray-500">ZOOM: <span className="text-white">100%</span></span>
                    <span className="text-gray-500">COORD: <span className="text-brand-cyan">Z-73.491</span></span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CARD 2 (Small - Col-span 1): Compatibility Check AI / Engine */}
          <div className="bg-[#121414]/90 border border-[#343535] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-brand-cyan/25 transition-all duration-300">
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#343535] group-hover:border-brand-cyan/35" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#343535] group-hover:border-brand-cyan/35" />

            <div>
              <span className="font-mono text-[9px] text-brand-cyan font-semibold uppercase tracking-widest bg-brand-cyan/5 px-2.5 py-1 border border-brand-cyan/15 rounded-sm">
                AUDITORIA COMPUTACIONAL
              </span>
              <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight mt-2.5 mb-2">
                Scan Anti-Erros de Colisão
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-light mb-6">
                Redes elétricas instaladas cruzando tubos de recalque geram retrabalho na obra física. Nosso algoritmo pré-escaneia e soluciona conflitos automaticamente.
              </p>
            </div>

            {/* Scanner interactive widget */}
            <div className="bg-black/60 border border-[#343535] p-4 flex flex-col space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-gray-400 flex items-center gap-1.5 uppercase tracking-wide">
                  <Activity className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                  Status do Motor de Varredura
                </span>
                
                {scanState === 'idle' && <span className="text-amber-500 font-bold uppercase">PRONTO</span>}
                {scanState === 'scanning' && <span className="text-brand-cyan font-bold uppercase animate-pulse">ESCANEANDO</span>}
                {scanState === 'complete' && <span className="text-green-500 font-bold uppercase flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> CONCLUÍDO</span>}
              </div>

              {/* Progress Bar inside scan */}
              <div className="h-6 w-full bg-black relative border border-white/5 overflow-hidden flex items-center justify-center">
                {scanState === 'scanning' && (
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-brand-cyan/10 border-r border-brand-cyan"
                    style={{ width: `${scanProgress}%` }}
                  />
                )}
                {scanState === 'complete' && (
                  <div className="absolute inset-0 bg-green-500/10 pointer-events-none" />
                )}
                <span className="relative font-mono text-[9px] text-white">
                  {scanState === 'idle' && 'ANALISAR SISTEMA'}
                  {scanState === 'scanning' && `VERIFICANDO... ${scanProgress}%`}
                  {scanState === 'complete' && '98% COMPATIBILIZADO EM PAINEL'}
                </span>
              </div>

              {/* Simulation metrics */}
              <div className="grid grid-cols-2 gap-2 text-[9px] font-mono text-center">
                <div className="bg-white/2 p-2 border border-white/5">
                  <p className="text-gray-500">CONFLITOS DIAG.</p>
                  <p className={`text-xs font-bold ${scanState === 'complete' ? 'text-green-500' : 'text-amber-500'}`}>
                    {scanState === 'complete' ? '0' : incompatibilitiesResult}
                  </p>
                </div>
                <div className="bg-white/2 p-2 border border-white/5">
                  <p className="text-gray-500">MÉTRICA FISCAL</p>
                  <p className="text-xs font-bold text-white">ATRASO ZERO</p>
                </div>
              </div>

              {scanState !== 'scanning' && (
                <button
                  onClick={startScan}
                  className="w-full text-center bg-brand-cyan hover:bg-[#59b2b8] text-black font-mono text-xs font-bold uppercase py-2.5 transition-colors cursor-pointer"
                >
                  {scanState === 'complete' ? 'REPETIR TESTE' : 'INICIAR AUDITORIA BIM'}
                </button>
              )}
            </div>
          </div>

          {/* CARD 3 (Small - Col-span 1): Material Economy Calculator Widget */}
          <div className="bg-[#121414]/90 border border-[#343535] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-brand-cyan/25 transition-all duration-300">
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#343535] group-hover:border-brand-cyan/35" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#343535] group-hover:border-brand-cyan/35" />

            <div>
              <span className="font-mono text-[9px] text-brand-cyan font-semibold uppercase tracking-widest bg-brand-cyan/5 px-2.5 py-1 border border-brand-cyan/15 rounded-sm">
                OTIMIZAÇÃO ECONÔMICA
              </span>
              <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight mt-2.5 mb-2">
                Desperdício Zero de Insumos
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-light mb-6">
                Cascatas de concreto dispensado por excesso representam 18% da média de custos adicionais em reformas tradicionais. BIM elimina este desvio físico.
              </p>
            </div>

            {/* Material comparison interactive widget (21st.dev style chart) */}
            <div className="bg-black/60 border border-[#343535] p-4 flex flex-col space-y-4">
              <div className="flex bg-black p-1 rounded-none border border-white/5 text-[9px] font-mono tracking-wider font-bold">
                <button
                  onClick={() => setSelectedMethod('tradicional')}
                  className={`flex-1 py-1 px-2 text-center uppercase transition-colors cursor-pointer ${
                    selectedMethod === 'tradicional' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'text-gray-400'
                  }`}
                >
                  Tradicional
                </button>
                <button
                  onClick={() => setSelectedMethod('am')}
                  className={`flex-1 py-1 px-2 text-center uppercase transition-colors cursor-pointer ${
                    selectedMethod === 'am' ? 'bg-brand-cyan/10 text-white border border-brand-cyan/20' : 'text-gray-400'
                  }`}
                >
                  AM Engenharia
                </button>
              </div>

              {/* Graphic comparing values bar */}
              <div className="space-y-3">
                {/* Waste bar */}
                <div>
                  <div className="flex justify-between font-mono text-[8.5px] text-gray-400 mb-1">
                    <span>PERDA ESTIMADA DE MATERIAIS</span>
                    <span className={selectedMethod === 'am' ? 'text-brand-cyan font-extrabold' : 'text-red-400 font-extrabold'}>
                      {selectedMethod === 'am' ? '1.5% MAX' : '22.0% INTEGRAL'}
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-white/5 border border-white/5 p-0.5 rounded-none overflow-hidden">
                    <motion.div
                      className={`h-full ${selectedMethod === 'am' ? 'bg-brand-cyan' : 'bg-red-500'}`}
                      initial={{ width: '10%' }}
                      animate={{ width: selectedMethod === 'am' ? '7.5%' : '88%' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Accuracy score bar */}
                <div>
                  <div className="flex justify-between font-mono text-[8.5px] text-gray-400 mb-1">
                    <span>FIDELIDADE PLANILHA DE ORÇAMENTO</span>
                    <span className={selectedMethod === 'am' ? 'text-brand-cyan font-extrabold' : 'text-red-400 font-extrabold'}>
                      {selectedMethod === 'am' ? '99.2% EXATA' : '71.5% INSTÁVEL'}
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-white/5 border border-white/5 p-0.5 rounded-none overflow-hidden">
                    <motion.div
                      className={`h-full ${selectedMethod === 'am' ? 'bg-[#59b2b8]' : 'bg-red-500/50'}`}
                      initial={{ width: '10%' }}
                      animate={{ width: selectedMethod === 'am' ? '99%' : '71%' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>

              {/* Economy Statement callout badge */}
              <div className={`p-2.5 border text-center transition-colors ${
                selectedMethod === 'am' 
                  ? 'bg-brand-cyan/2 border-brand-cyan/15 text-brand-cyan' 
                  : 'bg-red-500/2 border-red-500/10 text-red-400'
              }`}>
                <p className="font-sans text-[10px] font-medium leading-relaxed">
                  {selectedMethod === 'am' 
                    ? 'Até 25% de economia real gerando abatimento estrito no contrato turnkey garantido.'
                    : 'Riscos consideráveis de alteração de taxas alfandegárias físicas no canteiro.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 (Large - 3 cols on lg, row bottom): Global Quality & Stamp Warranties */}
          <div className="lg:col-span-3 bg-[#121414]/90 border border-[#343535] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group hover:border-brand-cyan/25 transition-all duration-300">
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#343535]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#343535]" />

            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-5 h-[1px] bg-brand-cyan" />
                <span className="font-mono text-[9px] text-brand-cyan font-bold uppercase tracking-widest">
                  SEGURANÇA LEGAL & TRIBUTÁRIA
                </span>
              </div>
              <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight">
                Instalações Blindadas e Respaldadas por ART
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                Cada prumada hidrossanitária, fiação dimensionada sob a norma técnica ou malha condutora SPDA instalada pela nossa equipe acompanha a emissão imediata da correspondente Genuína Homologação CREA (Anotação de Responsabilidade Técnica), blindando juridicamente e financeiramente seu patrimônio.
              </p>
              
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
                  <span>Isenção de Sinistros</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
                  <span>Aprovado Corpo de Bombeiros</span>
                </div>
              </div>
            </div>

            {/* Simulated Stamp / Visual dynamic badge on right (Very popular on 21st.dev) */}
            <div className="w-40 h-40 shrink-0 relative flex items-center justify-center select-none bg-black/40 border border-white/5 rounded-full p-4 group-hover:border-brand-cyan/35 transition-all duration-500">
              <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-spin-slow group-hover:border-brand-cyan/20" />
              
              <div className="text-center space-y-1 z-10 flex flex-col items-center justify-center">
                <HardHat className="w-7 h-7 text-brand-cyan animate-pulse" />
                <span className="font-mono text-[8px] font-black tracking-widest text-white block uppercase">
                  REGISTRO
                </span>
                <span className="font-sans text-[11px] font-bold text-brand-cyan block">
                  CREA MULTI
                </span>
                <span className="font-mono text-[7px] text-gray-400 block font-semibold">
                  PI • MG • SP • PR • MA
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
