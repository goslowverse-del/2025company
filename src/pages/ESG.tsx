import { motion } from 'motion/react';
import { Leaf, Heart, Globe2, ShieldCheck } from 'lucide-react';
import { COPY } from '../constants/copy';

export default function ESG() {
  const { esg } = COPY;

  return (
    <div className="pt-20 break-keep">
      {/* Hero - SOFT LIGHT */}
      <section className="px-6 py-40 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">{esg.hero.badge}</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-slate-900">{esg.hero.title} <br /><span className="text-brand">{esg.hero.titleAccent}</span></h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {esg.hero.subCopy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ESG Pillars - SOFT DARK */}
      <section className="px-6 py-40 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-24 text-center text-white">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esg.pillars.map((item, idx) => {
              const emojis = ['🌿', '🤝', '🏛️'];
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-brand transition-all flex flex-col items-center text-center shadow-sm"
                >
                  <div className="mb-10 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl shadow-sm">{emojis[idx]}</div>
                  <div className="text-sm font-bold text-brand uppercase tracking-widest mb-4">{item.title}</div>
                  <h3 className="text-3xl font-black mb-6 text-white">{item.sub}</h3>
                  <p className="text-slate-400 mb-10 leading-relaxed text-sm">{item.desc}</p>
                  <ul className="space-y-4 w-full text-left">
                      {item.items.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-500 items-center">
                            <div className="w-1 h-1 bg-brand rounded-full shrink-0"></div>
                            <span>{point}</span>
                        </li>
                      ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code of Ethics - SOFT LIGHT */}
      <section className="px-6 py-40 bg-white">
         <div className="max-w-5xl mx-auto rounded-[3rem] bg-slate-50 border border-slate-200 p-10 md:p-20 text-center shadow-sm">
            <div className="inline-flex p-4 bg-brand/10 rounded-full mb-10">
               <ShieldCheck className="text-brand" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-slate-900">
               {esg.ethics.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
               {esg.ethics.items.map((item, idx) => (
                <div key={idx} className="space-y-4 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                   <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                     <span className="w-2 h-2 bg-brand rounded-full"></span>
                     {item.title}
                   </h4>
                   <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
