import { motion } from 'motion/react';
import { Leaf, Heart, Globe2, ShieldCheck } from 'lucide-react';
import { COPY } from '../constants/copy';

export default function ESG() {
  const { esg } = COPY;

  return (
    <div className="pt-32 pb-20 break-keep">
      <section className="px-6 mb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">{esg.hero.badge}</span>
          <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-dark">{esg.hero.title} <br /><span className="text-brand">{esg.hero.titleAccent}</span></h1>
          <p className="text-xl text-dark/50 leading-relaxed max-w-2xl mx-auto">
            {esg.hero.subCopy}
          </p>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {esg.pillars.map((item, idx) => {
             const icons = [<Leaf className="text-emerald-500" />, <Heart className="text-rose-500" />, <Globe2 className="text-brand" />];
             const colors = ['border-emerald-500/20', 'border-rose-500/20', 'border-brand/20'];
             
             return (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className={`p-12 rounded-[2.5rem] bg-gray-50 border ${colors[idx]} relative overflow-hidden shadow-sm hover:shadow-xl transition-all`}
               >
                  <div className="mb-10 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">{icons[idx]}</div>
                  <div className="text-sm font-bold text-dark/40 uppercase tracking-widest mb-2">{item.title}</div>
                  <h3 className="text-3xl font-black mb-6 text-dark">{item.sub}</h3>
                  <p className="text-dark/60 mb-10 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-4">
                     {item.items.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm text-dark/50">
                           <div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 shrink-0"></div>
                           <span>{point}</span>
                        </li>
                     ))}
                  </ul>
               </motion.div>
             );
           })}
        </div>
      </section>

      {/* Code of Ethics */}
      <section className="px-6 py-32 bg-gray-50 border-y border-dark/5">
         <div className="max-w-5xl mx-auto rounded-[3rem] bg-white border border-dark/10 p-10 md:p-20 text-center shadow-2xl">
            <h2 className="text-4xl font-black mb-10 flex items-center justify-center gap-4 text-dark">
               <ShieldCheck className="text-brand" size={40} /> {esg.ethics.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
               {esg.ethics.items.map((item, idx) => (
                <div key={idx} className="space-y-6">
                   <h4 className="text-xl font-bold border-l-4 border-brand pl-4 text-dark">{item.title}</h4>
                   <p className="text-dark/40 leading-relaxed text-sm">{item.desc}</p>
                </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
