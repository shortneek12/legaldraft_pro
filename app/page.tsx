"use client";

import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center relative px-4 py-16">
        {/* Decorative Circles */}
        <div className="absolute top-48 left-140 w-40 h-40 bg-gradient-to-br from-[#00aaff] to-cyan-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-48 right-140 w-60 h-60 bg-gradient-to-br from-cyan-400 to-[#00aaff] rounded-full opacity-50"></div>

        {/* Welcome Text */}
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 z-10">
          Welcome to the
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#00aaff] mt-2 z-10">
          LegalDraft Pro
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4 z-10">
          AI-Powered Legal Document Drafting
        </p>
      </main>

      {/* Footer Navigation */}
      <footer className="flex justify-center gap-8 text-sm text-gray-700 border-t py-4 z-10">
        <Link href="/about">About Us</Link>
        <Link href="/subscription">Subscription</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact us</Link>
      </footer>
    </div>
  );
}
