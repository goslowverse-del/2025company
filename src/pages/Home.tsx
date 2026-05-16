import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COPY } from '../constants/copy';

export default function Home() {
  const { home } = COPY;

  return (
    <div className="overflow-hidden break-keep bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden px-6">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[128px] animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" 
               style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(79,70,229,0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-brand text-xs font-bold tracking-widest mb-8 uppercase">
              {home.hero.badge}
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] text-slate-900">
              {home.hero.title} <br />
              <span className="text-gradient">{home.hero.titleAccent}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
              {home.hero.subCopy}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/business"
                className="bg-brand text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand/90 transition-all active:scale-95 shadow-lg shadow-brand/20"
              >
                {home.hero.ctaBusiness} <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-slate-100 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all active:scale-95"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-[10px] tracking-widest font-bold uppercase"
        >
          <span>Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-brand to-transparent"></div>
        </motion.div>
      </section>

      {/* About Summary - SOFT DARK */}
      <section className="py-40 px-6 bg-slate-900 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 text-white">
                {COPY.home.aboutHeader}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                {home.aboutSub}
              </p>
              <Link to="/about" className="group flex items-center gap-3 text-white font-bold hover:text-brand transition-colors">
                자세히 보기 <motion.span whileHover={{ x: 5 }}><ArrowRight size={20} /></motion.span>
              </Link>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="relative aspect-video rounded-3xl overflow-hidden bg-white/5 p-1 border border-white/10 shadow-2xl">
                <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Office" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" 
                   />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Business Preview - SOFT LIGHT */}
      <section className="py-40 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <span className="text-brand font-bold tracking-widest text-xs uppercase mb-4 block">{home.expertise.badge}</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 whitespace-pre-line">{home.expertise.title}</h2>
              <p className="text-slate-500 text-lg leading-relaxed">{home.expertise.subCopy}</p>
            </div>
            <Link to="/business" className="hidden md:block text-slate-400 hover:text-brand transition-all text-sm font-bold flex items-center gap-2">
              전체 보기 <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.expertise.items.map((biz, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-white border border-slate-200 hover:border-brand/40 transition-all group cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="text-brand font-mono text-sm font-bold mb-10">{biz.id}</div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900 group-hover:text-brand transition-colors">{biz.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{biz.desc}</p>
                <div className="w-10 h-0.5 bg-slate-100 group-hover:w-full group-hover:bg-brand transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Preview & Partners - DARK THEME */}
      <section className="py-40 px-6 bg-slate-900 border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand/10 rounded-full blur-[128px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* ESG Header */}
          <div className="flex flex-col lg:flex-row gap-20 mb-32 items-center">
            <div className="lg:w-1/3">
               <span className="text-brand font-bold tracking-widest text-xs uppercase mb-4 block">{home.esg.badge}</span>
               <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white">{home.esg.title}</h2>
               <p className="text-slate-400 leading-relaxed mb-10 whitespace-pre-line text-lg">
                  {home.esg.subCopy}
               </p>
               <Link to="/esg" className="inline-block px-10 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-slate-900 transition-all">
                  자세히 보기
               </Link>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
               {home.esg.items.map((esg, idx) => {
                 const emojis = ['🌿', '🤝', '🏛️'];
                 return (
                    <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-sm">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">{emojis[idx]}</div>
                      <h4 className="text-xl font-bold mb-4 text-white">{esg.label}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{esg.desc}</p>
                    </div>
                 );
               })}
            </div>
          </div>

          <div className="h-px bg-white/10 mb-32"></div>

          {/* Partners Call to Action */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">{home.partners.title}</h2>
            <p className="text-slate-400 text-lg mb-12 whitespace-pre-line leading-relaxed">
              {home.partners.subCopy}
            </p>
            <Link to="/contact" className="inline-block px-12 py-5 bg-brand text-white font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-brand/20">
              파트너십 제안하기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 bg-brand relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-[128px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-12 tracking-tight">
            {home.cta.title}
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="w-full md:w-auto px-12 py-5 bg-white text-brand font-black text-lg rounded-full border border-white/20 hover:bg-white/90 transition-all">
              프로젝트 문의하기
            </Link>
            <div className="text-white font-bold opacity-80">
              {home.cta.subCopy} <span className="underline ml-2">{COPY.common.contactEmail}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
