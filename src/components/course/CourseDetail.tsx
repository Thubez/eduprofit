import React from 'react';
import { Clock, Users, BookOpen, Play } from 'lucide-react';
import { Course, Lesson } from '../../types';

interface CourseDetailProps {
  course: Course;
}

function LessonItem({ lesson }: { lesson: Lesson }) {
  return (
    <div className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-50">
      <div className="flex-shrink-0">
        <Play className="h-5 w-5 text-indigo-600" />
      </div>
      <div className="ml-4 flex-1">
        <h4 className="text-sm font-medium text-gray-900">{lesson.title}</h4>
        <p className="text-sm text-gray-500">{lesson.duration} minutes</p>
      </div>
    </div>
  );
}

export default function CourseDetail({ course }: CourseDetailProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Course Info */}
        <div className="lg:col-span-2">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-96 object-cover rounded-xl"
          />
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{course.description}</p>

            <div className="mt-6 flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-600">
                  {course.duration} hours
                </span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-600">
                  {course.enrolledCount} students
                </span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-600">
                  {course.lessons.length} lessons
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment Card */}
        <div className="mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">${course.price}</p>
              <button className="mt-6 btn-primary w-full">Enroll Now</button>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900">
                This course includes:
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center">
                  <Play className="h-5 w-5 text-indigo-600" />
                  <span className="ml-3 text-sm text-gray-600">
                    {course.duration} hours of video content
                  </span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                  <span className="ml-3 text-sm text-gray-600">
                    {course.lessons.length} lessons
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Course Content</h2>
        <div className="mt-6 bg-white rounded-lg shadow">
          {course.lessons.map((lesson) => (
            <LessonItem key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
    </div>
  );
}