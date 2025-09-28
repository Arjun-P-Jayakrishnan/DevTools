import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Menu } from "lucide-react";
import React from "react";

export interface NavbarTrailing {
  className?: string;
}

const Trailing: React.FC<NavbarTrailing> = ({ className }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Desktop actions */}
      <div
        className={[
          "hidden lg:flex flex-row items-center gap-4",
          className,
        ].join(" ")}
      >
        <SignedOut>
          <SignInButton>
            <button className="text-sm bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold px-5 py-2 flex items-center justify-center rounded-lg shadow-lg hover:from-orange-500 hover:to-orange-600 hover:scale-105 transition-transform transition-colors duration-300 ease-in-out">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton>
            <button className="text-sm bg-blue-600 text-white font-semibold px-5 py-2 flex items-center justify-center rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform transition-colors duration-300 ease-in-out">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile menu */}
      <button className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200">
        <Menu height={32} width={32} />
      </button>
    </div>
  );
};

export default Trailing;
