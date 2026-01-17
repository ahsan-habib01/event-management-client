import Link from 'next/link';
import { Calendar, Users, Shield, MapPin, Zap, Heart } from 'lucide-react';

// CTA Component
export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-950 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '4s' }}
      ></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-300 rounded-full opacity-60 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-200 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-50 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-sky-200">
            Join 50K+ Happy Users
          </span>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-sky-100 bg-clip-text text-transparent">
            Ready to Get Started?
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-10 text-sky-100/90 max-w-2xl mx-auto font-light leading-relaxed">
          Join thousands of event organizers and attendees creating memorable
          experiences every day
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link
            href="/signup"
            className="group relative px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50"
          >
            {/* Button gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white to-sky-50 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-2 font-bold">
              Sign Up Now
              <svg
                className="w-5 h-5 text-sky-600 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/events"
            className="group px-10 py-5 rounded-2xl font-semibold text-lg backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            <span className="flex items-center gap-2">
              Explore Events
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm">
          <div className="flex items-center gap-2 text-sky-200/80">
            <svg
              className="w-5 h-5 text-sky-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2 text-sky-200/80">
            <svg
              className="w-5 h-5 text-sky-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Free Forever Plan</span>
          </div>
          <div className="flex items-center gap-2 text-sky-200/80">
            <svg
              className="w-5 h-5 text-sky-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default export for easy import
export default function CTASection() {
  return <CTA />;
}
