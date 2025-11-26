import { Calendar, Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <h1 className="text-5xl font-bold mb-6">About EventHub</h1>
            <p className="text-xl text-blue-100">
              Connecting people through memorable experiences since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slideUp">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe in the power of bringing people together. EventHub
                was created to make event planning and discovery simple,
                accessible, and enjoyable for everyone. Whether you're
                organizing a tech conference, music festival, or community
                gathering, we're here to help you create unforgettable
                experiences.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-8 animate-stagger">
              {[
                {
                  icon: Target,
                  title: 'Our Vision',
                  description:
                    "To become the world's most trusted platform for event creation and discovery, empowering organizers and attendees alike.",
                },
                {
                  icon: Heart,
                  title: 'Our Values',
                  description:
                    'We value community, innovation, accessibility, and creating meaningful connections between people.',
                },
                {
                  icon: Users,
                  title: 'Our Community',
                  description:
                    'Over 50,000 users worldwide trust EventHub to manage their events and discover new experiences.',
                },
                {
                  icon: Calendar,
                  title: 'Our Impact',
                  description:
                    '10,000+ successful events organized, connecting hundreds of thousands of people globally.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Founded in 2024, EventHub started with a simple idea: making event
              management accessible to everyone. Today, we're proud to serve a
              global community of event organizers and attendees.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Start creating and discovering amazing events today
          </p>
          <a
            href="/register"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
