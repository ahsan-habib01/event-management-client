'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Calendar,
  ChevronDown,
  LogOut,
  Plus,
  Settings,
} from 'lucide-react';

export default function Navbar({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = href => pathname === href;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Calendar className="w-8 h-8 text-blue-600 group-hover:scale-110 transition" />
            <span className="text-xl font-bold text-gray-800">EventHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  isActive(link.href)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {session?.user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {session.user.name?.charAt(0) ||
                      session.user.email?.charAt(0) ||
                      'U'}
                  </div>
                  <span className="font-medium text-gray-700">
                    {session.user.name || session.user.email}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-800">
                        {session.user.name || 'User'}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {session.user.email}
                      </p>
                    </div>

                    <Link
                      href="/add-event"
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">Add Event</span>
                    </Link>

                    <Link
                      href="/manage-events"
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Settings className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">Manage Events</span>
                    </Link>

                    <hr className="my-2" />

                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        // We'll implement logout later
                        alert('Logout functionality - Coming in Step 4!');
                      }}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-red-50 transition w-full text-left"
                    >
                      <LogOut className="w-4 h-4 text-red-600" />
                      <span className="text-red-600">Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition"
                >
                  Login
                </Link>
                <Link
                  href="/login"
                  className="px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 rounded-lg transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition font-medium ${
                    isActive(link.href)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <hr className="my-2" />

              {session?.user ? (
                <>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {session.user.name?.charAt(0) || 'U'}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">
                          {session.user.name || 'User'}
                        </p>
                        <p className="text-xs text-gray-600">
                          {session.user.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/add-event"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Event</span>
                  </Link>

                  <Link
                    href="/manage-events"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition"
                  >
                    <Settings className="w-5 h-5" />
                    <span>Manage Events</span>
                  </Link>

                  <button
                    onClick={() => {
                      setIsOpen(false);
                      alert('Logout - Coming in Step 4!');
                    }}
                    className="flex items-center space-x-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-center text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-center bg-blue-600 text-white font-medium hover:bg-blue-700 rounded-lg transition"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
