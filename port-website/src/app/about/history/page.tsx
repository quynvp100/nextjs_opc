'use client'

import { motion } from 'framer-motion'
import {
  CalendarIcon,
  TrophyIcon,
  GlobeAsiaAustraliaIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import Layout from '@/components/layout/Layout'

const timeline = [
  {
    year: '2008',
    title: 'Foundation',
    description: 'Dai Duong Shipbuilding Group was established in Hai Phong, Vietnam with a vision to become a leading maritime solutions provider.',
    icon: RocketLaunchIcon,
    color: 'from-blue-500 to-blue-600'
  },
  {
    year: '2010',
    title: 'First Vessel Delivery',
    description: 'Successfully delivered our first commercial vessel, marking the beginning of our journey in the shipbuilding industry.',
    icon: TrophyIcon,
    color: 'from-green-500 to-green-600'
  },
  {
    year: '2012',
    title: 'International Certification',
    description: 'Achieved ABS and VR certifications, establishing our credibility and quality standards in the international maritime market.',
    icon: GlobeAsiaAustraliaIcon,
    color: 'from-orange-500 to-orange-600'
  },
  {
    year: '2015',
    title: 'Expansion Phase',
    description: 'Expanded our facilities and workforce, increasing production capacity to meet growing demand from regional and international clients.',
    icon: CalendarIcon,
    color: 'from-purple-500 to-purple-600'
  },
  {
    year: '2018',
    title: 'Technology Advancement',
    description: 'Invested in state-of-the-art shipbuilding technology and equipment, enhancing our technical capabilities and efficiency.',
    icon: RocketLaunchIcon,
    color: 'from-red-500 to-red-600'
  },
  {
    year: '2020',
    title: 'Major Project Success',
    description: 'Delivered MV Viet Thuan 215-01 (146.60M, 21,368 DWT), our largest vessel to date, demonstrating our advanced capabilities.',
    icon: TrophyIcon,
    color: 'from-blue-500 to-blue-600'
  },
  {
    year: '2023',
    title: 'Sustainability Initiative',
    description: 'Launched comprehensive environmental and social responsibility programs, focusing on sustainable shipbuilding practices.',
    icon: GlobeAsiaAustraliaIcon,
    color: 'from-green-500 to-green-600'
  },
  {
    year: '2024',
    title: 'Future Vision',
    description: 'Continuing to innovate and expand, with plans for advanced vessel types and increased production capacity.',
    icon: RocketLaunchIcon,
    color: 'from-orange-500 to-orange-600'
  }
]

const achievements = [
  { number: '50+', label: 'Vessels Delivered', desc: 'Successfully completed and delivered over 50 commercial vessels' },
  { number: '16', label: 'Years Experience', desc: 'Over a decade and a half of expertise in maritime industry' },
  { number: '21,368', label: 'Max DWT Built', desc: 'Largest vessel tonnage successfully delivered' },
  { number: '146M', label: 'Largest Vessel', desc: 'Maximum length of vessel constructed in our facilities' }
]

export default function History() {
  return (
    <Layout>
      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Key milestones that shaped our company and defined our path to excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-orange-500 to-blue-500"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-full shadow-lg`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-200 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} text-white text-sm font-bold rounded-full`}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Achievements by the Numbers
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Quantifying our success and impact in the maritime industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center"
              >
                <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {achievement.number}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-3">{achievement.label}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{achievement.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Building a <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Legacy</span>
              </h2>
              <p className="text-xl leading-8 text-white/80 mb-8">
                Our history is not just about the past – it's the foundation for an even brighter future in maritime excellence.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Innovation Heritage</h3>
                    <p className="text-white/70">Continuous improvement and technological advancement drive our legacy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Quality Foundation</h3>
                    <p className="text-white/70">Every vessel built reinforces our reputation for excellence and reliability.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Future Vision</h3>
                    <p className="text-white/70">Building on our history to shape the future of maritime industry.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Looking Forward</h3>
                <p className="text-lg leading-relaxed mb-6 text-white/90">
                  As we continue to write our history, we remain committed to innovation, sustainability, and excellence.
                  The next chapters will focus on advanced vessel technologies, expanded global reach, and sustainable maritime practices.
                </p>
                <div className="text-sm text-white/80">
                  "Our past achievements are the stepping stones to future innovations in maritime excellence."
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}