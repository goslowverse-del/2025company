import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { COPY } from '../constants/copy';

export default function Contact() {
  const { contact } = COPY;

  return (
    <div className="pt-20 break-keep">
      {/* Hero - SOFT DARK */}
      <section className="px-6 py-40 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">{contact.hero.badge}</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-white">{contact.hero.title}</h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {contact.hero.subCopy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - SOFT LIGHT */}
      <section className="px-6 py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/3">
             <div className="space-y-12">
                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="text-brand" size={24} />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold mb-1 text-slate-900">{contact.info.email.label}</h4>
                      <p className="text-slate-500">{contact.info.email.value}</p>
                      <p className="text-brand text-sm mt-2 font-medium">{COPY.common.workingHours}</p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="text-brand" size={24} />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold mb-1 text-slate-900">{contact.info.phone.label}</h4>
                      <p className="text-slate-500">{contact.info.phone.value}</p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="text-brand" size={24} />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold mb-1 text-slate-900">{contact.info.office.label}</h4>
                      <p className="text-slate-500">{contact.info.office.value}</p>
                   </div>
                </div>
             </div>

             <div className="mt-20 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <MessageSquare className="text-brand mb-6" size={32} />
                <h4 className="text-xl font-bold mb-4 text-slate-900">{contact.info.faq.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{contact.info.faq.desc}</p>
                <button className="text-brand font-bold text-sm hover:underline">{contact.info.faq.link} &rarr;</button>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] border border-slate-200 p-8 md:p-16 shadow-xl"
             >
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                   <div className="space-y-4">
                      <label className="text-sm font-bold text-slate-500 px-2">{contact.form.company}</label>
                      <input 
                        type="text" 
                        placeholder="2025 Corp."
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand focus:outline-none transition-all text-slate-900" 
                      />
                   </div>
                   <div className="space-y-4">
                      <label className="text-sm font-bold text-slate-500 px-2">{contact.form.name}</label>
                      <input 
                        type="text" 
                        placeholder="홍길동"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand focus:outline-none transition-all text-slate-900" 
                      />
                   </div>
                   <div className="space-y-4 md:col-span-2">
                      <label className="text-sm font-bold text-slate-500 px-2">{contact.form.email}</label>
                      <input 
                        type="email" 
                        placeholder="example@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand focus:outline-none transition-all text-slate-900" 
                      />
                   </div>
                   <div className="space-y-4 md:col-span-2">
                      <label className="text-sm font-bold text-slate-500 px-2">{contact.form.message}</label>
                      <textarea 
                        rows={6}
                        placeholder="문의하실 내용을 상세히 적어주세요."
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand focus:outline-none transition-all resize-none text-slate-900" 
                      ></textarea>
                   </div>
                   <div className="md:col-span-2 pt-6">
                      <button className="w-full bg-brand text-white font-black text-lg py-5 rounded-full flex items-center justify-center gap-3 hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-brand/20">
                         {contact.form.submit} <Send size={20} />
                      </button>
                      <p className="text-center text-slate-400 text-xs mt-6">{contact.form.privacy}</p>
                   </div>
                </form>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder - SOFT DARK */}
      <section className="px-6 py-40 bg-slate-900">
         <div className="max-w-7xl mx-auto">
            <div className="aspect-[21/9] bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative shadow-2xl">
               <div className="absolute inset-0 opacity-20 pointer-events-none grayscale invert contrast-125">
                   <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="p-10 bg-white border border-slate-200 rounded-3xl text-center shadow-2xl max-w-sm"
                  >
                     <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mx-auto mb-6">
                        <MapPin size={32} />
                     </div>
                     <p className="font-black text-2xl text-slate-900 mb-2 tracking-tighter">Visit Us</p>
                     <p className="text-slate-500 text-sm mb-4">{contact.map.address}</p>
                     <p className="text-brand text-xs font-bold tracking-widest uppercase">{contact.map.detail}</p>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
