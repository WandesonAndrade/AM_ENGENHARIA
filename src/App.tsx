/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechBentoGrid from "./components/TechBentoGrid";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import BudgetCalculator from "./components/BudgetCalculator";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="bg-bg-main min-h-screen text-text-main select-none selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Floating contact hub */}
      <FloatingWhatsApp />

      {/* Structural fixed navigation */}
      <Navbar />

      <main className="space-y-0">
        {/* Cinematic Intro & Metrics */}
        <Hero />

        {/* Company profile & Core values */}
        <About />

        {/* Premium Bento Grid - BIM & Engineering Tech */}

        {/* Technical services with blueprint detail triggers */}
        <Services />

        {/* Delivery methodology sequential tracking */}
        <Process />

        {/* Organized responsive project gallery with detail cards */}
        <Portfolio />

        {/* Real-time budget estimator & direct consultation form */}
        <BudgetCalculator />

        {/* Client feedback masonry masonry */}
        <Testimonials />
      </main>

      {/* Structured Technical footer */}
      <Footer />
    </div>
  );
}
