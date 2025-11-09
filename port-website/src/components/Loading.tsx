'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-3 border-white/20 border-t-orange-400 rounded-full mx-auto mb-6"
        />

        {/* Logo */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white mb-2"
          >
            DAI DUONG
          </motion.div>
          <div className="text-sm text-blue-300 tracking-wider">SHIPBUILDING GROUP</div>
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-white/70"
        >
          Loading...
        </motion.div>

        {/* Dots animation */}
        <div className="flex items-center justify-center space-x-1 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-orange-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}