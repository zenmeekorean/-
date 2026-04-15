import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ChevronDown, Globe, MessageSquare, Sparkles, Music, Stethoscope, Utensils, ArrowRight } from 'lucide-react';
import { SiteContent, initialContent } from './types';

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const logoUrl = "https://postfiles.pstatic.net/MjAyNjAzMjdfMjQx/MDAxNzc0NTM5MDcwMDA5.u8n1DzJrJ2sYPpJSC3fq8PnUYZk2IhIBO7U9mi4vSTcg.k_BOj5Q-sUZfhusUY9enQiJWxe5C46t-YtLxHNINEfog.JPEG/%ED%95%98%EC%96%80_%EB%B0%B0%EA%B2%BD.jpg?type=w3840";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Service', path: '/#service' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Blog', path: 'https://brunch.co.kr/@bridotmarketing', external: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
            <img src={logoUrl} alt="브리닷 마케팅 로고" className="w-full h-full object-contain object-[44%_center] p-1" referrerPolicy="no-referrer" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight">브리닷 <span className="text-brand-blue">마케팅</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="http://pf.kakao.com/_TZNhX/chat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-brand-blue/30 transition-all active:scale-95"
          >
            무료 컨설팅 신청
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path} 
                onClick={() => setIsOpen(false)} 
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-lg font-medium py-2 border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="http://pf.kakao.com/_TZNhX/chat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-blue text-white w-full py-4 rounded-xl font-bold mt-4 text-center block"
            >
              무료 컨설팅 신청
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ content }: { content: SiteContent['hero'] }) => {
  const renderHeadline = (text: string) => {
    const parts = text.split(/(37명|레딧)/g);
    return parts.map((part, i) => {
      if (part === '37명') {
        return (
          <span key={i} className="text-brand-blue font-bold relative inline-block">
            {part}
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-1 left-0 h-3 bg-brand-blue/10 -z-10"
            />
          </span>
        );
      }
      if (part === '레딧') {
        return (
          <span key={i} className="text-reddit-orange font-bold relative inline-block">
            {part}
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-1 left-0 h-3 bg-reddit-orange/10 -z-10"
            />
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light-blue -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-light-blue text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} /> Reddit Marketing Agency
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-[1.2] mb-8 whitespace-pre-line break-keep">
            {renderHeadline(content.headline)}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl break-keep whitespace-normal md:whitespace-pre-line">
            {content.subHeadline}
          </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="http://pf.kakao.com/_TZNhX/chat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:shadow-brand-blue/30 transition-all flex items-center justify-center gap-2 group"
          >
            {content.ctaPrimary}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://featpaper.com/l/6xEYeJh8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-reddit-orange text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:shadow-reddit-orange/30 transition-all flex items-center justify-center gap-2"
          >
            {content.ctaSecondary}
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative lg:-mr-16 lg:scale-110 lg:translate-x-4"
      >
        <div className="relative z-10 rounded-[40px] md:rounded-[80px] lg:rounded-tr-none lg:rounded-br-none overflow-hidden shadow-2xl lg:h-[460px]">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent z-10 pointer-events-none" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
            alt="글로벌 네트워크와 데이터 연결을 상징하는 추상적인 테크 이미지" 
            className="w-full h-full object-cover transition-all duration-700" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="absolute -inset-4 bg-brand-blue/10 rounded-[60px] md:rounded-[100px] blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-reddit-orange/10 rounded-full blur-3xl -z-10" />
      </motion.div>
    </div>
  </section>
  );
};

const Service = ({ content }: { content: SiteContent['service'] }) => {
  const renderWhyReddit = (text: string) => {
    const parts = text.split(/(ROAS 1위 광고 채널)/g);
    return parts.map((part, i) => 
      part === 'ROAS 1위 광고 채널' 
        ? <span key={i} className="text-reddit-orange font-bold relative inline-block">
            {part}
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-0 left-0 h-[2px] bg-reddit-orange -z-10"
            />
          </span> 
        : part
    );
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Music': return <Music />;
      case 'Stethoscope': return <Stethoscope />;
      case 'Sparkles': return <Sparkles />;
      case 'Utensils': return <Utensils />;
      default: return <Globe />;
    }
  };

  return (
    <section id="service" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 break-keep whitespace-pre-line leading-[1.4]">{content.title}</h2>
          {content.description && <p className="text-lg text-gray-500 break-keep">{content.description}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-4xl bg-brand-light-blue border border-brand-blue/10"
          >
            <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-8">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 break-keep">왜 레딧인가요?</h3>
            <p className="text-gray-600 leading-relaxed text-lg break-keep">
              {renderWhyReddit(content.whyReddit)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-4xl bg-gray-50 border border-gray-200"
          >
            <div className="w-14 h-14 bg-reddit-orange text-white rounded-2xl flex items-center justify-center mb-8">
              <Globe size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 break-keep">왜 텍스트 기반 마케팅을 해야 하나요?</h3>
            <p className="text-gray-600 leading-relaxed text-lg break-keep">
              {content.whyText}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.workScope.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl border border-gray-100 hover:border-brand-blue hover:shadow-xl hover:shadow-brand-blue/5 transition-all bg-white"
            >
              <div className="w-12 h-12 bg-gray-50 group-hover:bg-brand-blue group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                {getIcon(item.icon)}
              </div>
              <h4 className="text-xl font-bold mb-3 break-keep">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed break-keep">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = ({ content }: { content: SiteContent['whyUs'] }) => (
  <section id="why-us" className="py-32 bg-gray-900 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-reddit-orange rounded-full blur-[120px]" />
    </div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-3xl mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight whitespace-pre-line break-keep">
          {content.title}
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {content.values.map((value, idx) => (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-blue break-keep">{value.title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg break-keep">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = ({ content }: { content: SiteContent['faq'] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">자주 묻는 질문</h2>
        <div className="space-y-4">
          {content.map((item, idx) => (
            <div key={item.id} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold break-keep">{item.question}</span>
                <ChevronDown className={`transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 break-keep">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const logoUrl = "https://postfiles.pstatic.net/MjAyNjAzMjdfMjQx/MDAxNzc0NTM5MDcwMDA5.u8n1DzJrJ2sYPpJSC3fq8PnUYZk2IhIBO7U9mi4vSTcg.k_BOj5Q-sUZfhusUY9enQiJWxe5C46t-YtLxHNINEfog.JPEG/%ED%95%98%EC%96%80_%EB%B0%B0%EA%B2%BD.jpg?type=w3840";
  
  return (
    <footer className="bg-gray-50 py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
              <img src={logoUrl} alt="브리닷 마케팅 로고" className="w-full h-full object-contain object-[44%_center] p-1" referrerPolicy="no-referrer" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">브리닷 마케팅</span>
          </Link>
          <div className="space-y-1 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <p>브리닷 마케팅</p>
            <p>대표 장지영</p>
            <p>사업자등록번호 534-79-00552</p>
            <p className="lowercase">general@bridotmarketing.com</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Menu</span>
            <div className="flex gap-8">
              <a href="#service" className="text-gray-500 font-bold hover:text-brand-blue transition-colors">Service</a>
              <a href="#why-us" className="text-gray-500 font-bold hover:text-brand-blue transition-colors">Why Us</a>
              <a href="#faq" className="text-gray-500 font-bold hover:text-brand-blue transition-colors">FAQ</a>
              <a href="https://brunch.co.kr/@bridotmarketing" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-bold hover:text-brand-blue transition-colors">Blog</a>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            © 2026 Bridot Marketing. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const content = initialContent;

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero content={content.hero} />
                <Service content={content.service} />
                <WhyUs content={content.whyUs} />
                <FAQ content={content.faq} />
                <Footer />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
