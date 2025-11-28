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
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer group"
            >
              <div className="h-48 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="transform group-hover:scale-125 transition-transform duration-300">
                  {event.image}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-sky-600 transition">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-sky-600">
                    {event.price}
                  </span>
                  <Link
                    href="/events"
                    className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-sky-600 hover:to-blue-700 transition transform hover:scale-105"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fadeIn">
          <Link
            href="/events"
            className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition transform hover:scale-105 hover:shadow-xl"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
