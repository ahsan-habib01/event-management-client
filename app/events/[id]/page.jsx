'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Share2,
  Heart,
  Loader2,
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function EventDetailPage({ params }) {
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events/${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setEvent(data);
      } else {
        // Use demo data
        setEvent(getDemoEvent(params.id));
      }
    } catch (error) {
      console.error('Error fetching event:', error);
      setEvent(getDemoEvent(params.id));
    } finally {
      setLoading(false);
    }
  };

  const getDemoEvent = id => {
    const demoEvents = {
      1: {
        id: 1,
        title: 'Tech Conference 2024',
        shortDescription:
          'Join us for the biggest tech conference featuring industry leaders...',
        fullDescription:
          'Join us for the biggest tech conference of the year! This three-day event brings together industry leaders, innovators, and tech enthusiasts from around the world. Experience keynote speeches from top executives, hands-on workshops, and networking opportunities that will shape the future of technology. Learn about cutting-edge developments in AI, blockchain, cloud computing, and more. Connect with fellow professionals and discover the latest products and services from leading tech companies.',
        date: '2024-12-15',
        time: '09:00',
        location: 'Moscone Center, San Francisco, CA',
        price: '$299',
        category: 'Technology',
        imageUrl: '🚀',
      },
      2: {
        id: 2,
        title: 'Music Festival Summer',
        shortDescription:
          'Experience three days of amazing music performances...',
        fullDescription:
          'Experience three unforgettable days of amazing music performances from top artists worldwide. This summer music festival features multiple stages with diverse genres including rock, pop, electronic, and indie music. Enjoy food trucks, art installations, and camping options. Dance under the stars and create memories that will last a lifetime. With over 50 artists performing, this is the ultimate music experience.',
        date: '2025-01-20',
        time: '12:00',
        location: 'Zilker Park, Austin, TX',
        price: '$150',
        category: 'Music',
        imageUrl: '🎵',
      },
    };
    return demoEvents[id] || demoEvents['1'];
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: event.title,
          text: event.shortDescription,
          url: window.location.href,
        })
        .catch(err => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const handleSave = () => {
    toast.success('Event saved to your favorites!');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Event not found
          </h2>
          <button
            onClick={() => router.push('/events')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-br from-blue-950 via-blue-700 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-9xl animate-scaleIn">
          {event.imageUrl || '📅'}
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-100 transition shadow-lg group animate-slideInLeft"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700 group-hover:-translate-x-1 transition" />
          <span className="font-semibold text-gray-700">Back</span>
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 animate-slideUp">
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                {/* Category Badge */}
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                  {event.category}
                </span>

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                  {event.title}
                </h1>

                {/* Description */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    About This Event
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {event.fullDescription || event.shortDescription}
                  </p>
                </div>

                {/* What's Included */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Full event access
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Networking opportunities
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Event materials and resources
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Certificate of attendance
                    </li>
                  </ul>
                </div>
              </div>

              {/* Share Section */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Share This Event
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={handleShare}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    Share
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex-1 bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition font-semibold"
                  >
                    Twitter
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-6 animate-slideInRight">
                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-gray-600 mb-2">Price</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {event.price}
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Date</p>
                      <p className="text-gray-600 text-sm">
                        {formatDate(event.date)}
                      </p>
                    </div>
                  </div>

                  {event.time && (
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Time</p>
                        <p className="text-gray-600 text-sm">{event.time}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600 text-sm">{event.location}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 active:scale-95">
                    Register Now
                  </button>

                  <button
                    onClick={handleSave}
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Save Event</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center justify-center space-x-2"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    🎟️ Limited spots available!
                    <br />
                    Register now to secure your place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
