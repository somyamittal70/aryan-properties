import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const CATS = ['All', 'Villas', 'Farmhouses', 'Investment', 'Luxury Living', 'Commercial'];

const BLOGS = [
  {
    id: 1,
    category: 'Investment',
    title: 'Why South Delhi Remains the Most Sought-After Address in 2025',
    excerpt:
      "From Vasant Vihar to Greater Kailash, South Delhi's prime residential corridors continue to command premium valuations — and the reasons go far beyond prestige.",
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    date: 'June 3, 2025',
    readTime: '5 min',
  },
  {
    id: 2,
    category: 'Farmhouses',
    title: 'The Rise of Chhatarpur Farms: A Weekend Retreat Goes Full-Time',
    excerpt:
      "Once reserved for weekend escapes, farmhouse living on Delhi's southern fringe is now attracting buyers seeking permanent residences with space, greenery, and seclusion.",
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    date: 'May 18, 2025',
    readTime: '4 min',
  },
  {
    id: 3,
    category: 'Commercial',
    title: "Gurugram's Golf Course Extension Road: The New Epicentre of Premium Office Space",
    excerpt:
      "A deep-dive into how GCE Road evolved from a residential artery into one of the NCR's most competitive commercial destinations for HNI occupiers and investors.",
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    date: 'May 9, 2025',
    readTime: '6 min',
  },
  {
    id: 4,
    category: 'Luxury Living',
    title: "Inside Delhi's ₹25 Cr+ Homes: What the Ultra-Premium Buyer Demands Today",
    excerpt:
      'Private elevators, smart-home integration, rooftop terraces with city views — what defines a true ultra-luxury residence in the capital in 2025.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    date: 'April 27, 2025',
    readTime: '5 min',
  },
  {
    id: 5,
    category: 'Villas',
    title: 'DLF 5 Gurgaon vs Shanti Niketan Delhi: A Tale of Two Trophy Addresses',
    excerpt:
      "We compare two of the NCR's most coveted villa enclaves — their lifestyle offerings, appreciation potential, and the profile of buyers choosing each.",
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    date: 'April 14, 2025',
    readTime: '4 min',
  },
];

const ACCENT = '#5d8f44';

const Blog = () => (
  <>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[280px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A202C]/70" />
      </div>
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 w-full">
        <h1 className="font-[Cormorant_Garamond] text-5xl sm:text-5xl font-light text-white">
          Journal &amp; Insights
        </h1>
        <p className="mt-3 max-w-2xl text-white/80 font-[Jost] text-sm sm:text-base md:text-lg leading-relaxed">
          Expert perspectives on premium properties, market trends, and smart investment strategies
          across Delhi NCR.
        </p>
      </div>
    </section>

    <section className="py-10 sm:py-14 lg:py-16 bg-[#F5F7F5]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Filter */}
        <div className="flex items-center gap-2 flex-wrap mb-8 sm:mb-10">
          {CATS.map((c, i) => (
            <button
              key={c}
              className={`px-4 sm:px-5 py-2 text-[10px] tracking-widest uppercase border transition-colors
                ${i === 0
                  ? 'bg-[#5d8f44] text-white border-[#5d8f44]'
                  : 'border-[#2D3748]/20 text-[#2D3748]/60 hover:border-[#5d8f44] hover:text-[#5d8f44]'
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-8 sm:mb-10 group cursor-pointer border border-[#5d8f44]/20"
        >
          <div className="img-zoom-wrap overflow-hidden h-60 sm:h-72 lg:h-auto">
            <img
              src={BLOGS[0].image}
              alt={BLOGS[0].title}
              className="img-inner w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-[#5d8f44] text-[9px] tracking-[0.3em] uppercase mb-3">
              {BLOGS[0].category}
            </span>
            <h2 className="font-[Cormorant_Garamond] text-2xl sm:text-3xl font-medium text-[#1A202C] mb-3 sm:mb-4 group-hover:text-[#5d8f44] transition-colors">
              {BLOGS[0].title}
            </h2>
            <p className="text-[#2D3748]/60 text-sm font-[Jost] font-light leading-relaxed mb-5 sm:mb-6">
              {BLOGS[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 text-[#2D3748]/40 text-xs">
                <span>{BLOGS[0].date}</span>
                <span>·</span>
                <Clock size={11} />
                <span>{BLOGS[0].readTime} read</span>
              </div>
              <span className="text-[#5d8f44] text-[10px] tracking-widest uppercase border-b border-[#5d8f44] pb-px">
                Read Article
              </span>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {BLOGS.slice(1).map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group border border-[#5d8f44]/15 bg-white cursor-pointer hover:border-[#5d8f44]/40 transition-colors"
            >
              <div className="img-zoom-wrap overflow-hidden h-48 sm:h-52">
                <img src={b.image} alt={b.title} className="img-inner w-full h-full object-cover" />
              </div>
              <div className="p-5 sm:p-6">
                <span className="text-[#5d8f44] text-[9px] tracking-[0.3em] uppercase mb-2 block">
                  {b.category}
                </span>
                <h3 className="font-[Cormorant_Garamond] text-lg sm:text-xl font-medium text-[#1A202C] mb-2 sm:mb-3 group-hover:text-[#5d8f44] transition-colors">
                  {b.title}
                </h3>
                <p className="text-[#2D3748]/60 text-sm font-[Jost] font-light leading-relaxed mb-4 line-clamp-2">
                  {b.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-[#2D3748]/40">
                  <span>{b.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  </>
);

export default Blog;