import { Calendar, Users, Shield, MapPin, Zap, Heart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Easy Event Creation',
      description:
        'Create and publish your events in minutes with our intuitive interface',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description:
        'Connect with like-minded people and build your event community',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description:
        'Your data is protected with enterprise-grade security measures',
    },
    {
      icon: MapPin,
      title: 'Location Based',
      description: 'Find events happening near you or anywhere in the world',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Get instant notifications about event changes and updates',
    },
    {
      icon: Heart,
      title: 'Save Favorites',
      description:
        'Bookmark events you love and never miss out on great experiences',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to create, discover, and manage events
            seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer group"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
