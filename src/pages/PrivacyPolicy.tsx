import React from 'react'
import { motion } from 'framer-motion'
import { 
  Security as SecurityIcon,
  DataUsage as DataIcon,
  Cookie as CookieIcon,
  Email as EmailIcon
} from '@mui/icons-material'

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: DataIcon,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when creating an account (name, email, phone number)',
        'Payment information processed securely through our payment partners',
        'Course progress, completion status, and learning analytics',
        'Communication records when you contact our support team',
        'Device information and usage patterns to improve our services'
      ]
    },
    {
      icon: SecurityIcon,
      title: 'How We Use Your Information',
      content: [
        'Provide and improve our educational services',
        'Process payments and manage your account',
        'Send course updates, notifications, and important announcements',
        'Analyze learning patterns to enhance course content',
        'Provide customer support and respond to inquiries',
        'Comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: CookieIcon,
      title: 'Cookies and Tracking',
      content: [
        'We use essential cookies to maintain your login session',
        'Analytics cookies help us understand how you use our platform',
        'Marketing cookies may be used to show relevant course recommendations',
        'You can control cookie preferences through your browser settings',
        'Disabling certain cookies may affect platform functionality'
      ]
    },
    {
      icon: EmailIcon,
      title: 'Communication Preferences',
      content: [
        'You can opt out of marketing emails at any time',
        'Account-related emails (payments, course updates) cannot be disabled',
        'You can update your communication preferences in account settings',
        'We respect your privacy and will not share your email with third parties',
        'Unsubscribe links are provided in all marketing communications'
      ]
    }
  ]

  const dataRights = [
    'Access your personal data we hold about you',
    'Request correction of inaccurate or incomplete data',
    'Request deletion of your personal data (subject to legal obligations)',
    'Object to processing of your data for marketing purposes',
    'Request data portability in a machine-readable format',
    'Withdraw consent for data processing at any time'
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information when you use our platform.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: December 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                EduPlatform ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website and use our educational services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our platform, you agree to the collection and use of information 
                in accordance with this policy. If you do not agree with our policies and 
                practices, please do not use our services.
              </p>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Data Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary-50 rounded-xl p-8 mt-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Data Rights</h2>
              <p className="text-gray-600 mb-6">
                Under applicable data protection laws, you have the following rights regarding 
                your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dataRights.map((right, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{right}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mt-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Data Security</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, 
                  or destruction. These measures include:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-600">• SSL encryption for data transmission</li>
                  <li className="text-gray-600">• Secure servers with regular security updates</li>
                  <li className="text-gray-600">• Access controls and authentication systems</li>
                  <li className="text-gray-600">• Regular security audits and assessments</li>
                  <li className="text-gray-600">• Employee training on data protection</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white rounded-xl p-8 mt-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <EmailIcon className="w-5 h-5 text-primary-400" />
                  <span>privacy@eduplatform.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <span className="text-primary-400">📍</span>
                  </span>
                  <span>123 Education Street, Learning City, LC 12345</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
