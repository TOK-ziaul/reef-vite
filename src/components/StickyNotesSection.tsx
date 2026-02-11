export function StickyNotesSection() {

  const notes = [
    {
      title: '120k+',
      subtitle: 'Hectares',
      description: 'In the past 7 years, we have successfully delivered 25000+ impressive projects.',
      color: 'bg-white',
      rotate: '-rotate-2',
    },
    {
      title: '19m+',
      subtitle: 'Investment',
      description: 'Leading the way in sustainable agriculture across the kingdom.',
      color: 'bg-[#F1BC28]',
      rotate: 'rotate-1',
    },
    {
      title: '500+',
      subtitle: 'Projects',
      description: 'Empowering rural communities through innovative programs.',
      color: 'bg-[#52BC88]',
      rotate: '-rotate-1',
    },
    {
      title: '9',
      subtitle: 'Key Sectors',
      description: 'Comprehensive coverage across agricultural industries.',
      color: 'bg-white',
      rotate: 'rotate-2',
    },
  ];

  return (
    <section className="py-24 bg-[#F9F7EF] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6">
            <span className="text-[#052F2A]">We've been </span>
            <span className="text-[#035938] italic">Awarded for</span>
            <br />
            <span className="text-[#052F2A]">our </span>
            <span className="text-[#F1BC28] italic">Customer Quality</span>
          </h2>
        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-4 gap-6">
          {notes.map((note, index) => (
            <div
              key={index}
              className={`${note.color} ${note.rotate} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer ${
                note.color === 'bg-white' ? 'border-2 border-[#035938]/10' : 'text-white'
              }`}
            >
              <div className="mb-4">
                <div className={`text-5xl font-bold mb-1 ${note.color === 'bg-white' ? 'text-[#035938]' : 'text-white'}`}>
                  {note.title}
                </div>
                <div className={`text-sm uppercase tracking-wider ${note.color === 'bg-white' ? 'text-[#052F2A]/60' : 'text-white/80'}`}>
                  {note.subtitle}
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${note.color === 'bg-white' ? 'text-[#052F2A]/70' : 'text-white/90'}`}>
                {note.description}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="mt-16 flex items-center justify-center gap-12 opacity-40">
          <div className="text-[#052F2A] text-xl">AMAZON</div>
          <div className="text-[#052F2A] text-xl">Behance</div>
          <div className="text-[#052F2A] text-xl">BUBBLE</div>
          <div className="text-[#052F2A] text-xl">dribbble</div>
          <div className="text-[#052F2A] text-xl">slack</div>
        </div>
      </div>
    </section>
  );
}