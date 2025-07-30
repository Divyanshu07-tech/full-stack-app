"use client";

import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

const LogoutButton = dynamic(() => import('@/components/LogoutButton'), { ssr: false });

type Props = {
  name: string;
  email: string;
};

export default function DashboardContent({ name, email }: Props) {
  const { data: session } = useSession();

  // Use session values if available, fallback to props
  const displayName = session?.user?.name || name;
  const displayEmail = session?.user?.email || email;

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-2">
        Welcome, <strong>{displayName}</strong>
      </p>
      <p className="text-lg mb-2"><strong>Email:</strong> {displayEmail}</p>
      <LogoutButton />
    </main>
  );
}
