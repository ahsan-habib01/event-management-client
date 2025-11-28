'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
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

export default function EventDetailPage() {
  const router = useRouter();
  const params = useParams(); // Use useParams hook to get the id
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      fetchEvent();
    }
  }, [params?.id]);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      console.log('🔍 Fetching event ID:', params.id);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events/${params.id}`
      );

      console.log('📡 Response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Event loaded:', data);
        setEvent(data);
      } else {
        console.log('❌ Event not found');
        setEvent(null);
        toast.error('Event not found');
      }
    } catch (error) {
      console.error('❌ Error:', error);
      toast.error('Failed to load event');
      setEvent(null);
    } finally {
      setLoading(false);
    }
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
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-sky-600 animate-spin" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Event Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            This event doesn't exist or may have been deleted.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Go Back
            </button>
            <button
              onClick={() => router.push('/events')}
              className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg hover:from-sky-600 hover:to-blue-700 transition"
            >
              Browse Events
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-br from-sky-500 to-blue-600 overflow-hidden">
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
                <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
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
                    {event.fullDescription}
                  </p>
                </div>

                {/* Organizer */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Organized By
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {event.createdBy?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-lg">
                        {event.createdBy}
                      </p>
                      <p className="text-gray-600 text-sm">Event Organizer</p>
                    </div>
                  </div>
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
                    className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg hover:from-sky-600 hover:to-blue-700 transition font-semibold"
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
                  <p className="text-3xl font-bold text-sky-600">
                    {event.price}
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Date</p>
                      <p className="text-gray-600 text-sm">
                        {formatDate(event.date)}
                      </p>
                    </div>
                  </div>

                  {event.time && (
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Time</p>
                        <p className="text-gray-600 text-sm">{event.time}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600 text-sm">{event.location}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition transform hover:scale-105 shadow-lg">
                    Register Now
                  </button>

                  <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center justify-center space-x-2">
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
