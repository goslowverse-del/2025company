import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { COPY } from '../constants/copy';

export default function Partners() {
  const { partners } = COPY;

  return (
    <div className="pt-16 sm:pt-20 break-keep">
      {/* Hero - SOFT DARK */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 md:py-36 lg:py-40 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">{partners.hero.badge}</span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-10 tracking-tighter text-white">
              {partners.hero.title} <br className="hidden sm:inline" />
              <span className="text-brand">{partners.hero.titleAccent}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto whitespace-pre-line px-2">
              {partners.hero.subCopy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories - SOFT LIGHT */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 md:py-36 lg:py-40 bg-slate-50">
         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full">
            {partners.categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] border border-slate-200 hover:border-brand transition-all group shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                 <div>
                    <div className="text-brand font-black text-2xl sm:text-4xl mb-6 sm:mb-8 opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900">{cat.title}</h3>
                 </div>
                 <p className="text-slate-500 leading-relaxed text-xs sm:text-sm">{cat.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Grid Placeholder - SOFT DARK */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 md:py-36 lg:py-40 bg-slate-900 border-t border-white/5">
         <div className="max-w-7xl mx-auto text-center w-full px-2">
            <h2 className="text-2.5xl xs:text-3xl sm:text-4.5xl md:text-5xl lg:text-6xl font-black text-white mb-8 sm:mb-12 leading-tight">당신의 성공 사례를 <br className="inline sm:hidden"/> 함께 기록하고 싶습니다.</h2>
            <Link to="/contact" className="inline-block text-center w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-brand text-white font-black rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-brand/20 text-sm sm:text-base">
               {partners.placeholder.cta}
            </Link>
         </div>
      </section>
    </div>
  );
}
