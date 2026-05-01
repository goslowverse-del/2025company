import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">당신의 브랜드에 <br /><span className="text-brand">영감을 더할 준비</span>가 <br />되어 있습니다.</h1>
          <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            새로운 프로젝트나 제휴 문의를 남겨주시면, <br className="hidden md:block" />
            전문 컨설턴트가 최적의 솔루션을 제안해 드립니다.
          </p>
        </div>
      </section>

      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/3">
             <div className="space-y-12">
                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="text-brand" size={24} />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold mb-1">Email</h4>
                      <p className="text-white/40">contact@2025company.com</p>
                      <p className="text-brand text-sm mt-2 font-medium">평일 09:00 - 18:00 (회신 기간 24h 내)</p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="text-brand" size={24} />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold mb-1">Phone</h4>
                      <p className="text-white/40">02-1234-5678</p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="text-brand" size={24} />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold mb-1">Office</h4>
                      <p className="text-white/40">서울특별시 강남구 테헤란로 2025, <br />2025타워 12층</p>
                   </div>
                </div>
             </div>

             <div className="mt-20 p-8 bg-gray-900 rounded-3xl border border-white/5">
                <MessageSquare className="text-brand mb-6" size={32} />
                <h4 className="text-xl font-bold mb-4">자주 묻는 질문</h4>
                <p className="text-white/40 text-sm leading-relaxed mb-6">프로젝트 규모와 무관하게 모든 비즈니스 제안을 환영합니다. 초기 미팅은 무료로 진행됩니다.</p>
                <button className="text-brand font-bold text-sm hover:underline">FAQ 바로가기 &rarr;</button>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-gray-900 rounded-[3rem] border border-white/5 p-8 md:p-16"
             >
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <label className="text-sm font-bold text-white/50 px-2">회사명</label>
                      <input 
                        type="text" 
                        placeholder="2025 Corp."
                        className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 focus:border-brand focus:outline-none transition-all" 
                      />
                   </div>
                   <div className="space-y-4">
                      <label className="text-sm font-bold text-white/50 px-2">담당자 명</label>
                      <input 
                        type="text" 
                        placeholder="이은지"
                        className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 focus:border-brand focus:outline-none transition-all" 
                      />
                   </div>
                   <div className="space-y-4 md:col-span-2">
                      <label className="text-sm font-bold text-white/50 px-2">이메일 주소</label>
                      <input 
                        type="email" 
                        placeholder="example@company.com"
                        className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 focus:border-brand focus:outline-none transition-all" 
                      />
                   </div>
                   <div className="space-y-4 md:col-span-2">
                      <label className="text-sm font-bold text-white/50 px-2">문의 내용</label>
                      <textarea 
                        rows={6}
                        placeholder="문의하실 내용을 상세히 적어주세요."
                        className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 focus:border-brand focus:outline-none transition-all resize-none" 
                      ></textarea>
                   </div>
                   <div className="md:col-span-2 pt-6">
                      <button className="w-full bg-brand text-white font-black text-lg py-5 rounded-full flex items-center justify-center gap-3 hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-brand/20">
                         제출하기 <Send size={20} />
                      </button>
                      <p className="text-center text-white/30 text-xs mt-6">귀하의 정보는 문의 응대를 위해서만 사용되며, 개인정보처리방침에 의거하여 안전하게 보호됩니다.</p>
                   </div>
                </form>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 pb-20">
         <div className="max-w-7xl mx-auto">
            <div className="aspect-[21/9] bg-gray-900 rounded-[2rem] border border-white/10 overflow-hidden relative">
               <div className="absolute inset-0 opacity-50 pointer-events-none grayscale invert contrast-125">
                   <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 bg-black/80 backdrop-blur border border-white/10 rounded-2xl text-center">
                     <MapPin size={40} className="text-brand mx-auto mb-4" />
                     <p className="font-bold">서울특별시 강남구 테헤란로 2025</p>
                     <p className="text-xs text-white/40 mt-1">지하철 2호선 테헤란역 20번 출구 도보 5분</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
