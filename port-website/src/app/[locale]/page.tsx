'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(console.error)
    }
  }, [])

  return (
    <div className="h-screen bg-black overflow-hidden">
      {/* Single Screen Landing Page */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/23008-332257750_small.mp4" type="video/mp4" />
          </video>

          {/* Video Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

          {/* Secondary overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-indigo-900/20"></div>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center h-full flex flex-col justify-center">

          {/* Top Section - Logo & Company */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            {/* Logo */}
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Image
                  src="/dongtaudaihuong-logo.png"
                  alt="Dai Duong Shipbuilding Group"
                  width={160}
                  height={96}
                  className="h-16 w-auto object-contain filter drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Company Name */}
            <h1 className="text-lg md:text-xl lg:text-2xl font-light text-white/90 tracking-[0.2em] mb-3">
              DAI DUONG SHIPBUILDING GROUP
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
          </motion.div>

          {/* Main Slogan - Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-4"
          >
            <div className="relative">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white mb-2 drop-shadow-2xl">YOU DREAM</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl">
                  WE BUILD
                </span>
              </h2>

              {/* Glowing accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-orange-500/50"
              ></motion.div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mb-8 max-w-3xl mx-auto"
          >
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
              Trusted partner in shipbuilding, ship repair and maritime services
              <br className="hidden md:block" />
              <span className="text-yellow-300 font-medium">International Quality - Advanced Technology</span>
            </p>
          </motion.div>

          {/* CTA Button - Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mb-8"
          >
            <button
              onClick={() => window.location.href = '/home'}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/25"
            >
              <span>EXPLORE</span>
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>

          {/* Bottom Stats - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { number: "25+", label: "Years Experience", icon: "🏆" },
              { number: "500+", label: "Projects Completed", icon: "⚓" },
              { number: "50+", label: "Trusted Clients", icon: "🤝" },
              { number: "24/7", label: "Technical Support", icon: "🔧" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.4 + index * 0.1 }}
                className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-3 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-lg mb-1">{stat.icon}</div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">{stat.number}</div>
                <div className="text-xs md:text-sm text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-orange-400/60 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse animation-delay-4000"></div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
      </section>
    </div>
  )
}
