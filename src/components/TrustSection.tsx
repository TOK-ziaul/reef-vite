import { Quote } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="py-24 bg-[#052F2A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left - Quote Card */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <Quote className="w-16 h-16 text-[#F1BC28] mb-6" />
              <p className="text-white text-2xl leading-relaxed mb-8">
                "Reef Saudi transformed our family farm with sustainable practices and financial support. We've tripled our honey production!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-full flex items-center justify-center text-white">
                  AM
                </div>
                <div>
                  <div className="text-white">Ahmed Al-Mutairi</div>
                  <div className="text-white/60 text-sm">Beekeeper, Asir Region</div>
                </div>
              </div>
            </div>
            
            {/* Decorative circle */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F1BC28] rounded-full blur-3xl opacity-30" />
          </div>

          {/* Right - Text */}
          <div>
            <h2 className="text-white mb-6 leading-tight">
              <span className="block">Don't just</span>
              <span className="block italic text-[#F1BC28]">Trust us, Trust</span>
              <span className="block">Our Clients</span>
            </h2>
            <p className="text-white/70 text-xl mb-8">
              We've been providing solutions and support to over 15,000 beneficiaries across Saudi Arabia, transforming rural communities.
            </p>
            <button className="px-8 py-4 bg-[#F1BC28] text-[#052F2A] rounded-full hover:bg-white transition-all duration-300 hover:scale-105">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
