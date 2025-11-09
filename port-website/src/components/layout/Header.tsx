'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon, ChevronDownIcon, LanguageIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation = [
    { name: 'Home', href: '/home' },
    {
      name: 'About Us',
      href: '#',
      dropdown: [
        { name: 'History', href: '/about/history' },
        { name: 'Human Resource', href: '/about/human-resource' },
        { name: 'Group Capacity', href: '/about/group-capacity' },
        { name: 'Social Responsibility', href: '/about/social-responsibility' },
      ]
    },
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'All Vessels', href: '/products?category=all' },
        { name: 'ABS, CR Certified', href: '/products?category=abs-cr' },
        { name: 'VR Class Vessels', href: '/products?category=vr' },
        { name: 'VR-SB Series', href: '/products?category=vr-sb' },
        { name: 'VR-SI Series', href: '/products?category=vr-si' },
        { name: 'VRH-II Series', href: '/products?category=vrh-ii' },
        { name: 'VRH-III Series', href: '/products?category=vrh-iii' },
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-lg border-b border-blue-800/50 sticky top-0 z-50 shadow-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-3 -m-1.5 p-1.5 group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/dongtaudaihuong-logo.png"
                  alt="Dai Duong Shipbuilding"
                  width={40}
                  height={24}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="hidden md:block">
                <span className="text-lg font-bold text-white">DAI DUONG</span>
                <span className="block text-xs text-blue-300 tracking-wider">SHIPBUILDING GROUP</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button className="relative text-sm font-medium text-white/80 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 flex items-center gap-1">
                      {item.name}
                      <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                    </button>

                    {/* Minimal Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-56 bg-slate-900/90 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 overflow-hidden"
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem, index) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2.5 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 text-sm font-medium"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="relative text-sm font-medium text-white/80 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <a
              href="tel:+842253877149"
              className="flex items-center gap-x-2 text-sm font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg border border-white/20 transition-all duration-300"
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="hidden xl:block">+84 225 3877 149</span>
              <span className="xl:hidden">Call</span>
            </a>
            <a
              href="mailto:Business@daiduongship.vn"
              className="flex items-center gap-x-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg"
            >
              <EnvelopeIcon className="h-4 w-4" />
              <span className="hidden xl:block">Email Us</span>
              <span className="xl:hidden">Email</span>
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden"
          >
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-slate-900 to-blue-900 px-6 py-6 sm:max-w-sm backdrop-blur-xl border-l border-blue-800/50">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                    <Image
                      src="/dongtaudaihuong-logo.png"
                      alt="Dai Duong"
                      width={32}
                      height={20}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold text-white">DAI DUONG</span>
                </Link>
                <button
                  type="button"
                  className="rounded-lg p-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8 flow-root">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                            className="flex items-center justify-between w-full rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                          >
                            {item.name}
                            <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="overflow-hidden"
                              >
                                <div className="mt-2 space-y-1 bg-white/5 rounded-lg p-2 ml-4">
                                  {item.dropdown.map((dropdownItem) => (
                                    <Link
                                      key={dropdownItem.name}
                                      href={dropdownItem.href}
                                      className="block rounded-lg px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                                      onClick={() => {
                                        setMobileMenuOpen(false)
                                        setActiveDropdown(null)
                                      }}
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-6 space-y-3">
                  <a
                    href="tel:+842253877149"
                    className="flex items-center gap-x-3 rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    +84 225 3877 149
                  </a>
                  <a
                    href="mailto:Business@daiduongship.vn"
                    className="flex items-center gap-x-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl px-4 py-3 text-base font-medium text-white transition-all duration-300"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}