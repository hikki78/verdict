'use client'

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { User } from 'next-auth';

function Navbar() {
  const { data: session } = useSession();
  const user : User = session?.user;

  return (
    <nav className="p-4 md:p-6 backdrop-blur-sm bg-black border-b border-gray-800/50 shadow-lg text-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r
            from-red-500 to-blue-500 bg-clip-text text-transparent
           hover:from-pink-600 hover:to-purple-600">
          VERDICT
        </a>
        {session ? (
          <>
            <span className="text-balance font-bold bg-gradient-to-r
                  from-teal-500 to-blue-500 bg-clip-text text-transparent
                 hover:from-green-600 hover:to-blue-600">
              Welcome, {user.username || user.email}
            </span>
            <Button onClick={() => signOut()} className="relative px-4 py-2 bg-transparent border-2 border-transparent
                    hover:border-pink-500/50 transition-all duration-300
                    before:absolute before:inset-0 before:bg-gradient-to-r
                    before:from-pink-500 before:to-purple-500 before:opacity-0
                    hover:before:opacity-40 bg-gradient-to-r from-pink-500 to-purple-500
                    bg-clip-text text-transparent font-semibold" variant='outline'>
              Logout
            </Button>
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="relative px-4 py-2 bg-transparent border-2 border-transparent
                    hover:border-pink-500/50 transition-all duration-300
                    before:absolute before:inset-0 before:bg-gradient-to-r
                    before:from-pink-500 before:to-purple-500 before:opacity-0
                    hover:before:opacity-40 bg-gradient-to-r from-pink-500 to-purple-500
                    bg-clip-text text-transparent font-semibold" variant={'outline'}>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;