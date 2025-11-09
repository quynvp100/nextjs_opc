'use client'

import { motion } from 'framer-motion'
import {
  BuildingOffice2Icon,
  CogIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'
import Layout from '@/components/layout/Layout'

const facilities = [
  {
    name: 'Shipbuilding Dock',
    capacity: '146M Length',
    description: 'State-of-the-art dry dock facility capable of building vessels up to 146 meters',
    icon: BuildingOffice2Icon,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Heavy Machinery',
    capacity: '300 Ton Crane',
    description: 'Advanced heavy lifting equipment for large-scale construction projects',
    icon: CogIcon,
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Fabrication Workshop',
    capacity: '5,000 m²',
    description: 'Modern fabrication facility with advanced welding and cutting equipment',
    icon: WrenchScrewdriverIcon,
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Material Storage',
    capacity: '10,000 Tons',
    description: 'Comprehensive storage facilities for steel, equipment, and marine components',
    icon: TruckIcon,
    color: 'from-purple-500 to-purple-600'
  }
]

const capabilities = [
  {
    category: 'Vessel Types',
    items: [
      'Bulk Carriers up to 25,000 DWT',
      'General Cargo Vessels',
      'Container Ships',
      'Fishing Vessels',
      'Offshore Support Vessels',
      'Tugs and Workboats'
    ]
  },
  {
    category: 'Technical Services',
    items: [
      'Naval Architecture & Design',
      'Steel Fabrication & Welding',
      'Engine Installation & Testing',
      'Electrical & Electronic Systems',
      'Paint & Coating Application',
      'Quality Control & Inspection'
    ]
  },
  {
    category: 'Certifications & Standards',
    items: [
      'ABS (American Bureau of Shipping)',
      'VR (Vietnam Register)',
      'ISO 9001:2015 Quality Management',
      'OHSAS 18001 Safety Standards',
      'Environmental ISO 14001',
      'STCW Maritime Training'
    ]
  }
]

const productionStats = [
  { metric: '25,000', unit: 'DWT', label: 'Max Vessel Tonnage' },
  { metric: '18', unit: 'Months', label: 'Average Build Time' },
  { metric: '98%', unit: 'Rate', label: 'On-Time Delivery' },
  { metric: '500+', unit: 'People', label: 'Production Team' }
]

export default function GroupCapacity() {
  return (
    <Layout>
      {/* Production Statistics */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.metric}
                </div>
                <div className="text-sm text-orange-500 font-semibold mb-1">{stat.unit}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
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
              Production Facilities
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              State-of-the-art infrastructure supporting large-scale maritime construction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${facility.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <facility.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                <div className="text-2xl font-black text-blue-600 mb-3">{facility.capacity}</div>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Technical Capabilities
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Comprehensive expertise across all aspects of maritime construction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {capability.category}
                </h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <ChartBarIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Expansion */}
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
                Future <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Expansion</span>
              </h2>
              <p className="text-xl leading-8 text-white/80 mb-8">
                Continuous investment in technology and infrastructure to meet growing market demands
                and evolving industry standards.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Capacity Expansion</h3>
                    <p className="text-white/70">Plans to increase production capacity by 40% over the next 5 years</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Technology Upgrade</h3>
                    <p className="text-white/70">Integration of AI and automation in production processes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Green Technology</h3>
                    <p className="text-white/70">Investment in sustainable and environmentally friendly production methods</p>
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
                <h3 className="text-2xl font-bold mb-6">Investment Goals</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Infrastructure</span>
                    <span className="font-bold">$50M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Technology</span>
                    <span className="font-bold">$30M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Training</span>
                    <span className="font-bold">$10M</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Investment</span>
                      <span className="text-2xl font-bold">$90M</span>
                    </div>
                  </div>
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