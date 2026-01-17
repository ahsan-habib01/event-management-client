import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function PopularEvents() {
  const events = [
    {
      title: 'Tech Conference 2024',
      date: 'Dec 15, 2024',
      location: 'San Francisco, CA',
      price: '$299',
      image: '🚀',
    },
    {
      title: 'Music Festival',
      date: 'Jan 20, 2025',
      location: 'Austin, TX',
      price: '$150',
      image: '🎵',
    },
    {
      title: 'Food & Wine Expo',
      date: 'Feb 5, 2025',
      location: 'New York, NY',
      price: '$75',
      image: '🍷',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div 
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-4">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-sky-700">Popular Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Check out some of the most popular upcoming events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-gray-100"
            >
              {/* Event Image/Icon Section */}
              <div className="h-52 bg-gradient-to-br from-sky-500 via-blue-500 to-blue-600 flex items-center justify-center text-7xl relative overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                
                {/* Icon */}
                <span className="relative transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-2xl">
                  {event.image}
                </span>
              </div>

              {/* Event Details Section */}
              <div className="p-6 relative">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                  {event.title}
                </h3>

                {/* Date and Location */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center mr-3 group-hover:bg-sky-100 transition-colors">
                      <Calendar className="w-4 h-4 text-sky-600" />
                    </div>
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Starting from</p>
                    <span className="text-2xl font-black bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                      {event.price}
                    </span>
                  </div>
                  <Link
                    href="/events"
                    className="group/btn relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-white flex items-center gap-2">
                      Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-sky-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/events"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30"
          >
            View All Events
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}