import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-sky-950 via-blue-900 to-indigo-900 text-white py-24 md:py-40 overflow-hidden">
      {/* Multi-layer animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute top-1/2 right-1/4 w-[32rem] h-[32rem] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-sky-300 rounded-full opacity-60 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-200 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-50 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-1 h-1 bg-sky-400 rounded-full opacity-70 animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge/Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 hover:bg-white/15 transition-all duration-300">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-sky-200">
              Trusted by 50K+ Users
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-sky-200 via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Discover Amazing
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-sky-100 bg-clip-text text-transparent">
              Events Near You
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-sky-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            Create, manage, and attend unforgettable experiences with our
            innovative platform
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/events"
              className="group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30"
            >
              {/* Button background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white flex items-center gap-2">
                Browse Events
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

            <Link
              href="/add-event"
              className="group relative px-8 py-4 rounded-2xl font-semibold text-lg backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white transition-all duration-300 hover:bg-white/20 hover:border-sky-300/50 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <span className="flex items-center gap-2">
                Create Event
                <svg
                  className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-16 text-sm">
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
              <span>Free to Join</span>
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
              <span>Instant Setup</span>
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
              <span>100+ Cities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
