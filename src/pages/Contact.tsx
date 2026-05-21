import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { COPY } from '../constants/copy';

export default function Contact() {
  const { contact } = COPY;

  return (
    <div className="pt-16 sm:pt-20 break-keep">
      {/* Hero - SOFT DARK */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 md:py-36 lg:py-40 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">{contact.hero.badge}</span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-10 tracking-tighter text-white">
              {contact.hero.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto whitespace-pre-line px-2">
              {contact.hero.subCopy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - SOFT LIGHT */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 md:py-36 lg:py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 w-full animate-fade-in">
          {/* Info Side */}
          <div className="lg:w-1/3 w-full">
              <div className="space-y-6 sm:space-y-10 lg:space-y-12">
                 <div className="flex gap-4 sm:gap-6">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center shrink-0">
                       <Mail className="text-brand" size={20} />
                    </div>
                    <div>
                       <h4 className="text-base sm:text-lg font-bold mb-1 text-slate-900">{contact.info.email.label}</h4>
                       <p className="text-slate-500 text-sm sm:text-base break-all">{contact.info.email.value}</p>
                       <p className="text-brand text-xs sm:text-sm mt-1 sm:mt-2 font-medium">{COPY.common.workingHours}</p>
                    </div>
                 </div>

                 <div className="flex gap-4 sm:gap-6">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center shrink-0">
                       <Phone className="text-brand" size={20} />
                    </div>
                    <div>
                       <h4 className="text-base sm:text-lg font-bold mb-1 text-slate-900">{contact.info.phone.label}</h4>
                       <p className="text-slate-500 text-sm sm:text-base">{contact.info.phone.value}</p>
                    </div>
                 </div>

                 <div className="flex gap-4 sm:gap-6">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center shrink-0">
                       <MapPin className="text-brand" size={20} />
                    </div>
                    <div>
                       <h4 className="text-base sm:text-lg font-bold mb-1 text-slate-900">{contact.info.office.label}</h4>
                       <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{contact.info.office.value}</p>
                    </div>
                 </div>
              </div>

              <div className="mt-10 sm:mt-16 lg:mt-20 p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm w-full">
                 <MessageSquare className="text-brand mb-4 sm:mb-6" size={28} />
                 <h4 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">{contact.info.faq.title}</h4>
                 <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{contact.info.faq.desc}</p>
                 <button className="text-brand font-bold text-xs sm:text-sm hover:underline cursor-pointer focus:outline-none">{contact.info.faq.link} &rarr;</button>
              </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 w-full">
              <motion.div
                 initial={{ opacity: 0, y: 25 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 p-5 sm:p-10 lg:p-16 shadow-xl w-full"
              >
                 <form className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2 sm:space-y-4">
                       <label className="text-xs sm:text-sm font-bold text-slate-500 px-1 sm:px-2">{contact.form.company}</label>
                       <input 
                         type="text" 
                         placeholder="2025 Corp."
                         className="w-full bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 focus:border-brand focus:outline-none transition-all text-slate-900 text-sm sm:text-base" 
                       />
                    </div>
                    <div className="space-y-2 sm:space-y-4">
                       <label className="text-xs sm:text-sm font-bold text-slate-500 px-1 sm:px-2">{contact.form.name}</label>
                       <input 
                         type="text" 
                         placeholder="홍길동"
                         className="w-full bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 focus:border-brand focus:outline-none transition-all text-slate-900 text-sm sm:text-base" 
                       />
                    </div>
                    <div className="space-y-2 sm:space-y-4 md:col-span-2">
                       <label className="text-xs sm:text-sm font-bold text-slate-500 px-1 sm:px-2">{contact.form.email}</label>
                       <input 
                         type="email" 
                         placeholder="example@company.com"
                         className="w-full bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 focus:border-brand focus:outline-none transition-all text-slate-900 text-sm sm:text-base" 
                       />
                    </div>
                    <div className="space-y-2 sm:space-y-4 md:col-span-2">
                       <label className="text-xs sm:text-sm font-bold text-slate-500 px-1 sm:px-2">{contact.form.message}</label>
                       <textarea 
                         rows={5}
                         placeholder="문의하실 내용을 상세히 적어주세요."
                         className="w-full bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 focus:border-brand focus:outline-none transition-all resize-none text-slate-900 text-sm sm:text-base" 
                       ></textarea>
                    </div>
                    <div className="md:col-span-2 pt-4 sm:pt-6">
                       <button className="w-full bg-brand text-white font-black text-base sm:text-lg py-4 sm:py-5 rounded-full flex items-center justify-center gap-3 hover:scale-[1.01] transition-all active:scale-95 shadow-xl shadow-brand/20 select-none cursor-pointer">
                          {contact.form.submit} <Send size={18} />
                       </button>
                       <p className="text-center text-slate-400 text-[11px] sm:text-xs mt-4 sm:mt-6 leading-relaxed">{contact.form.privacy}</p>
                    </div>
                 </form>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder - SOFT DARK */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 md:py-36 lg:py-40 bg-slate-900">
         <div className="max-w-7xl mx-auto w-full">
            <div className="aspect-[4/3] sm:aspect-video lg:aspect-[21/9] bg-white/5 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] border border-white/10 overflow-hidden relative shadow-2xl">
               <div className="absolute inset-0 opacity-20 pointer-events-none grayscale invert contrast-125">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=60&w=800&fm=webp" className="w-full h-full object-cover" alt="Background map visual" loading="lazy" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center p-4">
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-5 sm:p-8 md:p-10 bg-white border border-slate-200 rounded-2xl sm:rounded-3xl text-center shadow-2xl max-w-sm w-full"
                  >
                     <div className="w-12 sm:w-16 h-12 sm:h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mx-auto mb-4 sm:mb-6">
                        <MapPin size={28} />
                     </div>
                     <p className="font-black text-xl sm:text-2xl text-slate-900 mb-1.5 sm:mb-2 tracking-tighter">Visit Us</p>
                     <p className="text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4 leading-normal">{contact.map.address}</p>
                     <p className="text-brand text-[10px] sm:text-xs font-bold tracking-widest uppercase">{contact.map.detail}</p>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
