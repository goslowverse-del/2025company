import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COPY } from '../constants/copy';

export default function Home() {
  const { home } = COPY;

  return (
    <div className="overflow-hidden break-keep bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:h-screen flex items-center justify-center bg-white overflow-hidden px-4 sm:px-6 py-20">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brand/5 rounded-full blur-[96px] sm:blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-brand/5 rounded-full blur-[96px] sm:blur-[128px] animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" 
               style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(79,70,229,0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-brand text-[11px] sm:text-xs font-bold tracking-widest mb-6 sm:mb-8 uppercase">
              {home.hero.badge}
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 sm:mb-8 leading-[1.12] text-slate-900">
              {home.hero.title} <br />
              <span className="text-gradient">{home.hero.titleAccent}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed whitespace-pre-line px-2 sm:px-0">
              {home.hero.subCopy}
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center max-w-md sm:max-w-none mx-auto px-4 sm:px-0">
              <Link
                to="/business"
                className="bg-brand text-white px-8 py-4 h-13 sm:h-14 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand/90 transition-all active:scale-95 shadow-lg shadow-brand/20 text-sm sm:text-base"
              >
                {home.hero.ctaBusiness} <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="bg-slate-100 text-slate-900 border border-slate-200 px-8 py-4 h-13 sm:h-14 rounded-full font-bold flex items-center justify-center hover:bg-slate-200 transition-all active:scale-95 text-sm sm:text-base"
              >
                {home.hero.ctaContact}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-[10px] tracking-widest font-bold uppercase pointer-events-none"
        >
          <span>Scroll</span>
          <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-brand to-transparent"></div>
        </motion.div>
      </section>

      {/* About Summary - SOFT DARK */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 bg-slate-900 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 sm:gap-16 lg:gap-20 items-center">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6 sm:mb-8 text-white">
                {COPY.home.aboutHeader}
              </h2>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 sm:mb-10 whitespace-pre-line">
                {home.aboutSub}
              </p>
              <Link to="/about" className="group inline-flex items-center gap-3 text-white font-bold hover:text-brand transition-colors py-2 text-sm sm:text-base">
                자세히 보기 <motion.span whileHover={{ x: 5 }}><ArrowRight size={18} /></motion.span>
              </Link>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-white/5 p-1 border border-white/10 shadow-2xl">
                <div className="w-full h-full bg-slate-900 rounded-[14px] sm:rounded-[22px] flex items-center justify-center overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=70&w=800&fm=webp" 
                    alt="Office" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" 
                    loading="lazy"
                   />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Business Preview - SOFT LIGHT */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
            <div className="max-w-3xl">
              <span className="text-brand font-bold tracking-widest text-xs uppercase mb-3 sm:mb-4 block">{home.expertise.badge}</span>
              <h2 className="text-2.5xl xs:text-3xl sm:text-4.5xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-slate-900 whitespace-pre-line leading-tight">{home.expertise.title}</h2>
              <p className="text-slate-500 text-sm sm:text-lg leading-relaxed">{home.expertise.subCopy}</p>
            </div>
            <Link to="/business" className="inline-flex text-slate-500 hover:text-brand transition-all text-sm font-bold items-center gap-2 py-1.5 focus:outline-none">
              전체 보기 <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {home.expertise.items.map((biz, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 hover:border-brand/40 transition-all group cursor-pointer shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="text-brand font-mono text-xs sm:text-sm font-bold mb-6 sm:mb-10">{biz.id}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 group-hover:text-brand transition-colors leading-snug">{biz.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">{biz.desc}</p>
                </div>
                <div className="w-10 h-0.5 bg-slate-100 group-hover:w-full group-hover:bg-brand transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Preview & Partners - DARK THEME */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 bg-slate-900 border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-brand/10 rounded-full blur-[96px] sm:blur-[128px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* ESG Header */}
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 mb-16 sm:mb-24 lg:mb-32 items-center">
            <div className="lg:w-1/3 w-full">
               <span className="text-brand font-bold tracking-widest text-xs uppercase mb-3 sm:mb-4 block">{home.esg.badge}</span>
               <h2 className="text-2.5xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 leading-tight text-white">{home.esg.title}</h2>
               <p className="text-slate-400 leading-relaxed mb-8 sm:mb-10 whitespace-pre-line text-sm sm:text-lg">
                  {home.esg.subCopy}
               </p>
               <Link to="/esg" className="inline-block text-center w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white hover:text-slate-900 transition-all">
                  자세히 보기
               </Link>
            </div>
            <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
               {home.esg.items.map((esg, idx) => {
                 const emojis = ['🌿', '🤝', '🏛️'];
                 return (
                    <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-sm">
                      <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-5 shadow-sm">{emojis[idx]}</div>
                      <h4 className="text-lg sm:text-xl font-bold mb-3 text-white">{esg.label}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{esg.desc}</p>
                    </div>
                 );
               })}
            </div>
          </div>

          <div className="h-px bg-white/10 mb-16 sm:mb-24 lg:mb-32"></div>

          {/* Partners Call to Action */}
          <div className="max-w-4xl mx-auto text-center px-2">
            <h2 className="text-2.5xl xs:text-3xl sm:text-4.5xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">{home.partners.title}</h2>
            <p className="text-slate-400 text-sm sm:text-lg mb-8 sm:mb-12 whitespace-pre-line leading-relaxed">
              {home.partners.subCopy}
            </p>
            <Link to="/contact" className="inline-block text-center w-full sm:w-auto px-10 py-4.5 bg-brand text-white text-sm sm:text-base font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-brand/20">
              파트너십 제안하기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 bg-brand relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-[96px] sm:blur-[128px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h2 className="text-2.5xl xs:text-3xl sm:text-4.5xl md:text-6xl lg:text-7xl font-black text-white mb-8 sm:mb-12 leading-tight tracking-tight">
            {home.cta.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center px-4 sm:px-0">
            <Link to="/contact" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4.5 bg-white text-brand font-black text-sm sm:text-base rounded-full hover:bg-white/90 transition-all select-none">
              프로젝트 문의하기
            </Link>
            <div className="text-white text-xs sm:text-sm font-bold opacity-80 break-all select-all">
              {home.cta.subCopy} <span className="underline ml-1.5">{COPY.common.contactEmail}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
