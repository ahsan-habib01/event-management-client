import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slideUp">
          Ready to Get Started?
        </h2>
        <p
          className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto animate-slideUp"
          style={{ animationDelay: '0.2s' }}
        >
          Join thousands of event organizers and attendees creating memorable
          experiences
        </p>
        <Link
          href="/login"
          className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-scaleIn"
          style={{ animationDelay: '0.4s' }}
        >
          Sign Up Now
        </Link>
      </div>
    </section>
  );
}
