import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-dark overflow-hidden px-6">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[128px] animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10" 
               style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(79,70,229,0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-brand text-xs font-bold tracking-widest mb-8 uppercase">
              Business Beyond Connection
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
              연결, 그 이상의 가치. <br />
              <span className="text-gradient">매일의 감각을 높입니다.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              단순한 비즈니스 네트워크를 넘어, <br className="hidden md:block" />
              당신의 일상과 브랜드에 프리미엄 솔루션을 제안합니다.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/business"
                className="bg-brand text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand/90 transition-all active:scale-95 shadow-lg shadow-brand/20"
              >
                사업 영역 보기 <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all active:scale-95"
              >
                문의하기
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[10px] tracking-widest font-bold uppercase"
        >
          <span>Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-brand to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-dark relative z-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: '파트너 기업', value: '10+', suffix: '' },
            { label: '사업 분야', value: '5', suffix: '개' },
            { label: '고객 대응', value: '24/7', suffix: '' },
            { label: '누적 프로젝트', value: '150+', suffix: '' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-6xl font-black mb-2 text-brand">{stat.value}<span className="text-lg font-medium text-white/40 ml-1">{stat.suffix}</span></div>
              <div className="text-sm font-bold text-white/40 tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Summary */}
      <section className="py-40 px-6 bg-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                신뢰를 기반으로 <br />
                <span className="text-brand">지속 가능한 비즈니스</span>를 <br />
                만듭니다.
              </h2>
              <p className="text-lg text-white/50 leading-relaxed mb-10">
                급변하는 시장 환경 속에서 2025company는 흔들리지 않는 가치를 제안합니다. 설립 초기부터 지켜온 신뢰와 전문성은 우리를 단순한 공급자가 아닌 '성장의 파트너'로 만들었습니다.
              </p>
              <Link to="/about" className="group flex items-center gap-3 text-white font-bold hover:text-brand transition-colors">
                자세히 보기 <motion.span whileHover={{ x: 5 }}><ArrowRight size={20} /></motion.span>
              </Link>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="relative aspect-video rounded-3xl overflow-hidden glass-morphism p-1">
                <div className="w-full h-full bg-gray-900 rounded-[22px] flex items-center justify-center overflow-hidden">
                   {/* Placeholder for professional visual/image */}
                   <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Office" 
                    className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700" 
                   />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand/30 rounded-full blur-3xl"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Business Preview */}
      <section className="py-40 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <span className="text-brand font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6">브랜드의 시작부터 일상의 끝까지.</h2>
              <p className="text-white/40 text-lg leading-relaxed">전략적 컨설팅부터 감각적인 라이프스타일 굿즈 유통까지, 비즈니스의 격을 높이는 통합 솔루션을 경험해 보세요.</p>
            </div>
            <Link to="/business" className="hidden md:block text-white/40 hover:text-white transition-all text-sm font-bold flex items-center gap-2">
              전체 보기 <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: '01', title: 'Business Consulting', desc: '기업의 전략 수립부터 실무 최적화까지 종합 컨설팅을 제공합니다.' },
              { id: '02', title: 'Digital Solution', desc: 'IT 기술 기반의 디지털 트랜스포메이션 솔루션을 지원합니다.' },
              { id: '03', title: 'Distribution', desc: '글로벌 네트워크를 활용한 효율적인 유통망 관리 서비스를 제공합니다.' },
              { id: '04', title: 'Media & Marketing', desc: '데이터 기반의 브랜드 마케팅 및 콘텐츠 제작을 총괄합니다.' },
            ].map((biz, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-dark border border-white/5 hover:border-brand/40 transition-all group cursor-pointer"
              >
                <div className="text-brand font-mono text-sm font-bold mb-10">{biz.id}</div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-brand transition-colors">{biz.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8">{biz.desc}</p>
                <div className="w-10 h-0.5 bg-white/10 group-hover:w-full group-hover:bg-brand transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Placeholder Section */}
      <section className="py-40 px-6 bg-dark overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-20">
           <span className="text-brand font-bold tracking-widest text-xs uppercase mb-4 block">Trusted By</span>
           <h2 className="text-4xl md:text-5xl font-black text-white/90">2025company와 함께하는 파트너</h2>
        </div>
        
        <div className="flex flex-col items-center">
          <p className="text-brand/30 text-lg font-bold mb-10">
            현재 파트너십 확장 중입니다. 새로운 가치를 함께 만들어갈 기업을 기다립니다.
          </p>
          <div className="flex gap-10 opacity-10 grayscale select-none pointer-events-none text-brand">
            {/* Logic: Placeholder logos or stylised text */}
            {['LOGISTIC', 'TECHCORE', 'GLOBALNET', 'MARCOM', 'INFRA'].map((l, i) => (
              <span key={i} className="text-4xl font-black italic tracking-tighter">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Preview */}
      <section className="py-40 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
             <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">지속가능한 내일을 위한 <br />디자인 경영.</h2>
             <p className="text-white/50 leading-relaxed mb-10">
                더 나은 삶(Daily Lifestyle)을 위해 환경을 존중하고, 사회적 책임을 다하는 투명한 경영을 실천합니다.
             </p>
             <Link to="/esg" className="inline-block px-10 py-4 rounded-full border border-white/10 font-bold hover:bg-white hover:text-black transition-all">
                ESG 경영 방침
             </Link>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { type: 'Environmental', label: '친환경 운영', desc: '에너지 효율 최적화 및 페이퍼리스 디지털 전환 실천' },
               { type: 'Social', label: '지역 사회 기여', desc: '취약 계층 일자리 창출 및 지역 소상공인 연계 사업 지원' },
               { type: 'Governance', label: '투명 경영', desc: '윤리 규칙 준수 및 공정한 파트너십 거래 환경 조성' },
             ].map((esg, idx) => (
               <div key={idx} className="p-8 rounded-2xl glass-morphism hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center text-brand mb-6 font-bold">{esg.type[0]}</div>
                  <div className="text-xs font-bold text-brand mb-2 uppercase tracking-widest">{esg.type}</div>
                  <h4 className="text-xl font-bold mb-4">{esg.label}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{esg.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 bg-brand relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/20 rounded-full blur-[128px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-12 tracking-tight">
            새로운 비즈니스 <br />연결을 시작하세요.
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="w-full md:w-auto px-12 py-5 bg-dark text-white font-black text-lg rounded-full border border-white/20 hover:bg-dark/80 transition-all">
              문의하기
            </Link>
            <div className="text-white font-bold opacity-80">
              또는 <span className="underline ml-2">contact@2025company.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
