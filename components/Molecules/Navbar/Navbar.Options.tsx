import Link from "next/link";
import React from "react";

/**
 * Props for Navbar Options
 */
export interface NavbarOptions {
  options: {
    href: string;
    label: string;
    key: string;
    icon: React.ReactNode;
  }[];
}

/**
 * Renders a list of navigation options with icons and labels.
 *
 * @param {NavbarOptions} props - Options to display in the navbar
 * @returns A horizontal list of navigation links
 */
export const Options: React.FC<NavbarOptions> = ({ options }) => (
  <ul className="flex flex-row justify-center items-center gap-12 lg:flex">
    {options.map(({ href, label, key, icon }) => (
      <li key={key}>
        <Link
          href={href}
          className="
            flex items-center gap-2
            text-primary cursor-pointer pb-1.5
            transition-all duration-200 ease-in-out
            hover:font-bold hover:border-b-2
          "
        >
          {icon}
          {label}
        </Link>
      </li>
    ))}
  </ul>
);
