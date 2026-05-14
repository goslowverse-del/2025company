import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COPY } from '../constants/copy';

export default function Home() {
  const { home } = COPY;

  return (
    <div className="overflow-hidden break-keep">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden px-6">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[128px] animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5" 
               style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(79,70,229,0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-dark/10 bg-dark/5 text-brand text-xs font-bold tracking-widest mb-8 uppercase">
              {home.hero.badge}
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] text-dark">
              {home.hero.title} <br />
              <span className="text-gradient">{home.hero.titleAccent}</span>
            </h1>
            <p className="text-lg md:text-xl text-dark/60 mb-12 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
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
                className="bg-dark/5 text-dark border border-dark/10 px-8 py-4 rounded-full font-bold hover:bg-dark/10 transition-all active:scale-95"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark/30 text-[10px] tracking-widest font-bold uppercase"
        >
          <span>Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-brand to-transparent"></div>
        </motion.div>
      </section>

      {/* About Summary */}
      <section className="py-40 px-6 bg-slate-50 relative border-y border-dark/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 text-dark">
                새로운 관점으로 <br />
                <span className="text-brand text-gradient">비즈니스의 본질</span>을 <br />
                혁신합니다.
              </h2>
              <p className="text-lg text-dark/50 leading-relaxed mb-10">
                {home.aboutSub}
              </p>
              <Link to="/about" className="group flex items-center gap-3 text-dark font-bold hover:text-brand transition-colors">
                자세히 보기 <motion.span whileHover={{ x: 5 }}><ArrowRight size={20} /></motion.span>
              </Link>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="relative aspect-video rounded-3xl overflow-hidden glass-morphism p-1 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center overflow-hidden">
                   {/* Placeholder for professional visual/image */}
                   <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Office" 
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
                   />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand/20 rounded-full blur-3xl"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Business Preview */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <span className="text-brand font-bold tracking-widest text-xs uppercase mb-4 block">{home.expertise.badge}</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-dark">{home.expertise.title}</h2>
              <p className="text-dark/40 text-lg leading-relaxed">{home.expertise.subCopy}</p>
            </div>
            <Link to="/business" className="hidden md:block text-dark/40 hover:text-dark transition-all text-sm font-bold flex items-center gap-2">
              전체 보기 <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.expertise.items.map((biz, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-slate-50 border border-dark/5 hover:border-brand/40 transition-all group cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="text-brand font-mono text-sm font-bold mb-10">{biz.id}</div>
                <h3 className="text-2xl font-bold mb-6 text-dark group-hover:text-brand transition-colors">{biz.title}</h3>
                <p className="text-dark/40 text-sm leading-relaxed mb-8">{biz.desc}</p>
                <div className="w-10 h-0.5 bg-dark/10 group-hover:w-full group-hover:bg-brand transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Placeholder Section */}
      <section className="py-40 px-6 bg-slate-50 border-y border-dark/5 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/contact" className="inline-block px-12 py-5 bg-brand text-white font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-brand/20">
            신뢰와 혁신을 함께할 파트너십 제안하기
          </Link>
        </div>
      </section>

      {/* ESG Preview */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
             <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-dark">{home.esg.title}</h2>
             <p className="text-dark/50 leading-relaxed mb-10">
                {home.esg.subCopy}
             </p>
             <Link to="/esg" className="inline-block px-10 py-4 rounded-full border border-dark/10 font-bold hover:bg-dark hover:text-white transition-all text-dark">
                {home.esg.cta}
             </Link>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
             {home.esg.items.map((esg, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-dark/5 hover:bg-white transition-all shadow-sm hover:shadow-lg">
                   <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand mb-6 font-bold">{esg.type[0]}</div>
                   <div className="text-xs font-bold text-brand mb-2 uppercase tracking-widest">{esg.type}</div>
                   <h4 className="text-xl font-bold mb-4 text-dark">{esg.label}</h4>
                   <p className="text-dark/40 text-sm leading-relaxed">{esg.desc}</p>
                </div>
             ))}
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
