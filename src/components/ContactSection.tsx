import { useLanguage } from '../context/LanguageContext';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Gradient Blob Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#035938]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#F1BC28]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <div>
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#035938]/10 rounded-full text-[#035938]">
                Get in Touch
              </span>
            </div>
            
            <h2 className="text-[#035938] mb-6">
              <span className="text-[#052F2A]">Let's Start a </span>
              <span className="italic">Conversation</span>
            </h2>
            
            <p className="text-[#052F2A]/70 mb-12 text-xl">
              {t('contactDesc')}
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="group flex items-center gap-4 p-4 bg-[#F9F7EF] rounded-2xl hover:bg-[#035938] hover:text-white transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-[#035938] group-hover:bg-white rounded-xl flex items-center justify-center text-white group-hover:text-[#035938] transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-70 group-hover:text-white/70">Email</p>
                  <p className="group-hover:text-white">info@reefsaudi.sa</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 bg-[#F9F7EF] rounded-2xl hover:bg-[#035938] hover:text-white transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-[#035938] group-hover:bg-white rounded-xl flex items-center justify-center text-white group-hover:text-[#035938] transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-70 group-hover:text-white/70">Phone</p>
                  <p className="group-hover:text-white">+966 11 123 4567</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 bg-[#F9F7EF] rounded-2xl hover:bg-[#035938] hover:text-white transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-[#035938] group-hover:bg-white rounded-xl flex items-center justify-center text-white group-hover:text-[#035938] transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-70 group-hover:text-white/70">Location</p>
                  <p className="group-hover:text-white">Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Modern Form */}
          <div className="relative">
            {/* Glassmorphism Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-[#F9F7EF] border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#035938] transition-all placeholder:text-[#052F2A]/40"
                    placeholder={t('yourName')}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-[#F9F7EF] border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#035938] transition-all placeholder:text-[#052F2A]/40"
                    placeholder={t('yourEmail')}
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    className="w-full px-6 py-4 bg-[#F9F7EF] border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#035938] transition-all placeholder:text-[#052F2A]/40 resize-none"
                    placeholder={t('yourMessage')}
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full py-4 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>{t('submit')}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F1BC28] rounded-full blur-2xl opacity-50 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#52BC88] rounded-full blur-2xl opacity-50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}