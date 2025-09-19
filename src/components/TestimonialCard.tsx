import React from 'react'
import { motion } from 'framer-motion'
import { Star as StarIcon } from '@mui/icons-material'
import { Testimonial } from '../types'

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-8 relative"
    >
      {/* Quote Icon */}
      {/* <div className="absolute top-6 right-6 text-primary-100">
        <QuoteIcon className="w-8 h-8" />
      </div> */}

      {/* Rating */}
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-semibold">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <p className="text-sm text-primary-600 font-medium">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
