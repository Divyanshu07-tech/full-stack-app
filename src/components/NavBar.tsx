"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { FaSignOutAlt } from 'react-icons/fa';

const NavBar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const linkStyle = (path: string) =>
    `px-4 py-2 rounded-md font-medium transition duration-200 ${
      pathname === path
        ? 'bg-white text-blue-600 shadow-sm'
        : 'text-white hover:bg-blue-500'
    }`;

  return (
    <nav className="bg-blue-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">🚀 FullStackApp</div>
        <div className="flex items-center space-x-3">
          <Link href="/" className={linkStyle('/')}>Home</Link>
          <Link href="/about" className={linkStyle('/about')}>About</Link>

          {session ? (
            <>
              <Link href="/dashboard" className={linkStyle('/dashboard')}>Dashboard</Link>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-1 px-4 py-2 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className={linkStyle('/login')}>Login</Link>
              <Link href="/register" className={linkStyle('/register')}>Register</Link>
              <Link href="/predictor" className={linkStyle('/predictor')}>Predictor</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
