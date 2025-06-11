type ButtonVariants = "primary" | "outline" | "link" | "disabled" | "ghost";
type ButtonSizes = "default" | "sm" | "icon" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  type?: "button" | "submit";
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "default",
  type = "button",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyle = "rounded-xl";

  const sizeStyles: Record<ButtonSizes, string> = {
    default: "h-9 px-4  has-[>svg]:px-3",
    sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
    lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
    icon: "size-9",
  };

  const variants: Record<ButtonVariants, string> = {
    primary:
      "bg-button-primary text-primary-foreground shadow-xs hover:bg-foreground/90",

    outline:
      "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",

    disabled:
      "border shadow-xs  hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    link: "text-primary underline-offset-4 hover:underline",
    ghost:
      "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  };

  return (
    <button
      type={type}
      className={` ${baseStyle} ${variants[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
