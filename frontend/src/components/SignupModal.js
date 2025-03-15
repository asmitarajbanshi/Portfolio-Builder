// src/components/SignupModal.js
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import GoogleSignInButton from "./GoogleSignInButton";

export default function SignupModal({ isOpen, onClose }) {
  const [isEmailMode, setIsEmailMode] = useState(false); // Toggle email form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Handle Email/Password Sign Up
  const handleEmailSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onClose(); // Close modal after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Email/Password Sign In
  const handleEmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose(); // Close modal after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-[#121826] text-white rounded-xl p-6 w-[400px] text-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Welcome to Pixel</h2>

        {isEmailMode ? (
          <div>
            {/* Email Sign In/Sign Up Form */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-md text-black mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-md text-black mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}

            <button
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg"
              onClick={handleEmailSignUp}
            >
              Sign Up
            </button>
            <p className="mt-2 text-sm">
              Already have an account?{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={handleEmailSignIn}
              >
                Log in
              </span>
            </p>

            <button
              className="mt-4 text-sm text-gray-400 hover:underline"
              onClick={() => setIsEmailMode(false)}
            >
              Back
            </button>
          </div>
        ) : (
          <div>
            <GoogleSignInButton />

            <button
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg mt-4"
              onClick={() => setIsEmailMode(true)}
            >
              Continue with email
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
