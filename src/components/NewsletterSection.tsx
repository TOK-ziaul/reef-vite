import { ArrowRight, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function NewsletterSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#052F2A] relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#035938]/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#F1BC28]/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#F1BC28]/20 border border-[#F1BC28]/30 rounded-full text-[#F1BC28] text-sm backdrop-blur-sm">
                Stay Updated
              </span>
            </div>
            <h2 className="text-white mb-6">
              <span className="block">Sign-up for</span>
              <span className="block italic text-[#F1BC28]">regular Updates</span>
            </h2>
            <p className="text-white/70 text-xl">
              Get the latest news, updates, and insights about our programs, success stories, and agricultural innovations.
            </p>
          </div>

          {/* Right Side - Newsletter Form */}
          <div className="bg-[#F1BC28] rounded-3xl p-10">
            <h3 className="text-[#052F2A] mb-6">Join our Newsletter</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/90 border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#035938] transition-all text-[#052F2A] placeholder:text-[#052F2A]/40"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-white/90 border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#035938] transition-all text-[#052F2A] placeholder:text-[#052F2A]/40"
                />
              </div>
              <button
                type="submit"
                className="group w-full py-4 bg-[#052F2A] text-white rounded-2xl hover:bg-[#035938] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Subscribe Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            
            {/* Small print */}
            <p className="text-[#052F2A]/60 text-sm mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
