import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export default function GoogleSignInButton() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User Info:", result.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center w-full px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 border border-white/50 gap-3"
    >
      <span className="bg-white p-1 rounded-full">
        <FcGoogle className="text-xl" />
      </span>
      <span className="text-white">Continue with Google</span>
    </button>
  );
}
