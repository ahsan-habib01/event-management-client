'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Trash2, Eye, Plus, Calendar, MapPin, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

export default function ManageEventsClient() {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.email) {
      fetchMyEvents();
    } else if (status === 'unauthenticated') {
      setLoading(false);
    }
  }, [session, status]);

  const fetchMyEvents = async () => {
    try {
      setLoading(true);
      const userEmail = session.user.email;

      // Fetch ONLY user's events
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/events/user/${encodeURIComponent(userEmail)}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ My Events:`, data);
        setEvents(data);
      } else {
        throw new Error('Failed to fetch events');
      }
    } catch (error) {
      console.error('❌ Error:', error);
      toast.error('Failed to load your events');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    const result = await Swal.fire({
      title: 'Delete Event?',
      html: `Are you sure you want to delete <strong>"${title}"</strong>?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        setEvents(events.filter(e => e._id !== id));
        Swal.fire('Deleted!', 'Event deleted successfully', 'success');
      } else {
        throw new Error('Failed to delete');
      }
    } catch (error) {
      console.error('❌ Delete Error:', error);
      Swal.fire('Error!', 'Failed to delete event', 'error');
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">My Events</h1>
          <p className="text-gray-600">Manage your events</p>
        </div>
        <Link
          href="/add-event"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create Event
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-2xl font-bold mb-2">No Events Yet</h3>
          <p className="text-gray-600 mb-6">Create your first event</p>
          <Link
            href="/add-event"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-blue-700"
          >
            <Plus className="w-5 h-5" />
            Create Event
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map(event => (
            <div
              key={event._id}
              className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4"
            >
              <div className="text-5xl">{event.imageUrl || '📅'}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-600 text-sm">
                  {event.shortDescription}
                </p>
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/events/${event._id}`}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <Eye className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => handleDelete(event._id, event.title)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
