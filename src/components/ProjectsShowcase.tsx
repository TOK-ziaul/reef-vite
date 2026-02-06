import { ArrowUpRight, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function ProjectsShowcase() {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Duplex Villa in Marin',
      location: 'Al Khobar, Eastern Province',
      category: 'Agriculture',
      image: 'bg-gray-300',
    },
    {
      title: 'Galaxy World Sky Tower',
      location: 'Riyadh, Central Region',
      category: 'Beekeeping',
      image: 'bg-gray-400',
    },
    {
      title: 'Wooden Finish Duplex Home',
      location: 'Jeddah, Western Region',
      category: 'Coffee Cultivation',
      image: 'bg-gray-300',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[#035938]">Our Projects</h2>
          <button className="flex items-center gap-2 text-[#052F2A] hover:text-[#035938] transition-colors group">
            <span>View All</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className={`${project.image} rounded-3xl h-[300px] mb-6 relative overflow-hidden`}>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#035938]/0 group-hover:bg-[#035938]/80 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight className="w-8 h-8 text-[#035938]" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm text-[#035938]">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[#052F2A] mb-2 group-hover:text-[#035938] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#052F2A]/60">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>
                <div className="w-10 h-10 border-2 border-[#035938]/20 rounded-full flex items-center justify-center group-hover:bg-[#035938] group-hover:border-[#035938] transition-all">
                  <ArrowUpRight className="w-5 h-5 text-[#035938] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
