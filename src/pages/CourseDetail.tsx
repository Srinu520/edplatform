import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { 
  Star as StarIcon,
  AccessTime as TimeIcon,
  Person as PersonIcon,
  CheckCircle as CheckIcon,
  PlayArrow as PlayIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  Favorite as FavoriteIcon,
  TrendingUp as TrendingIcon
} from '@mui/icons-material'
import { RootState } from '../store/store'
import { setCourses } from '../store/slices/courseSlice'
import { courses } from '../data/courses'
import { Course } from '../types'

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const { courses: allCourses } = useSelector((state: RootState) => state.courses)
  const [course, setCourse] = useState<Course | null>(null)
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'reviews'>('overview')

  useEffect(() => {
    dispatch(setCourses(courses))
  }, [dispatch])

  useEffect(() => {
    if (allCourses.length > 0 && id) {
      const foundCourse = allCourses.find(c => c.id === id)
      setCourse(foundCourse || null)
    }
  }, [allCourses, id])

  if (!course) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingIcon className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="btn-primary">
            Browse All Courses
          </Link>
        </div>
      </div>
    )
  }

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

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-primary-600 font-medium capitalize">
                    {course.category.replace('-', ' ')}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Rating and Stats */}
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{course.rating}</span>
                    <span className="text-gray-600">({course.reviewCount} reviews)</span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-600">
                    <TimeIcon className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-600">
                    <PersonIcon className="w-5 h-5" />
                    <span>{course.instructor}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {course.features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Course Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 sticky top-24">
                {/* Course Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <PlayIcon className="text-primary-600 text-2xl" />
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(course.price)}
                  </span>
                  {course.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(course.originalPrice)}
                    </span>
                  )}
                  {course.originalPrice && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => setIsEnrolled(!isEnrolled)}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                      isEnrolled
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'btn-primary'
                    }`}
                  >
                    {isEnrolled ? 'Enrolled - Start Learning' : 'Enroll Now'}
                  </button>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                        isFavorite
                          ? 'bg-red-100 text-red-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <FavoriteIcon className={`w-5 h-5 mx-auto ${isFavorite ? 'text-red-600' : ''}`} />
                    </button>
                    <button className="flex-1 py-3 px-4 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                      <ShareIcon className="w-5 h-5 mx-auto" />
                    </button>
                    <button className="flex-1 py-3 px-4 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                      <DownloadIcon className="w-5 h-5 mx-auto" />
                    </button>
                  </div>
                </div>

                {/* Course Info */}
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language</span>
                    <span className="font-medium">English</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <span className="font-medium text-green-600">Included</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white rounded-xl shadow-lg mb-8">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8 px-6">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                          activeTab === tab.id
                            ? 'border-primary-500 text-primary-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">What you'll learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {course.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>

                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h3>
                      <ul className="space-y-2 mb-8">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Curriculum Tab */}
                  {activeTab === 'curriculum' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Course Curriculum</h3>
                      <div className="space-y-6">
                        {course.curriculum.map((module, moduleIndex) => (
                          <div key={moduleIndex} className="border border-gray-200 rounded-lg">
                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                              <h4 className="font-semibold text-gray-900">{module.module}</h4>
                            </div>
                            <div className="p-4">
                              <ul className="space-y-2">
                                {module.lessons.map((lesson, lessonIndex) => (
                                  <li key={lessonIndex} className="flex items-center space-x-3">
                                    <PlayIcon className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-700">{lesson}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Instructor Tab */}
                  {activeTab === 'instructor' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start space-x-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-semibold text-xl">
                          {course.instructor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{course.instructor}</h3>
                          <p className="text-primary-600 font-medium mb-4">Course Instructor</p>
                          <p className="text-gray-700 leading-relaxed">
                            {course.instructor} is an experienced professional with years of expertise in the field. 
                            They have worked with top companies and are passionate about sharing their knowledge 
                            with students to help them succeed in their careers.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Reviews Tab */}
                  {activeTab === 'reviews' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center mb-8">
                        <div className="text-4xl font-bold text-gray-900 mb-2">{course.rating}</div>
                        <div className="flex justify-center text-yellow-400 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-6 h-6 ${
                                i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">Based on {course.reviewCount} reviews</p>
                      </div>

                      <div className="space-y-6">
                        {/* Sample Reviews */}
                        {[1, 2, 3].map((review) => (
                          <div key={review} className="border border-gray-200 rounded-lg p-6">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <PersonIcon className="w-5 h-5 text-gray-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">Student {review}</h4>
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="w-4 h-4" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700">
                              This course exceeded my expectations. The instructor was knowledgeable and the 
                              content was well-structured. I learned a lot and would definitely recommend it to others.
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Related Courses */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Courses</h3>
                  <div className="space-y-4">
                    {courses
                      .filter(c => c.category === course.category && c.id !== course.id)
                      .slice(0, 3)
                      .map((relatedCourse) => (
                        <Link
                          key={relatedCourse.id}
                          to={`/courses/${relatedCourse.id}`}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                            <TrendingIcon className="text-primary-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                              {relatedCourse.title}
                            </h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <StarIcon
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < Math.floor(relatedCourse.rating) ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">{relatedCourse.rating}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Course Features */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h3>
                  <div className="space-y-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetail
