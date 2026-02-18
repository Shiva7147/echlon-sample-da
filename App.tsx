
import React, { useState, memo, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WorkSection from './components/WorkPage';
import LoadingScreen from './components/LoadingScreen';
import Particles from './components/Particles';
import ServiceDetail from './components/ServiceDetail';
import ClientsPage from './components/ClientsPage';
import { ServiceItem } from './constants';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

const SectionWrapper = memo(({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`relative overflow-hidden ${className}`} style={{ transform: 'translateZ(0)' }}>
    {children}
  </section>
));
SectionWrapper.displayName = "SectionWrapper";

const BackgroundLayer = memo(({ bgX, bgY }: { bgX: any, bgY: any }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      <Particles countMultiplier={0.3} />
      
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform"
      >
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="none"
          onPlay={() => setIsVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${isVideoReady ? 'opacity-[0.15]' : 'opacity-0'}`}
          style={{ transform: 'translateZ(0)' }}
        >
          <source src="https://res.cloudinary.com/dt9sjix9r/video/upload/v1769274971/dark_blue_e_ejvrad.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90" />
      </motion.div>
      
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
});
BackgroundLayer.displayName = "BackgroundLayer";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isClientsOpen, setIsClientsOpen] = useState(false);
  
  const bgX = useSpring(0, { stiffness: 15, damping: 30, mass: 1.5 });
  const bgY = useSpring(0, { stiffness: 15, damping: 30, mass: 1.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      bgX.set(x);
      bgY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [bgX, bgY]);

  const scrollToSection = (id: string) => {
    if (id === 'clients') {
      setIsClientsOpen(true);
      setSelectedService(null);
      return;
    }
    
    if (selectedService || isClientsOpen) {
      setSelectedService(null);
      setIsClientsOpen(false);
    }
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-[#0052FF] selection:text-white overflow-x-hidden w-full relative min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && <BackgroundLayer bgX={bgX} bgY={bgY} />}
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <div className="fixed top-0 left-0 w-full z-[110] pointer-events-none">
            <div className="pointer-events-auto">
              <Header onNavigate={scrollToSection} />
            </div>
          </div>

          <main className="w-full">
            <AnimatePresence mode="wait">
              {selectedService ? (
                <ServiceDetail 
                  key="service-detail"
                  service={selectedService} 
                  onClose={() => setSelectedService(null)} 
                  onContact={() => scrollToSection('contact')}
                />
              ) : isClientsOpen ? (
                <ClientsPage 
                  key="clients-page"
                  onClose={() => setIsClientsOpen(false)}
                />
              ) : (
                <motion.div
                  key="main-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SectionWrapper id="home">
                    <Hero onWorkClick={() => scrollToSection('work')} />
                  </SectionWrapper>

                  <SectionWrapper>
                    <Services onServiceSelect={setSelectedService} />
                  </SectionWrapper>
                  
                  <div className="h-[15vh] md:h-[25vh] relative flex items-center justify-center overflow-hidden bg-transparent border-y border-white/5">
                    <div 
                      className="text-[12vw] font-black text-white/5 uppercase tracking-[0.4em] select-none pointer-events-none whitespace-nowrap"
                    >
                      ECHELON MARKETING HOUSE
                    </div>
                  </div>

                  <SectionWrapper id="work">
                    <WorkSection />
                  </SectionWrapper>

                  <SectionWrapper id="contact">
                    <ContactForm />
                  </SectionWrapper>
                  
                  <Footer />
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </motion.div>
      )}
    </div>
  );
};

export default App;
