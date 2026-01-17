import { UserPlus, Calendar, Ticket, PartyPopper } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12" />,
      title: 'Create Account',
      description:
        'Sign up in seconds and join our vibrant community of event enthusiasts',
      color: 'from-sky-500 to-blue-500',
      delay: '0s',
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Find or Create Events',
      description:
        'Browse thousands of events or create your own in just a few clicks',
      color: 'from-blue-500 to-indigo-500',
      delay: '0.2s',
    },
    {
      icon: <Ticket className="w-12 h-12" />,
      title: 'Book Your Spot',
      description:
        'Secure your tickets instantly with our seamless checkout experience',
      color: 'from-indigo-500 to-purple-500',
      delay: '0.4s',
    },
    {
      icon: <PartyPopper className="w-12 h-12" />,
      title: 'Enjoy the Experience',
      description:
        'Show up and create unforgettable memories with like-minded people',
      color: 'from-purple-500 to-pink-500',
      delay: '0.6s',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-4">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-sky-700">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get started with our platform in four easy steps and unlock a world
            of amazing events
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: step.delay }}
            >
              {/* Connecting Line (hidden on mobile, shown on lg+) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-sky-200 to-transparent z-0"></div>
              )}

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group-hover:border-sky-200">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover effect glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="/register"
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white flex items-center gap-2">
                Get Started Now
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
            <p className="text-gray-500 text-sm">
              No credit card required • Free forever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
