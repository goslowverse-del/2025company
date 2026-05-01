import { motion } from 'motion/react';
import { Target, Users, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">About Us</span>
            <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">본질에 집중하는 철학, <br /><span className="text-white/40">변치 않는 신뢰.</span></h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
              우리는 혁신적인 생각과 지속가능한 방법으로 <br className="hidden md:block" />
              파트너와 함께 성장하는 든든한 조력자가 됩니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
             <div className="bg-gray-900 p-12 rounded-[2rem] border border-white/5">
                <h3 className="text-3xl font-black mb-10">회사 개요</h3>
                <div className="space-y-8">
                   <div className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-white/40 font-medium">회사명</span>
                      <span className="font-bold">2025company (주식회사 2025컴퍼니)</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-white/40 font-medium">설립일</span>
                      <span className="font-bold">2020년 5월 1일</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-white/40 font-medium">대표이사</span>
                      <span className="font-bold">홍길동</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-white/40 font-medium">주력 사업</span>
                      <span className="font-bold">경영 컨설팅 & 디지털 솔루션</span>
                   </div>
                </div>
             </div>
             <div className="relative aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                  alt="Building" 
                  className="w-full h-full object-cover rounded-[2rem] opacity-70"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-900 py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-4xl font-black mb-20 text-center">Core Values</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <TrendingUp className="text-brand" />, title: 'Innovation', desc: '기존의 틀을 깨는 새로운 시각으로 시장의 압도적인 성장을 주도합니다.' },
                { icon: <Shield className="text-brand" />, title: 'Reliability', desc: '모든 파트너십의 기초가 되는 철저한 약속 이행과 정직함을 추구합니다.' },
                { icon: <Target className="text-brand" />, title: 'Sustainability', desc: '일회성 성과가 아닌 지속 가능한 성장을 위한 구조적 대안을 제시합니다.' },
                { icon: <Users className="text-brand" />, title: 'Partnership', desc: '함께 고민하고 함께 나아가는 진정한 협력의 가치를 믿습니다.' },
              ].map((value, idx) => (
                <div key={idx} className="bg-black p-10 rounded-2xl border border-white/5 hover:border-brand/30 transition-all flex flex-col items-center text-center">
                   <div className="mb-8 p-4 bg-brand/10 rounded-full">{value.icon}</div>
                   <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                   <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* History */}
      <section className="py-40 px-6">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-20 text-center">History</h2>
            <div className="relative border-l-2 border-brand/20 pl-8 ml-4 space-y-16">
               {[
                 { year: '2025', title: 'Global Expansion', desc: '글로벌 파트너십 네트워크 50개사 돌파' },
                 { year: '2023', title: 'Digital Solution Launch', desc: '자체 개발 B2B 최적화 디지털 솔루션 런칭' },
                 { year: '2021', title: 'Industry Leadership', desc: '분야별 전문 컨설턴트 20명 확보 및 시장 점유율 확대' },
                 { year: '2020', title: 'Founding', desc: '2025company 설립' },
               ].map((item, idx) => (
                 <div key={idx} className="relative">
                    <div className="absolute -left-[43px] top-0 w-5 h-5 rounded-full bg-brand border-4 border-black shadow-[0_0_20px_rgba(79,70,229,0.5)]"></div>
                    <div className="text-2xl font-black text-brand mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/50">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
