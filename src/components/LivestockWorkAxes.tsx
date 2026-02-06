import { useLanguage } from '../context/LanguageContext';
import { Database, FlaskConical, Users, Lightbulb, DollarSign, Stethoscope, ShoppingCart, Trees, Leaf, Shield, FileText, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

export function LivestockWorkAxes() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const axes = [
    { number: '01', text: t('livestockAxis1'), icon: Database, color: '#035938', bgGradient: 'from-[#035938]/10 via-[#52BC88]/5 to-transparent' },
    { number: '02', text: t('livestockAxis2'), icon: FlaskConical, color: '#52BC88', bgGradient: 'from-[#52BC88]/10 via-[#F1BC28]/5 to-transparent' },
    { number: '03', text: t('livestockAxis3'), icon: Users, color: '#F1BC28', bgGradient: 'from-[#F1BC28]/10 via-[#035938]/5 to-transparent' },
    { number: '04', text: t('livestockAxis4'), icon: Lightbulb, color: '#035938', bgGradient: 'from-[#035938]/10 via-[#52BC88]/5 to-transparent' },
    { number: '05', text: t('livestockAxis5'), icon: DollarSign, color: '#52BC88', bgGradient: 'from-[#52BC88]/10 via-[#F1BC28]/5 to-transparent' },
    { number: '06', text: t('livestockAxis6'), icon: Stethoscope, color: '#F1BC28', bgGradient: 'from-[#F1BC28]/10 via-[#035938]/5 to-transparent' },
    { number: '07', text: t('livestockAxis7'), icon: ShoppingCart, color: '#035938', bgGradient: 'from-[#035938]/10 via-[#52BC88]/5 to-transparent' },
    { number: '08', text: t('livestockAxis8'), icon: Trees, color: '#52BC88', bgGradient: 'from-[#52BC88]/10 via-[#F1BC28]/5 to-transparent' },
    { number: '09', text: t('livestockAxis9'), icon: Leaf, color: '#F1BC28', bgGradient: 'from-[#F1BC28]/10 via-[#035938]/5 to-transparent' },
    { number: '10', text: t('livestockAxis10'), icon: Shield, color: '#035938', bgGradient: 'from-[#035938]/10 via-[#52BC88]/5 to-transparent' },
    { number: '11', text: t('livestockAxis11'), icon: FileText, color: '#52BC88', bgGradient: 'from-[#52BC88]/10 via-[#F1BC28]/5 to-transparent' },
  ];

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const element = containerRef.current.children[index] as HTMLElement;
      element?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveIndex(index);
    }
  };

  // Check if section is in view
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.5);
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto scroll functionality - only when section is in view
  useEffect(() => {
    if (!isInView) {
      // Clear timer when section is not in view
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
        autoScrollTimerRef.current = null;
      }
      return;
    }

    const startAutoScroll = () => {
      autoScrollTimerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % axes.length;
          scrollToIndex(nextIndex);
          return nextIndex;
        });
      }, 4000); // Change card every 4 seconds
    };

    startAutoScroll();

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [axes.length, isInView]);

  // Pause auto-scroll on user interaction
  const handleManualScroll = (index: number) => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }
    scrollToIndex(index);
    
    // Restart auto-scroll after 10 seconds of inactivity
    setTimeout(() => {
      autoScrollTimerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % axes.length;
          scrollToIndex(nextIndex);
          return nextIndex;
        });
      }, 4000);
    }, 10000);
  };

  return (
    <div ref={sectionRef} className="py-20 bg-[#F9F7EF] relative overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#52BC88]/10 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#F1BC28]/10 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#035938] mb-6"
            style={{
              fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit",
            }}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {t('livestockWorkAxesTitle')}
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Area */}
        <div className="relative">
          {/* Horizontal Scrolling Cards */}
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {axes.map((axis, index) => {
              const Icon = axis.icon;
              
              return (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[70vw] md:w-[380px] snap-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`relative h-full bg-gradient-to-br ${axis.bgGradient} backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}>
                    {/* Large Background Number */}
                    <div className="absolute top-0 right-0 text-[150px] font-bold opacity-[0.03] leading-none pointer-events-none" style={{ color: axis.color }}>
                      {axis.number}
                    </div>

                    {/* Decorative Gradient Orb */}
                    <motion.div 
                      className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
                      style={{ background: `radial-gradient(circle, ${axis.color} 0%, transparent 70%)` }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="relative z-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        {/* Icon */}
                        <motion.div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                          style={{ background: `linear-gradient(135deg, ${axis.color} 0%, ${axis.color}dd 100%)` }}
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-white relative z-10" strokeWidth={2.5} />
                          <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ scale: 0, opacity: 0.3 }}
                            whileHover={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          />
                        </motion.div>

                        {/* Number Badge */}
                        <div className="text-right">
                          <motion.span 
                            className="text-5xl font-bold"
                            style={{ 
                              background: `linear-gradient(135deg, ${axis.color} 0%, ${axis.color}aa 100%)`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {axis.number}
                          </motion.span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <p 
                          className="text-lg leading-relaxed text-[#035938]"
                          style={{
                            fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit",
                          }}
                        >
                          {axis.text}
                        </p>

                        {/* Decorative Line */}
                        <motion.div 
                          className="h-1.5 rounded-full"
                          style={{ background: `linear-gradient(90deg, ${axis.color} 0%, transparent 100%)` }}
                          initial={{ width: "20%" }}
                          whileInView={{ width: "60%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={() => handleManualScroll(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'ar' ? <ArrowRight className="w-6 h-6 text-[#035938]" /> : <ArrowLeft className="w-6 h-6 text-[#035938]" />}
            </motion.button>
            <motion.button
              onClick={() => handleManualScroll(Math.min(axes.length - 1, activeIndex + 1))}
              disabled={activeIndex === axes.length - 1}
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'ar' ? <ArrowLeft className="w-6 h-6 text-[#035938]" /> : <ArrowRight className="w-6 h-6 text-[#035938]" />}
            </motion.button>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}