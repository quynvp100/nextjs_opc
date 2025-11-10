'use client'

import { motion } from 'framer-motion'
import {
  UsersIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

const departments = [
  {
    name: 'Engineering & Design',
    count: '150+',
    description: 'Naval architects, marine engineers, and design specialists',
    icon: CogIcon,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Production & Manufacturing',
    count: '200+',
    description: 'Skilled welders, fitters, and production technicians',
    icon: WrenchScrewdriverIcon,
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Quality Assurance',
    count: '30+',
    description: 'Inspectors, testing specialists, and quality control experts',
    icon: ShieldCheckIcon,
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Project Management',
    count: '25+',
    description: 'Project managers, coordinators, and logistics specialists',
    icon: ChartBarIcon,
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Training & Development',
    count: '15+',
    description: 'Training coordinators, safety officers, and HR specialists',
    icon: AcademicCapIcon,
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Support Services',
    count: '80+',
    description: 'Administration, finance, IT, and facility management',
    icon: UsersIcon,
    color: 'from-indigo-500 to-indigo-600'
  }
]

const trainingPrograms = [
  {
    title: 'Maritime Safety Certification',
    duration: '6 months',
    description: 'Comprehensive safety training including STCW and local maritime safety standards'
  },
  {
    title: 'Advanced Welding Techniques',
    duration: '4 months',
    description: 'Specialized welding training for marine-grade materials and underwater welding'
  },
  {
    title: 'Quality Management Systems',
    duration: '3 months',
    description: 'ISO 9001:2015 quality standards and continuous improvement methodologies'
  },
  {
    title: 'Leadership Development',
    duration: '8 months',
    description: 'Management and leadership skills for supervisory and executive positions'
  },
  {
    title: 'Technical English',
    duration: '5 months',
    description: 'Maritime English and international communication standards'
  },
  {
    title: 'Digital Technology Integration',
    duration: '4 months',
    description: 'CAD/CAM systems, digital design tools, and Industry 4.0 technologies'
  }
]

const benefits = [
  { title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
  { title: 'Health Insurance', desc: 'Comprehensive medical and dental coverage' },
  { title: 'Career Development', desc: 'Clear progression paths and skill development' },
  { title: 'Safety First', desc: 'World-class safety standards and equipment' },
  { title: 'Work-Life Balance', desc: 'Flexible schedules and family-friendly policies' },
  { title: 'Performance Bonuses', desc: 'Merit-based incentives and recognition programs' }
]

export default function HumanResource() {
  return (
    <>
      {/* Workforce Overview */}
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
              Our Workforce Structure
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Diverse teams of experts working together to deliver maritime excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${dept.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                <div className="text-3xl font-black text-gray-900 mb-3">{dept.count}</div>
                <p className="text-gray-600 leading-relaxed">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
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
              Training & Development Programs
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Continuous learning and skill development for our maritime professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-orange-500 text-white text-sm font-semibold rounded-full">
                    {program.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Employee <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Benefits</span>
              </h2>
              <p className="text-xl leading-8 text-gray-600 mb-8">
                We invest in our people because they are the foundation of our success.
                Our comprehensive benefits package reflects our commitment to employee welfare.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Be part of Vietnam's leading shipbuilding company. We offer exciting career opportunities,
                  competitive compensation, and a chance to work on world-class maritime projects.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-2xl p-4">
                    <h4 className="font-semibold mb-2">Career Growth</h4>
                    <p className="text-sm opacity-90">Clear advancement paths and skill development opportunities</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <h4 className="font-semibold mb-2">International Exposure</h4>
                    <p className="text-sm opacity-90">Work on global projects with international standards</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <h4 className="font-semibold mb-2">Innovation Culture</h4>
                    <p className="text-sm opacity-90">Be part of cutting-edge maritime technology advancement</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Workforce Excellence
            </h2>
            <p className="text-xl leading-8 text-white/80">
              Numbers that reflect our commitment to human resource development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Total Employees', desc: 'Skilled professionals across all departments' },
              { number: '95%', label: 'Retention Rate', desc: 'High employee satisfaction and loyalty' },
              { number: '40+', label: 'Training Hours/Year', desc: 'Per employee continuous development' },
              { number: '15+', label: 'Average Experience', desc: 'Years of maritime industry expertise' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-lg font-bold text-orange-400 mb-3">{stat.label}</div>
                <div className="text-sm text-white/70 leading-relaxed">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}