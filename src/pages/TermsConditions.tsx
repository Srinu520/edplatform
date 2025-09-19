import React from 'react'
import { motion } from 'framer-motion'
import { 
  Gavel as GavelIcon,
  AccountBalance as AccountIcon,
  Security as SecurityIcon,
  Cancel as CancelIcon
} from '@mui/icons-material'

const TermsConditions: React.FC = () => {
  const sections = [
    {
      icon: AccountIcon,
      title: 'Account Terms',
      content: [
        'You must be at least 18 years old to create an account',
        'You are responsible for maintaining the confidentiality of your account',
        'You must provide accurate and complete information when registering',
        'One person or entity may not maintain multiple accounts',
        'You are responsible for all activities that occur under your account',
        'We reserve the right to suspend or terminate accounts that violate these terms'
      ]
    },
    {
      icon: SecurityIcon,
      title: 'Use of Services',
      content: [
        'You may use our services only for lawful purposes',
        'You may not attempt to gain unauthorized access to our systems',
        'You may not use our services to transmit harmful or malicious code',
        'You may not interfere with or disrupt our services',
        'You may not use our services for commercial purposes without permission',
        'You must respect intellectual property rights of course content'
      ]
    },
    {
      icon: GavelIcon,
      title: 'Payment and Refunds',
      content: [
        'All course fees are due in full before course access is granted',
        'We accept major credit cards and other payment methods as displayed',
        'Prices are subject to change with 30 days notice to existing students',
        'Refunds are available within 30 days of purchase if not satisfied',
        'Refund requests must be submitted through our support system',
        'Refunds will be processed within 5-10 business days'
      ]
    },
    {
      icon: CancelIcon,
      title: 'Termination',
      content: [
        'Either party may terminate this agreement at any time',
        'We may suspend or terminate your access for violations of these terms',
        'Upon termination, your right to use the services ceases immediately',
        'We may delete your account and data after termination',
        'Certain provisions of these terms survive termination',
        'You remain liable for any outstanding payments upon termination'
      ]
    }
  ]

  const prohibitedUses = [
    'Violating any applicable laws or regulations',
    'Transmitting or procuring the sending of spam or unsolicited messages',
    'Engaging in any form of harassment or abuse',
    'Attempting to reverse engineer or hack our platform',
    'Using automated systems to access our services',
    'Sharing course content with non-enrolled users',
    'Creating fake accounts or impersonating others',
    'Distributing malware or harmful software'
  ]

  const intellectualProperty = [
    'All course content, including videos, materials, and resources, is protected by copyright',
    'You may not download, copy, or distribute course content without permission',
    'Course certificates are for personal use only and may not be transferred',
    'We respect the intellectual property rights of third parties',
    'If you believe your rights have been violated, please contact us immediately',
    'Unauthorized use of our content may result in legal action'
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
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms and conditions carefully before using our platform. 
              By accessing or using our services, you agree to be bound by these terms.
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms and Conditions ("Terms") govern your use of EduPlatform's 
                website and educational services. By accessing or using our platform, 
                you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you do not agree to these Terms, please do not use our services. 
                We reserve the right to modify these Terms at any time, and your 
                continued use of our services constitutes acceptance of any changes.
              </p>
            </motion.div>

            {/* Terms Sections */}
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

            {/* Prohibited Uses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-xl p-8 mt-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Prohibited Uses</h2>
              <p className="text-gray-600 mb-6">
                You may not use our services for any of the following purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prohibitedUses.map((use, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">{use}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mt-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Intellectual Property</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  The content, organization, graphics, design, compilation, magnetic translation, 
                  digital conversion, and other matters related to our platform are protected 
                  under applicable copyrights, trademarks, and other proprietary rights.
                </p>
                <ul className="space-y-2 ml-6">
                  {intellectualProperty.map((item, index) => (
                    <li key={index} className="text-gray-600">• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-yellow-50 rounded-xl p-8 mt-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Limitation of Liability</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  To the fullest extent permitted by law, EduPlatform shall not be liable for 
                  any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or 
                  other intangible losses, resulting from your use of our services.
                </p>
                <p className="text-gray-600">
                  Our total liability to you for any damages arising from or related to these 
                  Terms or our services shall not exceed the amount you paid us for the 
                  specific service giving rise to the claim.
                </p>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white rounded-xl p-8 mt-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Governing Law</h2>
              <p className="text-gray-300 mb-6">
                These Terms shall be governed by and construed in accordance with the laws 
                of the State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-300">
                Any legal action or proceeding arising under these Terms will be brought 
                exclusively in the courts located in San Francisco, California.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mt-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <span className="text-primary-600">📧</span>
                  </span>
                  <span>legal@eduplatform.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <span className="text-primary-600">📍</span>
                  </span>
                  <span>123 Education Street, Learning City, LC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <span className="text-primary-600">📞</span>
                  </span>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsConditions
