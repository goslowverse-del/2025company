import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const businessItems = [
  {
    id: '01',
    title: 'Business Consulting',
    description: '기업의 라이프사이클 전반에 걸친 전략적 의사결정을 지원합니다. 시장 분석, 경쟁 우위 확보를 위한 로드맵 수립에 특화되어 있습니다.',
    services: ['경영 전략 수립', '시장 조사 및 타당성 분석', '운영 효율 최적화', 'M&A 및 투자 자문'],
    effects: ['매출 성장 가속화', '비용 절감 및 효율성 증대', '사업 리스크 선제적 대응'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '02',
    title: 'Digital Solution',
    description: '최신 IT 기술을 비즈니스 프로세스에 결합하여 생산성을 극대화합니다. 단순한 툴 도입을 넘어 업무 문화의 디지털 전환을 이끕니다.',
    services: ['커스텀 ERP/CRM 개발', '데이터 통합 대시보드', '업무 자동화 로봇(RPA)', '클라우드 마이그레이션'],
    effects: ['실시간 데이터 기반 의사결정', '반복 업무 자동화로 인한 리소스 해방', '비즈니스 연속성 확보'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '03',
    title: 'Distribution',
    description: '공급망의 복잡성을 해결하고 최종 소비자와의 접점을 최적화합니다. 효율적인 물류 시스템과 유통 전략으로 비용 경쟁력을 확보합니다.',
    services: ['글로벌 소싱 및 유통망 관리', '물류센터 운영 최적화', '재고 관리 자동화 시스템', 'B2B 영업 채널 확장'],
    effects: ['유통 비용 절감', '공급 안정성 보장', '유통 경로 다각화'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '04',
    title: 'Media & Marketing',
    description: '브랜드의 가치를 스토리텔링으로 전달하고 디지털 채널에서의 영향력을 극대화합니다. 단순 노출이 아닌 ‘전환’을 목표로 합니다.',
    services: ['브랜드 브랜딩 전략', '영상 및 인터랙티브 콘텐츠 제작', '퍼포먼스 마케팅 운영', '소셜 미디어 통합 관리'],
    effects: ['브랜드 인지도 상승', '고객 문의 및 전환율 증가', '로열티 높은 팬덤 확보'],
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Business() {
  const [activeItem, setActiveItem] = useState(businessItems[0]);

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">당신의 비즈니스를 위한 <br /><span className="text-brand">맞춤형 큐레이션.</span></h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            각 산업에 최적화된 디자인 솔루션과 가치 있는 쓰임새를 지닌 <br className="hidden md:block" />
            실물 매체(Physical Media)를 기획합니다.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Sidebar Menu */}
          <div className="lg:w-1/4 space-y-4">
             {businessItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all text-left ${
                    activeItem.id === item.id 
                    ? 'bg-brand border-brand text-white shadow-lg shadow-brand/20 scale-105 z-10' 
                    : 'bg-gray-900 border-white/5 text-white/50 hover:border-white/20'
                  }`}
                >
                   <div className="flex items-center gap-4">
                      <span className="font-mono text-xs opacity-50 font-bold">{item.id}</span>
                      <span className="font-bold text-lg">{item.title}</span>
                   </div>
                   <ChevronRight size={20} className={activeItem.id === item.id ? 'opacity-100' : 'opacity-0'} />
                </button>
             ))}
          </div>

          {/* Details Content */}
          <div className="lg:w-3/4">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gray-900 rounded-[2.5rem] overflow-hidden border border-white/5 p-8 md:p-16"
                >
                   <div className="flex flex-col xl:flex-row gap-16">
                      <div className="flex-1">
                         <h2 className="text-4xl font-black mb-8">{activeItem.title}</h2>
                         <p className="text-lg text-white/60 leading-relaxed mb-12">
                           {activeItem.description}
                         </p>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                               <h4 className="flex items-center gap-2 text-brand font-bold mb-6">
                                  <div className="w-2 h-2 bg-brand rounded-full"></div> 주요 서비스
                               </h4>
                               <ul className="space-y-4">
                                  {activeItem.services.map((s, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/70">
                                       <CheckCircle2 size={18} className="text-brand shrink-0 mt-1" />
                                       <span>{s}</span>
                                    </li>
                                  ))}
                               </ul>
                            </div>
                            <div>
                               <h4 className="flex items-center gap-2 text-brand font-bold mb-6">
                                  <div className="w-2 h-2 bg-brand rounded-full"></div> 기대 효과
                               </h4>
                               <ul className="space-y-4">
                                  {activeItem.effects.map((e, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/70">
                                       <CheckCircle2 size={18} className="text-brand shrink-0 mt-1" />
                                       <span>{e}</span>
                                    </li>
                                  ))}
                               </ul>
                            </div>
                         </div>
                      </div>
                      <div className="xl:w-80">
                         <div className="aspect-[3/4] rounded-3xl overflow-hidden glass-morphism p-1">
                            <img src={activeItem.image} alt={activeItem.title} className="w-full h-full object-cover rounded-[22px] opacity-80" />
                         </div>
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
