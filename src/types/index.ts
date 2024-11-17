export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'mentor' | 'admin';
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  mentorId: string;
  thumbnail: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  lessons: Lesson[];
  enrolledCount: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  content: string;
  duration: number;
  order: number;
}

export interface Revenue {
  courseId: string;
  amount: number;
  mentorShare: number;
  platformShare: number;
  date: string;
}