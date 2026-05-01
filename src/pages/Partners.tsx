import { motion } from 'motion/react';

export default function Partners() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">Our Network</span>
          <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">함께 가치를 <br /><span className="text-brand">그려가는 네트워크.</span></h1>
          <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            최고의 결과를 위해 각 분야의 전문 파트너사들과 <br className="hidden md:block" />
            견고한 협력 생태계를 구축하고 있습니다.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 mb-40">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Global Clients', desc: '국내외 대기업 및 중견기업 파트너사들과 함께 전세계를 무대로 프로젝트를 수행합니다.' },
              { title: 'Collaboration Partners', desc: '기술, 유통, 마케팅 분야의 전문 파트너사들과 긴밀한 협력을 통해 시너지를 창출합니다.' },
              { title: 'Institutional Partners', desc: '공공기관 및 비영리 단체와 연계하여 사회적 가치를 창출하는 프로젝트를 진행합니다.' },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-12 rounded-[2rem] border border-white/5 hover:border-brand/30 transition-all group"
              >
                 <div className="text-brand font-black text-4xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                 <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
                 <p className="text-white/40 leading-relaxed">{cat.desc}</p>
                 <div className="mt-10 pt-10 border-t border-white/5">
                    <span className="text-xs font-bold text-white/20 tracking-wider">PROJECT CASES: 12+</span>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Grid Placeholder */}
      <section className="px-6 py-32 bg-gray-900">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-10">Trusted By</h2>
            <div className="bg-black p-20 rounded-[3rem] border border-white/10 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                  <div className="w-[800px] h-[800px] bg-brand rounded-full blur-[160px]"></div>
               </div>
               
               <p className="text-xl text-white/30 font-bold mb-16 relative z-10">
                 신뢰를 바탕으로 파트너십을 확장 중입니다. <br />
                 비어있는 이곳에 당신의 성공 사례를 함께 기록하고 싶습니다.
               </p>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-10">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center font-black italic tracking-tighter text-2xl text-brand/20">
                       LOGO
                    </div>
                  ))}
               </div>

               <div className="mt-20">
                  <Link to="/contact" className="inline-block px-12 py-5 bg-brand text-white font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-[0_0_40px_rgba(79,70,229,0.2)]">
                    파트너십 제안하기
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
