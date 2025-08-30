"use client";

import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function WelcomePage() {
  const { isLoaded, userId } = useAuth();

  // If the user is logged in, redirect them to the dashboard.
  // We wait for isLoaded to be true to avoid a flash of the welcome page.
  useEffect(() => {
    if (isLoaded && userId) {
      redirect("/dashboard");
    }
  }, [isLoaded, userId]);

  // While Clerk is loading its state, or if the user is logged in and about to be redirected,
  // show a simple loading indicator to prevent the welcome page from flashing.
  if (!isLoaded || userId) {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div>Loading...</div>
        </div>
    ); 
  }

  // Only render the welcome page if the user is NOT logged in.
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center relative px-4 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-300 rounded-full opacity-30 blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-300 rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000"></div>

        {/* Welcome Text Box */}
        <div className="relative z-10 bg-white/60 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Welcome to the
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-600 mt-2">
            LegalDraft Pro
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            AI-Powered Legal Document Drafting
          </p>
        </div>
      </main>
    </div>
  );
}