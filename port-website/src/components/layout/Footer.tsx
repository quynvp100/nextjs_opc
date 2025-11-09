'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const services = [
  { name: 'Shipbuilding', href: '/services/shipbuilding' },
  { name: 'Ship Repair', href: '/services/ship-repair' },
  { name: 'Port Services', href: '/services/port-services' },
  { name: 'Logistics', href: '/services/logistics' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
]

const contact = [
  {
    icon: MapPinIcon,
    text: 'No. 45 Cho Dam Trieu Street, Quan Tru Ward, Kien An District, Hai Phong, Viet Nam',
    href: 'https://maps.google.com'
  },
  {
    icon: PhoneIcon,
    text: '+84 225 3877 149 / +84 90 224 5422',
    href: 'tel:+842253877149'
  },
  {
    icon: EnvelopeIcon,
    text: 'Business@daiduongship.vn',
    href: 'mailto:Business@daiduongship.vn'
  },
  {
    icon: ArrowTopRightOnSquareIcon,
    text: 'dongtaudaiduong.com',
    href: 'https://dongtaudaiduong.com'
  },
  {
    icon: ArrowTopRightOnSquareIcon,
    text: 'daiduongship.vn',
    href: 'https://daiduongship.vn'
  },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                  <Image
                    src="/dongtaudaihuong-logo.png"
                    alt="Dai Duong Shipbuilding"
                    width={40}
                    height={24}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold text-white">DAI DUONG</span>
                  <span className="block text-xs text-blue-300 tracking-wider">SHIPBUILDING GROUP</span>
                </div>
              </div>

              <p className="text-white/70 mb-6 leading-relaxed">
                Your trusted partner in shipbuilding, ship repair and maritime services in Vietnam.
                International quality with advanced technology.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all duration-300 group"
                >
                  <svg className="h-5 w-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all duration-300 group"
                >
                  <svg className="h-5 w-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all duration-300 group"
                >
                  <svg className="h-5 w-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{service.name}</span>
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{item.name}</span>
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>

              {/* Dai Duong Shipbuilding Group */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-300 mb-3">DAI DUONG SHIPBUILDING GROUP</h4>
                <ul className="space-y-3">
                  {contact.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="flex items-start gap-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                      >
                        <item.icon className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs leading-relaxed">{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pacific Shipbuilding Branch */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-orange-300 mb-3">Pacific Shipbuilding JSC</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://maps.google.com"
                      className="flex items-start gap-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                    >
                      <MapPinIcon className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs leading-relaxed">Lot 6 Tien Lang Town, Tien Lang Province, Hai Phong, Viet Nam</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+842253943273"
                      className="flex items-start gap-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                    >
                      <PhoneIcon className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs leading-relaxed">+84 225 3943 273 / +84 90.3434.973</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:Business@daiduongship.vn"
                      className="flex items-start gap-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                    >
                      <EnvelopeIcon className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs leading-relaxed">Business@daiduongship.vn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pacificshipbuildingjsc.com.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs leading-relaxed">pacificshipbuildingjsc.com.vn</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2">
                <a
                  href="tel:+842253877149"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 shadow-lg w-full justify-center"
                >
                  <PhoneIcon className="h-3 w-3" />
                  Call Dai Duong
                </a>
                <a
                  href="tel:+842253943273"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 shadow-lg w-full justify-center"
                >
                  <PhoneIcon className="h-3 w-3" />
                  Call Pacific JSC
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Dai Duong Shipbuilding Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <div className="text-white/40 text-xs">
                Built with ❤️ in Vietnam
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
    </footer>
  )
}