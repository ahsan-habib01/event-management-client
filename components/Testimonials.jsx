'use client';

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
      name: 'Will Thompson',
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

  // 🔐 SSR-safe defaults
  const [itemsPerView, setItemsPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // ✅ Client-only screen detection
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  // ✅ Auto-play logic
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
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-sky-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-4">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
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

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation */}
          <button
            onClick={goToPrev}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Track */}
          <div className="overflow-hidden px-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex gap-6 px-2">
                  {testimonials
                    .slice(
                      slideIndex * itemsPerView,
                      (slideIndex + 1) * itemsPerView
                    )
                    .map((t, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border"
                      >
                        <div className="flex mb-4">
                          {[...Array(t.rating)].map((_, s) => (
                            <span key={s} className="text-yellow-400 text-xl">
                              ★
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-700 mb-6 italic min-h-[80px]">
                          “{t.text}”
                        </p>

                        <div className="flex items-center pt-4 border-t">
                          <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold">{t.name}</div>
                            <div className="text-sm text-gray-600">
                              {t.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i
                    ? 'w-8 bg-gradient-to-r from-sky-500 to-blue-600'
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Autoplay toggle */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-sky-600 flex items-center gap-2 mx-auto"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                }`}
              />
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
