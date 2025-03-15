import { useState } from "react";
import { auth } from "../firebaseConfig";

export default function Settings() {
  const [email, setEmail] = useState(auth.currentUser?.email || "");
  const [isDeletable, setIsDeletable] = useState(false); // Initially, account deletion is disabled

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h1>

      {/* Email Section */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Email address</h2>
        <p className="text-gray-500">{email}</p>
        <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
          Change email
        </button>
      </div>

      {/* Password Section */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Password</h2>
        <p className="text-gray-500">Change account password</p>
        <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
          Change password
        </button>
      </div>

      {/* Delete Account Section */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-red-600">Delete account</h2>
        <p className="text-gray-500">
          Account can only be deleted if all associated websites are deleted.
        </p>
        <button
          className={`mt-3 px-6 py-2 text-white rounded-lg ${
            isDeletable ? "bg-red-600 hover:bg-red-500" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isDeletable}
        >
          Delete account
        </button>
      </div>
    </div>
  );
}
