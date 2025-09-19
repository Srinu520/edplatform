export interface Course {
  id: string
  title: string
  description: string
  shortDescription: string
  category: string
  duration: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  instructor: string
  instructorImage: string
  image: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  features: string[]
  curriculum: {
    module: string
    lessons: string[]
  }[]
  requirements: string[]
  whatYouWillLearn: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

export interface NewsletterData {
  email: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface CourseCategory {
  id: string
  name: string
  description: string
  icon: string
  courseCount: number
  color: string
}
