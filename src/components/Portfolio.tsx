/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project, ProjectCategory } from '../types';
import { Filter, MapPin, Calendar, Layout, ChevronRight, ChevronLeft, X, Sparkles, Building, ZoomIn } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectImageIndexes, setProjectImageIndexes] = useState<Record<string, number>>({});
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'todos', label: 'Todos os Projetos' },
    { key: 'residencial', label: 'Residencial Alto Padrão' },
    { key: 'comercial', label: 'Comercial & Clínicas' },
    { key: 'corporativo', label: 'Retrofit & Escritórios' },
    { key: 'reformas', label: 'Reformas & Restauros' }
  ];

  // Filter projects according to category state
  const filteredProjects = activeCategory === 'todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleConsultProject = (project: Project) => {
    setSelectedProject(null);
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

      // Autofill values based on project
      setTimeout(() => {
        const selectElem = document.getElementById('type-selector') as HTMLSelectElement;
        if (selectElem) {
          selectElem.value = project.category;
          selectElem.dispatchEvent(new Event('change', { bubbles: true }));
        }

        const areaSlider = document.getElementById('area-slider') as HTMLInputElement;
        if (areaSlider) {
          // Parse project area e.g. "480 m²" to integer
          const areaNum = parseInt(project.area.replace(/\D/g, ''), 10);
          if (!isNaN(areaNum)) {
            areaSlider.value = Math.min(areaNum, 1000).toString();
            areaSlider.dispatchEvent(new Event('input', { bubbles: true }));
            areaSlider.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      }, 400);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#121414] relative overflow-hidden border-b border-[#1f2020]">
      {/* Background blueprint details */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-[linear-gradient(rgba(0,180,184,.01)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="flex flex-col space-y-4 max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-brand-cyan" />
              <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase">
                GALERIA REAL DE ENGENHARIA
              </span>
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
              PROJETOS <span className="text-brand-cyan">REALIZADOS</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-400 font-light">
              Explore nossa galeria organizada por tipologia técnica. Obras integradas, seguras e com alto rigor estético. Clique em qualquer card para ver dados do projeto.
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-[#1b1c1c] border border-[#343535] px-4 py-2 text-xs font-mono text-gray-400">
            <Filter className="w-3.5 h-3.5 text-brand-cyan" />
            <span>CATEGORIAS DISPONÍVEIS: {categories.length - 1}</span>
          </div>
        </div>

        {/* Filter Navigation - Mobile Scrollable & Desktop Grid */}
        <div className="mb-12">
          <div className="flex overflow-x-auto gap-2 pb-3 scrollbar-none scroll-smooth -mx-6 px-6 md:pb-0 md:mx-0 md:px-0 md:flex-nowrap lg:flex-wrap items-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`font-mono text-xs uppercase tracking-wider px-5 py-3.5 shrink-0 transition-all duration-300 border focus:outline-none cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-brand-cyan text-black border-transparent font-bold'
                    : 'bg-[#1b1c1c]/60 text-gray-400 border-[#343535] hover:text-white hover:bg-[#1b1c1c]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => {
            const activeImgIndex = projectImageIndexes[proj.id] || 0;
            const imagesList = proj.images && proj.images.length > 0 ? proj.images : [proj.image];

            return (
              <div
                key={proj.id}
                onClick={() => {
                  setSelectedProject(proj);
                  setModalImageIndex(activeImgIndex);
                }}
                className="group bg-[#1b1c1c]/45 border border-[#343535] hover:border-brand-cyan/45 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col relative h-[480px]"
              >
                {/* Image Container with Hover zoom */}
                <div className="relative h-64 overflow-hidden bg-[#121414] shrink-0">
                  <img
                    src={imagesList[activeImgIndex]}
                    alt={`${proj.title} - Imagem ${activeImgIndex + 1}`}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-all duration-700 select-none animate-fade-in"
                    loading="lazy"
                  />
                  
                  {/* Visual Overlay elements overlaying details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent pointer-events-none" />
                  
                  {/* Carousel navigation controls on hover */}
                  {imagesList.length > 1 && (
                    <>
                      
                      {/* Left Arrow */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setProjectImageIndexes(prev => {
                            const cur = prev[proj.id] || 0;
                            return { ...prev, [proj.id]: (cur - 1 + imagesList.length) % imagesList.length };
                          });
                        }}
                        aria-label="Imagem anterior"
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/80 hover:bg-brand-cyan hover:text-black text-white border border-white/10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {/* Right Arrow */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setProjectImageIndexes(prev => {
                            const cur = prev[proj.id] || 0;
                            return { ...prev, [proj.id]: (cur + 1) % imagesList.length };
                          });
                        }}
                        aria-label="Próxima imagem"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/80 hover:bg-brand-cyan hover:text-black text-white border border-white/10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Photo Index indicator badge */}
                      <div className="absolute bottom-4 right-4 flex items-center space-x-1.5 z-20 bg-black/60 backdrop-blur-xs px-2.5 py-1 border border-white/10 text-[9px] font-mono text-white">
                        <span className="text-brand-cyan font-bold">{activeImgIndex + 1}</span>
                        <span className="text-gray-500">/</span>
                        <span className="text-gray-400">{imagesList.length}</span>
                      </div>
                    </>
                  )}

                  {/* Badge Category */}
                  <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest bg-black/75 border border-[#343535] px-3 py-1 text-brand-cyan font-bold">
                    {proj.categoryLabel}
                  </span>
                </div>

                {/* Information body */}
                <div className="p-6 flex flex-col justify-between grow">
                  <div className="flex flex-col space-y-2">
                    {/* Metadata Row */}
                    <div className="flex items-center space-x-4 font-mono text-[10px] text-gray-500">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-brand-cyan shrink-0" />
                        <span className="truncate max-w-[120px]">{proj.location.split(',')[0]}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-brand-cyan shrink-0" />
                        <span>{proj.year}</span>
                      </span>
                      <span className="font-bold text-white bg-[#343535]/30 px-1.5 py-0.5 border border-[#343535]">
                        {proj.area}
                      </span>
                    </div>

                    <h3 className="font-sans text-base font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug uppercase tracking-tight line-clamp-2 pt-2">
                      {proj.title}
                    </h3>
                    
                    <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-2 font-light">
                      {proj.description}
                    </p>
                  </div>

                  {/* Action footer */}
                  <div className="flex items-center space-x-2 text-brand-cyan font-mono text-[10px] font-bold tracking-widest pt-4 border-t border-[#1f2020] mt-4 self-start">
                    <span>ANALISAR MEMORIAL</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State if filter yields no items */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#1b1c1c]/10 border border-[#343535] p-8 max-w-lg mx-auto">
            <Layout className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h4 className="font-sans font-bold text-white uppercase">Nenhum projeto encontrado</h4>
            <p className="font-sans text-xs text-gray-500 mt-1">
              Não temos registros de obras de restauro em execução no momento. Entre em contato para consultas personalizadas.
            </p>
          </div>
        )}

      </div>

      {/* Project Lightbox Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-xs select-none">
          <div
            className="relative w-full max-w-3xl bg-[#1b1c1c] border border-white/10 p-0 shadow-2xl overflow-y-auto max-h-[85vh] md:max-h-[90vh] md:rounded-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image banner inside modal */}
            <div className="h-64 sm:h-80 relative bg-black select-none">
              <img
                src={selectedProject.images && selectedProject.images.length > 0 ? selectedProject.images[modalImageIndex] : selectedProject.image}
                alt={`${selectedProject.title} - Imagem ${modalImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c] via-[#1b1c1c]/45 to-transparent pointer-events-none" />
              
              {/* Modal Carousel Controls */}
              {selectedProject.images && selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => {
                      const prev = (modalImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
                      setModalImageIndex(prev);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/75 hover:bg-brand-cyan hover:text-black text-white border border-white/10 hover:border-transparent flex items-center justify-center transition-colors cursor-pointer z-20"
                    title="Imagem Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      const next = (modalImageIndex + 1) % selectedProject.images.length;
                      setModalImageIndex(next);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/75 hover:bg-brand-cyan hover:text-black text-white border border-white/10 hover:border-transparent flex items-center justify-center transition-colors cursor-pointer z-20"
                    title="Próxima Imagem"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Slide Index indicator */}
                  <div className="absolute top-4 left-4 bg-black/75 border border-white/10 px-3 py-1 font-mono text-[9px] text-brand-cyan font-bold uppercase tracking-wider">
                    Imagem {modalImageIndex + 1} de {selectedProject.images.length}
                  </div>
                </>
              )}

              {/* Close helper */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-none border border-white/10 transition-colors cursor-pointer z-30"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 pr-12 pointer-events-none">
                <span className="font-mono text-[9px] uppercase tracking-widest bg-brand-cyan text-black font-extrabold px-3 py-1">
                  Memorial Técnico Detalhado
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-black text-white uppercase mt-2 shadow-sm truncate max-w-full">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Informational specs body */}
            <div className="p-6 md:p-8 flex flex-col space-y-6">
              
              {/* Meta Parameters bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#121414] border border-[#343535] p-4 text-center">
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase block mb-1">ÁREA</span>
                  <p className="font-sans font-bold text-white text-sm">{selectedProject.area}</p>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase block mb-1">LOCALIZAÇÃO</span>
                  <p className="font-sans font-bold text-white text-sm truncate px-1">{selectedProject.location.split(',')[0]}</p>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase block mb-1">ANO</span>
                  <p className="font-sans font-bold text-white text-sm">{selectedProject.year}</p>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase block mb-1">TIPOLOGIA</span>
                  <p className="font-sans font-bold text-brand-cyan text-sm">{selectedProject.categoryLabel}</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] text-[#b7d2db] uppercase tracking-widest">RESUMO DO PROJETO</h4>
                <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              <div className="h-[1px] bg-[#343535]" />

              {/* Highlights List */}
              <div className="space-y-4">
                <h4 className="font-mono text-[10px] text-[#b7d2db] uppercase tracking-widest flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>DIFERENCIAIS REGISTRADOS NA OBRA</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.highlights.map((h, index) => (
                    <div key={index} className="flex items-start space-x-2 text-xs text-gray-400 font-sans">
                      <span className="font-mono text-brand-cyan font-bold mt-0.5 shrink-0">[{index + 1}]</span>
                      <p className="leading-relaxed font-light">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6 border-t border-[#343535]">
                <button
                  onClick={() => handleConsultProject(selectedProject)}
                  className="flex-grow bg-brand-cyan hover:bg-[#00d0d5] text-black font-mono text-xs font-bold uppercase tracking-wider py-4 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>SOLICITAR CONSULTA DESTE PROJETO</span>
                  <ChevronRight className="w-4 h-4 text-black" />
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="border border-[#343535] hover:bg-white/5 text-gray-400 hover:text-white font-mono text-xs py-4 px-6 transition-all uppercase cursor-pointer"
                >
                  <span>FECHAR MEMORIAL</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
