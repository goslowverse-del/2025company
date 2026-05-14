import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { COPY } from '../constants/copy';

export default function Partners() {
  const { partners } = COPY;

  return (
    <div className="pt-32 pb-20 break-keep">
      <section className="px-6 mb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">{partners.hero.badge}</span>
          <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-dark">{partners.hero.title} <br /><span className="text-brand">{partners.hero.titleAccent}</span></h1>
          <p className="text-xl text-dark/50 leading-relaxed max-w-2xl mx-auto">
            {partners.hero.subCopy}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 mb-40">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {partners.categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-12 rounded-[2rem] border border-dark/5 hover:border-brand/30 transition-all group shadow-sm hover:shadow-xl"
              >
                 <div className="text-brand font-black text-4xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                 <h3 className="text-2xl font-bold mb-6 text-dark">{cat.title}</h3>
                 <p className="text-dark/40 leading-relaxed">{cat.desc}</p>
                 <div className="mt-10 pt-10 border-t border-dark/5">
                    <span className="text-xs font-bold text-dark/20 tracking-wider">PROJECT CASES: 12+</span>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Grid Placeholder */}
      <section className="px-6 py-32 bg-gray-50 border-t border-dark/5">
         <div className="max-w-7xl mx-auto text-center">
            <Link to="/contact" className="inline-block px-12 py-5 bg-brand text-white font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-[0_0_40px_rgba(79,70,229,0.2)]">
              {partners.placeholder.cta}
            </Link>
         </div>
      </section>
    </div>
  );
}
