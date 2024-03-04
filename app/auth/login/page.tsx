'use client'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { auth } from "../../firebase";

export default function Login() {
    const router = useRouter();
    const handleGoogleSignIn = async () => {

        const provider = new GoogleAuthProvider();
        try {
          
          const result = await signInWithPopup(auth, provider);
          
          if (result.user) {
            
            if (result.user.email && result.user.email.endsWith("paruluniversity.ac.in")) {
              
              console.log("Signed in successfully!", result.user);
              
              router.push('./dashboard'); 
            } else {
              
              await auth.signOut();
              
              alert("Please Login Your College Email Id.");
            }
          } else {
            
            console.error("User information not found in the result.");
          }
        } catch (error) {
         
          console.error("Error signing in:", error);
        }
      };

      return (
        <main className="flex min-h-screen flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2x shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5" >
              <div className="text-left  font-bold">
                <span className="text-blue-500">Print</span>Arest
              </div>
              <h2 className="text-3xl font-bold mb-2 pt-8">Login!</h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2  flex items-center mb-5">
                  <FaRegEnvelope className="text-gray-400 "/>
                  <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none flex-1"  />
                </div>
              </div>
              <div className="flex flex-col items-center mb-5">
                <div className="bg-gray-100 w-64 p-2  flex items-center">
                  <MdLockOutline className="text-gray-400  "/>
                  <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none flex-1"  />
                </div>
              </div>
              {/* Login button */}
              <button  className="bg-gradient-to-b from-blue-400 to-blue-600 w-80 rounded-full hover:bg-white hover:text-white px-12 py-2 inline-block">Login</button>
    
              <div className="py-10">or</div>
              {/* Add a button to trigger Google Sign-In */}
              <button onClick={handleGoogleSignIn} className="bg-gradient-to-b from-blue-400 to-blue-600 w-80 rounded-full hover:bg-white hover:text-white px-12 py-2 inline-block">Login With Google</button>
            </div>
            <div className="w-2/5 bg-primary_color1 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Hello EveryOne!</h2>
              <div className="border-2 w-10  border-white inline-block mb-2"></div>
              <p className="mb-10">
                Welcome to PrinARest, Let us Print The Rest
              </p>
            </div>
          </div>
        </main>
      );
  }