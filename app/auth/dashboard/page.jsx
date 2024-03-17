'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth,firestore} from '../../firebase'; // Import the Firebase auth object
import XeroxShopBooking from './XeroxShopBooking'; // Import the XeroxShopBooking component
import ShowDocuments from './showDocuments';
import { collection,doc,getDoc } from 'firebase/firestore';
export default function Dashboard() {
    const router = useRouter();
    const [displayName, setDisplayName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

  // Example of checking if the user is authenticated
  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // If user is authenticated, set the display name
        setDisplayName(user.displayName || ''); // Set display name to empty string if not available
        const uid = user.uid;
        const adminRef = doc(collection(firestore, 'Admins'), uid);

        getDoc(adminRef)
          .then(docSnap => {
            if (docSnap.exists()) {
              // If admin document exists, check if user is admin
              const isAdmin = docSnap.data().isadmin;

              setIsAdmin(isAdmin);
            } else {
              // If admin document doesn't exist, user is not admin
              setIsAdmin(false);
            }
            setLoading(false)
          })
          .catch(error => {
            console.error("Error checking admin status:", error);
          });
      } else {
        // If user is not authenticated, redirect to login
        router.push('/login');
      }
    });


    // Cleanup function
    return () => unsubscribe();

  }, [router]); 
  if (loading) {
    return <div>Loading...</div>;
}  return (
    <div>
      <header className="bg-primary_color1 text-white text-center py-4">
        <h1 className="text-2xl font-bold"> {displayName}!,   Welcome To Print A Rest</h1>

      </header>
      {isAdmin ? <ShowDocuments /> : <XeroxShopBooking />}
      
  


    


      
      {/* Render the XeroxShopBooking component */}
    </div>
  );
}