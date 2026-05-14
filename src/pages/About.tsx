import { motion } from 'motion/react';
import { Target, Users, Shield, TrendingUp } from 'lucide-react';
import { COPY } from '../constants/copy';

export default function About() {
  const { about } = COPY;

  return (
    <div className="pt-32 pb-20 break-keep">
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">{about.hero.badge}</span>
            <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-dark">{about.hero.title} <br /><span className="text-dark/20">{about.hero.titleAccent}</span></h1>
            <p className="text-xl md:text-2xl text-dark/60 max-w-3xl leading-relaxed whitespace-pre-line">
              {about.hero.subCopy}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
             <div className="bg-gray-50 p-12 rounded-[2rem] border border-dark/5 shadow-sm">
                <h3 className="text-3xl font-black mb-10 text-dark">{about.overview.title}</h3>
                <div className="space-y-8">
                   {about.overview.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between border-b border-dark/5 pb-4">
                       <span className="text-dark/40 font-medium">{item.label}</span>
                       <span className="font-bold text-dark">{item.value}</span>
                    </div>
                   ))}
                </div>
             </div>
             <div className="relative aspect-square shadow-2xl rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                  alt="Building" 
                  className="w-full h-full object-cover opacity-90"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-32 px-6 border-y border-dark/5">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-4xl font-black mb-20 text-center text-dark">Core Values</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {about.values.map((value, idx) => {
                return (
                  <div key={idx} className="bg-white p-10 rounded-2xl border border-dark/5 hover:border-brand/30 transition-all flex flex-col items-center text-center shadow-sm hover:shadow-xl">
                    <div className="mb-8 p-4 bg-brand/10 rounded-full">
                      <div className="text-brand">
                        {idx === 0 && <TrendingUp />}
                        {idx === 1 && <Shield />}
                        {idx === 2 && <Target />}
                        {idx === 3 && <Users />}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-dark">{value.title}</h4>
                    <p className="text-dark/40 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                );
              })}
           </div>
        </div>
      </section>

      {/* History */}
      <section className="py-40 px-6 bg-white">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-20 text-center text-dark">History</h2>
            <div className="relative border-l-2 border-brand/20 pl-8 ml-4 space-y-16">
               {about.history.map((item, idx) => (
                 <div key={idx} className="relative">
                    <div className="absolute -left-[43px] top-0 w-5 h-5 rounded-full bg-brand border-4 border-white shadow-[0_0_20px_rgba(79,70,229,0.3)]"></div>
                    <div className="text-2xl font-black text-brand mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold mb-2 text-dark">{item.title}</h4>
                    <p className="text-dark/50">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
