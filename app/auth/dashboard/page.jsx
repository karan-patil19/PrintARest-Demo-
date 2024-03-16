'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase'; // Import the Firebase auth object
import XeroxShopBooking from './XeroxShopBooking'; // Import the XeroxShopBooking component

export default function Dashboard() {
    const router = useRouter();
  const [displayName, setDisplayName] = useState('');

  // Example of checking if the user is authenticated
  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // If user is authenticated, set the display name
        setDisplayName(user.displayName || ''); // Set display name to empty string if not available
      } else {
        // If user is not authenticated, redirect to login
        router.push('/login');
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, [router]); // Add
  return (
    <div>
      <header className="bg-primary_color1 text-white text-center py-4">
        <h1 className="text-2xl font-bold"> {displayName}!,   Welcome To Print A Rest</h1>
      </header>
      
  


    


      
      {/* Render the XeroxShopBooking component */}
      <XeroxShopBooking />
    </div>
  );
}