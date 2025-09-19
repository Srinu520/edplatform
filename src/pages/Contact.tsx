import React from 'react'
import { motion } from 'framer-motion'
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material'
import ContactForm from '../components/ContactForm'

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: EmailIcon,
      title: 'Email Us',
      details: ['hello@eduplatform.com', 'support@eduplatform.com'],
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Mon-Fri from 8am to 6pm EST'
    },
    {
      icon: LocationIcon,
      title: 'Visit Us',
      details: ['123 Education Street', 'Learning City, LC 12345', 'United States'],
      description: 'Come say hello at our office'
    },
    {
      icon: ScheduleIcon,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
      description: 'We\'re here to help during these hours'
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com', color: 'hover:text-red-600' }
  ]

  const faqs = [
    {
      question: 'How can I enroll in a course?',
      answer: 'You can enroll in any course by clicking the "Enroll Now" button on the course page. You\'ll be redirected to our secure payment system to complete the enrollment process.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all courses. If you\'re not satisfied with your purchase, you can request a full refund within 30 days.'
    },
    {
      question: 'Are the courses self-paced?',
      answer: 'Most of our courses are self-paced, allowing you to learn at your own speed. However, some courses may have live sessions or deadlines for assignments.'
    },
    {
      question: 'Do I get a certificate after completing a course?',
      answer: 'Yes, you\'ll receive a certificate of completion for each course you finish. These certificates are industry-recognized and can be shared on LinkedIn and your resume.'
    },
    {
      question: 'Can I access course materials after completion?',
      answer: 'Yes, you\'ll have lifetime access to all course materials, including videos, resources, and updates. You can revisit the content anytime.'
    },
    {
      question: 'Is there any support available during the course?',
      answer: 'Absolutely! We provide multiple support channels including discussion forums, direct instructor support, and our dedicated support team to help you succeed.'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about our courses or need help with your learning journey? 
              We're here to help! Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to reach us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <info.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Location</h3>
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LocationIcon className="w-12 h-12 text-primary-600 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Education Street, Learning City</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-6">
                  Stay connected with us on social media for updates, tips, and community discussions.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-colors duration-200 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600 mb-4">
                  For urgent inquiries, call us directly or use our live chat feature during business hours.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-4 h-4 text-primary-600" />
                    <span className="text-sm text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <EmailIcon className="w-4 h-4 text-primary-600" />
                    <span className="text-sm text-gray-700">support@eduplatform.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our courses and platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Don't wait! Browse our courses and start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Browse Courses
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
