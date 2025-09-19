import React from 'react'
import { motion } from 'framer-motion'
import { 
  MoneyOff as MoneyOffIcon,
  Schedule as ScheduleIcon,
  CheckCircle as CheckIcon,
  Cancel as CancelIcon,
  Help as HelpIcon
} from '@mui/icons-material'

const RefundPolicy: React.FC = () => {
  const refundEligibility = [
    {
      icon: CheckIcon,
      title: 'Eligible for Refund',
      items: [
        'Request made within 30 days of purchase',
        'Course not completed or accessed minimally',
        'Technical issues preventing course access',
        'Course content significantly different from description',
        'Duplicate purchases made in error',
        'Payment processed incorrectly'
      ]
    },
    {
      icon: CancelIcon,
      title: 'Not Eligible for Refund',
      items: [
        'Request made after 30 days of purchase',
        'Course completed or significantly accessed',
        'Certificate already issued',
        'Refund requested multiple times',
        'Violation of terms of service',
        'Change of mind after significant course progress'
      ]
    }
  ]

  const refundProcess = [
    {
      step: 1,
      title: 'Submit Request',
      description: 'Contact our support team with your order number and reason for refund'
    },
    {
      step: 2,
      title: 'Review Process',
      description: 'We review your request within 2-3 business days'
    },
    {
      step: 3,
      title: 'Approval/Denial',
      description: 'You receive notification of our decision via email'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'If approved, refund is processed within 5-10 business days'
    }
  ]

  const refundMethods = [
    'Original payment method (credit card, PayPal, etc.)',
    'Bank transfer for large amounts',
    'Store credit for future purchases',
    'Cryptocurrency refunds (where applicable)'
  ]

  const specialCircumstances = [
    {
      title: 'Technical Issues',
      description: 'If you experience technical problems that prevent course access, we will work to resolve them. If unresolved within 48 hours, you may be eligible for a full refund.',
      timeframe: '48 hours'
    },
    {
      title: 'Course Cancellation',
      description: 'If we cancel a course before it starts, you will receive a full refund automatically. If cancelled after starting, you may receive a prorated refund.',
      timeframe: 'Immediate'
    },
    {
      title: 'Duplicate Purchases',
      description: 'If you accidentally purchase the same course multiple times, we will refund the duplicate purchases within 7 days.',
      timeframe: '7 days'
    },
    {
      title: 'Payment Errors',
      description: 'If there was an error in the payment processing or billing, we will correct it and provide a full refund if overcharged.',
      timeframe: 'Immediate'
    }
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
              Refund <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We want you to be completely satisfied with your learning experience. 
              This policy outlines our refund process and eligibility requirements.
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At EduPlatform, we stand behind the quality of our courses and are committed 
                to your satisfaction. If you're not completely satisfied with your purchase, 
                we offer a 30-day money-back guarantee.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This refund policy applies to all course purchases made through our platform. 
                Please read the following terms carefully to understand your rights and our process.
              </p>
            </motion.div>

            {/* Refund Eligibility */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {refundEligibility.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-xl shadow-lg p-8 ${
                    section.title.includes('Eligible') ? 'bg-green-50' : 'bg-red-50'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      section.title.includes('Eligible') ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <section.icon className={`w-6 h-6 ${
                        section.title.includes('Eligible') ? 'text-green-600' : 'text-red-600'
                      }`} />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          section.title.includes('Eligible') ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Refund Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Refund Process</h2>
              <div className="space-y-6">
                {refundProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Refund Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Refund Methods</h2>
              <p className="text-gray-600 mb-6">
                Refunds will be processed using the same payment method used for the original purchase, 
                unless otherwise specified. Here are the available refund methods:
              </p>
              <ul className="space-y-2">
                {refundMethods.map((method, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{method}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Special Circumstances */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Special Circumstances</h2>
              <div className="space-y-6">
                {specialCircumstances.map((circumstance, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {circumstance.title}
                      </h3>
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {circumstance.timeframe}
                      </span>
                    </div>
                    <p className="text-gray-600">{circumstance.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-yellow-50 rounded-xl p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Important Notes</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ScheduleIcon className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Processing Time</h3>
                    <p className="text-gray-600">
                      Refunds typically take 5-10 business days to appear in your account, 
                      depending on your payment method and bank processing times.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MoneyOffIcon className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Partial Refunds</h3>
                    <p className="text-gray-600">
                      In some cases, we may offer partial refunds based on course completion 
                      percentage or other factors. This will be discussed during the review process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HelpIcon className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Questions or Concerns</h3>
                    <p className="text-gray-600">
                      If you have any questions about this refund policy or need assistance 
                      with a refund request, please contact our support team.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white rounded-xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Us for Refunds</h2>
              <p className="text-gray-300 mb-6">
                To request a refund or if you have any questions about this policy, 
                please contact our support team:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <span className="text-primary-400">📧</span>
                  </span>
                  <span>refunds@eduplatform.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <span className="text-primary-400">📞</span>
                  </span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <span className="text-primary-400">📍</span>
                  </span>
                  <span>123 Education Street, Learning City, LC 12345</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-600 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> Please include your order number and a brief explanation 
                  of why you're requesting a refund when contacting us. This will help us 
                  process your request more quickly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RefundPolicy
