import React from 'react';
import { TrendingUp, Users, DollarSign, BookOpen } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,345',
      icon: DollarSign,
      change: '+12.5%',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
    },
    {
      title: 'Active Students',
      value: '1,234',
      icon: Users,
      change: '+8.2%',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      title: 'Course Views',
      value: '45.2K',
      icon: TrendingUp,
      change: '+23.1%',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      title: 'Total Courses',
      value: '48',
      icon: BookOpen,
      change: '+4.3%',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white overflow-hidden rounded-lg shadow-sm"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-lg ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.title}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-emerald-600">
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}