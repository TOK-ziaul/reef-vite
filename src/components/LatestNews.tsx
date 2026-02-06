import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

export function LatestNews() {
  const newsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!newsRef.current) return;

    const articles = Array.from(
      newsRef.current.querySelectorAll(".news-article"),
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );

    articles.forEach((a) => observer.observe(a));

    return () => observer.disconnect();
  }, []);

  const news = [
    {
      id: 1,
      title:
        "Reef Saudi Launches New Coffee Cultivation Initiative in Jazan",
      excerpt:
        "A groundbreaking program supporting 200 farmers in the southern region with modern agricultural techniques and sustainable practices.",
      image:
        "https://images.unsplash.com/photo-1693734656256-e589d44cbd30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwYmVhbnN8ZW58MXx8fHwxNzYyODQ1MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Nov 8, 2025",
      readTime: "5 min read",
      category: "Initiative",
    },
    {
      id: 2,
      title: "Record Honey Production Achieved in Asir Region",
      excerpt:
        "Local beekeepers supported by Reef Saudi have tripled their production using innovative beekeeping technology and training.",
      image:
        "https://images.unsplash.com/photo-1586616780827-13166a8d449b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVrZWVwaW5nJTIwaG9uZXklMjBmYXJtfGVufDF8fHx8MTc2Mjg0NTEzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Nov 5, 2025",
      readTime: "4 min read",
      category: "Success Story",
    },
    {
      id: 3,
      title: "Sustainable Agriculture Summit 2025 Announced",
      excerpt:
        "Join industry leaders and farmers for the annual summit discussing the future of Saudi agriculture and rural development.",
      image:
        "https://images.unsplash.com/photo-1697601288316-861ad08c2cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBmaWVsZHxlbnwxfHx8fDE3NjI4MDU2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Nov 1, 2025",
      readTime: "3 min read",
      category: "Event",
    },
  ];

  return (
    <section className="py-24 bg-[#F9F7EF]">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="flex  flex-row  items-center justify-between mb-12 latest-header">
          <div>
            <h1 className="text-[#052F2A] mb-4 text-2xl">
              Latest{" "}
              <span className="italic text-[#035938] text-2xl">
                News
              </span>
            </h1>
            <p className="text-[#052F2A]/70 text-xl">
              Stay updated with our latest stories and
              achievements
            </p>
          </div>
          <a
            href="/news"
            className="group px-6 py-3 bg-[#035938] text-white rounded-full hover:bg-[#052F2A] transition-all duration-300 flex items-center gap-2"
          >
            <span>View All News</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* News Grid */}
        <div
          ref={newsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {news.map((article) => (
            <article
              key={article.id}
              className="news-article group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden mb-6 h-[280px]">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#052F2A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-[#F1BC28] text-[#052F2A] rounded-full text-sm">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-[#052F2A]/60 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#052F2A] mb-3 group-hover:text-[#035938] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#052F2A]/70 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={`#`}
                  className="inline-flex items-center gap-2 text-[#035938] group-hover:gap-3 transition-all"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          .news-article { opacity: 0; transform: translateY(40px) scale(0.98); }

          .news-article.in-view {
            animation: fadeInUp 0.8s ease-out var(--delay, 0s) both;
          }
          @media (max-width: 639px) {
            .latest-header { flex-direction: column !important; align-items: flex-start !important; gap: 12px; }
            .latest-header a { margin-top: 8px; }
          }
        `}</style>
    </section>
  );
}