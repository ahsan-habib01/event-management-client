"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    {
      name: 'David Rodriguez',
      role: 'Wedding Planner',
      text: 'Planning weddings has become so much smoother. My clients appreciate the professional touch this platform provides.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Corporate Event Director',
      text: 'From small meetings to large conferences, this tool handles everything seamlessly. A game-changer for our team!',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Festival Coordinator',
      text: 'Managing ticket sales and attendee information has never been easier. The analytics features are fantastic!',
      rating: 5,
    },
    {
      name: 'Amanda Foster',
      role: 'Nonprofit Organizer',
      text: 'Perfect for our fundraising events. The free tier is generous and the paid features are worth every penny.',
      rating: 5,
    },
    {
      name: 'Robert Kim',
      role: 'Sports Event Manager',
      text: 'Streamlined our entire event process. The mobile app is great for on-the-go management.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView =
    typeof window !== 'undefined' && window.innerWidth >= 1024
      ? 3
      : typeof window !== 'undefined' && window.innerWidth >= 768
      ? 2
      : 1;

  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = index => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-4">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-sky-700">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real feedback from our amazing community of event creators and
            attendees
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white hover:bg-sky-50 text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 group-hover:text-sky-600 transition-colors" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white hover:bg-sky-50 text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 group-hover:text-sky-600 transition-colors" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden px-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex gap-6 px-2">
                  {testimonials
                    .slice(
                      slideIndex * itemsPerView,
                      (slideIndex + 1) * itemsPerView
                    )
                    .map((testimonial, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                      >
                        {/* Quote Icon */}
                        <div className="text-sky-500 mb-4 opacity-50">
                          <svg
                            className="w-10 h-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>

                        {/* Stars */}
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map(
                            (_, starIndex) => (
                              <span
                                key={starIndex}
                                className="text-yellow-400 text-xl transform group-hover:scale-125 transition-transform duration-300"
                                style={{
                                  transitionDelay: `${starIndex * 0.05}s`,
                                }}
                              >
                                ★
                              </span>
                            )
                          )}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-900 transition min-h-[80px]">
                          &quot;{testimonial.text}&quot;
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center pt-4 border-t border-gray-100">
                          <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 group-hover:text-sky-600 transition-colors">
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
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 w-8'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-sky-600 transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              {isAutoPlaying ? (
                <>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Auto-playing
                </>
              ) : (
                <>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  Paused
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
