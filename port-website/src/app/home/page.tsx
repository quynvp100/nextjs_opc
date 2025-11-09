'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  BuildingOffice2Icon,
  CogIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  StarIcon,
  GlobeAsiaAustraliaIcon,
  ShieldCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
import Layout from '@/components/layout/Layout'

const services = [
  {
    icon: BuildingOffice2Icon,
    title: 'Shipbuilding & Design',
    description: 'Custom vessel construction with international quality standards',
    features: ['ABS & CR Certified', 'VR Class Vessels', 'Advanced Technology'],
    highlight: 'Core Service'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Ship Repair',
    description: 'Professional maintenance and repair services',
    features: ['Emergency Repair', 'Scheduled Maintenance', 'Original Parts'],
    highlight: 'Premium'
  },
  {
    icon: CogIcon,
    title: 'Marine Engineering',
    description: 'Comprehensive marine engineering solutions',
    features: ['Technical Consulting', 'System Integration', 'Quality Control'],
    highlight: 'Expert'
  },
  {
    icon: GlobeAsiaAustraliaIcon,
    title: 'International Services',
    description: 'Global maritime solutions and logistics',
    features: ['Export Support', 'International Standards', 'Worldwide Delivery'],
    highlight: 'Global'
  }
]

const vesselPortfolio = [
  {
    id: 1,
    name: 'MV Oceanus 1',
    type: 'Offshore Support Vessel',
    year: '2023',
    length: '75.5M',
    beam: '16.8M',
    tonnage: '3,500 GRT',
    capacity: '150T Crane',
    features: ['DP2 System', 'ROV Support', '24/7 Operations', 'Advanced Navigation'],
    description: 'Our flagship offshore support vessel designed for complex marine operations. The Oceanus 1 features state-of-the-art dynamic positioning systems and heavy-lift capabilities, making it ideal for offshore oil & gas support, subsea operations, and marine construction projects.',
    specifications: {
      mainEngine: '2 x 1,800 kW',
      speed: '12.5 knots',
      crew: '28 persons',
      certification: 'ABS Class'
    },
    image: '/13.-Oceanus-1.png',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    id: 2,
    name: 'MV Viet Thuan 215-01',
    type: 'Bulk Carrier',
    year: '2020',
    length: '146.60M',
    beam: '23.2M',
    tonnage: '21,368 DWT',
    capacity: '5 Cargo Holds',
    features: ['Self-Unloading', 'Eco-Engine', 'Advanced Hull Design', 'Cargo Monitoring'],
    description: 'A modern bulk carrier designed for efficient transportation of dry bulk commodities. This vessel incorporates advanced fuel-efficient technologies and environmentally conscious design principles while maintaining optimal cargo capacity and operational flexibility.',
    specifications: {
      mainEngine: '6,480 kW',
      speed: '14.2 knots',
      crew: '22 persons',
      certification: 'VR Class'
    },
    image: '/12.-Viet-Thuan-30-05.png',
    gradient: 'from-orange-600 to-red-500'
  },
  {
    id: 3,
    name: 'Container Vessel CV-1200',
    type: 'Container Ship',
    year: '2024',
    length: '172.8M',
    beam: '25.6M',
    tonnage: '18,500 GRT',
    capacity: '1,200 TEU',
    features: ['Reefer Ready', 'Automated Loading', 'Fuel Efficient', 'Smart Navigation'],
    description: 'Next-generation container vessel engineered for efficiency and sustainability. Features automated container handling systems, advanced fuel management, and cutting-edge navigation technology for reliable container transportation services.',
    specifications: {
      mainEngine: '7,200 kW',
      speed: '15.8 knots',
      crew: '20 persons',
      certification: 'ABS + VR Class'
    },
    image: null,
    gradient: 'from-green-600 to-emerald-500'
  },
  {
    id: 4,
    name: 'Multi-Purpose Vessel MPV-850',
    type: 'General Cargo',
    year: '2023',
    length: '145.2M',
    beam: '21.4M',
    tonnage: '8,500 DWT',
    capacity: 'Heavy Lift 180T',
    features: ['Heavy Lift Cranes', 'Flexible Cargo', 'Project Cargo', 'Multi-Purpose Deck'],
    description: 'Versatile multi-purpose vessel designed for diverse cargo operations including project cargo, heavy machinery, and specialized transportation. Equipped with heavy-lift cranes and flexible deck configurations.',
    specifications: {
      mainEngine: '5,400 kW',
      speed: '13.5 knots',
      crew: '24 persons',
      certification: 'VR + DNV Class'
    },
    image: null,
    gradient: 'from-purple-600 to-indigo-500'
  }
]

const vesselTypes = [
  { code: 'ABS, CR', name: 'ABS Classification', description: 'American Bureau of Shipping certified vessels' },
  { code: 'VR', name: 'VR Class', description: 'Vietnam Register certified commercial vessels' },
  { code: 'VR-SB', name: 'VR Shipbuilding', description: 'Specialized shipbuilding classification' },
  { code: 'VR-SI', name: 'VR Ship Inspection', description: 'Ship inspection and certification services' },
  { code: 'VRH-II', name: 'VRH Class II', description: 'High-performance vessel category' },
  { code: 'VRH-III', name: 'VRH Class III', description: 'Advanced vessel classification' }
]

const achievements = [
  { number: '50+', label: 'Vessels Delivered', icon: '⚓' },
  { number: '146M', label: 'Largest Ship Built', icon: '📏' },
  { number: '21,368', label: 'Max Tonnage DWT', icon: '⚖️' },
  { number: '15+', label: 'Years Experience', icon: '🏆' }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = vesselPortfolio.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4500) // Change slide every 4.5 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen text-white overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/12.-Viet-Thuan-30-05.png"
            alt="Viet Thuan Ship"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Navy Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-blue-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-slate-900/60"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
            {/* Left Side - Main Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:pr-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-orange-300">
                  <ShieldCheckIcon className="h-4 w-4" />
                  International Quality • ABS & VR Certified
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight">
                  <span className="block text-white mb-2">YOU DREAM,</span>
                  <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent relative">
                    WE BUILD
                  </span>
                </h1>

                {/* Simple underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-6"
                ></motion.div>
              </motion.div>

            </motion.div>

            {/* Right Side - YouTube Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="lg:pl-8"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10 w-full">
                <div className="relative w-full h-[500px] lg:h-[450px]">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-3xl"
                    src="https://www.youtube.com/embed/GOiGSjDk1TM?si=jwgaEQ0fxKQjLzRm&autoplay=1&mute=1&loop=1&playlist=GOiGSjDk1TM&controls=1&showinfo=0&rel=0&modestbranding=1"
                    title="Dai Duong Shipbuilding Group - Company Overview"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

            
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Vessel Portfolio Carousel - Horizontal Layout */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Our <span className="text-blue-600">Vessel Portfolio</span>
            </h2>
          </motion.div>

          {/* Clean Vessel Showcase */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="relative h-[420px]">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-3"
              >
                {/* Ship Image - Left 2/3 */}
                <div className="lg:col-span-2 relative bg-gradient-to-br from-blue-50 to-slate-50">
                  {vesselPortfolio[currentSlide].image ? (
                    <Image
                      src={vesselPortfolio[currentSlide].image}
                      alt={vesselPortfolio[currentSlide].name}
                      fill
                      className="object-contain p-6"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${vesselPortfolio[currentSlide].gradient} flex items-center justify-center`}>
                      <div className="text-white text-6xl drop-shadow-lg">🚢</div>
                    </div>
                  )}

                  {/* Simple Info Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/95 rounded-lg p-3 shadow-md">
                      <div className="text-xs text-gray-500 uppercase">{vesselPortfolio[currentSlide].type}</div>
                      <div className="font-bold text-gray-900">{vesselPortfolio[currentSlide].year}</div>
                    </div>
                  </div>
                </div>

                {/* Vessel Info - Right 1/3 */}
                <div className="p-6 bg-white flex flex-col justify-center">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {vesselPortfolio[currentSlide].name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {vesselPortfolio[currentSlide].type}
                      </p>
                    </div>

                    {/* Key Stats */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Length:</span>
                        <span className="font-semibold">{vesselPortfolio[currentSlide].length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tonnage:</span>
                        <span className="font-semibold">{vesselPortfolio[currentSlide].tonnage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Speed:</span>
                        <span className="font-semibold">{vesselPortfolio[currentSlide].specifications.speed}</span>
                      </div>
                    </div>

                    {/* Top Features */}
                    <div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {vesselPortfolio[currentSlide].features.slice(0, 2).map((feature, index) => (
                          <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <a
                      href="/products"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                      Learn More
                      <ArrowRightIcon className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 p-2 rounded-full shadow-md transition-colors z-10"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 p-2 rounded-full shadow-md transition-colors z-10"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>

              {/* Progress Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {vesselPortfolio.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Ship Buyer Focused Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                {/* Value Proposition */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Available for Delivery</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Ready-to-Deliver Vessels & Custom Builds
                  </h3>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">6-12 months</div>
                      <div className="text-sm text-gray-600">Delivery Timeline</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">ABS + VR</div>
                      <div className="text-sm text-gray-600">Class Certification</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">$2-15M</div>
                      <div className="text-sm text-gray-600">Price Range USD</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                      <div className="text-sm text-gray-600">On-Time Delivery</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Financing available • International delivery • Full warranty coverage
                  </p>
                </div>

                {/* Action Panel */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Get Started Today</h4>

                  <div className="space-y-3 mb-6">
                    <a
                      href="/products"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
                    >
                      Browse Available Ships
                    </a>
                    <a
                      href="/contact"
                      className="block w-full border-2 border-gray-300 hover:border-blue-300 text-gray-700 hover:text-blue-600 text-center py-3 px-4 rounded-lg font-semibold transition-colors"
                    >
                      Request Custom Quote
                    </a>
                  </div>

                  <div className="text-center border-t pt-4">
                    <p className="text-sm text-gray-600 mb-2">Direct Contact:</p>
                    <a href="tel:+842253877149" className="text-blue-600 font-semibold">+84 225 3877 149</a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ship Buyer Value - Single Viewport */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Ship Owners Choose <span className="text-blue-600">Dai Duong</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Key Value Props */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Proven ROI',
                    key: '15-20% lower fuel costs',
                    value: '$2,000/day savings',
                    status: 'Revenue Boost'
                  },
                  {
                    title: 'Zero Risk',
                    key: '100% on-time delivery',
                    value: '5 year warranty',
                    status: 'Guaranteed'
                  },
                  {
                    title: 'Ready Fleet',
                    key: '8 vessels available',
                    value: '70% financing',
                    status: 'Immediate Start'
                  },
                  {
                    title: 'Global Support',
                    key: '25+ service centers',
                    value: '24/7 parts supply',
                    status: 'Operational Security'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-semibold text-green-600 uppercase">{item.status}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <div className="text-sm text-gray-600 mb-1">{item.key}</div>
                    <div className="text-lg font-bold text-blue-600">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                Client Success (2020-2024)
              </h3>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">$850M+</div>
                  <div className="text-sm text-gray-600">Revenue for Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98.7%</div>
                  <div className="text-sm text-gray-600">Vessel Utilization</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Zero</div>
                  <div className="text-sm text-gray-600">Late Deliveries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">45%</div>
                  <div className="text-sm text-gray-600">Repeat Buyers</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 italic">
                  "18% higher earnings than fleet average"
                </p>
                <p className="text-xs text-gray-500 mt-1">— Viet Thuan Maritime</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Ready to Build Your <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Dream Vessel?</span>
            </h2>
            <p className="text-xl leading-8 text-white/80 mb-12">
              From concept to delivery, we'll guide you through every step of the shipbuilding process.
              Get your free consultation and detailed quotation today.
            </p>

            {/* Client Logos Marquee */}
            <div className="mb-16">
              <p className="text-center text-white/60 text-lg mb-8">Trusted by Leading Maritime Companies</p>
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {/* First set of logos */}
                  <div className="flex items-center justify-around min-w-full">
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">MARITIME CO.</span>
                    </div>
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">OCEAN FLEET</span>
                    </div>
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">SHIPPING CORP</span>
                    </div>
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">NAVY SOLUTIONS</span>
                    </div>
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">CARGO EXPRESS</span>
                    </div>
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">VESSEL TECH</span>
                    </div>
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex items-center justify-around min-w-full">
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">MARITIME CO.</span>
                    </div>
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">OCEAN FLEET</span>
                    </div>
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">SHIPPING CORP</span>
                    </div>
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">NAVY SOLUTIONS</span>
                    </div>
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">CARGO EXPRESS</span>
                    </div>
                    <div className="flex items-center justify-center w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-4">
                      <span className="text-white font-bold text-sm">VESSEL TECH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Dai Duong Shipbuilding Group</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-3">
                  Tel: +84 225 3877 149 / +84 90 224 5422<br />
                  Email: Business@daiduongship.vn<br />
                  Website: dongtaudaiduong.com / daiduongship.vn<br />
                  Address: No. 45 Cho Dam Trieu Street, Quan Tru Ward, Kien An District, Hai Phong, Viet Nam
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-orange-300 mb-3">Pacific Shipbuilding JSC</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Tel: +84 225 3943 273 / +84 90 343 4973<br />
                  Email: Business@daiduongship.vn<br />
                  Website: pacificshipbuildingjsc.com.vn<br />
                  Address: Lot 6 Tien Lang Town, Tien Lang Province, Hai Phong, Viet Nam
                </p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-orange-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-10 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse animation-delay-4000"></div>
      </section>
    </Layout>
  )
}