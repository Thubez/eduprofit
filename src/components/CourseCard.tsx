import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex items-center space-x-2 mb-2">
          <span className="px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
            {course.category}
          </span>
          <span className="px-2 py-1 text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full">
            {course.level}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{course.duration} hours</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>{course.enrolledCount} students</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${course.price}
          </span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}