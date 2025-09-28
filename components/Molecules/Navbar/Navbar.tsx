import React from "react";
import { Leading } from "./Navbar.Leading";
import { Options } from "./Navbar.Options";
import Trailing from "./Navbar.Trailing";

/**
 * Props for the NavbarRoot component.
 */
interface NavbarRootProps {
  /** Child components of the navbar (Leading, Options, Trailing) */
  children: React.ReactNode;
}

/**
 * Root container for the navbar.
 *
 * This component wraps all navbar sections inside a flex container.
 * Uses a `<div>` as the wrapper instead of `<nav>`.
 *
 * @component
 * @example
 * ```tsx
 * <NavbarRoot>
 *   <NavbarRoot.Leading />
 *   <NavbarRoot.Options options={links} />
 *   <NavbarRoot.Trailing />
 * </NavbarRoot>
 * ```
 *
 * @param {NavbarRootProps} props - Component props
 * @param {React.ReactNode} props.children - Children to render inside the navbar
 * @returns {JSX.Element} Navbar root container
 */
export function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <div
      className="
        h-[8vh] w-full
        flex flex-row justify-between items-center
        relative z-30
        py-0.1 px-4
        text-white
      "
    >
      {children}
    </div>
  );
}

// Assign subcomponents for structured usage
NavbarRoot.Leading = Leading;
NavbarRoot.Options = Options;
NavbarRoot.Trailing = Trailing;
