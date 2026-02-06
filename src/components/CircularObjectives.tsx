export function CircularObjectives() {
  return (
    <div className="relative max-w-6xl mx-auto min-h-[900px] md:min-h-[800px] py-12">
      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#035938] to-[#52BC88] shadow-2xl flex items-center justify-center animate-pulse-slow">
          <div className="text-center px-6">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
              OUR <span className="text-[#F1BC28]">STRATEGIC</span>
            </h4>
            <h4 className="text-2xl md:text-3xl font-bold text-white">GOALS</h4>
            <div className="w-16 h-1 bg-[#F1BC28] mx-auto mt-3"></div>
          </div>
        </div>
      </div>

      {/* Connecting Lines - Desktop Only */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 1 }}>
        {/* Line to Top Card */}
        <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="#52BC88" strokeWidth="2" strokeDasharray="8,4" opacity="0.4" />
        {/* Line to Right Card */}
        <line x1="50%" y1="50%" x2="88%" y2="50%" stroke="#F1BC28" strokeWidth="2" strokeDasharray="8,4" opacity="0.4" />
        {/* Line to Bottom Card */}
        <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="#52BC88" strokeWidth="2" strokeDasharray="8,4" opacity="0.4" />
        {/* Line to Left Card */}
        <line x1="50%" y1="50%" x2="12%" y2="50%" stroke="#035938" strokeWidth="2" strokeDasharray="8,4" opacity="0.4" />
      </svg>

      {/* Card 1 - Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 md:w-80 z-10">
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#52BC88]/20 hover:border-[#52BC88] group">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
          </div>
          
          {/* Title */}
          <h5 className="text-lg font-bold text-[#035938] text-center mb-3 group-hover:text-[#52BC88] transition-colors duration-300">
            INCREASING LOCAL BEE COLONIES
          </h5>
          
          {/* Description */}
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            Increasing the number of local bee colonies to achieve self-sufficiency and support ministry efforts to protect nature reserves from imported strains.
          </p>

          {/* Number Badge */}
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">01</span>
          </div>
        </div>
      </div>

      {/* Card 2 - Right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 md:w-80 z-10">
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#F1BC28]/20 hover:border-[#F1BC28] group">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          
          {/* Title */}
          <h5 className="text-lg font-bold text-[#035938] text-center mb-3 group-hover:text-[#F1BC28] transition-colors duration-300">
            TESTING & DIAGNOSIS SERVICES
          </h5>
          
          {/* Description */}
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            Providing testing, diagnosis, and treatment services for bee diseases and pests, along with guidance services for beekeepers.
          </p>

          {/* Number Badge */}
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">02</span>
          </div>
        </div>
      </div>

      {/* Card 3 - Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 md:w-80 z-10">
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#52BC88]/20 hover:border-[#52BC88] group">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
          </div>
          
          {/* Title */}
          <h5 className="text-lg font-bold text-[#035938] text-center mb-3 group-hover:text-[#52BC88] transition-colors duration-300">
            MOBILE CLINIC VEHICLES
          </h5>
          
          {/* Description */}
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            Supplying and operating mobile clinic vehicles equipped with specialized laboratories and full medical equipment.
          </p>

          {/* Number Badge */}
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">03</span>
          </div>
        </div>
      </div>

      {/* Card 4 - Left */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 md:w-80 z-10">
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#035938]/20 hover:border-[#035938] group">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          
          {/* Title */}
          <h5 className="text-lg font-bold text-[#035938] text-center mb-3 group-hover:text-[#52BC88] transition-colors duration-300">
            FIELD INSPECTION & TREATMENT
          </h5>
          
          {/* Description */}
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            Conducting field inspection and diagnosis operations and providing rapid treatment services to beekeepers at their locations, contributing to the protection of bee wealth in the Kingdom.
          </p>

          {/* Number Badge */}
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#035938] to-[#F1BC28] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">04</span>
          </div>
        </div>
      </div>

      {/* Mobile Stack View - Hidden on Desktop */}
      <div className="md:hidden space-y-6 pt-20">
        {/* Card 1 Mobile */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#52BC88]/20">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">01</span>
            </div>
            <h5 className="text-lg font-bold text-[#035938]">INCREASING LOCAL BEE COLONIES</h5>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Increasing the number of local bee colonies to achieve self-sufficiency and support ministry efforts to protect nature reserves from imported strains.
          </p>
        </div>

        {/* Card 2 Mobile */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#F1BC28]/20">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">02</span>
            </div>
            <h5 className="text-lg font-bold text-[#035938]">TESTING & DIAGNOSIS SERVICES</h5>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Providing testing, diagnosis, and treatment services for bee diseases and pests, along with guidance services for beekeepers.
          </p>
        </div>

        {/* Card 3 Mobile */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#52BC88]/20">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">03</span>
            </div>
            <h5 className="text-lg font-bold text-[#035938]">MOBILE CLINIC VEHICLES</h5>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Supplying and operating mobile clinic vehicles equipped with specialized laboratories and full medical equipment.
          </p>
        </div>

        {/* Card 4 Mobile */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#035938]/20">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#035938] to-[#F1BC28] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">04</span>
            </div>
            <h5 className="text-lg font-bold text-[#035938]">FIELD INSPECTION & TREATMENT</h5>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Conducting field inspection and diagnosis operations and providing rapid treatment services to beekeepers at their locations, contributing to the protection of bee wealth in the Kingdom.
          </p>
        </div>
      </div>
    </div>
  );
}
