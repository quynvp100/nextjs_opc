'use client'

import { motion } from 'framer-motion'
import {
  HeartIcon,
  GlobeAsiaAustraliaIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import Layout from '@/components/layout/Layout'

const initiatives = [
  {
    name: 'Environmental Protection',
    description: 'Implementing eco-friendly practices and sustainable manufacturing processes',
    icon: GlobeAsiaAustraliaIcon,
    color: 'from-green-500 to-green-600',
    achievements: [
      '30% reduction in carbon emissions',
      'Zero liquid waste discharge',
      'Renewable energy integration',
      'Sustainable material sourcing'
    ]
  },
  {
    name: 'Community Development',
    description: 'Supporting local communities through education and infrastructure projects',
    icon: BuildingLibraryIcon,
    color: 'from-blue-500 to-blue-600',
    achievements: [
      '15 schools supported',
      '500+ scholarships provided',
      'Local infrastructure development',
      'Healthcare facility support'
    ]
  },
  {
    name: 'Maritime Education',
    description: 'Advancing maritime education and professional development programs',
    icon: AcademicCapIcon,
    color: 'from-purple-500 to-purple-600',
    achievements: [
      'Maritime training center',
      '2,000+ students trained',
      'Industry partnerships',
      'International certifications'
    ]
  },
  {
    name: 'Employee Welfare',
    description: 'Comprehensive employee benefits and workplace safety programs',
    icon: UserGroupIcon,
    color: 'from-orange-500 to-orange-600',
    achievements: [
      '99.8% safety record',
      'Health insurance coverage',
      'Skills development programs',
      'Work-life balance initiatives'
    ]
  }
]

const environmentalCommitments = [
  {
    title: 'Carbon Neutrality',
    target: '2030',
    description: 'Achieving net-zero carbon emissions across all operations',
    progress: '65%'
  },
  {
    title: 'Waste Reduction',
    target: '2025',
    description: 'Zero waste to landfill and 90% material recycling',
    progress: '78%'
  },
  {
    title: 'Water Conservation',
    target: '2027',
    description: 'Closed-loop water systems and rainwater harvesting',
    progress: '45%'
  },
  {
    title: 'Green Technology',
    target: '2026',
    description: 'Renewable energy for 100% of facility operations',
    progress: '52%'
  }
]

const socialImpact = [
  { metric: '15,000+', label: 'Community Members Impacted' },
  { metric: '500+', label: 'Students Supported Annually' },
  { metric: '$2.5M', label: 'Community Investment (2023)' },
  { metric: '25', label: 'Local Partnerships' }
]

export default function SocialResponsibility() {
  return (
    <Layout>
      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialImpact.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {stat.metric}
                </div>
                <div className="text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
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
              Our Initiatives
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Comprehensive programs addressing environmental, social, and economic sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <initiative.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{initiative.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{initiative.description}</p>

                <div className="space-y-3">
                  {initiative.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitments */}
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
              Environmental Commitments
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Measurable goals and progress toward environmental sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {environmentalCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{commitment.title}</h3>
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Target: {commitment.target}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{commitment.description}</p>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-semibold text-green-600">{commitment.progress}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: commitment.progress }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership & Community */}
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
                Community <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Partnership</span>
              </h2>
              <p className="text-xl leading-8 text-white/80 mb-8">
                Working hand-in-hand with local communities to create lasting positive impact
                through education, infrastructure, and economic development.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <HeartIcon className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Education Support</h3>
                    <p className="text-white/70">Scholarships, school infrastructure, and vocational training programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BuildingLibraryIcon className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Healthcare Access</h3>
                    <p className="text-white/70">Mobile health clinics and medical equipment for rural communities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <UserGroupIcon className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Economic Development</h3>
                    <p className="text-white/70">Local hiring preferences and supplier development programs</p>
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
              <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">2024 Impact Goals</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Students Supported</span>
                    <span className="font-bold">750+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Trees Planted</span>
                    <span className="font-bold">10,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Community Projects</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Carbon Reduction</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Investment</span>
                      <span className="text-2xl font-bold">$3.2M</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-green-500 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}