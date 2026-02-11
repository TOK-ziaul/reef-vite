import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FishingImplementedSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="mb-32 relative overflow-hidden py-20 bg-gradient-to-b from-[#F9F7EF] to-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === 'ar' ? 'rtl' : ''}`} style={{animation: 'fadeInUp 0.6s ease-out'}}>
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-[#035938] to-[#52BC88] mx-auto mb-6"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-4">
            {t('fishingImplementedTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('fishingImplementedSubtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          
          {/* Project 1: Digital Monitoring */}
          <div className={`${language === 'ar' ? 'rtl' : ''}`} style={{animation: 'fadeInUp 0.6s ease-out 0.1s backwards'}}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white text-2xl font-bold">01</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#035938] mb-3">
                      {t('fishingDigitalMonitoringTitle')}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {t('fishingDigitalMonitoringDesc')}
                    </p>
                    
                    {/* Stats Display */}
                    <div className="flex gap-4">
                      <div className="px-4 py-2 bg-[#F9F7EF] rounded-lg border border-[#035938]/10">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-[#035938]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span className="font-semibold text-[#035938]">4 {language === 'ar' ? 'كاميرات' : 'Cameras'}</span>
                        </div>
                      </div>
                      <div className="px-4 py-2 bg-[#F9F7EF] rounded-lg border border-[#035938]/10">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-[#035938]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-semibold text-[#035938]">{language === 'ar' ? 'منطقتان' : '2 Regions'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Ecosystem Management */}
          <div className={`${language === 'ar' ? 'rtl' : ''}`} style={{animation: 'fadeInUp 0.6s ease-out 0.2s backwards'}}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white text-2xl font-bold">02</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#035938] mb-4">
                      {t('fishingEcosystemTitle')}
                    </h3>
                    
                    {/* Key Points */}
                    <div className="space-y-3">
                      {[
                        t('fishingEcosystemPoint1'),
                        t('fishingEcosystemPoint2'),
                        t('fishingEcosystemPoint3'),
                        t('fishingEcosystemPoint4')
                      ].map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-[#52BC88] rounded-full"></div>
                          </div>
                          <p className="text-gray-700 leading-relaxed flex-1">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Automated Auction System */}
          <div className={`${language === 'ar' ? 'rtl' : ''}`} style={{animation: 'fadeInUp 0.6s ease-out 0.3s backwards'}}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white text-2xl font-bold">03</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#035938] mb-3">
                      {t('fishingAuctionSystemTitle')}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {t('fishingAuctionSystemDesc')}
                    </p>
                    
                    {/* System Features */}
                    <div className="bg-gradient-to-r from-[#F9F7EF] to-white rounded-xl p-5 mb-4 border border-gray-100">
                      <h4 className="font-semibold text-[#035938] mb-2">{language === 'ar' ? 'مكونات النظام:' : 'System Components:'}</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {t('fishingAuctionSystemFeatures')}
                      </p>
                    </div>
                    
                    {/* Impact Metric */}
                    <div className="flex items-center gap-3 bg-gradient-to-r from-[#035938]/5 to-transparent rounded-xl p-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#F1BC28] rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">
                          {t('fishingAuctionSystemGoals')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4: Seaweed Cultivation */}
          <div className={`${language === 'ar' ? 'rtl' : ''}`} style={{animation: 'fadeInUp 0.6s ease-out 0.4s backwards'}}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white text-2xl font-bold">04</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#035938] mb-4">
                      {t('fishingSeaweedTitle')}
                    </h3>
                    
                    {/* Achievement Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: t('fishingSeaweedPoint1'), icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
                        { title: t('fishingSeaweedPoint2'), icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                        { title: t('fishingSeaweedPoint3'), icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
                        { title: t('fishingSeaweedPoint4'), icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
                      ].map((item, index) => (
                        <div key={index} className="bg-gradient-to-br from-[#F9F7EF] to-white rounded-xl p-4 border border-gray-100 hover:border-[#52BC88]/30 transition-all duration-300">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                              </svg>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed flex-1">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5: Hatchery Activation */}
          <div className={`${language === 'ar' ? 'rtl' : ''}`} style={{animation: 'fadeInUp 0.6s ease-out 0.5s backwards'}}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white text-2xl font-bold">05</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#035938] mb-6">
                      {t('fishingHatcheryTitle')}
                    </h3>
                    
                    {/* Implementation Phases */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { 
                          phase: language === 'ar' ? 'المرحلة 1' : 'Phase 1',
                          title: t('fishingHatcheryPoint1'),
                          color: 'from-[#035938] to-[#52BC88]'
                        },
                        { 
                          phase: language === 'ar' ? 'المرحلة 2' : 'Phase 2',
                          title: t('fishingHatcheryPoint2'),
                          color: 'from-[#52BC88] to-[#F1BC28]'
                        },
                        { 
                          phase: language === 'ar' ? 'المرحلة 3' : 'Phase 3',
                          title: t('fishingHatcheryPoint3'),
                          color: 'from-[#F1BC28] to-[#035938]'
                        }
                      ].map((item, index) => (
                        <div key={index} className="relative">
                          <div className="bg-gradient-to-br from-[#F9F7EF] to-white rounded-xl p-5 border border-gray-100 hover:border-[#52BC88]/30 transition-all duration-300 h-full">
                            <div className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} rounded-full mb-3`}>
                              <span className="text-white text-xs font-semibold">{item.phase}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className={`mt-16 ${language === 'ar' ? 'rtl' : ''}`} style={{animation: 'fadeInUp 0.6s ease-out 0.6s backwards'}}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-[#035938] to-[#52BC88] text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              {t('fishingCTA1')}
            </button>
            <button className="bg-[#F1BC28] text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('fishingCTA2')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};