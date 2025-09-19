import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { 
  Search as SearchIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  GridView as GridIcon,
  ViewList as ListIcon
} from '@mui/icons-material'
import CourseCard from '../components/CourseCard'
import { RootState } from '../store/store'
import { 
  setCourses, 
  setCategories, 
  setSelectedCategory, 
  setSearchQuery, 
  setSortBy, 
  setSortOrder,
  applyFilters 
} from '../store/slices/courseSlice'
import { courses, courseCategories } from '../data/courses'

const Courses: React.FC = () => {
  const dispatch = useDispatch()
  const { 
    filteredCourses, 
    categories, 
    selectedCategory, 
    searchQuery, 
    sortBy, 
    sortOrder 
  } = useSelector((state: RootState) => state.courses)
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    dispatch(setCourses(courses))
    dispatch(setCategories(courseCategories))
  }, [dispatch])

  const handleCategoryChange = (categoryId: string) => {
    dispatch(setSelectedCategory(categoryId))
  }

  const handleSearchChange = (query: string) => {
    dispatch(setSearchQuery(query))
  }

  const handleSortChange = (sortBy: 'price' | 'rating' | 'duration' | 'name') => {
    dispatch(setSortBy(sortBy))
  }

  const handleSortOrderChange = (order: 'asc' | 'desc') => {
    dispatch(setSortOrder(order))
  }

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
    { value: 'rating', label: 'Rating' },
    { value: 'duration', label: 'Duration' }
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
              Explore Our <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover comprehensive courses designed to help you master in-demand skills 
              and advance your career. Choose from our wide range of programs.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses, instructors, or topics..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/4"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                >
                  <FilterIcon />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Categories */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Categories</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === 'all'
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      All Courses ({courses.length})
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{category.icon}</span>
                          <span>{category.name}</span>
                          <span className="text-xs text-gray-500">({category.courseCount})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Sort By</h4>
                  <div className="space-y-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSortChange(option.value as any)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          sortBy === option.value
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Order */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Order</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleSortOrderChange('asc')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        sortOrder === 'asc'
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Ascending
                    </button>
                    <button
                      onClick={() => handleSortOrderChange('desc')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        sortOrder === 'desc'
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Descending
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {selectedCategory === 'all' 
                    ? 'All Courses' 
                    : categories.find(c => c.id === selectedCategory)?.name
                  }
                </h2>
                <p className="text-gray-600">
                  {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                {/* View Mode Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <GridIcon />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors duration-200 ${
                      viewMode === 'list'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <ListIcon />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Courses Grid/List */}
            {filteredCourses.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`${
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
                    : 'space-y-6'
                }`}
              >
                {filteredCourses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SearchIcon className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    handleSearchChange('')
                    handleCategoryChange('all')
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}

            {/* Load More Button */}
            {filteredCourses.length > 0 && filteredCourses.length >= 6 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-12"
              >
                <button className="btn-outline text-lg px-8 py-4">
                  Load More Courses
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
