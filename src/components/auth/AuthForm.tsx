import React, { useState } from 'react';
import { User } from '../../types';

type AuthMode = 'login' | 'register';

export default function AuthForm() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'student' as User['role']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {mode === 'login' ? 'Sign in to your account' : 'Create your account'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {mode === 'register' && (
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="input-primary"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-primary"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-primary"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            {mode === 'register' && (
              <div>
                <label htmlFor="role" className="sr-only">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="input-primary"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as User['role'] })}
                >
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                </select>
              </div>
            )}
          </div>

          <div>
            <button type="submit" className="btn-primary w-full">
              {mode === 'login' ? 'Sign in' : 'Register'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            className="text-indigo-600 hover:text-indigo-500"
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
          >
            {mode === 'login'
              ? "Don't have an account? Register"
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}