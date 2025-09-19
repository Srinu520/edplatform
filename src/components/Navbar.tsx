import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  School as SchoolIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon,
  Policy as PolicyIcon
} from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { toggleMobileMenu, closeMobileMenu } from '../store/slices/uiSlice'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const { mobileMenuOpen } = useSelector((state: RootState) => state.ui)

  const courseCategories = [
    { name: 'Web Development', path: '/courses?category=web-development' },
    { name: 'Data Science', path: '/courses?category=data-science' },
    { name: 'Mobile Development', path: '/courses?category=mobile-development' },
    { name: 'Cloud & DevOps', path: '/courses?category=cloud-devops' },
    { name: 'UI/UX Design', path: '/courses?category=design' },
    { name: 'Cybersecurity', path: '/courses?category=cybersecurity' }
  ]

  const policyLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Refund Policy', path: '/refund-policy' }
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    dispatch(closeMobileMenu())
  }, [location, dispatch])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
              <SchoolIcon className="text-white text-xl" />
            </div>
            <span className="text-xl font-heading font-bold gradient-text">
              EduPlatform
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.name === 'Courses' ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onMouseEnter={() => setCoursesDropdownOpen(true)}
                    onMouseLeave={() => setCoursesDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                        location.pathname === item.path
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                    <motion.div
                      animate={{ rotate: coursesDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Courses Dropdown */}
                {item.name === 'Courses' && (
                  <AnimatePresence>
                    {coursesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2"
                        onMouseEnter={() => setCoursesDropdownOpen(true)}
                        onMouseLeave={() => setCoursesDropdownOpen(false)}
                      >
                        {courseCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.path}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                          >
                            <span className="text-lg">{category.icon}</span>
                            <span className="font-medium">{category.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/courses"
              className="btn-primary"
            >
              Start Learning
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Course Categories */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Course Categories
                  </h3>
                  {courseCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Policies */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Policies
                  </h3>
                  {policyLinks.map((policy) => (
                    <Link
                      key={policy.name}
                      to={policy.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <PolicyIcon className="text-lg" />
                      <span>{policy.name}</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/courses"
                    className="block w-full text-center btn-primary"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
