'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trash2, Eye, Plus, Calendar, MapPin, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ManageEventsClient() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events`
      );
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      toast.error('Failed to load events');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        setEvents(events.filter(event => event.id !== id));
        toast.success('Event deleted successfully');
      } else {
        throw new Error('Failed to delete');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error('Failed to delete event');
    }
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Manage Events
          </h1>
          <p className="text-gray-600">View, edit, and delete your events</p>
        </div>
        <Link
          href="/add-event"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          <span>Create New Event</span>
        </Link>
      </div>

      {/* Events List */}
      {events.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center animate-scaleIn">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            No Events Yet
          </h3>
          <p className="text-gray-600 mb-6">
            Create your first event to get started
          </p>
          <Link
            href="/add-event"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            <span>Create Event</span>
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-xl shadow-md overflow-hidden animate-slideUp">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Event
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Price
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {events.map(event => (
                  <tr key={event.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{event.imageUrl || '📅'}</div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {event.title}
                          </p>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {event.shortDescription}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm">
                          {formatDate(event.date)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm line-clamp-1">
                          {event.location}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-blue-600">
                        {event.price}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center space-x-2">
                        <Link
                          href={`/events/${event.id}`}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="View Event"
                        >
                          <Eye className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(event.id, event.title)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                          title="Delete Event"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 animate-stagger">
            {events.map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-4xl">{event.imageUrl || '📅'}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {event.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.shortDescription}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <div className="text-gray-700 text-sm">
                    <span className="font-semibold text-blue-600 text-lg">
                      {event.price}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4 border-t border-gray-200">
                  <Link
                    href={`/events/${event.id}`}
                    className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="font-semibold text-sm">View</span>
                  </Link>
                  <button
                    onClick={() => handleDelete(event.id, event.title)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="font-semibold text-sm">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600 mb-2">Total Events</p>
              <p className="text-3xl font-bold text-gray-800">
                {events.length}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600 mb-2">Categories</p>
              <p className="text-3xl font-bold text-blue-600">
                {new Set(events.map(e => e.category)).size}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600 mb-2">Latest Event</p>
              <p className="text-sm font-bold text-gray-800 line-clamp-1">
                {events[events.length - 1]?.title || 'N/A'}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
