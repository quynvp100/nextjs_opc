'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowTopRightOnSquareIcon,
  UserIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

type FormData = {
  name: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
  vesselType: string
  projectTimeline: string
}

const vesselTypes = [
  'Offshore Support Vessel',
  'Bulk Carrier',
  'Container Ship',
  'General Cargo',
  'Anchor Handling Tug',
  'Platform Supply Vessel',
  'Tanker',
  'Other'
]

const projectTimelines = [
  'Urgent (within 3 months)',
  'Short-term (3-6 months)',
  'Medium-term (6-12 months)',
  'Long-term (1+ years)',
  'Planning phase'
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    vesselType: '',
    projectTimeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact-formspree', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            subject: '',
            message: '',
            vesselType: '',
            projectTimeline: ''
          })
          setSubmitStatus('idle')
        }, 5000)
      } else {
        throw new Error('Failed to send email')
      }

    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>

      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

                {/* Dai Duong Shipbuilding Group */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                    <BuildingOfficeIcon className="h-5 w-5" />
                    DAI DUONG SHIPBUILDING GROUP
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-medium">Main Office</p>
                        <p className="text-gray-600 text-sm">No. 45 Cho Dam Trieu Street, Quan Tru Ward, Kien An District, Hai Phong, Viet Nam</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <div>
                        <a href="tel:+842253877149" className="text-gray-900 hover:text-blue-600 transition-colors">+84 225 3877 149</a>
                        <span className="text-gray-500"> / </span>
                        <a href="tel:+84902245422" className="text-gray-900 hover:text-blue-600 transition-colors">+84 90 224 5422</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <EnvelopeIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <a href="mailto:Business@daiduongship.vn" className="text-gray-900 hover:text-blue-600 transition-colors">Business@daiduongship.vn</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <div>
                        <a href="https://dongtaudaiduong.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors text-sm">dongtaudaiduong.com</a>
                        <span className="text-gray-500"> / </span>
                        <a href="https://daiduongship.vn" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors text-sm">daiduongship.vn</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pacific Shipbuilding JSC */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-orange-600 mb-4 flex items-center gap-2">
                    <BuildingOfficeIcon className="h-5 w-5" />
                    PACIFIC SHIPBUILDING JSC
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-medium">Branch Office</p>
                        <p className="text-gray-600 text-sm">Lot 6 Tien Lang Town, Tien Lang Province, Hai Phong, Viet Nam</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <div>
                        <a href="tel:+842253943273" className="text-gray-900 hover:text-orange-600 transition-colors">+84 225 3943 273</a>
                        <span className="text-gray-500"> / </span>
                        <a href="tel:+84903434973" className="text-gray-900 hover:text-orange-600 transition-colors">+84 90 343 4973</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <EnvelopeIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <a href="mailto:Business@daiduongship.vn" className="text-gray-900 hover:text-orange-600 transition-colors">Business@daiduongship.vn</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <a href="https://pacificshipbuildingjsc.com.vn" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-orange-600 transition-colors text-sm">pacificshipbuildingjsc.com.vn</a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ClockIcon className="h-5 w-5" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency Support:</span>
                      <span>24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us A Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <BuildingOfficeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="vesselType" className="block text-sm font-medium text-gray-700 mb-2">
                        Vessel Type
                      </label>
                      <select
                        id="vesselType"
                        name="vesselType"
                        value={formData.vesselType}
                        onChange={handleInputChange}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select vessel type</option>
                        {vesselTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="projectTimeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="projectTimeline"
                        name="projectTimeline"
                        value={formData.projectTimeline}
                        onChange={handleInputChange}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {projectTimelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter subject"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project requirements, specifications, or any questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      * Required fields
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg disabled:shadow-none flex items-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <PaperAirplaneIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg"
                    >
                      <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />
                      <span>Message sent successfully! We'll get back to you within 24 hours.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg"
                    >
                      <ExclamationCircleIcon className="h-5 w-5 flex-shrink-0" />
                      <span>Failed to send message. Please try again or contact us directly at Business@daiduongship.vn</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Our maritime experts are ready to help with your urgent requirements
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+842253877149"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now: +84 225 3877 149
              </a>
              <a
                href="mailto:Business@daiduongship.vn"
                className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <EnvelopeIcon className="h-5 w-5" />
                Email: Business@daiduongship.vn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}