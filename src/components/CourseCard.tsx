import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Star as StarIcon,
  AccessTime as TimeIcon,
  Person as PersonIcon,
  TrendingUp as TrendingIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material'
import { Course } from '../types'

interface CourseCardProps {
  course: Course
  index?: number
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index = 0 }) => {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card group cursor-pointer"
    >
      <Link to={`/courses/${course.id}`}>
        {/* Course Image */}
        <div className="relative overflow-hidden rounded-t-xl">
          <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <TrendingIcon className="text-primary-600 text-2xl" />
            </div>
          </div>
          
          {/* Level Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
              {course.level}
            </span>
          </div>

          {/* Discount Badge */}
          {course.originalPrice && course.originalPrice > course.price && (
            <div className="absolute top-4 right-4">
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
              </span>
            </div>
          )}
        </div>

        {/* Course Content */}
        <div className="p-6">
          {/* Category */}
          <div className="text-sm text-primary-600 font-medium mb-2 capitalize">
            {course.category.replace('-', ' ')}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {course.shortDescription}
          </p>

          {/* Instructor */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <PersonIcon className="text-gray-600 text-sm" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">{course.instructor}</div>
              <div className="text-xs text-gray-500">Instructor</div>
            </div>
          </div>

          {/* Rating and Duration */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {course.rating} ({course.reviewCount})
              </span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <TimeIcon className="w-4 h-4" />
              <span className="text-sm">{course.duration}</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {course.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-1 text-xs text-gray-600">
                  <CheckIcon className="w-3 h-3 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                {formatPrice(course.price)}
              </span>
              {course.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(course.originalPrice)}
                </span>
              )}
            </div>
            <button className="btn-primary text-sm px-4 py-2">
              Enroll Now
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default CourseCard
