import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  PlayArrow as PlayIcon,
  Star as StarIcon,
  People as PeopleIcon,
  School as SchoolIcon
} from '@mui/icons-material'

const Hero: React.FC = () => {
  const stats = [
    { icon: SchoolIcon, value: '50+', label: 'Courses' },
    { icon: PeopleIcon, value: '10K+', label: 'Students' },
    { icon: StarIcon, value: '4.9', label: 'Rating' }
  ]

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight"
            >
              Learn, Grow,{' '}
              <span className="gradient-text">Succeed</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              Transform your career with our comprehensive courses, expert mentorship, and real-world project experience. Join thousands of successful graduates.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link
                to="/courses"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                Start Learning Today
                <PlayIcon className="ml-2" />
              </Link>
              
              <button className="btn-outline text-lg px-8 py-4 inline-flex items-center justify-center">
                Watch Demo
                <PlayIcon className="ml-2" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="text-primary-600 text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <PlayIcon className="text-primary-600 text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Complete Web Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Master modern web development with hands-on projects
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.9 (1,247)</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600">$299</div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 w-32"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">Certified</span>
                </div>
                <p className="text-xs text-gray-600">Industry recognized</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 w-32"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">👥</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">Mentorship</span>
                </div>
                <p className="text-xs text-gray-600">Expert guidance</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
