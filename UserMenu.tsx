// components/UserMenu.tsx
'use client';

import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function UserMenu() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Logout failed');
    } else {
      toast.success('Logged out successfully');
      router.push('/login');
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => router.push('/my-listings')}
        className="px-5 py-2 hover:bg-gray-100 rounded-2xl text-sm font-medium transition"
      >
        My Listings
      </button>

      <button
        onClick={handleLogout}
        className="px-5 py-2 text-red-600 hover:bg-red-50 rounded-2xl text-sm font-medium transition"
      >
        Logout
      </button>
    </div>
  );
}