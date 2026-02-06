import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    if (!formRef.current) return;

    gsap.fromTo(
      formRef.current.children,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['Riyadh, Saudi Arabia', 'King Fahd Road'],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+966 11 XXX XXXX', 'Mon-Fri 9am-5pm'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@reef.gov.sa', 'support@reef.gov.sa'],
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#035938]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#F1BC28]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#052F2A] mb-4">
            Get in <span className="italic text-[#035938]">Touch</span>
          </h2>
          <p className="text-[#052F2A]/70 text-xl max-w-2xl mx-auto">
            Have questions? We're here to help you succeed
          </p>
        </div>

        <div className="grid grid-cols-5 gap-12">
          {/* Contact Info - 2 columns */}
          <div className="col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group p-6 bg-[#F9F7EF] rounded-2xl hover:bg-[#035938] transition-all duration-300 cursor-pointer hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-[#052F2A] group-hover:text-white transition-colors mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-[#052F2A]/70 group-hover:text-white/80 transition-colors text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-[200px] bg-[#F9F7EF] border-2 border-[#035938]/10">
              <div className="w-full h-full bg-gradient-to-br from-[#035938]/20 to-[#52BC88]/20 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-[#035938]/40" />
              </div>
            </div>
          </div>

          {/* Contact Form - 3 columns */}
          <div ref={formRef} className="col-span-3 bg-[#F9F7EF] rounded-3xl p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#052F2A] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#035938] transition-all text-[#052F2A]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#052F2A] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#035938] transition-all text-[#052F2A]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-[#052F2A] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#035938] transition-all text-[#052F2A]"
                    placeholder="+966 XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[#052F2A] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#035938] transition-all text-[#052F2A]"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#052F2A] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#035938] transition-all text-[#052F2A] resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="group w-full py-4 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
