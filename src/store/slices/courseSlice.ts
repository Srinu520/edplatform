import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Course, CourseCategory } from '../../types'

interface CourseState {
  courses: Course[]
  categories: CourseCategory[]
  filteredCourses: Course[]
  selectedCategory: string
  searchQuery: string
  sortBy: 'price' | 'rating' | 'duration' | 'name'
  sortOrder: 'asc' | 'desc'
}

const initialState: CourseState = {
  courses: [],
  categories: [],
  filteredCourses: [],
  selectedCategory: 'all',
  searchQuery: '',
  sortBy: 'name',
  sortOrder: 'asc',
}

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload
      state.filteredCourses = action.payload
    },
    setCategories: (state, action: PayloadAction<CourseCategory[]>) => {
      state.categories = action.payload
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
      state.filteredCourses = filterCourses(state)
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.filteredCourses = filterCourses(state)
    },
    setSortBy: (state, action: PayloadAction<CourseState['sortBy']>) => {
      state.sortBy = action.payload
      state.filteredCourses = sortCourses(state.filteredCourses, action.payload, state.sortOrder)
    },
    setSortOrder: (state, action: PayloadAction<CourseState['sortOrder']>) => {
      state.sortOrder = action.payload
      state.filteredCourses = sortCourses(state.filteredCourses, state.sortBy, action.payload)
    },
    applyFilters: (state) => {
      state.filteredCourses = filterCourses(state)
    },
  },
})

function filterCourses(state: CourseState): Course[] {
  let filtered = state.courses

  // Filter by category
  if (state.selectedCategory !== 'all') {
    filtered = filtered.filter(course => course.category === state.selectedCategory)
  }

  // Filter by search query
  if (state.searchQuery) {
    filtered = filtered.filter(course =>
      course.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(state.searchQuery.toLowerCase())
    )
  }

  // Sort courses
  return sortCourses(filtered, state.sortBy, state.sortOrder)
}

function sortCourses(courses: Course[], sortBy: CourseState['sortBy'], sortOrder: CourseState['sortOrder']): Course[] {
  return [...courses].sort((a, b) => {
    let comparison = 0

    switch (sortBy) {
      case 'price':
        comparison = a.price - b.price
        break
      case 'rating':
        comparison = a.rating - b.rating
        break
      case 'duration':
        // Extract numeric value from duration string (e.g., "4 weeks" -> 4)
        const durationA = parseInt(a.duration.split(' ')[0])
        const durationB = parseInt(b.duration.split(' ')[0])
        comparison = durationA - durationB
        break
      case 'name':
        comparison = a.title.localeCompare(b.title)
        break
    }

    return sortOrder === 'asc' ? comparison : -comparison
  })
}

export const {
  setCourses,
  setCategories,
  setSelectedCategory,
  setSearchQuery,
  setSortBy,
  setSortOrder,
  applyFilters,
} = courseSlice.actions

export default courseSlice.reducer
