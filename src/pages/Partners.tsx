import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { COPY } from '../constants/copy';

export default function Partners() {
  const { partners } = COPY;

  return (
    <div className="pt-20 break-keep">
      {/* Hero - SOFT DARK */}
      <section className="px-6 py-40 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">{partners.hero.badge}</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-white">{partners.hero.title} <br /><span className="text-brand">{partners.hero.titleAccent}</span></h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {partners.hero.subCopy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories - SOFT LIGHT */}
      <section className="px-6 py-40 bg-slate-50">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {partners.categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[2rem] border border-slate-200 hover:border-brand transition-all group shadow-sm hover:shadow-xl"
              >
                 <div className="text-brand font-black text-4xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                 <h3 className="text-2xl font-bold mb-6 text-slate-900">{cat.title}</h3>
                 <p className="text-slate-500 leading-relaxed text-sm">{cat.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Grid Placeholder - SOFT DARK */}
      <section className="px-6 py-40 bg-slate-900 border-t border-white/5">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12">당신의 성공 사례를 <br/> 함께 기록하고 싶습니다.</h2>
            <Link to="/contact" className="inline-block px-12 py-5 bg-brand text-white font-black rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-brand/20">
               {partners.placeholder.cta}
            </Link>
         </div>
      </section>
    </div>
  );
}
