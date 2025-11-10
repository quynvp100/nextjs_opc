'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const categories = [
  { id: 'all', name: 'All Vessels', count: 24 },
  { id: 'abs-cr', name: 'ABS, CR', count: 8, active: true },
  { id: 'vr', name: 'VR', count: 6 },
  { id: 'vr-sb', name: 'VR-SB', count: 4 },
  { id: 'vr-si', name: 'VR-SI', count: 3 },
  { id: 'vrh-ii', name: 'VRH-II', count: 2 },
  { id: 'vrh-iii', name: 'VRH-III', count: 1 }
]

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'name', label: 'Name A-Z' },
  { value: 'capacity', label: 'Capacity' }
]

const vessels = [
  {
    id: 1,
    name: 'MV OCEANUS I - VI',
    year: '2024',
    category: 'abs-cr',
    type: 'Offshore Support Vessel',
    length: '65m',
    capacity: '1,200 DWT',
    image: '/13.-Oceanus-1.png',
    status: 'Delivered',
    specifications: {
      length: '65.0m',
      beam: '13.8m',
      depth: '6.5m',
      dwt: '1,200 MT',
      classification: 'ABS'
    }
  },
  {
    id: 2,
    name: 'MV OCEANUS I',
    year: '2024',
    category: 'abs-cr',
    type: 'Supply Vessel',
    length: '60m',
    capacity: '1,000 DWT',
    image: '/13.-Oceanus-1.png',
    status: 'In Construction',
    specifications: {
      length: '60.0m',
      beam: '12.8m',
      depth: '6.0m',
      dwt: '1,000 MT',
      classification: 'ABS'
    }
  },
  {
    id: 3,
    name: 'VIET THUAN 30-05',
    year: '2023',
    category: 'vr',
    type: 'Bulk Carrier',
    length: '180m',
    capacity: '32,000 DWT',
    image: '/12.-Viet-Thuan-30-05.png',
    status: 'Delivered',
    specifications: {
      length: '180.0m',
      beam: '28.5m',
      depth: '14.2m',
      dwt: '32,000 MT',
      classification: 'VR'
    }
  },
  {
    id: 4,
    name: 'OSV PACIFIC STAR',
    year: '2024',
    category: 'vr-sb',
    type: 'Platform Supply Vessel',
    length: '70m',
    capacity: '1,500 DWT',
    image: '/13.-Oceanus-1.png',
    status: 'Design Phase',
    specifications: {
      length: '70.0m',
      beam: '15.0m',
      depth: '7.0m',
      dwt: '1,500 MT',
      classification: 'VR'
    }
  },
  {
    id: 5,
    name: 'CARGO MASTER VIII',
    year: '2023',
    category: 'vr-si',
    type: 'General Cargo',
    length: '120m',
    capacity: '8,000 DWT',
    image: '/12.-Viet-Thuan-30-05.png',
    status: 'Delivered',
    specifications: {
      length: '120.0m',
      beam: '18.5m',
      depth: '9.8m',
      dwt: '8,000 MT',
      classification: 'VR'
    }
  },
  {
    id: 6,
    name: 'ANCHOR HANDLER IX',
    year: '2024',
    category: 'vrh-ii',
    type: 'Anchor Handling Tug',
    length: '75m',
    capacity: '2,000 BHP',
    image: '/13.-Oceanus-1.png',
    status: 'Under Construction',
    specifications: {
      length: '75.0m',
      beam: '16.5m',
      depth: '7.5m',
      power: '2,000 BHP',
      classification: 'VR'
    }
  }
]

export default function Products() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('abs-cr')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [showFilters, setShowFilters] = useState(false)

  // Handle URL query parameters
  useEffect(() => {
    const category = searchParams.get('category')
    if (category && categories.find(cat => cat.id === category)) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const filteredVessels = vessels.filter(vessel => {
    const matchesCategory = selectedCategory === 'all' || vessel.category === selectedCategory
    const matchesSearch = vessel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vessel.type.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800'
      case 'In Construction': return 'bg-blue-100 text-blue-800'
      case 'Under Construction': return 'bg-orange-100 text-orange-800'
      case 'Design Phase': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-64 flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Portfolio</h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20'
                          : 'bg-gray-200'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1">

              {/* Search & Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Search */}
                  <div className="relative flex-1">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search vessels by name or type..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[180px]"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Filter Button */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <FunnelIcon className="h-5 w-5" />
                    Filters
                  </button>
                </div>

                {/* Results Info */}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                  <span>Showing {filteredVessels.length} vessels</span>
                  <span>Category: {categories.find(cat => cat.id === selectedCategory)?.name}</span>
                </div>
              </motion.div>

              {/* Vessels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVessels.map((vessel, index) => (
                  <motion.div
                    key={vessel.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      {vessel.image.includes('Oceanus') || vessel.image.includes('Viet-Thuan') ? (
                        <Image
                          src={vessel.image}
                          alt={vessel.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300 bg-gray-100"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <div className="text-white text-4xl">🚢</div>
                        </div>
                      )}

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(vessel.status)}`}>
                          {vessel.status}
                        </span>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-lg text-xs font-semibold">
                          {vessel.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {vessel.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm mb-3">{vessel.type}</p>

                      {/* Key Specs */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                          <span className="text-xs text-gray-500">Length</span>
                          <p className="font-semibold">{vessel.specifications.length}</p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500">DWT</span>
                          <p className="font-semibold">{vessel.specifications.dwt}</p>
                        </div>
                      </div>

                      {/* Classification */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-gray-500">Classification</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                          {vessel.specifications.classification}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                          View Details
                        </button>
                        <button className="p-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors">
                          <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              {filteredVessels.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center mt-12"
                >
                  <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-xl font-semibold transition-colors border border-gray-200 shadow-lg">
                    Load More Vessels
                  </button>
                </motion.div>
              )}

              {/* No Results */}
              {filteredVessels.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-6xl text-gray-300 mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No vessels found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or category filter</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}