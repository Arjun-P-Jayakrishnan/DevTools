import Button from "@/components/Atoms/Buttons/Button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Menu } from "lucide-react";
import React from "react";

/**
 * Props for the Trailing (navbar actions) component.
 */
export interface NavbarTrailing {}

/**
 * Renders the trailing section of the navbar:
 * - Sign In / Sign Up buttons for signed-out users
 * - User menu for signed-in users
 * - Hamburger menu for mobile screens
 */
const Trailing: React.FC<NavbarTrailing> = () => {
  return (
    <>
      {/* Desktop actions */}
      <div className="text-primary lg:flex flex-row justify-center items-center gap-4">
        <SignedOut>
          {/* Sign In Button */}
          <SignInButton>
            <Button
              className="
                bg-gradient-to-r from-orange-400 to-orange-500
                text-white font-semibold
                px-5 py-2 flex items-center justify-center
                rounded-lg shadow-lg
                hover:from-orange-500 hover:to-orange-600
                hover:scale-105
                transition-transform transition-colors duration-300 ease-in-out
              "
            >
              Sign In
            </Button>
          </SignInButton>

          {/* Sign Up Button */}
          <SignUpButton>
            <Button
              className="
                bg-blue-600 text-white font-semibold
                px-5 py-2 flex items-center justify-center
                rounded-lg shadow-md
                hover:bg-blue-700 hover:scale-105
                transition-transform transition-colors duration-300 ease-in-out
              "
            >
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>

        {/* Signed in user */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile menu icon */}
      <Menu
        className="text-primary inline-block cursor-pointer lg:hidden"
        height={32}
        width={32}
      />
    </>
  );
};

export default Trailing;
