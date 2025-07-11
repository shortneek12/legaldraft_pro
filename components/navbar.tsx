import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md h-16 bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png" // Ensure logo is in /public folder
          alt="Legal Draft Pro"
          width={140}
          height={36}
          className="object-contain"
        />
      </Link>

      {/* Auth Buttons or User */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button className="text-sm sm:text-base px-4 py-2 border rounded-full font-semibold hover:bg-gray-100 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="text-sm sm:text-base px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
