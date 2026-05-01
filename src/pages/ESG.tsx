import { motion } from 'motion/react';
import { Leaf, Heart, Globe2, ShieldCheck } from 'lucide-react';

export default function ESG() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">Sustainable Growth</span>
          <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">지속가능한 내일을 위한 <br /><span className="text-brand">디자인 경영.</span></h1>
          <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            더 나은 삶(Daily Lifestyle)을 위해 환경을 존중하고, <br className="hidden md:block" />
            사회적 책임을 다하는 투명한 경영을 실천합니다.
          </p>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { 
               icon: <Leaf className="text-emerald-400" />, 
               color: 'border-emerald-400/20', 
               title: 'Environmental', 
               sub: '환경 경영',
               desc: '친환경 사무 환경 구축 및 에너지 효율 증대를 목표로 합니다.',
               items: ['디지털 워크플로우를 통한 종이 사용 80% 감축', '저전력 서버 활용 및 친환경 비품 도입', '폐기물 최소화를 위한 제로-웨이스트 캠페인 운영']
             },
             { 
               icon: <Heart className="text-rose-400" />, 
               color: 'border-rose-400/20', 
               title: 'Social', 
               sub: '사회적 책임',
               desc: '구성원의 성장과 지역 사회와의 상생을 중시합니다.',
               items: ['일과 삶의 균형을 위한 자율 근무 제도 안착', 'IT 교육 소외 계층을 위한 전문 기술 교육 지원', '다양성과 포용성을 기반으로 한 차별 없는 채용']
             },
             { 
               icon: <Globe2 className="text-brand" />, 
               color: 'border-brand/20', 
               title: 'Governance', 
               sub: '투명 경영',
               desc: '윤리 규칙 준수 및 공정한 거래 환경을 조성합니다.',
               items: ['사내 윤리 강령 정기 교육 및 모니터링', '투명한 재무 보고 및 회계 기준 준수', '협력사와의 동반 성장을 위한 상생 가이드 수립']
             },
           ].map((item, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className={`p-12 rounded-[2.5rem] bg-gray-900 border ${item.color} relative overflow-hidden`}
             >
                <div className="mb-10 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl">{item.icon}</div>
                <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-2">{item.title}</div>
                <h3 className="text-3xl font-black mb-6">{item.sub}</h3>
                <p className="text-white/60 mb-10 leading-relaxed">{item.desc}</p>
                <ul className="space-y-4">
                   {item.items.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/50">
                         <div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 shrink-0"></div>
                         <span>{point}</span>
                      </li>
                   ))}
                </ul>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Code of Ethics */}
      <section className="px-6 py-32 bg-gray-900">
         <div className="max-w-5xl mx-auto rounded-[3rem] bg-black border border-white/10 p-10 md:p-20 text-center">
            <h2 className="text-4xl font-black mb-10 flex items-center justify-center gap-4">
               <ShieldCheck className="text-brand" size={40} /> 윤리 강령
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
               <div className="space-y-6">
                  <h4 className="text-xl font-bold border-l-4 border-brand pl-4">고객에 대한 책임</h4>
                  <p className="text-white/40 leading-relaxed text-sm">항상 고객의 입장에서 생각하며, 최상의 품질과 신뢰할 수 있는 서비스를 제공함으로써 고객 만족을 실천합니다.</p>
               </div>
               <div className="space-y-6">
                  <h4 className="text-xl font-bold border-l-4 border-brand pl-4">법규 및 규칙 준수</h4>
                  <p className="text-white/40 leading-relaxed text-sm">정직하고 공정한 비즈니스 수행을 위해 국가 법령과 사내 규칙을 철저히 준수하여 투명한 시장 질서를 확립합니다.</p>
               </div>
               <div className="space-y-6">
                  <h4 className="text-xl font-bold border-l-4 border-brand pl-4">임직원 존중</h4>
                  <p className="text-white/40 leading-relaxed text-sm">개개인의 역량을 마음껏 발휘할 수 있는 창의적이고 안전한 근무 환경을 조성하며, 인간 존엄성을 최우선으로 합니다.</p>
               </div>
               <div className="space-y-6">
                  <h4 className="text-xl font-bold border-l-4 border-brand pl-4">국가와 사회 발전 기여</h4>
                  <p className="text-white/40 leading-relaxed text-sm">현실적인 사회 공헌 활동을 통해 공동체의 발전에 기여하며, 기업 시민으로서의 역할을 충실히 수행합니다.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
