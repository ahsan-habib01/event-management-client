import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import ManageEventsClient from '@/components/ManageEventsClient';

export default async function ManageEventsPage() {
  const session = await auth();

  // Protect the route - redirect to login if not authenticated
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ManageEventsClient />
      </div>
    </div>
  );
}
