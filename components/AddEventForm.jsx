'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
  Calendar,
  MapPin,
  DollarSign,
  Image as ImageIcon,
  Loader2,
  CheckCircle,
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function AddEventForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    date: '',
    time: '',
    location: '',
    price: '',
    category: 'Technology',
    imageUrl: '',
  });

  const categories = [
    'Technology',
    'Music',
    'Food',
    'Business',
    'Art',
    'Sports',
    'Education',
    'Other',
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!session?.user?.email) {
      toast.error('Please login to create an event');
      return;
    }

    setLoading(true);

    try {
      const eventData = {
        ...formData,
        createdBy: session.user.email,
      };

      console.log('📤 Sending event data:', eventData);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ Server error:', errorData);
        throw new Error(errorData.error || 'Failed to create event');
      }

      const newEvent = await response.json();
      console.log('✅ Event created:', newEvent);

      toast.success('Event created successfully!', {
        icon: '✅',
        duration: 3000,
      });

      // Reset form
      setFormData({
        title: '',
        shortDescription: '',
        fullDescription: '',
        date: '',
        time: '',
        location: '',
        price: '',
        category: 'Technology',
        imageUrl: '',
      });

      // Redirect to manage events after 1 second
      setTimeout(() => {
        router.push('/manage-events');
      }, 1000);
    } catch (error) {
      console.error('❌ Error creating event:', error);
      toast.error(error.message || 'Failed to create event. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 border border-blue-100 animate-slideUp"
    >
      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
            Event Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g., Tech Conference 2024"
            className="w-full px-4 py-4 text-gray-900 bg-white border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition placeholder-gray-400 font-medium shadow-sm"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
            Short Description *{' '}
            <span className="text-gray-500 font-normal">(1-2 lines)</span>
          </label>
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            required
            maxLength={120}
            placeholder="Brief description that appears on event cards"
            className="w-full px-4 py-4 text-gray-900 bg-white border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition placeholder-gray-400 font-medium shadow-sm"
          />
          <p className="text-xs text-gray-600 mt-2 font-semibold">
            {formData.shortDescription.length}/120 characters
          </p>
        </div>

        {/* Full Description */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
            Full Description *
          </label>
          <textarea
            name="fullDescription"
            value={formData.fullDescription}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Detailed description of your event..."
            className="w-full px-4 py-4 text-gray-900 bg-white border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition resize-none placeholder-gray-400 font-medium shadow-sm"
          />
        </div>

        {/* Date and Time Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Event Date *
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500 z-10" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-4 text-gray-900 bg-white border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition font-medium shadow-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Event Time *
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 text-gray-900 bg-white border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition font-medium shadow-sm"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
            Location *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500 z-10" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g., Moscone Center, San Francisco, CA"
              className="w-full pl-11 pr-4 py-4 text-gray-900 bg-white border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition placeholder-gray-400 font-medium shadow-sm"
            />
          </div>
        </div>

        {/* Price and Category Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Price *
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500 z-10" />
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="e.g., $299 or Free"
                className="w-full pl-11 pr-4 py-4 text-gray-900 bg-white border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition placeholder-gray-400 font-medium shadow-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 text-gray-900 bg-white border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition font-medium shadow-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Image URL (Optional) */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
            Image Emoji{' '}
            <span className="text-gray-500 font-normal">
              (Optional - use emoji)
            </span>
          </label>
          <div className="relative">
            <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500 z-10" />
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="e.g., 🎉 or 🚀"
              maxLength={2}
              className="w-full pl-11 pr-4 py-4 text-gray-900 bg-white border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition placeholder-gray-400 font-medium shadow-sm"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2 font-semibold">
            Add a fun emoji to represent your event!
          </p>
        </div>

        {/* Submit Buttons */}
        <div className="flex space-x-4 pt-6 border-t-2 border-blue-200">
          <button
            type="button"
            onClick={() => router.back()}
            disabled={loading}
            className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-400 transition disabled:opacity-50 shadow-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Creating...</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Create Event</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
