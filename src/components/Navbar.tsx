/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { LogoFull } from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Quem Somos', id: 'sobre' },
    { label: 'O Que Fazemos', id: 'servicos' },
    { label: 'Nosso Processo', id: 'processo' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Depoimentos', id: 'depoimentos' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#121414]/90 backdrop-blur-md border-[#343535] py-4'
          : 'bg-[#121414]/30 backdrop-blur-xs border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer"
        >
          <LogoFull />
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-6 font-mono text-xs">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#e2f1f5] hover:text-brand-cyan transition-colors relative py-2 focus:outline-none cursor-pointer group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-brand-cyan transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </button>
            ))}
          </div>

          {/* Budget Quick Action */}
          <button
            onClick={() => scrollToSection('orcamento')}
            className="font-mono text-xs font-semibold uppercase tracking-wider bg-brand-cyan hover:bg-[#00d0d5] text-black px-5 py-3 transition-all duration-300 transform active:scale-95 shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/35 flex items-center space-x-2 border border-transparent cursor-pointer font-bold"
          >
            <Phone className="w-3.5 h-3.5 mr-1" />
            <span>FALE CONOSCO</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-brand-cyan transition-colors p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-[#121414] border-l border-[#343535] z-40 transform transition-transform duration-300 ease-in-out p-6 shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '72px', height: 'calc(100vh - 72px)' }}
      >
        <div className="flex flex-col space-y-6 h-full justify-between pb-8">
          <div className="flex flex-col space-y-4">
            <span className="font-mono text-[10px] uppercase text-[#b7d2db] tracking-widest border-b border-[#343535] pb-2">
              Navegação Técnica
            </span>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left font-sans text-lg font-medium text-[#e3e2e2] hover:text-brand-cyan transition-colors py-2 block border-b border-[#1f2020] cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <p className="font-mono text-[10px] text-gray-500 text-center">
              AM Engenharia Civil & Estrutural
            </p>
            <button
              onClick={() => scrollToSection('orcamento')}
              className="w-full text-center font-mono text-sm font-bold uppercase bg-brand-cyan text-black py-4 select-none tracking-widest transition-colors hover:bg-brand-cyan/80 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>ORÇAMENTO DIRETO</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
