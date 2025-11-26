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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Create New Event
            </h1>
            <p className="text-gray-600 text-lg">
              Fill in the details below to create your event
            </p>
          </div>

          <AddEventForm />
        </div>
      </div>
    </div>
  );
}
