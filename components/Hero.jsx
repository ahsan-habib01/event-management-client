import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-700 to-purple-800 text-white py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slideUp">
            Discover Amazing Events Near You
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-blue-100 animate-slideUp"
            style={{ animationDelay: '0.2s' }}
          >
            Create, manage, and attend unforgettable experiences with our
            platform
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp"
            style={{ animationDelay: '0.4s' }}
          >
            <Link
              href="/events"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition transform hover:scale-105 hover:shadow-2xl"
            >
              Browse Events
            </Link>
            <Link
              href="/add-event"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition border-2 border-white transform hover:scale-105 hover:shadow-2xl"
            >
              Create Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
