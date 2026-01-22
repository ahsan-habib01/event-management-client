export default function Stats() {
  const stats = [
    { number: '10K+', label: 'Events Created' },
    { number: '40K+', label: 'Happy Users' },
    { number: '100+', label: 'Cities Covered' },
    { number: '4.9', label: 'Average Rating' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Modern animated background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glassmorphism card effect */}
              <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-sky-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/0 to-blue-600/0 group-hover:from-sky-400/20 group-hover:to-blue-600/20 transition-all duration-500"></div>

                <div className="relative text-center">
                  <div className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-br from-sky-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="text-sky-200/90 text-sm md:text-base font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
