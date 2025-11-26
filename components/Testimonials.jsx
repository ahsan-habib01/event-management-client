export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Event Organizer',
      text: 'This platform made organizing my conference incredibly easy. The interface is intuitive and my attendees loved it!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Music Promoter',
      text: "Best event management tool I've used. The features are exactly what I need without being overwhelming.",
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Community Manager',
      text: 'Our local community events have never been more organized. Highly recommend this platform!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real feedback from our amazing community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 text-xl transform group-hover:scale-125 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic group-hover:text-gray-900 transition">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
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
