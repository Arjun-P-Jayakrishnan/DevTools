import React from "react";

/**
 * Possible button variant styles.
 */
export type ButtonVariants =
  | "primary"
  | "outline"
  | "link"
  | "disabled"
  | "ghost";

/**
 * Possible button sizes.
 */
export type ButtonSizes = "default" | "sm" | "icon" | "lg";

/**
 * Props for the Button component.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button style variant */
  variant?: ButtonVariants;
  /** Button size */
  size?: ButtonSizes;
  /** Button type attribute */
  type?: "button" | "submit";
  /** Button content */
  children?: React.ReactNode;
  /** Additional class names */
  className?: string;
}

/**
 * A reusable button component supporting multiple variants and sizes.
 *
 * @component
 * @example
 * ```tsx
 * <Button variant="primary" size="default">Click Me</Button>
 * <Button variant="outline" size="sm">Small Outline</Button>
 * <Button variant="link">Link</Button>
 * ```
 *
 * @param {ButtonProps} props - Component props
 * @returns {JSX.Element} A styled button
 */
export default function Button({
  variant = "primary",
  size = "default",
  type = "button",
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Base styling applied to all buttons
  const baseStyle = "rounded-xl";

  // Size-specific styles
  const sizeStyles: Record<ButtonSizes, string> = {
    default: "h-9 px-4 has-[>svg]:px-3",
    sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
    lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
    icon: "size-9",
  };

  // Variant-specific styles
  const variants: Record<ButtonVariants, string> = {
    primary:
      "bg-button-primary text-primary-foreground shadow-xs hover:bg-foreground/90",
    outline:
      "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    disabled:
      "border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    link: "text-primary underline-offset-4 hover:underline",
    ghost:
      "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
