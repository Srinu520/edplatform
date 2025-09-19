import React from 'react'
import { motion } from 'framer-motion'
import { 
  School as SchoolIcon,
  People as PeopleIcon,
  EmojiEvents as TrophyIcon,
  TrendingUp as TrendingIcon,
  CheckCircle as CheckIcon,
  Star as StarIcon
} from '@mui/icons-material'

const About: React.FC = () => {
  const values = [
    {
      icon: SchoolIcon,
      title: 'Excellence in Education',
      description: 'We maintain the highest standards in curriculum design and delivery, ensuring our students receive world-class education.'
    },
    {
      icon: PeopleIcon,
      title: 'Student-Centered Approach',
      description: 'Every decision we make is focused on our students\' success, from course design to career support.'
    },
    {
      icon: TrophyIcon,
      title: 'Industry Recognition',
      description: 'Our programs are designed in collaboration with industry leaders and recognized by top employers.'
    },
    {
      icon: TrendingIcon,
      title: 'Continuous Innovation',
      description: 'We constantly update our curriculum and teaching methods to stay ahead of industry trends.'
    }
  ]

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Academic Officer',
      image: '/images/team/sarah-johnson.jpg',
      bio: 'Former Google engineer with 15+ years in tech education'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Data Science',
      image: '/images/team/michael-chen.jpg',
      bio: 'Ex-Microsoft data scientist and AI researcher'
    },
    {
      name: 'Lisa Park',
      role: 'UX Design Lead',
      image: '/images/team/lisa-park.jpg',
      bio: 'Former Airbnb designer with expertise in user research'
    },
    {
      name: 'David Kim',
      role: 'Cybersecurity Expert',
      image: '/images/team/david-kim.jpg',
      bio: 'Former IBM security architect and ethical hacker'
    }
  ]

  const milestones = [
    { year: '2020', title: 'Platform Founded', description: 'Started with a vision to democratize quality education' },
    { year: '2021', title: 'First 1000 Students', description: 'Reached our first major milestone in student enrollment' },
    { year: '2022', title: 'Industry Partnerships', description: 'Partnered with top tech companies for curriculum development' },
    { year: '2023', title: 'Global Expansion', description: 'Expanded to serve students in 50+ countries worldwide' },
    { year: '2024', title: 'AI Integration', description: 'Launched AI-powered personalized learning experiences' }
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
              About <span className="gradient-text">EduPlatform</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to transform lives through accessible, high-quality education. 
              Since 2020, we've been empowering learners worldwide with industry-relevant skills 
              and real-world experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to high-quality education and empower individuals 
                to achieve their career goals through comprehensive, industry-relevant 
                learning experiences.
              </p>
              <p className="text-lg text-gray-600">
                We believe that everyone deserves the opportunity to learn, grow, and 
                succeed, regardless of their background or circumstances.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To become the world's leading online education platform, recognized for 
                producing job-ready professionals who drive innovation and success in 
                their respective fields.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where quality education is accessible to all, 
                and learning never stops.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose EduPlatform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the best learning experience with proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Industry-Expert Instructors
                    </h3>
                    <p className="text-gray-600">
                      Learn from professionals who work at top companies like Google, Microsoft, and Amazon
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Real-World Projects
                    </h3>
                    <p className="text-gray-600">
                      Build portfolio-worthy projects that demonstrate your skills to potential employers
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Career Support
                    </h3>
                    <p className="text-gray-600">
                      Get personalized career guidance, resume reviews, and interview preparation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Flexible Learning
                    </h3>
                    <p className="text-gray-600">
                      Study at your own pace with lifetime access to course materials and updates
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <StarIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Student Success Rate
                  </h3>
                  <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
                  <p className="text-gray-600">
                    of our graduates land their dream job within 6 months
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Course Completion</span>
                    <span className="font-semibold text-gray-900">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-primary-600 h-3 rounded-full" style={{ width: '92%' }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Job Placement</span>
                    <span className="font-semibold text-gray-900">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '95%' }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Student Satisfaction</span>
                    <span className="font-semibold text-gray-900">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-accent-500 h-3 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our instructors are industry veterans with years of experience at top tech companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-semibold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global education platform
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center relative z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
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
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of successful students who have transformed their careers with our courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Browse Courses
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
