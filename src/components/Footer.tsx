import React from 'react'
import { Link } from 'react-router-dom'
import { 
  School as SchoolIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' }
  ]

  const courseCategories = [
    { name: 'Web Development', path: '/courses?category=web-development' },
    { name: 'Data Science', path: '/courses?category=data-science' },
    { name: 'Mobile Development', path: '/courses?category=mobile-development' },
    { name: 'Cloud & DevOps', path: '/courses?category=cloud-devops' },
    { name: 'UI/UX Design', path: '/courses?category=design' },
    { name: 'Cybersecurity', path: '/courses?category=cybersecurity' }
  ]

  const policies = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Refund Policy', path: '/refund-policy' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
    { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
    { name: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                  <SchoolIcon className="text-white text-xl" />
                </div>
                <span className="text-xl font-heading font-bold">
                  EduPlatform
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your career with our comprehensive courses, expert mentorship, and real-world project experience. Learn, grow, and succeed in the digital age.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <EmailIcon className="text-primary-400" />
                  <span>hello@eduplatform.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <PhoneIcon className="text-primary-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <LocationIcon className="text-primary-400" />
                  <span>123 Education St, Learning City, LC 12345</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Course Categories</h3>
              <ul className="space-y-3">
                {courseCategories.map((category) => (
                  <li key={category.name}>
                    <Link
                      to={category.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for the latest courses and updates.
              </p>
              <div className="mb-6">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-r-lg transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} EduPlatform. All rights reserved.
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                {policies.map((policy) => (
                  <Link
                    key={policy.name}
                    to={policy.path}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {policy.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
