export default function Stats() {
  const stats = [
    { number: '10K+', label: 'Events Created' },
    { number: '50K+', label: 'Happy Users' },
    { number: '100+', label: 'Cities Covered' },
    { number: '4.9', label: 'Average Rating' },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="transform hover:scale-110 transition-all duration-300 animate-scaleIn"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 hover:text-blue-200 transition">
                {stat.number}
              </div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
