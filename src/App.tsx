import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CourseCard from './components/CourseCard';
import AuthForm from './components/auth/AuthForm';
import CourseDetail from './components/course/CourseDetail';
import MentorDashboard from './components/mentor/MentorDashboard';

const featuredCourses = [
  {
    id: '1',
    title: 'Advanced Web Development',
    description: 'Master modern web development with React, Node.js, and more.',
    price: 99.99,
    mentorId: 'm1',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Development',
    level: 'advanced',
    duration: 42,
    lessons: [
      {
        id: 'l1',
        title: 'Introduction to Modern Web Development',
        description: 'Overview of modern web development practices',
        content: 'Lesson content here',
        duration: 45,
        order: 1
      },
      {
        id: 'l2',
        title: 'React Fundamentals',
        description: 'Learn the basics of React',
        content: 'Lesson content here',
        duration: 60,
        order: 2
      }
    ],
    enrolledCount: 1234
  },
  {
    id: '2',
    title: 'Digital Marketing Mastery',
    description: 'Learn to create and execute successful digital marketing campaigns.',
    price: 79.99,
    mentorId: 'm2',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Marketing',
    level: 'intermediate',
    duration: 35,
    lessons: [],
    enrolledCount: 856
  },
  {
    id: '3',
    title: 'Data Science Fundamentals',
    description: 'Start your journey in data science with Python and statistics.',
    price: 89.99,
    mentorId: 'm3',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'Data Science',
    level: 'beginner',
    duration: 28,
    lessons: [],
    enrolledCount: 2156
  }
];

const mockMentorStats = {
  totalRevenue: 12500,
  totalStudents: 450,
  totalCourses: 5,
  revenueGrowth: 23.5
};

const mockRecentRevenue = [
  {
    courseId: '1',
    amount: 99.99,
    mentorShare: 70,
    platformShare: 29.99,
    date: '2024-03-15'
  },
  {
    courseId: '2',
    amount: 79.99,
    mentorShare: 56,
    platformShare: 23.99,
    date: '2024-03-14'
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="pt-16">
                <Dashboard />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Featured Courses
                    </h2>
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              </main>
            }
          />
          <Route path="/auth" element={<AuthForm />} />
          <Route
            path="/course/:id"
            element={<CourseDetail course={featuredCourses[0]} />}
          />
          <Route
            path="/mentor/dashboard"
            element={
              <MentorDashboard
                stats={mockMentorStats}
                courses={featuredCourses}
                recentRevenue={mockRecentRevenue}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;