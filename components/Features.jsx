import { Calendar, Users, Shield, MapPin, Zap, Heart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Easy Event Creation',
      description:
        'Create and publish your events in minutes with our intuitive interface',
      color: 'from-sky-500 to-blue-500',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description:
        'Connect with like-minded people and build your event community',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description:
        'Your data is protected with enterprise-grade security measures',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: MapPin,
      title: 'Location Based',
      description: 'Find events happening near you or anywhere in the world',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Get instant notifications about event changes and updates',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Heart,
      title: 'Save Favorites',
      description:
        'Bookmark events you love and never miss out on great experiences',
      color: 'from-rose-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-4">
            <Zap className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-semibold text-sky-700">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Our Platform?
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to create, discover, and manage events
            seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon container */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-sky-600 transition-colors duration-300 relative">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative">
                {feature.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
