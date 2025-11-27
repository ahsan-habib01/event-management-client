import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import AddEventForm from '@/components/AddEventForm';

export default async function AddEventPage() {
  const session = await auth();

  // Protect the route - redirect to login if not authenticated
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Create New Event
            </h1>
            <p className="text-gray-700 text-lg font-medium">
              Fill in the details below to create your amazing event
            </p>
          </div>

          <AddEventForm />
        </div>
      </div>
    </div>
  );
}
