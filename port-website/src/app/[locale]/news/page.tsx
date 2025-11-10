'use client'

import { motion } from 'framer-motion'
import {
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
  TagIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const newsArticles = [
  {
    id: 1,
    title: "Vietnam's Shipbuilding Industry Shows Strong Growth in 2024",
    excerpt: 'The Vietnamese maritime sector continues to expand with new vessel orders and technological advancements driving industry growth.',
    content: "Vietnam's shipbuilding industry has demonstrated remarkable resilience and growth throughout 2024, with domestic shipyards securing numerous international contracts. The sector's expansion is attributed to strategic investments in advanced manufacturing technologies and skilled workforce development.",
    date: '2024-11-01',
    readTime: '5 min read',
    category: 'Industry News',
    author: 'Maritime Weekly',
    featured: true,
    image: '/13.-Oceanus-1.png',
    tags: ['Shipbuilding', 'Vietnam', 'Growth', 'Maritime']
  },
  {
    id: 2,
    title: 'New Environmental Standards for Commercial Vessels',
    excerpt: 'International Maritime Organization announces updated emission standards that will reshape the future of ship design and construction.',
    content: 'The International Maritime Organization (IMO) has released new environmental regulations that will significantly impact commercial vessel design. These standards focus on reducing greenhouse gas emissions and improving fuel efficiency across all vessel categories.',
    date: '2024-10-28',
    readTime: '7 min read',
    category: 'Regulations',
    author: 'Green Shipping Today',
    featured: false,
    image: '/12.-Viet-Thuan-30-05.png',
    tags: ['Environment', 'Regulations', 'IMO', 'Green Technology']
  },
  {
    id: 3,
    title: 'Digital Innovation in Modern Shipyard Operations',
    excerpt: 'How AI and automation are revolutionizing traditional shipbuilding processes, improving efficiency and quality control.',
    content: 'Modern shipyards are embracing digital transformation with AI-powered quality control systems, automated welding processes, and predictive maintenance technologies. These innovations are reducing construction time while improving vessel quality.',
    date: '2024-10-25',
    readTime: '6 min read',
    category: 'Technology',
    author: 'Naval Technology Review',
    featured: false,
    image: '/ship-technology.jpg',
    tags: ['AI', 'Automation', 'Innovation', 'Quality Control']
  },
  {
    id: 4,
    title: 'Bulk Carrier Market Outlook: Strong Demand Continues',
    excerpt: 'Global trade growth drives increased demand for bulk carriers, with shipowners placing new orders for efficient cargo vessels.',
    content: 'The bulk carrier segment continues to show robust performance with strong demand from global commodity trade. New vessel orders focus on fuel efficiency and larger cargo capacities to meet evolving market needs.',
    date: '2024-10-22',
    readTime: '4 min read',
    category: 'Market Analysis',
    author: 'Shipping Intelligence',
    featured: false,
    image: '/bulk-carrier.jpg',
    tags: ['Bulk Carriers', 'Market', 'Trade', 'Shipping']
  },
  {
    id: 5,
    title: 'Offshore Support Vessels: Meeting Energy Sector Demands',
    excerpt: 'Specialized vessels for offshore operations see increased orders as renewable energy projects expand globally.',
    content: 'The offshore support vessel market is experiencing growth driven by both traditional oil & gas operations and expanding renewable energy projects. Advanced vessels with dynamic positioning systems are in high demand.',
    date: '2024-10-19',
    readTime: '5 min read',
    category: 'Offshore',
    author: 'Offshore Engineering',
    featured: false,
    image: '/offshore-vessel.jpg',
    tags: ['Offshore', 'Energy', 'Renewable', 'Support Vessels']
  },
  {
    id: 6,
    title: 'Maritime Safety: Latest International Standards Update',
    excerpt: 'New safety protocols and equipment requirements enhance protection for crew and cargo across global shipping.',
    content: 'Recent updates to international maritime safety standards include enhanced fire protection systems, improved navigation equipment, and stricter crew training requirements to ensure safer maritime operations.',
    date: '2024-10-16',
    readTime: '6 min read',
    category: 'Safety',
    author: 'Maritime Safety Journal',
    featured: false,
    image: '/maritime-safety.jpg',
    tags: ['Safety', 'Standards', 'Crew Training', 'Navigation']
  }
]

const categories = [
  'All News',
  'Industry News',
  'Technology',
  'Regulations',
  'Market Analysis',
  'Offshore',
  'Safety'
]

export default function News() {
  const featuredArticle = newsArticles.find(article => article.featured)
  const regularArticles = newsArticles.filter(article => !article.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      {/* News Header */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Maritime <span className="text-blue-600">News</span>
            </h1>
            <p className="text-xl leading-8 text-gray-600 mb-8">
              Stay updated with the latest developments in shipbuilding, maritime technology, and industry insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl overflow-hidden shadow-xl border border-blue-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                  {featuredArticle.image.includes('Oceanus') || featuredArticle.image.includes('Viet-Thuan') ? (
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="text-white text-6xl">🚢</div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-blue-600 font-semibold text-sm">{featuredArticle.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredArticle.content.substring(0, 200)}...
                  </p>

                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      {formatDate(featuredArticle.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-4 w-4" />
                      {featuredArticle.author}
                    </div>
                  </div>

                  <button className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    Read Full Article
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest News</h2>
            <p className="text-lg text-gray-600">Discover the latest trends and developments in the maritime industry</p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {article.image.includes('Viet-Thuan') ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <div className="text-white text-4xl">⚓</div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-600 px-2 py-1 rounded-lg text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <button className="group/btn text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                      Read More
                      <ArrowRightIcon className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}