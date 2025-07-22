import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import clientPromise from '@/lib/mongodb';
import DashboardContent from '@/components/DashboardContent';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  const client = await clientPromise;
  const db = client.db();
  const user = await db.collection('users').findOne({ email: session.user?.email });

  return (
    <DashboardContent
      name={user?.name || ''}
      email={user?.email || ''}
    />
  );
}