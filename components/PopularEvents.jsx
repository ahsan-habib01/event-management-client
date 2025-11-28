import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Events
          </h2>
          <p className="text-gray-600 text-lg">
            Check out some of the most popular upcoming events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
          {events.map((event, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient header with emoji */}
              <div className="relative h-56 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-7xl overflow-hidden">
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-black/20"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse"
                  style={{ animationDelay: '1s' }}
                ></div>

                {/* Emoji */}
                <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">
                  {event.image}
                </span>

                {/* Price badge */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white shadow-lg">
                  <span className="text-lg font-black bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                    {event.price}
                  </span>
                </div>
              </div>

              {/* Content section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors duration-300">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center mr-3">
                      <Calendar className="w-4 h-4 text-sky-600" />
                    </div>
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium">
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <Link
                  href="/events"
                  className="block w-full text-center px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg"
                >
                  View Details
                </Link>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-400/0 to-blue-600/0 group-hover:from-sky-400/20 group-hover:to-blue-600/20 transition-all duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fadeIn">
          <Link
            href="/events"
            className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
