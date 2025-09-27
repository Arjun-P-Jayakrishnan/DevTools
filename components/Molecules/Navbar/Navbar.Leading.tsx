import AnimatedTools from "@/components/Atoms/Icons/Toolbox";
import Link from "next/link";
import React from "react";

/**
 * Props for the Leading (navbar logo) component.
 *
 * Currently empty, but can be extended later
 * if you want to pass logo `src`, `alt`, or `size` as props.
 */
export interface NavbarLeading {}

/**
 * Renders the leading logo in the navbar.
 *
 * @component
 * @example
 * ```tsx
 * <Leading />
 * ```
 *
 * @param {NavbarLeading} props - The component props (currently none)
 * @returns {JSX.Element} A link to the homepage with the brand logo
 */
export const Leading: React.FC<NavbarLeading> = () => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="flex flex-row justify-between gap-2 items-center"
    >
      {/* <Image src="/toolbox.gif" alt="Logo" height={32} width={32} priority /> */}
      <AnimatedTools />
      DevTools
    </Link>
  );
};
